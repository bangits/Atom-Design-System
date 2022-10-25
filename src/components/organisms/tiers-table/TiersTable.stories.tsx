import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import TiersTable from './TiersTable';

export default {
  title: 'components/organisms/Tiers Table',
  component: TiersTable,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <TiersTable
      translations={{
        amountOrPercentage: 'Amount',
        from: 'From',
        to: 'To',
        buttonName: 'Add Tier'
      }}
      tiers={[
        { from: '1', to: '100', amount: '10', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() },
        { from: '100', to: '100', amount: '200', remove: () => console.log() }
      ]}
    />
  );
};
