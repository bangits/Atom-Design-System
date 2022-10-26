import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import CreatableTable from './CreatableTable';

export default {
  title: 'components/organisms/Creatable Table',
  component: CreatableTable,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <CreatableTable
      amountOrPercent={true}
      translations={{
        amount: 'Amount',
        percentage: 'Percentage',
        from: 'From',
        to: 'To',
        buttonName: 'Add Tier'
      }}
      tiers={[
        { from: '1', to: '100', index: 0, amount: '10', remove: () => console.log() },
        { from: '100', to: '100', index: 1, amount: '200', remove: () => console.log() }
      ]}
    />
  );
};
