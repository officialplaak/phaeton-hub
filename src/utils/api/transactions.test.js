import { expect } from 'chai';
import { stub } from 'sinon';
import { send, getTransactions, unconfirmedTransactions, getSingleTransaction } from './transactions';
import txFilters from './../../constants/transactionFilters';
import accounts from '../../../test/constants/accounts';

describe('Utils: Transactions API', () => {
  const id = '124701289470';
  const amount = '100000';
  const recipientId = '123P';
  const activePeer = {
    transactions: {
      get: stub().returnsPromise(),
      broadcast: stub().returnsPromise().resolves({ recipientId, amount, id }),
    },
    node: {
      getTransactions: stub().returnsPromise(),
    },
  };

  // TODO: fix these tests for assert more than just a promise is returned
  describe('send', () => {
    it('should broadcast a transaction and return a promise', () => {
      const promise = send(activePeer, recipientId, amount, accounts.genesis.passphrase);
      expect(activePeer.transactions.broadcast).to.have.been.calledWith();
      expect(typeof promise.then).to.be.equal('function');
    });
  });

  describe('transactions', () => {
    it('should return a promise', () => {
      const promise = getTransactions({ activePeer });
      expect(typeof promise.then).to.be.equal('function');
    });

    it('should call transactions.get for incoming promise', () => {
      getTransactions({ activePeer, address: '123P', filter: txFilters.incoming });

      expect(activePeer.transactions.get).to.have.been.calledWith({
        limit: 20, offset: 0, recipientId: '123P', sort: 'timestamp:desc',
      });
    });

    it('should call transactions.get for outgoing promise', () => {
      getTransactions({ activePeer, address: '123P', filter: txFilters.outgoing });

      expect(activePeer.transactions.get).to.have.been.calledWith({
        limit: 20, offset: 0, senderId: '123P', sort: 'timestamp:desc',
      });
    });
  });

  describe('unconfirmedTransactions', () => {
    it('should return a promise', () => {
      const promise = unconfirmedTransactions(activePeer);
      expect(typeof promise.then).to.be.equal('function');
    });
  });

  describe('getSingleTransaction', () => {
    it('should activePeer.transactions.get and return a promise', () => {
      const promise = getSingleTransaction({ activePeer, id });
      expect(activePeer.transactions.get).to.have.been.calledWith({ id });
      expect(typeof promise.then).to.be.equal('function');
    });
  });
});
