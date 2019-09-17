import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { sent } from '../../actions/transactions';
import Send from './send';

const mapStateToProps = state => ({
  account: state.account,
  activePeer: state.peers.data,
  pendingTransactions: state.transactions.pending,
  failedTransactions: state.transactions.failed,
});

const mapDispatchToProps = dispatch => ({
  sent: data => dispatch(sent(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(translate()(Send));
