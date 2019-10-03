import React from 'react';
import { Link } from 'react-router-dom';
// import ReactSwipe from 'react-swipe';
import Checkbox from '../toolbox/sliderCheckbox';
import i18n from '../../i18n';
import accountConfig from '../../constants/account';
// import breakpoints from './../../constants/breakpoints';
import routes from '../../constants/routes';
import { FontIcon } from '../fontIcon';
import Box from '../box';
import pha from '../../assets/images/phaeton/pha.png';
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
  backgroundImage: `url(${pha})`,
};

class Setting extends React.Component {
  constructor() {
    super();
    
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
      account, accountUpdated,
    } = this.props;
    if (state && account.passphrase) {
      const date = Date.now() + accountConfig.lockDuration;
      accountUpdated({ expireTime: date });
    }
   
  }

  render() {
    this.language = (i18n.language === 'de');
    

    return (<Box className={styles.wrapper}>
      <aside>
        <header>
          <h4>{t('Exports')}</h4>
        </header>
        <div style={ sectionBackgroundStyle }></div>
      </aside>
      <section>
        <h4 className={`${allowAuthClass}`}>{t('Security')}</h4>
        
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

export default Exports;
