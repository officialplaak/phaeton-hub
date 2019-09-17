import React from 'react';
import ActionBar from '../../actionBar';
import styles from './safekeeping.css';
// eslint-disable-next-line import/no-named-as-default
// import SliderCheckbox from '../../toolbox/sliderCheckbox';
import TransitionWrapper from '../../toolbox/transitionWrapper';
import { PrimaryButton } from '../../toolbox/buttons/button';

class SafeKeeping extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 'revealed-step',
    };
  }

  componentDidMount() {
    this.setState({
      step: this.props.step || 'revealed-step',
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
    const {
      t, passphrase, prevStep, header, message,
    } = this.props;

    return (
      <section className={`${styles.safekeeping} ${styles[this.state.step]}`}>
        <header className={styles.table}>
          <div className={styles.tableCell}>
            <TransitionWrapper current={this.state.step} step='introduction-step'>
              <h3 className={styles.introduction}>
                { header || t('You are responsible for') }
              </h3>
            </TransitionWrapper>
            <TransitionWrapper current={this.state.step} step='revealing-step,revealed-step'>
              <h3 className={styles.revealing}>Please take a note of your passphrase carefully.</h3>
            </TransitionWrapper>
            <TransitionWrapper current={this.state.step} step='revealing-step,revealed-step'>
              <h5 className={styles.revealing}>Make sure to keep it safe.</h5>
            </TransitionWrapper>
          </div>
        </header>
        <section className={`${styles.introduction} ${styles.table}`}>
          <div className={styles.tableCell}>
            <TransitionWrapper current={this.state.step} step='introduction-step'>
              <h5>{ message || ''}</h5>
            </TransitionWrapper>
            <TransitionWrapper current={this.state.step} step='introduction-step' animationName='fade'>
              <PrimaryButton
                  label={t('Next')}
                  value={'introduction-step'}
                  onClick={this.nextIntroduction.bind(this)}
                  type={'button'} />
            </TransitionWrapper>
          </div>
        </section>
        <header className={styles.table}>
          <div className={styles.tableCell}>
            <h3 className={styles.introduction}>
              {t('You are responsible for')}
            </h3>
          </div>
        </header>
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
            <TransitionWrapper current={this.state.step} step='revealing-step' animationName='fade'>
              <PrimaryButton
                  label={t('Next')}
                  value={'revealing-step'}
                  onClick={this.nextRevealing.bind(this)}
                  type={'button'} />
            </TransitionWrapper>
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
