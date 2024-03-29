import { Select } from '@my-ui/core';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import PlayerWallets from './PlayerWallets';

export default {
  title: 'components/organisms/Player Wallets',
  component: PlayerWallets,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <PlayerWallets
      title='Correction History'
      onDefaultWalletChange={action('onDefaultWalletChange')}
      onDefaultBallanceChange={action('onDefaultBallanceChange')}
      tableLoadingRowIds={[2]}
      translations={{
        account: 'Account',
        amount: 'Amount',
        balanceAfter: 'Balance After',
        balanceBefore: 'Balance Before',
        correctedBy: 'Corrected By',
        date: 'Date',
        type: 'Type',
        add: 'Add',
        default: 'Default',
        id: 'ID',
        other: 'Other',
        makeDefault: 'Make default',
        balance: 'Balance',
        correctDefaultBalance: 'Correct Default Balance'
      }}
      wallets={[
        {
          account: '(Casino) ID:3548615646',
          correctedBy: 'r@abelyan@gmail.com',
          type: 'Deposit',
          date: '10/11/2021',
          balanceBefore: '$ 100',
          amount: '$ 10',
          balanceAfter: '$ 50'
        },
        {
          account: '(Casino) ID:3548615646',
          correctedBy: 'r@abelyan@gmail.com',
          type: 'Deposit',
          date: '10/11/2021',
          balanceBefore: '$ 100',
          amount: '$ 10',
          balanceAfter: '$ 50'
        },
        {
          account: '(Casino) ID:3548615646',
          correctedBy: 'r@abelyan@gmail.com',
          type: 'Deposit',
          date: '10/11/2021',
          balanceBefore: '$ 100',
          amount: '$ 10',
          balanceAfter: '$ 50'
        }
      ]}
      renderCurrenciesSelect={(changeOpenedCurrenciesSelect) => (
        <Select
          options={[
            {
              label: 'USD',
              value: 1
            },
            {
              label: 'RUB',
              value: 2
            }
          ]}
          onChange={() => changeOpenedCurrenciesSelect(false)}
        />
      )}
      cardProps={[{
        col: 4,
        noDataText: 'N/A',
        walletType: 'Casino',
        balance: {
          label: 'EUR',
          value: '5600.0'
        },
        account: {
          label: 'Account ID',
          id: '654989985'
        }
      }]}
      onPaginationChange={() => console.log('onPaginationChange')}
      page={0}
      paginationProps={{
        pageSizeSelect: {
          dropdownLabel: 'Row per page: ',
          options: [
            {
              value: 20,
              label: '20'
            }
          ],
          defaultValue: 20
        },
        jumpToPage: {
          inputTitle: 'Jump to page'
        },
        getTotalCountInfo: () => '1-20 of 365'
      }}
      totalPagesCount={5}
      totalCountInfo={'2000'}
      onPaginationSizeChange={() => console.log('onPaginationSizeChange')}
    />
  );
};
