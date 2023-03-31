/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WalletCard from './WalletCard';
import { Icons } from '@my-ui/core';

export default {
  title: 'components/organisms/WalletCard',
  component: WalletCard
} as ComponentMeta<typeof WalletCard>;

const Template: ComponentStory<typeof WalletCard> = (args) => <WalletCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  cards: [
    {
      col: 4,
      noDataText: 'aaa',
      walletType: 'aaaa',
      balance: {
        label: 'aaaa',
        value: 'aaaa'
      },
      account: {
        label: 'aaa',
        id: 'aaa'
      },
      action: {
        icon: Icons.SettingIcon,
        label: 'Correct 2',
        onAction: (card) => {
          console.log(card);
        }
      }
    }
  ]
};
