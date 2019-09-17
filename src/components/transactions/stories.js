import React from 'react';
import { storiesOf } from '@storybook/react';

import TransactionMessage from './transactionMessage';

storiesOf('TransactionMessage', module)
  .add('success', () => (
    <TransactionMessage/>
  ));