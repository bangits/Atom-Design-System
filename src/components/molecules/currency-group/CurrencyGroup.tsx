import React from 'react';
import styles from './Currency.module.scss';
import { Typography, Tag } from '@my-ui/core';

const Currency = () => {
  return (
    <div className={styles.CurrencyGroupWrapper}>
      <Tag title='YEN' inactive className={styles.Currency} />
      <Tag title='YEN' inactive className={styles.Currency} />
      <Tag title='YEN' inactive className={styles.Currency} />
      <Tag title='YEN' inactive className={styles.Currency} />
      <Tag title='YEN' inactive className={styles.Currency} />
      <Tag title='YEN' inactive className={styles.Currency} />
      <Tag title='YEN' inactive className={styles.Currency} />
    </div>
  );
};

export default Currency;
