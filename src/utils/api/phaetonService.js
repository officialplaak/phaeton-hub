// import popsicle from 'popsicle'; // doesn't work
const popsicle = require('popsicle');

const phaetonServiceUrl = 'https://service.phaeton.io';

const phaetonServiceApi = {
  getCurrencyGraphData: ({ span }) => new Promise((resolve, reject) => {
    popsicle.get(`${phaetonServiceUrl}/api/exchanges/getCandles?e=bittrex&d=${span}`)
      .use(popsicle.plugins.parse('json'))
      .then((response) => {
        if (response.body && response.body.candles && response.body.candles.length > 0) {
          resolve(response.body);
        } else {
          reject(response.body);
        }
      }).catch(reject);
  }),
  getPriceTicker: () => new Promise((resolve, reject) => {
    popsicle.get(`${phaetonServiceUrl}/api/getPriceTicker`)
      .use(popsicle.plugins.parse('json'))
      .then((response) => {
        if (response.body.success) {
          resolve(response.body.tickers);
        } else {
          reject(response.body);
        }
      }).catch(reject);
  }),
};

export default phaetonServiceApi;
