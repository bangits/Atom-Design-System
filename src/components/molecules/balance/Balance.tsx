import { BalanceIcon } from '@/icons';
import styles from './Balance.module.scss';
import React, { FC, ReactNode } from 'react';
import { Typography } from '@my-ui/core';

export interface BalanceProps {
  money?: number;
  currency?: string;
  locale?: string;
}

const Balance: FC<BalanceProps> = ({ money, currency, locale = 'fr-FR' }) => {
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
    style: 'currency',
    currency: currency,
    currencyDisplay: 'code'
  };

  const a = money?.toLocaleString(locale, options);
  const c = a.replaceAll(',', '.');

  const number = c;
  return (
    <div className={styles.BalanceContainer}>
      <BalanceIcon />
      <Typography variant='p4' component='span' className={styles.BalanceQuantity}>{number}</Typography>
    </div>
  );
};
export default Balance;
