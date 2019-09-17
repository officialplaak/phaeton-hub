import React from 'react';
import styles from './resultsList.css';

class ResultsList extends React.Component {
  render() {
    return this.props.results.length > 0 ?
      <ul className={styles.resultList}>
        <li className={`${styles.row} ${styles.heading}`}>
          <span>{this.props.header.titleLeft}</span>
          <span>{this.props.header.titleRight}</span>
        </li>
        {
          this.props.results.map(result =>
            <li key={`${result.id}-${result.valueLeft}`}
              onMouseDown={() => this.props.onMouseDown(result.id, result.type, result.valueLeft)}
              data-id={result.id}
              data-type={result.type}
              data-value={result.valueLeft}
              className={`${styles.row} ${styles.rowResult} ${result.isSelected ? styles.rowSelected : ''} ${result.type}-result`}
              ref={result.isSelected ? this.props.setSelectedRow : () => {} }>
              <span>{result.valueLeft}</span>
              <span>{result.valueRight}</span>
            </li>)
        }
      </ul> : null;
  }
}

export default ResultsList;
