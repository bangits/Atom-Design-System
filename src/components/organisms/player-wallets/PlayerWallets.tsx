import { Icons } from '@/atom-design-system';
import { TextInput } from '@/components';
import { Button, IconButton, Pagination, PaginationProps, Tooltip } from '@my-ui/core';
import React, { ReactNode, useState } from 'react';
import { Table } from '..';
import { WalletCard } from '../wallet-card';
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
  };
  cardProps: {
    col: number;
    noDataText: string;
    walletType: string;
    balance: {
      label: string;
      value: string;
    };
    account: {
      label: string;
      id: string;
    };
  };
  title: string;
  onPaginationChange: () => void;
  page: number;
  paginationProps: {
    pageSizeSelect: Omit<PaginationProps['pageSizeSelect'], 'onChange'>;
    getTotalCountInfo(pagination: typeof Pagination): string;
  } & Pick<PaginationProps, 'jumpToPage'>;
  totalPagesCount: number;
  totalCountInfo: string;
  onPaginationSizeChange: () => void;
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

  // const onPaginationSizeChange = useCallback((value: number) => {
  //   if (!value) return;

  //   setPagination({
  //     page: 1,
  //     pageSize: value
  //   });
  // }, []);

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
          <WalletCard {...cardProps} />
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
              onClick: () => {},
              shouldShow: () => null,
              props: {}
            }
          ]}
          // checkIsRowActive={(row) => row.isDefault}
          columns={[
            {
              Header: 'account',
              accessor: 'account' as keyof PlayerWallet,
              disableSortBy: true
            },

            {
              Header: 'correctedBy',
              accessor: 'correctedBy' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: 'type',
              accessor: 'type' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: 'date',
              accessor: 'date' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: 'balanceBefore',
              accessor: 'balanceBefore' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: 'amount',
              accessor: 'amount' as keyof PlayerWallet,
              disableSortBy: true
            },
            {
              Header: 'balanceAfter',
              accessor: 'balanceAfter' as keyof PlayerWallet,
              disableSortBy: true
            }
          ]}
          data={wallets}
          className={styles.UserDetailsTable}
          loadingRowsIds={tableLoadingRowIds}
          // loadingRowColumnProperty='currencyId'
          rowUniqueKey='currencyId'
        />
      </div>
    </>
  );
};

export default PlayerWallets;
