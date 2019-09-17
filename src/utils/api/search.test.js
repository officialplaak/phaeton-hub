import { expect } from 'chai';
import { stub } from 'sinon';
import searchAll from './search';
import * as accountsAPI from './account';
import * as transactionsAPI from './transactions';
import * as delegateAPI from './delegate';

describe('Utils: Search', () => {
  let getAccountStub;
  let listDelegatesStub;
  let getSingleTransactionStub;

  const accountsResponse = { address: '1337P', balance: 1110 };

  const delegatesResponse = {
    data: [
      { username: '_1337l', rank: 19, account: { address: '123456' } },
      { username: '__1337ll', rank: 19, account: { address: '123456' } },
      { username: '1337', rank: 18, account: { address: '123456' } },
      { username: '1337l', rank: 18, account: { address: '123456' } },
      { username: '1337Lolo', rank: 18, account: { address: '123456' } },
    ],
  };
  const delegatesResponseOrdered = {
    delegates: [
      { username: '1337', rank: 18, account: { address: '123456' } },
      { username: '1337Lolo', rank: 18, account: { address: '123456' } },
      { username: '1337l', rank: 18, account: { address: '123456' } },
    ],
  };

  const delegatesResponseOrderedAddressMatch = {
    delegates: [
      { username: '1337Lolo', rank: 18, account: { address: '123456' } },
      { username: '1337l', rank: 18, account: { address: '123456' } },
    ],
  };
  const delegatesUrlParams = {
    search: '1337P',
    sort: 'username:asc',
  };
  const delegatesUrlParamsTxMatch = {
    search: '1337',
    sort: 'username:asc',
  };

  const transactionsResponse = { data: [{ id: '1337', height: 99 }] };

  beforeEach(() => {
    getAccountStub = stub(accountsAPI, 'getAccount');
    listDelegatesStub = stub(delegateAPI, 'listDelegates');
    getSingleTransactionStub = stub(transactionsAPI, 'getSingleTransaction');

    // address match
    getAccountStub.withArgs(undefined, '1337P').returnsPromise().resolves(accountsResponse);
    listDelegatesStub.withArgs(undefined, delegatesUrlParams)
      .returnsPromise().resolves(delegatesResponse);
    getSingleTransactionStub.returnsPromise().resolves(transactionsResponse);

    // txSearch match
    getAccountStub.withArgs(undefined, '1337').returnsPromise().resolves(accountsResponse);
    listDelegatesStub.withArgs(undefined, delegatesUrlParamsTxMatch)
      .returnsPromise().resolves(delegatesResponse);
  });

  afterEach(() => {
    listDelegatesStub.restore();
    getSingleTransactionStub.restore();
    getAccountStub.restore();
  });

  it('should search {addresses,delegates} when only address pattern matched', () =>
    expect(searchAll({ searchTerm: '1337P' })).to.eventually.deep.equal([
      { addresses: [accountsResponse] },
      { transactions: [] },
      { delegates: delegatesResponseOrderedAddressMatch.delegates },
    ]));

  it('should search {transactions,delegates} when only transaction pattern matched', () =>
    expect(searchAll({ searchTerm: '1337' })).to.eventually.deep.equal([
      { addresses: [] },
      { transactions: transactionsResponse.data },
      { delegates: delegatesResponseOrdered.delegates },
    ]));

  it('should still search for {addresses} when failing {delegates} request', () => {
    listDelegatesStub.withArgs(undefined, delegatesUrlParams)
      .returnsPromise().rejects({ success: false });
    return expect(searchAll({ searchTerm: '1337P' })).to.eventually.deep.equal([
      { addresses: [accountsResponse] },
      { transactions: [] },
      { delegates: [] },
    ]);
  });

  it('should still search for {delegates} when failing {addresses} request', () => {
    getAccountStub.withArgs(undefined, '1337P').returnsPromise().rejects({ success: false });
    return expect(searchAll({ searchTerm: '1337P' })).to.eventually.deep.equal([
      { addresses: [] },
      { transactions: [] },
      { delegates: delegatesResponseOrderedAddressMatch.delegates },
    ]);
  });

  it('should still search for {delegates} when failing {transactions} request', () => {
    getSingleTransactionStub.returnsPromise().rejects({ success: false });
    return expect(searchAll({ searchTerm: '1337' })).to.eventually.deep.equal([
      { addresses: [] },
      { transactions: [] },
      { delegates: delegatesResponseOrdered.delegates },
    ]);
  });
});
