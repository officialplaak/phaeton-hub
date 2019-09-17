import React, { Fragment } from 'react';
import styles from './create.css';
// import { FontIcon } from './../../fontIcon';
import { PrimaryButton, Button } from '../../toolbox/buttons/button';
import TransitionWrapper from '../../toolbox/transitionWrapper';
import AccountVisual from '../../accountVisual';
// import Shapes from './shapes';

class CreateFirst extends React.Component {
  constructor() {
    super();
    this.state = { showHint: false, step: '' };
  }

  componentDidMount() {
    this.props.addEventListener();
  }

  showHint() {
    this.setState({ showHint: !this.state.showHint });
  }

  render() {
    const { // percentage, hintTitle
      t, address, step, nextStep, passphrase,
    } = this.props;
    const modifyID = (id) => {
      const substring = id.slice(3, id.length - 1);
      const replacement = substring.replace(/.{1}/g, '*');
      return id.replace(substring, replacement);
    };

    return (
      <div>
        <header>
          <TransitionWrapper current={step} step='generate'>
            <h3 className={`${styles.generatorHeader}`}
              id="generatorHeader" >
              {t('Create your PLAAK ID by moving your mouse.')}
            </h3>
          </TransitionWrapper>
          <TransitionWrapper current={step} step='generate' id='movingWrap'>
            <p className={`${styles.mouse_moving} ${styles.parent_hover_boxes}`} style={{ borderStyle: 'dashed', padding: '20px 10px' }}>
              <div className={`${styles.box_moving}`}>1</div>
              <div className={`${styles.box_moving}`}>2</div>
              <div className={`${styles.box_moving}`}>3</div>
              <div className={`${styles.box_moving}`}>4</div>
              <div className={`${styles.box_moving}`}>5</div>
              <div className={`${styles.box_moving}`}>6</div>
              <div className={`${styles.box_moving}`}>7</div>
              <div className={`${styles.box_moving}`}>8</div>
            </p>
          </TransitionWrapper>
          <TransitionWrapper current={step} step='info'>
            <h3 className={`${styles.secondHeading}`}>
              {t('This is your PLAAK ID')}
            </h3>
          </TransitionWrapper>
          <aside className={`${styles.description} ${step === 'info' && this.state.showHint ? styles.fadeIn : ''}`}>
            <p>The <b>Avatar</b> represents the ID making it easy to recognize.
              Every PLAAK ID has one unique avatar.</p>
            <p>The <b>ID</b> is unique and can’t be changed.
              It’s yours.You will get the full <b>ID</b> at the end.</p>
            <Button
              label={t('Got it')}
              onClick={this.showHint.bind(this)}
              type={'button'} />
          </aside>
        </header>
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
    );
  }
}

export default CreateFirst;
