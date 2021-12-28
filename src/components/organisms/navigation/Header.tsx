import {
  Balance,
  BalanceProps,
  LabelEndMark,
  LabelEndMarkProps,
  SpeedIndicator,
  SpeedIndicatorProps
} from '@/components';
import { Header as MyUIHeader, HeaderProps as MyUIHeaderProps } from '@my-ui/core';
import { useMemo } from 'react';
import styles from './Header.module.scss';

export interface HeaderProps extends MyUIHeaderProps, BalanceProps, SpeedIndicatorProps {
  localTime: LabelEndMarkProps;
}

export const Header = ({ money, currency, minimumFractionDigits, localTime, speed, ...props }: HeaderProps) => {
  const headerContent = useMemo(
    () => (
      <>
        <div className={styles.LocalTime}>
          <LabelEndMark {...localTime} />
        </div>
        <div className={styles.Balance}>
          <Balance minimumFractionDigits={minimumFractionDigits} money={money} currency={currency} />
        </div>
        <div className={styles.InternetSpeed}>
          <SpeedIndicator speed={speed} />
        </div>
      </>
    ),
    [money, currency, minimumFractionDigits]
  );

  return (
    <>
      <MyUIHeader {...props} headerContent={headerContent} />
    </>
  );
};
