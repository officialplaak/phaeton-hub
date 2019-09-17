import React from 'react';
import ReactExport from 'react-data-export';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import EmptyState from '../emptyState';
import TransactionList from './transactionList';
import TransactionFees from './transactionFees';
import styles from './transactions.css';
import txFilters from './../../constants/transactionFilters';
import { getIndexOfFollowedAccount } from './../../utils/followedAccounts';

class TransactionsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.canLoadMore = true;
    this.state = { transactionFee: false };
    this.props.onInit();
  }

  loadMore() {
    if (this.canLoadMore) {
      this.canLoadMore = false;
      this.props.onLoadMore();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isSmallScreen() {
    return window.innerWidth <= 768;
  }

  componentDidUpdate() {
    this.canLoadMore = this.props.count === null ||
      this.props.count > this.props.transactions.length;
  }

  isActiveFilter(filter) {
    return (!this.props.activeFilter && filter === txFilters.all) ||
      (this.props.activeFilter === filter);
  }

  shouldShowEmptyState() {
    return this.props.transactions.length === 0 && !this.isLoading() &&
      (!this.props.activeFilter || this.props.activeFilter === txFilters.all);
  }

  isLoading() {
    return this.props.loading.length > 0;
  }

  setTransactionsFilter(filter) {
    this.setState({ transactionFee: false });
    this.props.onFilterSet(filter);
  }

  setTransactionsFees() {
    this.setState({ transactionFee: true });
  }

  render() {
    const filters = [
      {
        name: this.props.t('All'),
        value: txFilters.all,
        className: 'filter-all',
      },
      {
        name: this.isSmallScreen() ? this.props.t('In') : this.props.t('Incoming'),
        value: txFilters.incoming,
        className: 'filter-in',
      },
      {
        name: this.isSmallScreen() ? this.props.t('Out') : this.props.t('Outgoing'),
        value: txFilters.outgoing,
        className: 'filter-out',
      },
    ];

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    const dataSet1 = this.props.transactions;

    /* if (this.props.delegate && Object.values(this.props.delegate).length > 0) {
      filters[txFilters.statistics] = {
        name: this.isSmallScreen() ? this.props.t('Stats') : this.props.t('Delegate statistics'),
        value: txFilters.statistics,
        className: 'delegate-statistics',
      };
    } else {
      filters[txFilters.accountInfo] = {
        name: this.isSmallScreen() ? this.props.t('Info') : this.props.t('Account Info'),
        value: txFilters.accountInfo,
        className: 'account-info',
      };
    } */

    const index = getIndexOfFollowedAccount(
      this.props.followedAccounts,
      { address: this.props.address },
    );
    const accountTitle = this.props.followedAccounts[index]
      && this.props.followedAccounts[index].title;
    const hasTitle = index !== -1 && accountTitle !== this.props.address;

    return (
      <div className={`transactions ${styles.activity}`}>
        <header>
          <h2 className={styles.title}>{this.props.t('My Wallet')} {hasTitle
            ? (<span>{this.props.t('of')} <span className={`${styles.accountTitle} account-title`}>{accountTitle}</span></span>)
            : null}</h2>
        </header>
        {this.shouldShowEmptyState() ?
          <EmptyState title={this.props.t('No activity yet')}
            message={this.props.t('The Wallet will show your recent transactions.')} /> :
          null }
        {this.shouldShowEmptyState() ?
          null :
          <ul className={styles.list}>
            {filters.map((filter, i) => (
              <li key={i} className={`transaction-filter-item ${filter.className} ${styles.item} ${this.isActiveFilter(filter.value) ? styles.active : ''}`}
                onClick={() => this.setTransactionsFilter(filter.value)}>
                {filter.name}
              </li>
            ))}
            { /*
            <li key={4} className={`transaction-filter-item ${styles.item}`}
              onClick={() => this.setTransactionsFees()}>
              {'Fees'}
            </li>
           */ }
            <li><ExcelFile element={<button className={styles.download}>Download Excel</button>}>
                <ExcelSheet data={dataSet1} name='DataSheet'>
                    <ExcelColumn label='ID' value='id'/>
                    <ExcelColumn label='SenderId' value='senderId'/>
                    <ExcelColumn label='RecipientId' value='recipientId'/>
                    <ExcelColumn label='Money' value='amount'/>
                    <ExcelColumn label='Fee' value='fee'/>
                    <ExcelColumn label='Date' value='timestamp'/>
                </ExcelSheet>

            </ExcelFile></li>
          </ul>
        }
        {
        this.state.transactionFee === false ?
          <TransactionList
            filter={filters[this.props.activeFilter]}
            delegate={this.props.delegate}
            votes={this.props.votes}
            voters={this.props.voters}
            address={this.props.address}
            publicKey={this.props.publicKey}
            transactions={this.props.transactions}
            loadMore={this.loadMore.bind(this)}
            nextStep={this.props.nextStep}
            loading={this.isLoading()}
            t={this.props.t}
            history={this.props.history}
            onClick={props => this.props.onTransactionRowClick(props)}
          />
          : <TransactionFees
              address={this.props.address}
              loading={this.isLoading()}
              t={this.props.t}
              history={this.props.history}
            />
        }
        {
          // the whole transactions box should be scrollable on XS
          // otherwise only the transaction list should be scrollable
          // (see transactionList.js)
          this.isSmallScreen()
            ? <Waypoint bottomOffset='-80%' key={this.props.transactions.length}
              onEnter={() => { this.loadMore(); }}></Waypoint>
            : null
        }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  followedAccounts: state.followedAccounts.accounts,
  peers: state.peers,
  account: state.account,
});

export default connect(mapStateToProps)(TransactionsOverview);

