import React, { FC } from 'react';
import styles from './Currency.module.scss';
import { Typography, Tag, TagProps } from '@my-ui/core';

export interface CurrencyProps {
  currencies: TagProps[];
}

const CurrencyGroup: FC<CurrencyProps> = ({ currencies }) => {
  return (
    <div className={styles.CurrencyGroupWrapper}>
      {currencies && currencies.map((currency) => <Tag {...currency} className={styles.Currency} />)}
    </div>
  );
};

export default CurrencyGroup;
