const networks = {
  mainnet: { // network name translation t('Mainnet');
    name: 'Mainnet',
    code: 0,
    nodes: [
      'http://149.28.172.230:8000',
    ],
  },
  testnet: { // network name translation t('Testnet');
    name: 'Testnet',
    testnet: true,
    code: 1,
    nodes: [
      'http://149.28.172.230:8000',
    ],
  },
  customNode: { // network name translation t('Custom Node'); 13.250.116.189
    name: 'Custom Node',
    custom: true,
    address: 'http://149.28.172.230:8000',
    code: 2,
  },
};

networks.default = networks[window.localStorage && window.localStorage.getItem('defaultNetwork')] || networks.customNode;
module.exports = networks;
