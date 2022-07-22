import { Icons } from '@/atom-design-system';
import { Tag, TagProps, Tooltip } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './Currency.module.scss';

export interface CurrencyGroupProps {
  currencies: TagProps[];
}

const CurrencyGroup: FC<CurrencyGroupProps> = ({ currencies }) => {
  return (
    <div className={styles.CurrencyGroupWrapper}>
      {currencies &&
        currencies.map((currency, idx) => (
          <div style={{ display: 'flex' }}>
            <Tag {...currency} endIcon={currency.endIcon} inactive key={idx} className={styles.Currency} />
          </div>
        ))}
    </div>
  );
};

export default CurrencyGroup;
