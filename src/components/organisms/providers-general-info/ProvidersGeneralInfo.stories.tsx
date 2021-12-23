import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProvidersGeneralInfo from './ProvidersGeneralInfo';

export default {
  title: 'components/organisms/Providers General Information',
  component: ProvidersGeneralInfo,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ProvidersGeneralInfo
      noDataText='Not Completed'
      totalMarket={{
        title: 'Total Market',
        total: '1 Country',
        countries: [
          {
            tagName: 'Armenia',
            imgSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
          }
        ]
      }}
      certifiedCountries={{
        title: 'Total Market',
        total: '1 Country',
        countries: [
          {
            tagName: 'Armenia',
            imgSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
          }
        ]
      }}
      restrictedtCountries={{
        title: 'Total Market',
        total: '1 Country',
        countries: [
          {
            tagName: 'Armenia',
            imgSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
          }
        ]
      }}
      supportedCurrencies={{
        title: 'Supported Currencies',
        total: '2 Currency',
        currencies: [
          {
            title: 'Yen'
          }
        ]
      }}
      licenses={{
        title: 'Licenses',
        licenses: [
          {
            title: 'Malta License'
          }
        ]
      }}
      realURL={{
        title: 'Absolute Real URL',
        URL: '',
        tooltip: {
          showEvent: 'click',
          text: 'Copied!',
          placement: 'top'
        },
        onClick: () => {
          console.log('');
        }
      }}
      demoURL={{
        title: 'Absolute Demo URL',
        URL: 'www.google.com',
        tooltip: {
          showEvent: 'click',
          text: 'Copied!',
          placement: 'top'
        },
        onClick: () => {
          console.log('');
        }
      }}
    />
  );
};
