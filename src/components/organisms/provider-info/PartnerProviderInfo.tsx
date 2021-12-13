import { Countries, CurrencyGroup, LabelGroup, LabelTag } from '@/components';
import { TagCountryProps, TagProps, Typography } from '@my-ui/core';
import React, { FC } from 'react';

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
  restrictedCountries: {
    title: string;
    total?: string;
    countries: TagCountryProps[];
  };
}

const ProvidersGeneralInfo: FC<PartnerProviderInfoProps> = ({
  noDataText = 'N/A',
  totalGameCount,
  gameTypes,
  currencies,
  targetMarkets,
  restrictedCountries,
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
        {gameTypes.types.length === 0 ? (
          <Typography variant='p4'>{noDataText}</Typography>
        ) : (
          <CurrencyGroup currencies={gameTypes.types} />
        )}
      </LabelGroup>

      <LabelGroup title={currencies.title} totalLabel={currencies.total}>
        {currencies.currencies.length === 0 ? (
          <Typography variant='p3'>{noDataText}</Typography>
        ) : (
          <CurrencyGroup currencies={currencies.currencies} />
        )}
      </LabelGroup>

      <LabelGroup title={targetMarkets.title} totalLabel={targetMarkets.total}>
        {targetMarkets.markets.length === 0 ? (
          <Typography variant='p3'>{noDataText}</Typography>
        ) : (
          <Countries tagCountries={targetMarkets.markets} />
        )}
      </LabelGroup>

      <LabelGroup title={certifiedCountries.title} totalLabel={certifiedCountries.total}>
        {certifiedCountries.countries.length === 0 ? (
          <Typography variant='p3'>{noDataText}</Typography>
        ) : (
          <Countries tagCountries={certifiedCountries.countries} />
        )}
      </LabelGroup>

      <LabelGroup title={restrictedCountries.title} totalLabel={restrictedCountries.total}>
        {restrictedCountries.countries.length === 0 ? (
          <Typography variant='p3'>{noDataText}</Typography>
        ) : (
          <Countries tagCountries={restrictedCountries.countries} />
        )}
      </LabelGroup>
    </>
  );
};

export default ProvidersGeneralInfo;
