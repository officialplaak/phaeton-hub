const networks = {
  mainnet: { // network name translation t('Mainnet');
    name: 'Mainnet',
    code: 0,
    nodes: [
      'https://core.plaak.com/',
    ],
  },
  testnet: { // network name translation t('Testnet');
    name: 'Testnet',
    testnet: true,
    code: 1,
    nodes: [
      'http://localhost:8000',
    ],
  },
  customNode: { // network name translation t('Custom Node'); 13.250.116.189
    name: 'Custom Node',
    custom: true,
    address: 'https://core.plaak.com/',
    code: 2,
  },
};

networks.default = networks[window.localStorage && window.localStorage.getItem('defaultNetwork')] || networks.customNode;
module.exports = networks;
