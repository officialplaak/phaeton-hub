import React from 'react';
import ReactExport from 'react-data-export';
import { ReactPDF, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import EmptyState from '../emptyState';
import TransactionList from './transactionList';
import styles from './transactions.css';
import txFilters from './../../constants/transactionFilters';
import { getIndexOfFollowedAccount } from './../../utils/followedAccounts';
import plaaklogo from './../../assets/images/phaeton/plaak_200_200.png';

class TransactionsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.canLoadMore = true;

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
    this.props.onFilterSet(filter);
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

    const styles1 = StyleSheet.create({
      page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
      },
      image: {
        marginVertical: 15,
        marginHorizontal: 100,
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
      },
    });

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    const dataSet1 = this.props.transactions;

    const MyDocument = () => (
      <Document>
        <Page size="A4" style={styles1.page}>
          <View style={styles1.section}>
          <Image style={styles1.image} src={plaaklogo}/>
            <Text>Transactions</Text>
          </View>
          <View style={styles1.section}>
            <Text>{this.props.transactions}</Text>
          </View>
        </Page>
      </Document>
    );

    ReactPDF.render(<MyDocument />, `${__dirname}/{this.props.address}.pdf`);
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
            <li><ExcelFile element={<button>Download Excel</button>}>
                <ExcelSheet data={dataSet1} name='DataSheet'>
                    <ExcelColumn label='ID' value='id'/>
                    <ExcelColumn label='SenderId' value='senderId'/>
                    <ExcelColumn label='RecipientId' value='recipientId'/>
                    <ExcelColumn label='Money' value='amount'/>
                    <ExcelColumn label='Fee' value='fee'/>
                    <ExcelColumn label='Date' value='timestamp'/>
                </ExcelSheet>

            </ExcelFile> | <Link to={`${__dirname}/example.pdf`} >
                    Download PDF
                  </Link></li>
          </ul>
        }
        {
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

