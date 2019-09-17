import React from 'react';
import axios from 'axios';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import styles from './peers.css';
// import barMap from '../../assets/images/plaak/Barmap.png';
// import lineMap from '../../assets/images/plaak/lineChart.png';
// import pieMap from '../../assets/images/plaak/pieChart.png';
// import abstract from '../../assets/images/plaak/abstractMap.png';
// import trsStyles from '../transactions/transactionList.css';
// import Box from '../box';

class Peers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccess: 0, address: '1916738770155494334P', feesrows: '' };
  }
  componentWillMount() {
    // eslint-disable-next-line class-methods-use-this
    const conf = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    };
    const URL = `http://13.250.116.189:7000/api/transactionfees?address=${this.state.address}`;
    axios.get(URL, conf)
      .then((res) => {
        this.setState({ showSuccess: 1 });
        // eslint-disable-next-line class-methods-use-this arrow-body-style
        const listItems = res.data.data.map((row, i) => {
          return (
          <div key={i} className={`${grid.row} ${styles.rows} transactions-row`}>
            <div className={`${styles.rightText} ${grid['col-sm-2']} transactions-cell`}>
              <div className={`${styles.hiddenXs}`}>
                {this.props.address}
              </div>
            </div>
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
    return <div>{this.state.feesrows}</div>;
  }
}

export default Peers;
