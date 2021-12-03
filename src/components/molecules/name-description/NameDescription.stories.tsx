import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import NameDescription from './NameDescription';

export default {
  title: 'components/molecules/Name And Description',
  component: NameDescription,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <NameDescription
      title='Wallet'
      data={[
        {
          name: 'Lorem',
          description: '1000',
          subNameDescription: [
            {
              name: 'Casino',
              description: '10 300'
            },
            {
              name: 'Sport',
              description: '10 300'
            }
          ]
        },
        {
          name: 'Lorem',
          description: '2000'
        },
        {
          name: 'Lorem',
          description: '3000'
        },
        {
          name: 'Lorem',
          description: '4000',
          subNameDescription: [
            {
              name: 'Casino',
              description: '8000'
            }
          ]
        }
      ]}
    />
  );
};
