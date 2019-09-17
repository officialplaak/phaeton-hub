import React from 'react';
import { translate } from 'react-i18next';
import { FontIcon } from '../fontIcon';
import Box from '../box';
import styles from './sidechains.css';
import plk from './../../assets/images/plaak/plk.png';
// import comingBg from './../../assets/images/sidechains/coming-bg.png';
// import application from './../../assets/images/sidechains/graphic-application.svg';
// import bootstrap from './../../assets/images/sidechains/graphic-bootstrap.svg';
// import hosts from './../../assets/images/sidechains/graphic-hosts.svg';
// import register from './../../assets/images/sidechains/graphic-register.svg';

class Sidechains extends React.Component {
  render() {
    const { t } = this.props;
    return (<Box className={styles.wrapper}>
      <div className={styles.bigGraphic}>
        <img src={plk} className={styles.plk}/>
      </div>
      <div className={styles.header}>
        <h2>{t('Coming soon.')}</h2>
        <div className={styles.subHeader}>
          {t('Sidechains will revolutionize the way decentralised apps are developed. Here you will be able to find hosts, and monitor your sidechains soon.')}
        </div>
        <a target='_blank' href='https://plaak.com/' rel='noopener noreferrer'>
          {t('Learn more about Phaeton sidechains')}&nbsp;<FontIcon>arrow-right</FontIcon>
        </a>
      </div>
    </Box>);
  }
}

export default translate()(Sidechains);

