import { expect } from 'chai';
import sinon from 'sinon';
import Phaeton from 'phaeton-validator';
import {
  listDelegates,
  listAccountDelegates,
  getDelegate,
  vote,
  getVotes,
  getVoters,
  registerDelegate } from './delegate';
import accounts from '../../../test/constants/accounts';

describe('Utils: Delegate', () => {
  let activePeerMockDelegates;
  let activePeerMockVotes;
  let activePeerMockVoters;
  let activePeerMockTransations;
  let phaetonTransactionsCastVotesStub;
  let phaetonTransactionsRegisterDelegateStub;

  const activePeer = {
    delegates: {
      get: () => { },
    },
    votes: {
      get: sinon.spy(),
    },
    voters: {
      get: () => { },
    },
    transactions: {
      broadcast: sinon.spy(),
    },
  };

  beforeEach(() => {
    phaetonTransactionsCastVotesStub = sinon.stub(Phaeton.transaction, 'castVotes');
    phaetonTransactionsRegisterDelegateStub = sinon.stub(Phaeton.transaction, 'registerDelegate');
    activePeerMockDelegates = sinon.mock(activePeer.delegates);
    activePeerMockVotes = sinon.mock(activePeer.votes);
    activePeerMockVoters = sinon.mock(activePeer.voters);
    activePeerMockTransations = sinon.mock(activePeer.transactions);
  });

  afterEach(() => {
    activePeerMockDelegates.verify();
    activePeerMockDelegates.restore();

    activePeerMockVotes.verify();
    activePeerMockVotes.restore();

    activePeerMockVoters.verify();
    activePeerMockVoters.restore();

    activePeerMockTransations.verify();
    activePeerMockTransations.restore();

    phaetonTransactionsCastVotesStub.restore();
    phaetonTransactionsRegisterDelegateStub.restore();
  });

  describe('listAccountDelegates', () => {
    it('should get votes for an address with 101 limit', () => {
      const address = '123P';
      listAccountDelegates(activePeer, address);
      return expect(activePeer.votes.get).to.have.been.calledWith({ address, limit: '101' });
    });
  });

  describe('listDelegates', () => {
    it('should return getDelegate(activePeer, options) if options = {}', () => {
      const options = {};
      const response = { data: [] };
      activePeerMockDelegates.expects('get').withArgs(options).returnsPromise().resolves(response);

      const returnedPromise = listDelegates(activePeer, options);
      return expect(returnedPromise).to.eventually.equal(response);
    });

    it('should return getDelegate(activePeer, options) if options.q is set', () => {
      const options = { q: 'genesis_1' };
      const response = { data: [] };
      activePeerMockDelegates.expects('get').withArgs(options).returnsPromise().resolves(response);

      const returnedPromise = listDelegates(activePeer, options);
      return expect(returnedPromise).to.eventually.equal(response);
    });
  });

  describe('getDelegate', () => {
    it('should return getDelegate(activePeer, options)', () => {
      const options = { publicKey: `"${accounts.delegate.publicKey}"` };
      const response = { data: [] };
      activePeerMockDelegates.expects('get').withArgs(options).returnsPromise().resolves(response);

      const returnedPromise = getDelegate(activePeer, options);
      return expect(returnedPromise).to.eventually.equal(response);
    });
  });

  describe('vote', () => {
    it('should call castVotes and broadcast transaction', () => {
      const votes = [{
        username: 'user1',
      }, {
        username: 'user2',
      }];
      const unvotes = [{
        username: 'user3',
      }, {
        username: 'user4',
      }];
      const transaction = { id: '1234' };
      phaetonTransactionsCastVotesStub.withArgs({
        votes,
        unvotes,
        passphrase: accounts.genesis.passphrase,
        secondPassphrase: null,
      }).returns(transaction);

      vote(activePeer, accounts.genesis.passphrase, accounts.genesis.publicKey, votes, unvotes);
      return expect(activePeer.transactions.broadcast).to.have.been.calledWith(transaction);
    });
  });

  describe('getVotes', () => {
    it('should get votes for an address with no parameters', () => {
      const address = '123P';
      getVotes(activePeer, address);
      return expect(activePeer.votes.get).to.have.been.calledWith({ address });
    });
  });

  describe('getVoters', () => {
    it('should return getVoters(activePeer, publicKey)', () => {
      const publicKey = '';
      activePeerMockVoters.expects('get').withArgs({ publicKey })
        .returnsPromise().resolves('resolved promise');

      const returnedPromise = getVoters(activePeer, publicKey);
      return expect(returnedPromise).to.eventually.equal('resolved promise');
    });
  });

  describe('registerDelegate', () => {
    it('should broadcast a registerDelegate transaction', () => {
      const registerDelegateArgs = [null, 'username', 'passphrase', 'secondPassphrase'];
      const transaction = { id: '1234' };
      phaetonTransactionsRegisterDelegateStub.withArgs({
        username: registerDelegateArgs[1],
        passphrase: registerDelegateArgs[2],
        secondPassphrase: registerDelegateArgs[3],
      }).returns(transaction);
      registerDelegate(...registerDelegateArgs);
      return expect(activePeer.transactions.broadcast).to.have.been.calledWith(transaction);
    });
  });
});
