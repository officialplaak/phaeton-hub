import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import PropTypes from 'prop-types';
import configureMockStore from 'redux-mock-store';

import i18n from '../../i18n';
import Peers from './index';

describe('Peers', () => {
  const store = configureMockStore([])({});
  const options = {
    context: { store, i18n },
    childContextTypes: {
      store: PropTypes.object.isRequired,
      i18n: PropTypes.object.isRequired,
    },
  };

  it('should render "Coming soon" in h2', () => {
    const props = {
      t: () => {},
    };
    const wrapper = mount(<Peers {...props} />, options);
    expect(wrapper.find('h2')).to.have.text('Coming soon.');
  });
});
