import Phaeton from 'phaeton-validator';

export const listAccountDelegates = (activePeer, address) =>
  activePeer.votes.get({ address, limit: '101' });

export const listDelegates = (activePeer, options) =>
  activePeer.delegates.get(options);

export const getDelegate = (activePeer, options) =>
  activePeer.delegates.get(options);

export const vote = (activePeer, secret, publicKey, votes, unvotes, secondSecret = null) => {
  const transaction = Phaeton.transaction.castVotes({
    votes,
    unvotes,
    passphrase: secret,
    secondPassphrase: secondSecret,
  });

  return activePeer.transactions.broadcast(transaction);
};

export const getVotes = (activePeer, address) =>
  activePeer.votes.get({ address });

export const getVoters = (activePeer, publicKey) =>
  activePeer.voters.get({ publicKey });

export const registerDelegate = (activePeer, username, passphrase, secondPassphrase = null) => {
  const data = { username, passphrase };
  if (secondPassphrase) {
    data.secondPassphrase = secondPassphrase;
  }
  return new Promise((resolve, reject) => {
    const transaction = Phaeton.transaction.registerDelegate({ ...data });
    activePeer.transactions
      .broadcast(transaction)
      .then(() => {
        resolve(transaction);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
