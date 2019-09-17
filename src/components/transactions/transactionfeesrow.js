import React from 'react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import { translate } from 'react-i18next';
import Amount from './amount';
// import TransactionType from './transactionType';
import styles from './transactionRow.css';
// import { DateFromTimestamp } from './../timestamp/index';
// import { FontIcon } from '../fontIcon';

class TransactionRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccess: 0 };
  }
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { props } = this;
    return (
      <div className={`${grid.row} ${styles.rows} ${styles.clickable} transactions-row`}>
        <div className={`${styles.rightText} ${grid['col-sm-2']} transactions-cell`}>
          <div className={`${styles.hiddenXs}`}>
            {props.value.senderid}
          </div>
        </div>
        <div className={`${styles.rightText} ${grid['col-sm-2']} transactions-cell`}>
          <div className={`${styles.hiddenXs}`}>
            {props.value.blockid}
          </div>
        </div>
        <div className={`${styles.rightText} ${grid['col-xs-5']} ${grid['col-sm-3']} transactions-cell`}>
          <Amount {...props}></Amount>
        </div>
      </div>
    );
  }
}

export default translate()(TransactionRow);
