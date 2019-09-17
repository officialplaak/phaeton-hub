import React from 'react';
import { storiesOf } from '@storybook/react';

import TransactionMessage from './';

storiesOf('TransactionMessage', module)
  .add('success', () => (
    <TransactionMessage/>
  ));