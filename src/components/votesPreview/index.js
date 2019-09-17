import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import CircularProgressBar from 'react-circular-progressbar';
import votingConst from '../../constants/voting';
import fees from './../../constants/fees';
import GradientSVG from './gradientSVG';
import { FontIcon } from '../fontIcon';
import { Button } from '../toolbox/buttons/button';
import { getTotalVotesCount, getVoteList, getUnvoteList } from './../../utils/voting';
import styles from './votesPreview.css';

class VotesPreview extends React.Component {
  constructor() {
    super();
    this.state = { surpassMessageDismissed: false };
  }

  componentDidMount() {
    this.props.updateList(false);
    if (typeof this.props.onMount === 'function') {
      this.props.onMount(false, 'VotesPreview');
    }
  }

  dismissSurpassMessage() {
    this.setState({ surpassMessageDismissed: true });
  }

  nextStep() {
    this.props.nextStep({});
    this.props.nextStepGotCalled();
  }

  render() {
    const { votes, t, updateList } = this.props;
    const { maxCountOfVotes, maxCountOfVotesInOneTurn } = votingConst;
    const voteList = getVoteList(votes);
    const unvoteList = getUnvoteList(votes);
    const totalVotesCount = getTotalVotesCount(votes);
    const totalNewVotesCount = voteList.length + unvoteList.length;
    const selectionClass = totalNewVotesCount > maxCountOfVotesInOneTurn ? styles.red : '';
    const totalClass = totalVotesCount > 21 ? styles.red : '';
    const createPercentage = (count, total) => ((count / total) * 100);
    const surpassedVoteLimit = totalNewVotesCount > maxCountOfVotesInOneTurn ||
      totalVotesCount > 21;
    const insufficientFunds = this.props.account.balance - fees.vote < 0;
    const surpassMessage = () => {
      if (insufficientFunds) return t('Insufficient funds');
      return totalVotesCount > 21
        ? t('Maximum of 21 votes in total')
        : t('Maximum of {{maxcount}} votes at a time', { maxcount: maxCountOfVotesInOneTurn });
    };
    const progressBarStyles = { path: { strokeLinecap: 'round' } };

    return (<Fragment>
      <section className={`${styles.wrapper} votes-preview ${surpassedVoteLimit ? styles.surpassed : ''}
        ${totalNewVotesCount > 0 ? styles.hasChanges : ''}`}>
        <header>
          <h2>{t('Votes')}</h2>
        </header>
        <section className={styles.progress}>
          <div className={`${styles.progressWrapper} ${selectionClass} selection-wrapper`}>
            <CircularProgressBar
              styles={progressBarStyles}
              percentage={createPercentage(totalNewVotesCount, maxCountOfVotesInOneTurn)}
              textForPercentage={() => ''}/>
            <article className='selection'>
              <span>{t('Transaction Limit')} </span>
              <h4>{totalNewVotesCount}<span> / {maxCountOfVotesInOneTurn}</span></h4>
              <span>{t('Max Votes Per Transaction')} </span>
            </article>
          </div>
          <div className={`${styles.progressWrapper} ${totalClass} ${styles.totalWrapper} total-wrapper`}>
            <CircularProgressBar
              styles={progressBarStyles}
              percentage={createPercentage(totalVotesCount, maxCountOfVotes)}
              textForPercentage={() => ''}/>
            <article className='total'>
              <span>{t('Account Limit')} </span>
              <h4>{totalVotesCount}<span> / {maxCountOfVotes}</span></h4>
              <span>{t('Max Votes Per Account')} </span>
            </article>
          </div>
        </section>
        <footer className={`${styles.surpassMessage} ${(surpassedVoteLimit || insufficientFunds) && !this.state.surpassMessageDismissed ? styles.visible : ''}`}>
          <span>{surpassMessage()}</span>
          <FontIcon value='close' onClick={this.dismissSurpassMessage.bind(this)} />
        </footer>
        <div className={styles.footerWrapper}>
          <Button
            className={`${styles.button} next`}
            type='button'
            onClick={() => { updateList(true); this.nextStep(); }}
            disabled={totalNewVotesCount === 0 || surpassedVoteLimit || insufficientFunds}>
            <span>{t('Vote')}</span>
            <FontIcon value='arrow-right' className={styles.arrow} />
          </Button>
          <div className={styles.errorMessage}>
            {surpassedVoteLimit || insufficientFunds ? surpassMessage() : null}
          </div>
        </div>
      </section>
      <GradientSVG
        id='grad'
        rotation={0}
        startColor='#BFF9FF'
        endColor='#6693FF' />
      <GradientSVG
        id='danger'
        rotation={0}
        startColor='#FF6236'
        endColor='#C80039' />
    </Fragment>);
  }
}

const mapStateToProps = state => ({
  account: state.account,
});

export default connect(mapStateToProps)(translate()(VotesPreview));
