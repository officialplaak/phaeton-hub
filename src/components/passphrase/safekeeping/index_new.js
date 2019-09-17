import React from 'react';
import ActionBar from '../../actionBar';
import styles from './safekeeping.css';
// eslint-disable-next-line import/no-named-as-default
// import SliderCheckbox from '../../toolbox/sliderCheckbox';
// import div from '../../toolbox/div';
import { PrimaryButton } from '../../toolbox/buttons/button';

class SafeKeeping extends React.Component {
  constructor() {
    super();
    this.state = {
      step: '',
    };
  }

  componentDidMount() {
    this.setState({
      step: this.props.step || 'revealing-step',
    });
  }

  /* next(e) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (e.value === 'introduction-step' && e.checked) {
        this.setState({ step: 'revealing-step' });
      } else if (e.value === 'revealing-step' && e.checked) {
        this.setState({ step: 'revealed-step' });
      }
    }, 500);
  } */

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
    const { // header
      t, passphrase, prevStep, message,
    } = this.props;

    return (
      <section className={`${styles.safekeeping} ${styles[this.state.step]}`}>
        <section className={`${styles.introduction} ${styles.table}`}>
          <div className={styles.tableCell}>
            <div current={this.state.step} step='introduction-step'>
              <h5>{ message || ''}</h5>
            </div>
          </div>
        </section>
        <section className={`${styles.revealing} ${styles.table}`}>
          <div className={styles.tableCell}>
            <p className={`${styles.input} ${styles.textarea} passphrase-wrapper`}>
              <textarea type='text' autoFocus={true} readOnly
                className={`${styles.hiddenInput} passphrase`}
                defaultValue={passphrase}></textarea>
              {
                passphrase.split(' ').map(word => <span className={styles.word} key={`wrapper-${word}`}>{ word } </span>)
              }
            </p>
            <div current={this.state.step} step='revealing-step' animationName='fade'>
              <PrimaryButton
                  label={t('Next')}
                  value={'revealing-step'}
                  onClick={this.nextRevealing.bind(this)}
                  type={'button'} />
            </div>
            <ActionBar
              className={styles.actionBar}
              secondaryButton={{
                label: t('Back'),
                className: `${styles.hidden} back-button`,
                onClick: () => prevStep({ jump: 2 }),
              }}
              primaryButton={{
                disabled: this.state.step === 'done-step',
                label: t('Yes! It\'s safe'),
                className: 'next-button yes-its-safe-button',
                onClick: this.done.bind(this),
              }} />
          </div>
        </section>
      </section>);
  }
}


export default SafeKeeping;
