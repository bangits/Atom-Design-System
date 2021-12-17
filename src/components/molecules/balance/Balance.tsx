import { BalanceIcon } from '@/icons';
import styles from './Balance.module.scss';
import React, { FC, ReactNode } from 'react';

export interface BalanceProps {
  money?: number;
  currency?: string;
  locale?: string;
}

const Balance: FC<BalanceProps> = ({ money, currency, locale = 'en-EN' }) => {
  const a = money?.toLocaleString(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
    style: 'currency',
    currency: currency
  });
  const number = a.replaceAll(',', '.');
  return (
    <div className={styles.balanceContainer}>
      <span className={styles.balanceIcon}>
        <BalanceIcon />
      </span>
      <span className={styles.balanceQuantity}>{number}</span>
    </div>
  );
};
export default Balance;
