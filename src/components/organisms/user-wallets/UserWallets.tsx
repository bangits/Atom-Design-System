import { Icons } from '@/atom-design-system';
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
  tableLoadingRowIds: (number | string)[];
  renderCurrenciesSelect: (changeOpenedCurrenciesSelect: (isOpened: boolean) => void) => ReactNode;
  translations: {
    id: string;
    other: string;
    default: string;
    add: string;
    makeDefault: string;
  };
}

const UserWallets = ({
  wallets,
  translations,
  tableLoadingRowIds,
  renderCurrenciesSelect,
  onDefaultWalletChange
}: UserWalletsProps) => {
  const [isOpenedCurrenciesSelect, setOpenedCurrenciesSelect] = useState(false);

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
              renderColumn: (_, value) => value.toString()
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
        />
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
      </div>
    </>
  );
};

export default UserWallets;
