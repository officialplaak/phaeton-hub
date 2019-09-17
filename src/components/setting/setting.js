import React from 'react';
import { Link } from 'react-router-dom';
// import ReactSwipe from 'react-swipe';
import Checkbox from '../toolbox/sliderCheckbox';
import styles from './setting.css';
import i18n from '../../i18n';
import accountConfig from '../../constants/account';
// import breakpoints from './../../constants/breakpoints';
import settingsConst from './../../constants/settings';
// TODO: will be re-enabled when the functionality is updated
import routes from '../../constants/routes';
import { FontIcon } from '../fontIcon';
import Box from '../box';
import plk from '../../assets/images/plaak/plk.png';
// import languageSwitcherTheme from './languageSwitcher.css';

const sectionBackgroundStyle = {
  position: 'absolute',
  top: '180px',
  left: '10px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '24%',
  height: '249px',
  backgroundImage: `url(${plk})`,
};

class Setting extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0,
      currencies: settingsConst.currencies,
    };
  }

  changeSlide(i) {
    this.reactSwipe.slide(i);
    this.setState({
      activeSlide: i,
    });
  }

  // changeLanguage(e) {//eslint-disable-line
  //   if (e.checked) {
  //     i18n.changeLanguage('de');
  //   } else {
  //     i18n.changeLanguage('en');
  //   }
  // }

  toggleAutoLog(state) {
    const {
      account, settings, settingsUpdated, accountUpdated,
    } = this.props;
    if (state && account.passphrase) {
      const date = Date.now() + accountConfig.lockDuration;
      accountUpdated({ expireTime: date });
    }
    settingsUpdated({ autoLog: !settings.autoLog });
  }

  render() {
    this.language = (i18n.language === 'de');
    const {
      t, settings, settingsUpdated,
      hasSecondPassphrase,
    } = this.props;

    const allowAuthClass = !this.props.isAuthenticated ? styles.disable : '';
    // const showOnboardingSetting = window.innerWidth > breakpoints.m;
    const activeCurrency = settings.currency || settingsConst.currencies[0];

    return (<Box className={styles.wrapper}>
      <aside>
        <header>
          <h4>{t('Settings')}</h4>
        </header>
        <div style={ sectionBackgroundStyle }></div>
      </aside>
      <section>
        <h4 className={`${allowAuthClass}`}>{t('Security')}</h4>
        <div className={styles.item}>
          <label className={`${allowAuthClass}`}>{t('2nd passphrase (Fee: 5 LSK)')}</label>
          {!hasSecondPassphrase ?
            <Link
              className={`register-second-passphrase ${styles.secondPassphrase} ${allowAuthClass}`}
              to={`${routes.secondPassphrase.path}`}>
              {t('Register')}
              <FontIcon>arrow-right</FontIcon>
            </Link> :
            <span
              className={`register-second-passphrase ${styles.secondPassphraseEnabled}`}>
              {t('Registered')}
              <FontIcon>checkmark</FontIcon>
            </span>
          }
        </div>
        <div className={styles.item}>
          <label className={`${allowAuthClass}`}>{t('Auto-Lock')}</label>
          <Checkbox
            theme={styles}
            disabled={!this.props.isAuthenticated}
            className={`${styles.smallSlider} autoLog ${allowAuthClass}`}
            onChange={() => this.toggleAutoLog(!settings.autoLog)}
            input={{
              value: true,
              checked: settings.autoLog,
            }}/>
        </div>
        <h4>{t('Advanced features')}</h4>
        <div className={styles.item}>
          <label className={`${allowAuthClass}`}>{t('Delegate features')}</label>
          <Checkbox
            theme={styles}
            disabled={!this.props.isAuthenticated}
            className={`${styles.smallSlider} advancedMode ${allowAuthClass}`}
            onChange={() => settingsUpdated({ advancedMode: !settings.advancedMode })}
            input={{
              value: true,
              checked: settings.advancedMode,
            }}/>
        </div>
        <h4>{t('Local')}</h4>
        <div className={styles.item}>
          <label>{t('Currency')}</label>
          <ul className={styles.currencyList}>
            {this.state.currencies.map(currency => (
              <li
                key={`currency-${currency}`}
                className={`currency ${currency === activeCurrency ? styles.active : ''}`}
                onClick={() => settingsUpdated({ currency })}>
                {currency}
              </li>
            ))}
          </ul>
        </div>
        {/* TODO: will be re-enabled when the functionality is updated
        {/* TODO: will be re-enabled when the functionality is updated
        <div>
          <Checkbox
            theme={languageSwitcherTheme}
            className={`${styles.smallSlider} language-switcher`}
            onChange={this.changeLanguage.bind(this)}
            textAsIcon={true}
            icons={{
              unchecked: 'EN',
              checked: 'DE',
              goal: 'DE',
              begin: 'EN',
            }}
            input={{
              value: 'true',
              checked: this.language,
            }}/>
          <article>
            <h5>{t('Language')}</h5>
            <p>{t('Currently we speaking english and german.')}</p>
          </article>
        </div>
        */}
      </section>
    </Box>);
  }
}

export default Setting;
