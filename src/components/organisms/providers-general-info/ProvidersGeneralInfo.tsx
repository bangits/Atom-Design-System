import { Countries, CurrencyGroup, LabelGroup, LicenseGroup } from '@/components';
import { CopyField, TagCountryProps, TagProps, TooltipProps, Typography } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './ProvidersGeneralInfo.module.scss';

export interface ProvidersGeneralInfoProps {
  noDataText?: string;
  totalMarket: {
    title: string;
    total?: string;
    countries: TagCountryProps[];
  };
  certifiedCountries: {
    title: string;
    total?: string;
    countries: TagCountryProps[];
  };
  restrictedtCountries: {
    title: string;
    total?: string;
    countries: TagCountryProps[];
  };
  supportedCurrencies: {
    title: string;
    total?: string;
    currencies: TagProps[];
  };
  licenses: {
    title: string;
    total?: string;
    licenses: TagProps[];
  };
  realURL: {
    title: string;
    URL: string;
    tooltip?: Omit<TooltipProps, 'children'>;
    onClick: () => void;
  };
  demoURL: {
    title: string;
    URL: string;
    tooltip?: Omit<TooltipProps, 'children'>;
    onClick: () => void;
  };
}

const ProvidersGeneralInfo: FC<ProvidersGeneralInfoProps> = ({
  totalMarket,
  certifiedCountries,
  restrictedtCountries,
  supportedCurrencies,
  licenses,
  realURL,
  demoURL,
  noDataText
}) => {
  return (
    <div className={styles['ProviderGeneralInfo--items']}>
      <LabelGroup title={totalMarket.title} totalLabel={totalMarket.countries.length > 0 ? totalMarket.total : ''}>
        {totalMarket.countries.length > 0 ? (
          <Countries tagCountries={totalMarket.countries} />
        ) : (
          <Typography variant='p4' className={styles['ProviderGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>

      <LabelGroup
        title={certifiedCountries.title}
        totalLabel={certifiedCountries.countries.length > 0 ? certifiedCountries.total : ''}>
        {certifiedCountries.countries.length > 0 ? (
          <Countries tagCountries={certifiedCountries.countries} />
        ) : (
          <Typography variant='p4' className={styles['ProviderGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>

      <LabelGroup
        title={restrictedtCountries.title}
        totalLabel={restrictedtCountries.countries.length > 0 ? restrictedtCountries.total : ''}>
        {restrictedtCountries.countries.length > 0 ? (
          <Countries tagCountries={restrictedtCountries.countries} />
        ) : (
          <Typography variant='p4' className={styles['ProviderGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>

      <LabelGroup
        title={supportedCurrencies.title}
        totalLabel={supportedCurrencies.currencies.length > 0 ? supportedCurrencies.total : ''}>
        {supportedCurrencies.currencies.length > 0 ? (
          <CurrencyGroup currencies={supportedCurrencies.currencies} />
        ) : (
          <Typography variant='p4' className={styles['ProviderGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>

      <LabelGroup title={licenses.title} totalLabel={licenses.licenses.length > 0 ? licenses.total : ''}>
        {licenses.licenses.length > 0 ? (
          <LicenseGroup tags={licenses.licenses} />
        ) : (
          <Typography variant='p4' className={styles['ProviderGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>

      <LabelGroup title={realURL.title}>
        {realURL.URL ? (
          <CopyField label={realURL.URL} tooltip={realURL.tooltip} onClick={realURL.onClick} />
        ) : (
          <Typography variant='p4' className={styles['ProviderGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>

      <LabelGroup title={demoURL.title}>
        {demoURL.URL ? (
          <CopyField label={demoURL.URL} tooltip={demoURL.tooltip} onClick={demoURL.onClick} />
        ) : (
          <Typography variant='p4' className={styles['ProviderGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>
    </div>
  );
};

export default ProvidersGeneralInfo;
