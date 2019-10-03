import React from 'react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import { translate } from 'react-i18next';
// import axios from 'axios';
import TransactionType from './transactionType';
import styles from './transactionRow.css';
import Amount from './amount';
import Spinner from '../spinner';
import { DateFromTimestamp } from './../timestamp/index';
import { FontIcon } from '../fontIcon';

// import TransactionMessage from '../transactionMessage';
// import CopyToClipboard from '../copyToClipboard';
// import actionTypes from '../../constants/actions';

class TransactionRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccess: 0 };
  }
  // eslint-disable-next-line class-methods-use-this
  shouldComponentUpdate(nextProps) {
    // eslint-disable-next-line class-methods-use-this
    /*
    const conf = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    };
    const URL = `https://testnet.phaeton.com/api/transactions?limit=25&offset=0&sort=timestamp:desc&senderIdOrRecipientId=${this.props.address}`;
    axios.get(URL, conf)
      .then((res) => {
        if (res.data.data[0].confirmations === 1) {
          this.setState({ showSuccess: 1 });
          this.props.value.confirmations = res.data.data[0].confirmations;
          this.props.value.timestamp = res.data.data[0].timestamp;
        }
      });
    */
    return nextProps.value.id !== this.props.value.id || nextProps.value.confirmations <= 1000;
  }
  render() {
    const { props } = this;
    const onClick = !props.onClick ? (() => {}) : () => props.onClick(this.props);
    return (
      <div className={`${grid.row} ${styles.rows} ${styles.clickable} transactions-row`} onClick={onClick}>
        <div className={`${styles.leftText} ${grid['col-xs-6']} ${grid['col-sm-6']} transactions-cell`}>
          <div className={`${styles.address}`}>
            <TransactionType {...props.value} address={props.address}></TransactionType>
          </div>
        </div>
        <div className={`${styles.rightText} ${grid['col-sm-2']} transactions-cell`}>
          <div className={`${styles.hiddenXs}`}>
            {props.value.confirmations ? <DateFromTimestamp time={props.value.timestamp} />
            : <Spinner />}
          </div>
        </div>
        <div className={`${styles.rightText} ${grid['col-xs-5']} ${grid['col-sm-3']} transactions-cell`}>
          <Amount {...props}></Amount>
        </div>
        <div className={`${styles.rightText} ${grid['col-xs-1']} ${grid['col-sm-1']} transactions-cell`}>
          <FontIcon value='arrow-right'/>
        </div>
      </div>
    );
  }
}

export default translate()(TransactionRow);
