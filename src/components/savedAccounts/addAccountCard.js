import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import LogoDarkBox from '../../assets/images/phaeton_box_img_red_dark.png';
import styles from './card.css';

const AddAccountCard = ({ t }) =>
  (<li>
    <Link to={`${routes.addAccount.path}?referrer=${routes.dashboard.path}/`} >
      <div className={`add-phaeton-id-card ${styles.card} ${styles.addNew}`} >
        <img src={LogoDarkBox} className={styles.logoPlaakDark} />
        <h2 className={styles.addTittle} >{t('Add a Phaeton ID')}</h2>
      </div>
    </Link>
  </li>);

export default AddAccountCard;
