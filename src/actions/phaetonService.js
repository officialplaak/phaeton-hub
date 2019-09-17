import actionTypes from '../constants/actions';
import phaetonServiceApi from '../../src/utils/api/phaetonService';

export const addDataToCurrencyGraph = data => ({
  type: actionTypes.addDataToCurrencyGraph,
  data,
});

export const addErrorToCurrencyGraph = data => ({
  type: actionTypes.addErrorToCurrencyGraph,
  data,
});

export const clearDataOfCurrencyGraph = () => ({
  type: actionTypes.clearDataOfCurrencyGraph,
});

export const getCurrencyGraphData = step => (dispatch) => {
  dispatch(clearDataOfCurrencyGraph());
  phaetonServiceApi.getCurrencyGraphData(step).then((response) => {
    dispatch(addDataToCurrencyGraph({ response, step }));
  }).catch((error) => {
    dispatch(addErrorToCurrencyGraph(error));
  });
};
