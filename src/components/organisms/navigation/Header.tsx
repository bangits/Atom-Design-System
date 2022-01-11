import { Balance, BalanceProps, LabelEndMark, SpeedIndicator, SpeedIndicatorProps } from '@/components';
import { Header as MyUIHeader, HeaderProps as MyUIHeaderProps } from '@my-ui/core';
import { useEffect, useMemo, useState } from 'react';
import styles from './Header.module.scss';

export interface HeaderProps extends MyUIHeaderProps, BalanceProps, SpeedIndicatorProps {
  localTime: string;
  dateConverter: (date: Date) => string;
}

export const Header = ({
  money,
  currency,
  minimumFractionDigits,
  speed,
  localTime,
  dateConverter,
  isOffline,
  ...props
}: HeaderProps) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer);
  });

  const headerContent = useMemo(
    () => (
      <>
        <div className={styles.LocalTime}>
          <LabelEndMark label={localTime} text={dateConverter(date)} />
        </div>
        <div className={styles.Balance}>
          <Balance minimumFractionDigits={minimumFractionDigits} money={money} currency={currency} />
        </div>
        <div className={styles.InternetSpeed}>
          <SpeedIndicator speed={speed} isOffline={isOffline} />
        </div>
      </>
    ),
    [money, currency, minimumFractionDigits, speed, localTime, date, dateConverter, isOffline]
  );

  return (
    <>
      <MyUIHeader {...props} headerContent={headerContent} />
    </>
  );
};
