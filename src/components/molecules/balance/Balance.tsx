import { typedMemo } from '@/helpers';
import { BalanceIcon } from '@/icons';
import { Typography } from '@my-ui/core';
import React, { FC, useMemo } from 'react';
import styles from './Balance.module.scss';

export interface BalanceProps {
  money?: number;
  currency?: string;
  locale?: string;
  dotsValue?: string;
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
}

const Balance: FC<BalanceProps> = ({
  money,
  currency,
  maximumFractionDigits = 2,
  minimumFractionDigits = 0,
  dotsValue = '.',
  locale = 'fr-FR'
}) => {
  const currencyOptions = useMemo<Intl.NumberFormatOptions>(
    () => ({
      minimumFractionDigits,
      maximumFractionDigits
    }),
    [maximumFractionDigits, minimumFractionDigits]
  );

  const transformedMoney = useMemo(
    () => money?.toLocaleString(locale, currencyOptions)?.replaceAll(',', dotsValue),
    [money, dotsValue, currencyOptions]
  );

  return (
    <div className={styles.BalanceContainer}>
      <BalanceIcon />
      <Typography variant='p4' component='span' className={styles.BalanceQuantity}>
        {transformedMoney || 0} {currency}
      </Typography>
    </div>
  );
};

export default typedMemo(Balance);
