import { Countries, CurrencyGroup, LabelGroup, LicenseGroup } from '@/components';
import { CopyField, TagCountryProps, TagProps, TooltipProps, Typography } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './WebSiteGeneralInfo.module.scss';

export interface SettingsProps {
  supportedCurrencies: {
    title: string;
    total?: string;
    currencies: SettingsProps['supportedCurrencies'][];
  };
  supportedCountries: {
    title: string;
    total?: string;
    countries: SettingsProps['supportedCountries'][];
  };
  supportedLanguages: {
    title: string;
    total?: string;
    languages: SettingsProps['supportedLanguages'][];
  };
  restrictedCountries: {
    title: string;
    total?: string;
    countries: SettingsProps['restrictedCountries'][];
  };
}

export interface WebSiteGeneralInfoProps {
  noDataText?: string;
  isCmsUser?: boolean;

  supportedCurrencies: {
    title: string;
    total?: string;
    currencies: {
      title: string;
      id: string | number;
    }[];
  };
  supportedCountries: {
    title: string;
    total?: string;
    countries: TagCountryProps[];
  };
  supportedLanguages: {
    title: string;
    total?: string;
    languages: {
      title: string;
      id: string | number;
    }[];
  };
  restrictedCountries: {
    title: string;
    total?: string;
    countries: TagCountryProps[];
  };
}

const WebSiteGeneralInfo: FC<WebSiteGeneralInfoProps> = ({
  supportedLanguages,
  supportedCountries,
  restrictedCountries,
  supportedCurrencies,
  noDataText
}) => {
  return (
    <div className={styles['WebSiteGeneralInfo--items']}>
      <LabelGroup
        title={supportedLanguages.title}
        totalLabel={supportedLanguages.languages?.length > 0 ? supportedLanguages.total : ''}>
        {supportedLanguages.languages?.length > 0 ? (
          <CurrencyGroup currencies={supportedLanguages?.languages} />
        ) : (
          <Typography variant='p4' className={styles['WebSiteGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>
      <LabelGroup
        title={supportedCountries?.title}
        totalLabel={supportedCountries?.countries?.length > 0 ? supportedCountries?.total : ''}>
        {supportedCountries?.countries?.length > 0 ? (
          <Countries tagCountries={supportedCountries?.countries} />
        ) : (
          <Typography variant='p4' className={styles['WebSiteGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>

      <LabelGroup
        title={restrictedCountries.title}
        totalLabel={restrictedCountries?.countries?.length > 0 ? restrictedCountries?.total : ''}>
        {restrictedCountries?.countries?.length > 0 ? (
          <Countries tagCountries={restrictedCountries?.countries} />
        ) : (
          <Typography variant='p4' className={styles['WebSiteGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>

      <LabelGroup
        title={supportedCurrencies?.title}
        totalLabel={supportedCurrencies?.currencies?.length > 0 ? supportedCurrencies?.total : ''}>
        {supportedCurrencies?.currencies?.length > 0 ? (
          <CurrencyGroup currencies={supportedCurrencies?.currencies} />
        ) : (
          <Typography variant='p4' className={styles['WebSiteGeneralInfo--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>
    </div>
  );
};

export default WebSiteGeneralInfo;
