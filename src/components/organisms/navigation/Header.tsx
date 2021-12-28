import { Balance, BalanceProps, LabelEndMark, LabelEndMarkProps } from '@/components';
import { Header as MyUIHeader, HeaderProps as MyUIHeaderProps } from '@my-ui/core';
import { useMemo } from 'react';

export interface HeaderProps extends MyUIHeaderProps, BalanceProps {
  localTime: LabelEndMarkProps;
}

export const Header = ({ money, currency, minimumFractionDigits, localTime, ...props }: HeaderProps) => {
  const headerContent = useMemo(
    () => (
      <>
        <LabelEndMark {...localTime} />
        <Balance minimumFractionDigits={minimumFractionDigits} money={money} currency={currency} />
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
