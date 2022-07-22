import { CurrencyGroup, LabelGroup } from '@/components';
import { Typography } from '@my-ui/core';
import { FC, ReactNode } from 'react';
import styles from './HeaderContent.module.scss';

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
    <div className={styles.HeaderContent}>
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
