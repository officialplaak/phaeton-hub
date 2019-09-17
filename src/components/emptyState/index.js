import React from 'react';
import styles from './emptyState.css';
import signBkg from '../../assets/images/plaak/sign-bkg.png';

const EmptyState = ({
  title, message, className, children,
}) => (
  <div className={`${styles.emptyState} ${className}`}>
    <img src={signBkg} />
    <h2 className='empty-message'>{title}</h2>
    <p>{message}</p>
    { children }
  </div>
);

export default EmptyState;
