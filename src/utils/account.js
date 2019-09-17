import Phaeton from 'phaeton-validator';

export const extractPublicKey = passphrase =>
  Phaeton.cryptography.getKeys(passphrase).publicKey;

/**
 * @param {String} data - passphrase or public key
 */
export const extractAddress = (data) => {
  if (!data) {
    return false;
  }
  if (data.indexOf(' ') < 0) {
    return Phaeton.cryptography.getAddressFromPublicKey(data);
  }
  return Phaeton.cryptography.getAddressFromPassphrase(data);
};
