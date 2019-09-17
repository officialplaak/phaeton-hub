import React from 'react';
import logo from '../../assets/images/plaak/logo.png';
import exchangeIcon from '../../assets/images/plaak/exchange-icon.png';
import cardIcon from '../../assets/images/plaak/hardware-wallet-icon.png';
import coreIcon from '../../assets/images/plaak/core-icon.png';
import explorerIcon from '../../assets/images/plaak/explorer-icon.png';
import discordIcon from '../../assets/images/plaak/discord-icon.png';
import styles from './mainHeader.css';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick();
  }

  handleClick() {
    try {
      // Do something that could throw
    } catch (error) {
      this.setState({ error });
    }
  }
  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>;
    }
    return (
      <div>
      <div id="header-sroll" className={`${styles.header}`}>
        <div className={`${styles.site_wise_header}`}>
            <div className={`${styles.outer}`}>
              <div className={`${styles.row}`}>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className={`${styles.desk_logo}`}>
                          <a href=""><img src={logo} alt=""/><span>Plaak <br />Wallet</span></a>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className={`${styles.navigation}`}>
                          <ul className={`${styles.desk_menu}`}>
                              <li className={`${styles.scroll_link}`}>
                                <a href="#section1">PRODUCTS</a>
                                <ul>
                                  <li>
                                    <a rel="noopener noreferrer" href="https://plaak.com/exchange/" target="_blank">
                                      <img src={exchangeIcon} alt=""/>Exchange
                                    </a>
                                  </li>
                                  <li>
                                    <a rel="noopener noreferrer" href="https://plaak.com/core/cards" target="_blank">
                                      <img src={cardIcon} alt=""/>Hardware Wallet
                                    </a>
                                  </li>
                                  <li>
                                    <a rel="noopener noreferrer" href="https://plaak.com/core/" target="_blank">
                                      <img src={coreIcon} alt=""/>Core
                                    </a>
                                  </li>
                                  <li>
                                    <a rel="noopener noreferrer" href="https://explorer.plaak.com/" target="_blank">
                                      <img src={explorerIcon} alt=""/>Explorer
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className={`${styles.scroll_link}`}>
                                <a rel="noopener noreferrer" href="https://phaeton.plaak.com/" target="_blank">PHAETON</a>
                              </li>
                              <li className={`${styles.scroll_link}`}>
                                <a rel="noopener noreferrer" href="https://plaak.com/peers/" target="_blank">PEERS</a>
                              </li>
                              <li className={`${styles.scroll_link}`}><a rel="noopener noreferrer" target="_blank" href="https://plaak.com/coming-soon.php">SUPPORT</a></li>
                              <li className={`${styles.scroll_link}`}>
                                <a rel="noopener noreferrer" target="_blank" className={'imgDiscordIcon'} href="https://discordapp.com/invite/F44Ybhj?url=https://plaak.com/&amp;text=PLAAK">
                                  <img src={discordIcon} style={{ width: '100%' }}/>
                                </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default MainHeader;
