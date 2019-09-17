import React from 'react';
import { connect } from 'react-redux';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import WalletTransactions from './../transactions/walletTransactions';
import Send from '../send';
import Voting from '../voting';
import styles from './transactionDasboard.css';

class TransactionsDashboard extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className={`${grid.row} ${styles.wrapper}`} style={{ marginTop: '0' }}>
      <div className={`${grid['col-md-4']}`}>
        <Send {...this.props}/>
      </div>
      <div className={`${grid['col-sm-8']} ${styles.transactions} ${styles.wallet_container} ${grid['col-md-8']}`}>
        <Voting {...this.props} />
      </div>
      <div className={`${grid['col-sm-12']} ${styles.transactions} ${grid['col-md-12']}`}>
        <WalletTransactions {...this.props} />
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  address: state.account.address,
  balance: state.account.balance,
  account: state.account,
  settings: state.settings,
  pendingTransactions: state.transactions.pending,
});

export default connect(mapStateToProps)(TransactionsDashboard);
