import React, { FC } from 'react';
import { CopyField, TagCountryProps, TagProps, TooltipProps } from '@my-ui/core';
import { Countries, LabelGroup, CurrencyGroup, LicenseGroup, LabelTag } from '@/components';

export interface PartnerProviderInfoProps {
  noDataText?: string;
  totalGameCount: {
    title: string;
    count: string;
  };
  gameTypes: {
    title: string;
    total?: string;
    types: TagProps[];
  };
  currencies: {
    title: string;
    total?: string;
    currencies: TagProps[];
  };
  targetMarkets: {
    title: string;
    total?: string;
    markets: TagCountryProps[];
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
}

const ProvidersGeneralInfo: FC<PartnerProviderInfoProps> = ({
  noDataText,
  totalGameCount,
  gameTypes,
  currencies,
  targetMarkets,
  restrictedtCountries,
  certifiedCountries
}) => {
  return (
    <>
      <LabelTag
        label={totalGameCount.title}
        tag={{
          title: totalGameCount.count || noDataText
        }}
      />
      <LabelGroup title={gameTypes.title} totalLabel={gameTypes.total}>
        <CurrencyGroup currencies={gameTypes.types} />
      </LabelGroup>

      <LabelGroup title={currencies.title} totalLabel={currencies.total}>
        <CurrencyGroup currencies={currencies.currencies} />
      </LabelGroup>

      <LabelGroup title={targetMarkets.title} totalLabel={targetMarkets.total}>
        <Countries tagCountries={targetMarkets.markets} />
      </LabelGroup>

      <LabelGroup title={certifiedCountries.title} totalLabel={certifiedCountries.total}>
        <Countries tagCountries={certifiedCountries.countries} />
      </LabelGroup>

      <LabelGroup title={restrictedtCountries.title} totalLabel={restrictedtCountries.total}>
        <Countries tagCountries={restrictedtCountries.countries} />
      </LabelGroup>
    </>
  );
};

export default ProvidersGeneralInfo;
