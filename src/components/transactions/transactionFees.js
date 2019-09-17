import React from 'react';
import axios from 'axios';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
// import TransactionfeesRow from './transactionfeesrow';
import styles from './transactionRow.css';

class Transactionfees extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccess: 0, address: '1916738770155494334P', feesrows: '' };
  }
  componentWillMount() {
    // eslint-disable-next-line class-methods-use-this
    const conf = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    };
    const URL = `http://13.250.116.189:7000/api/transactionfees?address=${this.props.address}`;
    axios.get(URL, conf)
      .then((res) => {
        this.setState({ showSuccess: 1 });
        // eslint-disable-next-line class-methods-use-this arrow-body-style
        const listItems = res.data.data.map((row, i) => {
          return (
          <div key={i} className={`${grid.row} ${styles.rows} transactions-row`}>
            <div className={`${styles.rightText} ${grid['col-sm-2']} transactions-cell`}>
              <div className={`${styles.hiddenXs}`}>
                {row.blockid}
              </div>
            </div>
            <div className={`${styles.rightText} ${grid['col-sm-3']} transactions-cell`}>
              <div className={`${styles.hiddenXs}`}>
                {row.fees}
              </div>
            </div>
            <div className={`${styles.rightText} ${grid['col-sm-6']} transactions-cell`}>
              <div className={`${styles.hiddenXs}`}>
                {(row.confirm_status === '1' && row.merge_status === '1') ? 'Confirm' : 'Pending' }
              </div>
            </div>
          </div>
          );
        });
        this.setState({ feesrows: listItems });
      });
  }
  render() {
    const {
      t,
    } = this.props;

    return <div className={`${styles.results} transaction-results`}>
      <div className={`${grid.row}  ${styles.rows} ${styles.paddingLeft} ${styles.rowbg}`} id="transactionsHeader">
        <div className={`${styles.rightText} ${grid['col-xs-0']} ${grid['col-sm-2']} ${styles.header} transactions-header`}>{t('Block')}</div>
        <div className={`${styles.rightText} ${grid['col-xs-3']} ${grid['col-sm-3']} ${styles.header} transactions-header`}>{t('Amount (LSK)')}</div>
        <div className={`${styles.rightText} ${grid['col-xs-6']} ${grid['col-sm-6']} ${styles.header} transactions-header`}>{t('Status')}</div>
        <div className={`${grid['col-xs-1']} ${grid['col-sm-1']}`}></div>
      </div>
      <div>{this.state.feesrows}</div>
    </div>;
  }
}

export default Transactionfees;
