import { Icons } from '@/atom-design-system';
import {  TextInput } from '@/components';
import { Button, IconButton, Pagination, PaginationProps, Tooltip } from '@my-ui/core';
import { ReactNode, useState } from 'react';
import { Table } from '..';
import { WalletCard, WalletCardProps } from '../wallet-card';
import styles from './PlayerWallets.module.scss';

export interface PlayerWallet {
  account: number | string;
  correctedBy: number | string;
  type: number | string;
  date: string;
  balanceBefore: number | string;
  amount: number | string;
  balanceAfter: number | string;
}

export interface PlayerWalletsProps {
  wallets: PlayerWallet[];
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
    correctedBy: string;
    account: string;
    type: string;
    date: string;
    balanceBefore: string;
    amount: string;
    balanceAfter: string;
  };
  cardProps: WalletCardProps[];
  title: string;
  onPaginationChange: (updatedPage: number) => void;
  page: number;
  paginationProps: {
    pageSizeSelect: Omit<PaginationProps['pageSizeSelect'], 'onChange'>;
    getTotalCountInfo(pagination: Pagination): string;
  } & Pick<PaginationProps, 'jumpToPage'>;
  totalPagesCount: number;
  totalCountInfo: string;
  onPaginationSizeChange;
}
export interface Pagination {
  page: number;
  pageSize: number;
}

const PlayerWallets = ({
  onPaginationChange,
  paginationProps,
  totalPagesCount,
  totalCountInfo,
  page,
  onPaginationSizeChange,
  wallets,
  translations,
  tableLoadingRowIds,
  renderCurrenciesSelect,
  onDefaultWalletChange,
  onDefaultBallanceChange,
  balanceMaxLength = 10,
  title,
  cardProps
}: PlayerWalletsProps) => {
  const [isOpenedDefaultBalanceChangeSelect, setOpenedDefaultBalanceChangeSelect] = useState(false);
  const [balance, setBalance] = useState(null);

  // const paginationProps = {
  //   pageSizeSelect: {
  //     dropdownLabel: 'Row per page: ',
  //     options: [
  //       {
  //         value: 20,
  //         label: '20'
  //       }
  //     ],
  //     defaultValue: 20
  //   },
  //   jumpToPage: {
  //     inputTitle: 'Jump to page'
  //   },
  //   getTotalCountInfo: () => '1-20 of 365'
  // };
  return (
    <>
      <div className={styles.PlayerDetailsTableContent}>
        <div>
          <WalletCard cards={cardProps} />
        </div>
        <div className={styles.WalletActionsContainer}>
          {/* {shouldShowAddWalletButton && (
            <HidableSelect renderCustomSelect={renderCurrenciesSelect} buttonTitle={translations.add} />
          )} */}
          {/* <Divider showDivider={shouldShowAddWalletButton}> */}
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
          {/* </Divider> */}
        </div>
        <div className={styles['PlayerDetailsTableContent--title']}>{title}</div>
        <Pagination
          style={{ justifyContent: 'end' }}
          onChange={onPaginationChange}
          page={page}
          {...paginationProps}
          totalPagesCount={totalPagesCount}
          pageSizeSelect={{
            ...paginationProps?.pageSizeSelect,
            onChange: onPaginationSizeChange
          }}
          totalCountInfo={totalCountInfo}
        />

        <Table
          isWithSelection={false}
          actions={[
            {
              component: (props) => (
                <Tooltip showEvent='hover' text={translations.makeDefault}>
                  <IconButton icon={<Icons.CheckButtonIcon />} {...props} />
                </Tooltip>
              ),
              onClick: () => { },
              shouldShow: () => null,
              props: {}
            }
          ]}
          columns={[
            {
              Header: translations.account,
              accessor: 'account' as keyof PlayerWallet,
              disableSortBy: true
            },

            {
              Header: translations.correctedBy,
              accessor: 'correctedBy' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: translations.type,
              accessor: 'type' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: translations.date,
              accessor: 'date' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: translations.balanceBefore,
              accessor: 'balanceBefore' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: translations.amount,
              accessor: 'amount' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: translations.balanceAfter,
              accessor: 'balanceAfter' as keyof PlayerWallet,
              disableSortBy: true
            }
          ]}
          data={wallets || []}
          className={styles.UserDetailsTable}
          loadingRowsIds={tableLoadingRowIds}
          rowUniqueKey='currencyId'
        />
      </div>
    </>
  );
};

export default PlayerWallets;
