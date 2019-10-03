import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import React from 'react';
import SkyLight from 'react-skylight';
import { FontIcon } from '../fontIcon';
import Box from '../box';
import { loadTransactions } from '../../actions/transactions';
import TransactionList from './../transactions/transactionList';
import Send from '../send';
// import CurrencyGraph from './currencyGraph';
import routes from '../../constants/routes';
import { settingsUpdated } from '../../actions/settings';
// import FollowedAccounts from '../followedAccounts/index';
import Voting from '../voting';
// import { listDelegates } from '../../../src/utils/api/delegate';
import styles from './dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.props.loadTransactions({
      activePeer: this.props.peers.data,
      address: this.props.account.address,
      publicKey: this.props.account.publicKey,
    });
  }
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    // console.log(this.props.account);
    // console.log(this.props.peers.data);
    // console.log(this.props.account.address);
    if (this.props.account.serverPublicKey === undefined || this.props.account.serverPublicKey === '') {
      this.simpleDialog.show();
    }
  }
  render() {
    const {
      transactions, t, account, loading, history,
    } = this.props;
    const myDialog = {
      backgroundColor: '#323340',
      color: '#ffffff',
      width: '40%',
      height: '200px',
      marginLeft: '-20%',
    };
    return <div className={`${grid.row} ${styles.wrapper}`}>
      <div className={`${grid['col-md-12']} ${grid['col-xs-12']} ${styles.main}`}>
      <div>
        <SkyLight dialogStyles={myDialog} hideOnOverlayClicked ref={(ref) => { this.simpleDialog = ref; } } title="Initialize PHAETON ID">
        <div className={`${styles.popuptext}`}>
          You need to initialize your account prior to performing any transactions.
        </div>
        </SkyLight>
      </div>
        <div className={`${grid['col-md-4']} ${styles.sendWrapper}`}>
          <Send {...this.props} />
        </div>
        <div className={`${grid['col-md-8']} ${styles.sendWrapper}`}>
        <Box className={`${styles.latestActivity}`}>
        <header>
        <h2 className={styles.title}>
          {t('Latest activity')}
        </h2>
        <span className={styles.title}>
          <Link to={`${routes.wallet.path}`} className={`${styles.seeAllLink} seeAllLink`}>
            {t('See all transactions')}
            <FontIcon value='arrow-right'/>
          </Link>
        </span>
        </header>
        <TransactionList {...{
        transactions,
        t,
        address: account.address,
        dashboard: true,
        loading,
        history,
        onClick: props => history.push(`${routes.wallet.path}?id=${props.value.id}`),
        }} />
        </Box>
        </div>
      </div>
      <div className={`${grid['col-md-12']} ${grid['col-xs-12']} ${styles.main}`}>
        <Voting {...this.props} />
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  transactions: [...state.transactions.pending, ...state.transactions.confirmed].slice(0, 5),
  pendingTransactions: state.transactions.pending,
  account: state.account,
  loading: state.loading.length > 0,
  peers: state.peers,
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  loadTransactions: data => dispatch(loadTransactions(data)),
  settingsUpdated: data => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(translate()(Dashboard));
