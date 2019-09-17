import React from 'react';
// import i18next from 'i18next';
// import { successToastDisplayed } from '../../actions/toaster';
// import { loadingStarted } from '../../actions/loading';
import styles from './transactionSuccess.css';
/*
const TransactionSuccess = store => () => {
  store.dispatch(successToastDisplayed({ label: i18next.t('Hello') }));
  store.dispatch(loadingStarted('offline'));
};
*/
/*
const TransactionSuccess = store => () => {
  store.dispatch(successToastDisplayed({ label: i18next.t('Hello') }));
  store.dispatch(loadingStarted('offline'));
};
*/

const TransactionSuccess = () => (
  <span className={styles.maincontainer}>
    <div className={styles.bounce1}>
      Success
    </div>
  </span>
);

export default TransactionSuccess;

