import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs as ToolboxTabs } from 'react-toolbox/lib/tabs';
import Drawer from 'react-toolbox/lib/drawer';
import MenuBar from '../menuBar';
import styles from './mainMenu.css';
import logo from '../../assets/images/phaeton/logo.png';
import * as menuLogos from '../../assets/images/main-menu-icons/*.png'; //eslint-disable-line
import { FontIcon } from '../fontIcon';
import routes from '../../constants/routes';

const getIndex = (history, tabs) => {
  let index = -1;
  tabs.map(t => new RegExp(`${t.route}(\\/?)`)).forEach((item, i) => {
    if (history.location.pathname.match(item)) {
      index = i;
    }
  });
  return index;
};

const TabTemplate = ({ img, label }) => (
  <div>
    <img src={img} />
    <span>{label}</span>
  </div>
);


class MainMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      setting: false,
      index: 0,
    };
  }

  menuToggle() {
    const setting = !this.state.active ? false : this.state.setting;
    this.setState({ active: !this.state.active, setting });
  }

  navigate(history, tabs, index) {
    this.setState({ active: false, index });
    history.push(tabs[index].route);
  }

  settingToggle() {
    this.setState({
      setting: !this.state.setting,
    });
  }

  render() {
    const {
      history, t, showDelegate, account,
    } = this.props;
    const tabs = [
      {
        label: t('Dashboard'),
        route: `${routes.dashboard.path}`,
        id: 'dashboard',
        image: menuLogos.dashboard,
      }, {
        label: t('Wallet'),
        route: `${routes.wallet.path}`,
        id: 'transactions',
        image: menuLogos.wallet,
      }, {
        label: t('Settings'),
        route: `${routes.setting.path}`,
        id: 'settings',
        image: menuLogos.settings,
        enabledWhenNotLoggedIn: true,
      }, {
      /* TODO: uncomment when the page is created
        label: t('Buy Phaeton'),
        route: '/main/buyPhaeton',
        id: 'buyPhaeton',
        image: menuLogos.buyPhaeton,
      }, {
      */
        label: t('Sidechains'),
        route: `${routes.sidechains.path}`,
        id: 'sidechains',
        image: menuLogos.sidechains,
      }, {
        label: t('Peers'),
        route: `${routes.peers.path}`,
        id: 'peers',
        image: menuLogos.peers,
      },
    ];

    if (showDelegate) {
      tabs.splice(tabs.length - 3, 0, {
        label: t('Delegates'),
        id: 'delegates',
        route: `${routes.delegates.path}`,
        image: menuLogos.delegates,
      });
    }

    return (
      <Fragment>
        <aside className={styles.aside}>
          <div className={styles.sideBarWrapper}>
            <ToolboxTabs index={getIndex(history, tabs)}
              theme={styles}
              onChange={this.navigate.bind(this, history, tabs)}
              disableAnimatedBottomBorder={true}
              className={`${styles.tabs} main-tabs`}>
              {tabs.map(({
                   label, image, id, enabledWhenNotLoggedIn,
                  }, index) =>
                <Tab
                  key={index}
                  label={<TabTemplate label={label} img={image} />}
                  className={styles.tab}
                  id={id}
                  disabled={!account.address && !enabledWhenNotLoggedIn}
                />)}
            </ToolboxTabs>
            <Drawer theme={styles}
              className='drawer'
              active={this.state.active}
              onOverlayClick={this.menuToggle.bind(this)}>
              <div>
                <header className={styles.header}>
                  <Link to={`${routes.dashboard.path}`}><img src={logo} className={styles.logo} /></Link>
                  <FontIcon value='close' className={styles.close} onClick={this.menuToggle.bind(this)} />
                </header>
                <ToolboxTabs index={getIndex(history, tabs)}
                  theme={styles}
                  onChange={this.navigate.bind(this, history, tabs)}
                  disableAnimatedBottomBorder={true}
                  className={`${styles.tabs} main-tabs`}>
                  {tabs.map(({
                       label, image, id, enabledWhenNotLoggedIn,
                      }, index) =>
                    <Tab
                      key={index}
                      label={<TabTemplate label={label} img={image} />}
                      id={id}
                      disabled={!account.address && !enabledWhenNotLoggedIn}
                    />)}
                </ToolboxTabs>
              </div>
            </Drawer>
          </div>
        </aside>
        <MenuBar
          menuToggle={this.menuToggle.bind(this)}
          settingToggle={this.settingToggle.bind(this)}
          menuStatus={this.state.active}
          settingStatus={this.state.setting} />
      </Fragment>
    );
  }
}

export default MainMenu;
