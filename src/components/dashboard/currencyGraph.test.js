import thunk from 'redux-thunk';
import { expect } from 'chai';
import { Line as LineChart } from 'react-chartjs-2';
import sinon from 'sinon';
import React from 'react';
import { mountWithContext } from './../../../test/utils/mountHelpers';
import { prepareStore } from '../../../test/utils/applicationInit';
import phaetonServiceApi from '../../utils/api/phaetonService';

import phaetonServiceReducer from '../../store/reducers/phaetonService';
import CurrencyGraph from './currencyGraph';

describe('CurrencyGraph', () => {
  let phaetonServiceApiMock;
  let wrapper;
  let store;

  const prices = [
    { high: 0.003223542, date: '2018-02-01 13:00:00' },
    { high: 0.012344282, date: '2018-02-02 13:00:00' },
  ];

  beforeEach(() => {
    phaetonServiceApiMock = sinon.stub(phaetonServiceApi, 'getCurrencyGraphData').returnsPromise();
    store = prepareStore({
      phaetonService: phaetonServiceReducer,
    }, [thunk]);

    wrapper = mountWithContext(<CurrencyGraph store={store}/>, {});
  });

  afterEach(() => {
    phaetonServiceApiMock.restore();
  });

  it('should render LineChart when explorer api resolves candle data', () => {
    expect(wrapper.find('.chart-wrapper').first()).to.be.present();
    expect(wrapper.find(LineChart)).not.to.be.present();
    phaetonServiceApiMock.resolves({ prices });
    wrapper.update();
    expect(wrapper.find(LineChart)).to.be.present();
  });

  it('should show and error message when explorer api call fails', () => {
    expect(wrapper.find(LineChart)).not.to.be.present();
    phaetonServiceApiMock.rejects({ });
    expect(wrapper.find(LineChart)).not.to.be.present();
    expect(wrapper.text()).to.contain('Price data currently not available');
  });

  it('should allow to change step', () => {
    wrapper.find('.step').at(1).simulate('click');
    expect(wrapper.find(LineChart)).not.to.be.present();
    phaetonServiceApiMock.resolves({ prices });
    wrapper.update();
    expect(wrapper.find(LineChart)).to.be.present();
  });
});
