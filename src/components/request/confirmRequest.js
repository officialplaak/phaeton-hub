import React from 'react';
import QRCode from 'qrcode.react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import { Button, TertiaryButton } from './../toolbox/buttons/button';
import AccountVisual from '../accountVisual';
import Input from '../toolbox/inputs/input';
// import { FontIcon } from '../fontIcon';
// import CopyToClipboard from '../copyToClipboard/index';
import styles from './request.css';
import inputTheme from './input.css';

class ConfirmRequest extends React.Component {
  constructor() {
    super();
    this.state = { magnifyQrCode: false };
  }
  render() {
    const {
      address, amount, prevStep, finalCallback, t,
    } = this.props;
    const link = `https://wallet.plaak.com/#/wallet?recipient=${address}&amount=${amount}`;
    return (
      <div className={`${styles.wrapper} confirm-request-step`}>
        <div className={styles.header}>
          <header>
            <h2>{t('Your request')}</h2>
          </header>
        </div>
        <div>
          <Input label={t('Receiver')}
            className={`recipient ${styles.disabledInput}`}
            value={address}
            theme={inputTheme}
            disabled={true}>
            <figure className={styles.accountVisual}>
              <AccountVisual address={address} size={50} />
            </figure>
          </Input>

          <Input label={t('Request amount (LSK)')}
            className={`recipient ${styles.disabledInput}`}
            value={amount}
            disabled={true}/>
          <div className={`${styles.qrCode} ${this.state.magnifyQrCode ? styles.magnified : styles.minimized} qr-code`}
            onClick={() => this.setState({ magnifyQrCode: !this.state.magnifyQrCode })}>
            <QRCode value={link}/>
          </div>
        </div>
        <footer>
          <section className={grid.row} >
            <div className={grid['col-xs-4']}>
              <Button
                className={`${styles.backButton} back-button`}
                label={t('Back')}
                onClick={() => prevStep()}
              />
            </div>
            <div className={grid['col-xs-8']}>
              <TertiaryButton
                label={t("Okay, I'm done")}
                onClick={() => finalCallback()}
                className='finish-button'
              />
              <div className='subTitle'></div>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default ConfirmRequest;