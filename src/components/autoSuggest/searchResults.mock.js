const mockSearchResults = {
  addresses: [
    {
      address: '12334P',
      balance: '4932970292',
    }, {
      address: '1233456P',
      balance: '4932970292',
    }, {
      address: '12334567P',
      balance: '4932970292',
    },
  ],
  delegates: [
    {
      username: 'peterpan',
      rank: 73,
      account: {
        address: '123456P',
      },
    }, {
      username: 'peter2',
      rank: 76,
      account: {
        address: '1234567P',
      },
    }, {
      username: '_peter4',
      rank: 77,
      account: {
        address: '12345678P',
      },
    },
  ],
  transactions: [
    {
      id: '1234',
      height: 56,
      senderId: '12345P',
    }, {
      id: '12345',
      height: 57,
      senderId: '12345P',
    }, {
      id: '123456',
      height: 58,
      senderId: '12345P',
    },
  ],
};

export default mockSearchResults;
