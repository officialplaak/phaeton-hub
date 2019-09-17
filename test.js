var lisk = require("lisk-elements");
const publicKey = 'lunch price prevent response helmet glory actual deer two nose forward win';
console.log(lisk.cryptography.getAddressAndPublicKeyFromPassphrase(publicKey));

let blake = require('blakejs');
var hash = blake.blake2bHex('lunch price prevent response helmet glory actual deer two nose forward win')
console.log('blake hash', hash);

// var address = blake.

