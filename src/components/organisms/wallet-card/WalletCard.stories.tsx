/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WalletCard from './WalletCard';

export default {
  title: 'components/organisms/WalletCard',
  component: WalletCard
} as ComponentMeta<typeof WalletCard>;

const Template: ComponentStory<typeof WalletCard> = (args) => <WalletCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  noDataText: 'N/A',
  walletType: 'Casino',
  balance: {
    label: 'USD',
    value: '154 560.0'
  },
  account: {
    id: '54561341555',
    label: 'Account ID'
  }
};
