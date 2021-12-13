import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProviderInfo from './PartnerProviderInfo';

export default {
  title: 'components/organisms/Provider Info',
  component: ProviderInfo,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ProviderInfo
      targetMarkets={{
        title: 'Target Markets',
        markets: [
          {
            tagName: 'Armenia',
            imgSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
          }
        ]
      }}
      totalGameCount={{
        count: '1024',
        title: 'Total Game Count'
      }}
      certifiedCountries={{
        title: 'Certified Countries',
        countries: [
          {
            tagName: 'Armenia',
            imgSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
          }
        ]
      }}
      restrictedtCountries={{
        title: 'Restricted Countries',
        countries: [
          {
            tagName: 'Armenia',
            imgSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
          }
        ]
      }}
      currencies={{
        title: 'Currencies',
        currencies: [
          {
            title: 'Yen'
          },
          {
            title: 'RUB'
          }
        ]
      }}
      gameTypes={{
        title: 'Game Types',
        types: [
          {
            title: 'Slot'
          },
          {
            title: 'Casino'
          },
          {
            title: 'Live Games'
          }
        ]
      }}
    />
  );
};
