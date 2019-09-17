import { expect } from 'chai';
import Phaeton from 'phaeton-validator';
import { spy, stub, match } from 'sinon';
import actionTypes from '../constants/actions';
import { activePeerSet, activePeerUpdate } from './peers';
import { errorToastDisplayed } from './toaster';
import * as nethashApi from './../utils/api/nethash';
import accounts from '../../test/constants/accounts';
import networks from '../constants/networks';


describe('actions: peers', () => {
  const { passphrase } = accounts.genesis;
  const nethash = '198f2b61a8eb95fbeed58b8216780b68f697f26b849acf00c8c93bb9b24f783d';

  describe('activePeerUpdate', () => {
    it('should create an action to update the active peer', () => {
      const data = {
        online: true,
      };

      const expectedAction = {
        data,
        type: actionTypes.activePeerUpdate,
      };
      expect(activePeerUpdate(data)).to.be.deep.equal(expectedAction);
    });
  });

  describe('activePeerSet', () => {
    let dispatch;
    let getNetHash;
    let APIClientBackup;
    let getConstantsMock;

    beforeEach(() => {
      dispatch = spy();
      getNetHash = stub(nethashApi, 'getNethash');
      APIClientBackup = Phaeton.APIClient;
      getConstantsMock = stub().returnsPromise();

      // TODO: find a better way of mocking Phaeton.APIClient
      Phaeton.APIClient = class MockAPIClient {
        constructor() {
          this.node = {
            getConstants: getConstantsMock,
          };
        }
      };
      Phaeton.APIClient.constants = APIClientBackup.constants;

      getConstantsMock.resolves({ data: { nethash } });
    });

    afterEach(() => {
      getNetHash.restore();
      Phaeton.APIClient = APIClientBackup;
    });

    it('creates active peer config', () => {
      const data = {
        passphrase,
        network: {
          name: 'Custom Node',
          custom: true,
          address: 'localhost:8000',
          testnet: true,
          nethash,
        },
      };
      activePeerSet(data)(dispatch);
      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.address', 'localhost:8000'));
    });

    it('dispatch activePeerSet action also when address http missing', () => {
      const network = { address: 'localhost:8000' };

      activePeerSet({ passphrase, network })(dispatch);

      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.address', 'localhost:8000'));
    });

    it('dispatch activePeerSet action with nodeXX.phaeton.io node if mainnet', () => {
      const network = networks.mainnet;

      activePeerSet({ passphrase, network })(dispatch);

      expect(dispatch).to.have.been.calledWith(match.hasNested(
        'data.options.nodes',
        networks.mainnet.nodes,
      ));
    });

    it('dispatch activePeerSet action with testnet nodes if testnet option is set', () => {
      getNetHash.returnsPromise();

      const network = {
        testnet: true,
      };

      activePeerSet({ passphrase, network })(dispatch);
      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.nodes', networks.testnet.nodes));
    });

    it('dispatch activePeerSet with custom node', () => {
      getNetHash.returnsPromise();
      const network = {
        address: 'http://localhost:4000',
        custom: true,
      };

      activePeerSet({ passphrase, network })(dispatch);
      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.nodes[0]', 'http://localhost:4000'));
    });

    it('sets port 443, when address is https and no port used', () => {
      getNetHash.returnsPromise();
      const network = {
        address: 'https://localhost',
        custom: true,
      };

      activePeerSet({ passphrase, network })(dispatch);
      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.port', 443));
      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.ssl', true));
    });

    it('displays the error toast if the network is custom and request to constants fails', () => {
      getConstantsMock.rejects({});
      const network = {
        address: 'http://localhost:4000',
        custom: true,
      };
      activePeerSet({ passphrase, network })(dispatch);
      expect(dispatch).to.have.been.calledWith({
        data: { label: 'Unable to connect to the node', type: 'error' },
        type: actionTypes.toastDisplayed,
      });
    });

    it('does not display the error toast if the network is a custom node and there are not saved account and getnethash fails', () => {
      getNetHash.returnsPromise();
      const network = {
        address: 'http://localhost:4000',
        custom: true,
      };

      activePeerSet({ passphrase, network, noSavedAccounts: true })(dispatch);
      getNetHash.rejects();

      expect(dispatch).to.not.have.been.calledWith(errorToastDisplayed);
    });

    it('dispatch activePeerSet action even if network is undefined', () => {
      activePeerSet({ passphrase })(dispatch);

      expect(dispatch).to.have.been.calledWith();
    });

    it('dispatch activePeerSet action even if network.address is undefined', () => {
      activePeerSet({ passphrase, network: {} })(dispatch);

      expect(dispatch).to.have.been.calledWith();
    });

    it('should set to testnet if not defined in config but port is 7000', () => {
      const network7000 = { address: 'http://127.0.0.1:7000', nethash };
      const network4000 = { address: 'http://127.0.0.1:4000', nethash };

      activePeerSet({ passphrase, network: network7000 })(dispatch);
      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.nodes[0]', network7000.address));
      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.nethash', nethash));

      activePeerSet({ passphrase, network: network4000 })(dispatch);
      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.nodes[0]', network4000.address));
      expect(dispatch).to.have.been.calledWith(match.hasNested('data.options.nethash', nethash));
    });
  });
});
