import { Balance, BalanceProps } from '@/components';
import { Header as MyUIHeader, HeaderProps as MyUIHeaderProps } from '@my-ui/core';
import { useMemo } from 'react';

export interface HeaderProps extends MyUIHeaderProps, BalanceProps {}

export const Header = ({ money, currency, minimumFractionDigits, ...props }: HeaderProps) => {
  const headerContent = useMemo(
    () => <Balance minimumFractionDigits={minimumFractionDigits} money={money} currency={currency} />,
    [money, currency, minimumFractionDigits]
  );

  return (
    <>
      <MyUIHeader {...props} headerContent={headerContent} />
    </>
  );
};
