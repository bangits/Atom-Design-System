import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import WebSiteGeneralInfo from './WebSiteGeneralInfo';

export default {
  title: 'components/organisms/WebSiteSettings General Information',
  component: WebSiteGeneralInfo,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <WebSiteGeneralInfo
      noDataText='Not Completed'
      supportedCurrencies={{
        title: '',
        total: '',
        currencies: []
      }}
      supportedCountries={{
        title: '',
        total: '',
        countries: []
      }}
      supportedLanguages={{
        title: '',
        total: '',
        languages: []
      }}
      restrictedCountries={{
        title: '',
        total: '',
        countries: []
      }}
    />
  );
};
