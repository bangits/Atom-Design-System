import React, { FC } from 'react';
import { CopyField, TagCountryProps, TagProps, TooltipProps } from '@my-ui/core';
import { Countries, LabelGroup, CurrencyGroup, LicenseGroup } from '@/components';

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
  };
  demoURL: {
    title: string;
    URL: string;
    tooltip?: Omit<TooltipProps, 'children'>;
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
    <>
      <LabelGroup title={totalMarket.title} totalLabel={totalMarket.total}>
        <Countries tagCountries={totalMarket.countries} />
      </LabelGroup>

      <LabelGroup title={certifiedCountries.title} totalLabel={certifiedCountries.total}>
        <Countries tagCountries={certifiedCountries.countries} />
      </LabelGroup>

      <LabelGroup title={restrictedtCountries.title} totalLabel={restrictedtCountries.total}>
        <Countries tagCountries={restrictedtCountries.countries} />
      </LabelGroup>

      <LabelGroup title={supportedCurrencies.title} totalLabel={supportedCurrencies.total}>
        <CurrencyGroup currencies={supportedCurrencies.currencies} />
      </LabelGroup>

      <LabelGroup title={licenses.title} totalLabel={licenses.total}>
        <LicenseGroup tags={licenses.licenses} />
      </LabelGroup>

      <LabelGroup title={realURL.title}>
        <CopyField label={realURL.URL} tooltip={realURL.tooltip} noDataText={noDataText} />
      </LabelGroup>

      <LabelGroup title={demoURL.title}>
        <CopyField label={demoURL.URL} tooltip={demoURL.tooltip} noDataText={noDataText} />
      </LabelGroup>
    </>
  );
};

export default ProvidersGeneralInfo;
