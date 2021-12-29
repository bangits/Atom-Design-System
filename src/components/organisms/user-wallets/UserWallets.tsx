import { Icons } from '@/atom-design-system';
import { TextInput } from '@/components';
import { Divider } from '@/components/atoms';
import { Button, IconButton, Tooltip } from '@my-ui/core';
import React, { ReactNode, useState } from 'react';
import { Table } from '..';
import styles from './UserWallets.module.scss';

export interface UserWallet {
  id: number | string;
  currencyId: number | string;
  currency: string;
  balance: string | number;
  isDefault: boolean;
}

export interface UserWalletsProps {
  wallets: UserWallet[];
  onDefaultWalletChange: (currencyId: number | string) => void;
  onDefaultBallanceChange: (balance: number) => void;
  tableLoadingRowIds: (number | string)[];
  balanceMaxLength?: number;
  shouldShowAddWalletButton?: boolean;
  renderCurrenciesSelect: (changeOpenedCurrenciesSelect: (isOpened: boolean) => void) => ReactNode;
  translations: {
    id: string;
    other: string;
    default: string;
    add: string;
    makeDefault: string;
    balance: string;
    correctDefaultBalance: string;
  };
}

const UserWallets = ({
  wallets,
  translations,
  tableLoadingRowIds,
  renderCurrenciesSelect,
  onDefaultWalletChange,
  onDefaultBallanceChange,
  balanceMaxLength = 10,
  shouldShowAddWalletButton = true
}: UserWalletsProps) => {
  const [isOpenedCurrenciesSelect, setOpenedCurrenciesSelect] = useState(false);
  const [isOpenedDefaultBalanceChangeSelect, setOpenedDefaultBalanceChangeSelect] = useState(false);
  const [balance, setBalance] = useState(null);

  return (
    <>
      <div className={styles.UserDetailsTableContent}>
        <Table
          isWithSelection={false}
          actions={[
            {
              component: (props) => (
                <Tooltip showEvent='hover' text={translations.makeDefault}>
                  <IconButton icon={<Icons.CheckButtonIcon />} {...props} />
                </Tooltip>
              ),
              onClick: (column) => onDefaultWalletChange(column.currencyId),
              shouldShow: (column) => !column.isDefault,
              props: {}
            }
          ]}
          checkIsRowActive={(row) => row.isDefault}
          columns={[
            {
              Header: 'currency',
              accessor: 'currency' as keyof UserWallet,
              disableSortBy: true
            },
            {
              Header: 'balance',
              accessor: 'balance' as keyof UserWallet,
              disableSortBy: true,
              renderColumn: (_, value) => value.toString(),
              maxWidth: '20rem'
            },
            {
              Header: 'account Id',
              accessor: 'id' as keyof UserWallet,
              disableSortBy: true,
              renderColumn: (_, value) =>
                value ? (
                  <>
                    {translations.id} {value}
                  </>
                ) : (
                  '---'
                )
            },
            {
              Header: 'type',
              accessor: 'isDefault' as keyof UserWallet,
              disableSortBy: true,
              renderColumn: (_, isDefault) => (isDefault ? translations.default : translations.other)
            }
          ]}
          data={wallets}
          className={styles.UserDetailsTable}
          loadingRowsIds={tableLoadingRowIds}
          loadingRowColumnProperty='currencyId'
          rowUniqueKey='currencyId'
        />
        <div className={styles.WalletActionsContainer}>
          {shouldShowAddWalletButton && (
            <>
              {isOpenedCurrenciesSelect ? (
                <div className={styles.SelectContent}>
                  {renderCurrenciesSelect(setOpenedCurrenciesSelect)}
                  <IconButton
                    onClick={() => setOpenedCurrenciesSelect(false)}
                    icon={
                      <span className={styles.CloseIcon}>
                        <Icons.CloseIcon />
                      </span>
                    }
                  />
                </div>
              ) : (
                <Button
                  onClick={() => setOpenedCurrenciesSelect(true)}
                  variant='link'
                  startIcon={<Icons.PlusCircleLarge />}
                  className={styles.AddButton}>
                  {translations.add}
                </Button>
              )}
            </>
          )}
          <Divider showDivider={shouldShowAddWalletButton}>
            {isOpenedDefaultBalanceChangeSelect ? (
              <div className={styles.SelectContent}>
                <TextInput
                  type='number'
                  label={translations.balance}
                  value={balance?.toString()}
                  onChange={(e) => setBalance(e.target.value && +e.target.value)}
                  isDecimal
                  maxLength={balanceMaxLength}
                  fullWidth
                  containerClassName={styles.BalanceInput}
                />
                <IconButton
                  onClick={() => setOpenedDefaultBalanceChangeSelect(false)}
                  icon={
                    <span className={styles.CloseIcon}>
                      <Icons.CloseIcon />
                    </span>
                  }
                />
                {balance ? (
                  <IconButton
                    onClick={() => {
                      setOpenedDefaultBalanceChangeSelect(false);

                      onDefaultBallanceChange(balance);

                      setBalance(null);
                    }}
                    icon={
                      <span className={styles.SaveIcon}>
                        <Icons.CheckIcon />
                      </span>
                    }
                  />
                ) : null}
              </div>
            ) : (
              <Button
                onClick={() => setOpenedDefaultBalanceChangeSelect(true)}
                variant='link'
                startIcon={<Icons.MoneyIcon />}
                className={styles.AddButton}>
                {translations.correctDefaultBalance}
              </Button>
            )}
          </Divider>
        </div>
      </div>
    </>
  );
};

export default UserWallets;
