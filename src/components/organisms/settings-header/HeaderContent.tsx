import { Countries, CurrencyGroup, LabelGroup, LicenseGroup } from '@/components';
import { CopyField, TagCountryProps, TagProps, TooltipProps, Typography } from '@my-ui/core';
import React, { FC, ReactNode } from 'react';
import styles from './HeaderContent.module.scss';

export interface SettingsProps {
  navBarProps: {
    title: string;
    total?: string;
    currencies: SettingsProps['navBarProps'][];
  };
}

export interface HeaderContentProps {
  noDataText?: string;
  isCmsUser?: boolean;

  navBarProps: {
    title: string;
    total?: string;
    currencies: {
      title: string;
      id: string | number;
      closeIcon?: boolean;
      endIcon?: ReactNode;
      value?: number | string;
      tooltipText?: string;
    }[];
  };
}

const HeaderContent: FC<HeaderContentProps> = ({ navBarProps, noDataText }) => {
  return (
    <div className={styles['HeaderContent--items']}>
      <LabelGroup title={navBarProps?.title} totalLabel={navBarProps?.currencies?.length > 0 ? navBarProps?.total : ''}>
        {navBarProps?.currencies?.length > 0 ? (
          <CurrencyGroup currencies={navBarProps?.currencies} />
        ) : (
          <Typography variant='p4' className={styles['HeaderContent--notCompleted']}>
            {noDataText}
          </Typography>
        )}
      </LabelGroup>
    </div>
  );
};

export default HeaderContent;
