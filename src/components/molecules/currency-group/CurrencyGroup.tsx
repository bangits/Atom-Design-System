import React, { FC } from 'react';
import styles from './Currency.module.scss';
import { Typography, Tag, TagProps } from '@my-ui/core';

export interface CurrencyGroupProps {
  currencies: TagProps[];
}

const CurrencyGroup: FC<CurrencyGroupProps> = ({ currencies }) => {
  return (
    <div className={styles.CurrencyGroupWrapper}>
      {currencies &&
        currencies.map((currency, idx) => <Tag {...currency} inactive key={idx} className={styles.Currency} />)}
    </div>
  );
};

export default CurrencyGroup;
