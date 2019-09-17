import React, { Fragment } from 'react';
import styles from './create.css';
import { PrimaryButton } from '../../toolbox/buttons/button';
// import div from '../../toolbox/div';
import AccountVisual from '../../accountVisual';
// import ActionBar from '../../actionBar';
// import sfStyles from '../safekeeping/safekeeping.css';
// import Safekeeping from '../safekeeping';

class CreateFirst extends React.Component {
  constructor() {
    super();
    this.state = { showHint: true, step: '' };
  }

  componentDidMount() {
    this.props.addEventListener();
  }

  showHint() {
    this.setState({ showHint: !this.state.showHint });
  }

  nextIntroduction() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ step: 'revealing-step' });
    }, 500);
  }

  nextRevealing() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ step: 'revealed-step' });
    }, 500);
  }

  done() {
    this.setState({ step: 'done-step' });
    setTimeout(() => {
      this.props.nextStep({ passphrase: this.props.passphrase });
    }, 400);
  }

  render() {
    const { // percentage, hintTitle, message
      t, address, step, nextStep, passphrase, header,
    } = this.props;
    const modifyID = (id) => {
      const substring = id.slice(3, id.length - 1);
      const replacement = substring.replace(/.{1}/g, '*');
      return id.replace(substring, replacement);
    };

    return (
      <div>
      <div>
        <header>
          <div current={step} step='generate'>
            <h3 className={`${styles.generatorHeader}`}
              id="generatorHeader" >
              {t('Create your PLAAK ID by moving your mouse.')}
            </h3>
          </div>
          <div current={step} step='generate' id='movingWrap'>
            <p className={`${styles.mouse_moving}`} style={{ borderStyle: 'dashed', padding: '20px 10px' }}>
              <div className={`${styles.box_moving}`}>1</div>
              <div className={`${styles.box_moving}`}>2</div>
              <div className={`${styles.box_moving}`}>3</div>
              <div className={`${styles.box_moving}`}>4</div>
              <div className={`${styles.box_moving}`}>5</div>
              <div className={`${styles.box_moving}`}>6</div>
              <div className={`${styles.box_moving}`}>7</div>
              <div className={`${styles.box_moving}`}>8</div>
            </p>
          </div>
        </header>
        <div>
          <h3>{t('Waiting for address')}</h3>
        {address ?
          <Fragment>
            <figure>
              <AccountVisual address={address} size={200} />
            </figure>
            <h4 className={styles.address}>{modifyID(address)}</h4>
            <PrimaryButton
              theme={styles}
              label={t('Get passphrase')}
              className="get-passphrase-button"
              onClick={() => nextStep({
                passphrase,
                header: t('Your passphrase is used to access your PLAAK ID.'),
                message: t('You are responsible for keeping my passphrase safe. No one can reset it, not even PLAAK.'),
              })}
            />
          </Fragment>
          : ''}
        </div>
      </div>
      </div>
    );
  }
}

export default CreateFirst;
