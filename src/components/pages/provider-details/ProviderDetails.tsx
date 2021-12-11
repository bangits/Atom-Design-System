import {
  ItemDetails,
  NameDescription,
  NameDescriptionProps,
  StatusView,
  StatusViewProps,
  LicenseGroup,
  ItemDetailsProps
} from '@/components';
import Countries from '@/components/molecules/countries-group/Countries';
import CurrencyGroup from '@/components/molecules/currency-group/CurrencyGroup';
import LabelGroup from '@/components/molecules/label-group/LabelGroup';
import CountView from '@/components/organisms/count-view/CountView';
import DetailsMainInfo from '@/components/organisms/details-main-info/DetailsMainInfo';
import { Breadcrumb, Button, CopyField, Tag } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './ProviderDetails.module.scss';
import { DetailsMainInfoProps, CountViewProps } from '@/components';
import { BreadcrumbProps } from '@my-ui/core/dist/components/navigation/breadcrumb/Breadcrumb';

export interface ProviderDetailsProps extends StatusViewProps {
  mainDetailsInfo?: DetailsMainInfoProps;
  countViewInfo?: CountViewProps;
  creationInfo?: NameDescriptionProps;
  breadCrumb?: BreadcrumbProps;
  details?: ItemDetailsProps;
}

const ProviderDetails: FC<ProviderDetailsProps> = ({
  statusInfo,
  mainDetailsInfo,
  countViewInfo,
  creationInfo,
  breadCrumb,
  details
}) => {
  return (
    <div className={styles.ProviderDetailsBase}>
      <Breadcrumb {...breadCrumb} />
      <div className={styles['ProviderDetailsBase--container']}>
        <div className={styles['ProviderDetailsBase--leftBlock']}>
          <DetailsMainInfo {...mainDetailsInfo} />

          <CountView {...countViewInfo} />

          <div className={styles.StatusContent}>
            <StatusView statusInfo={statusInfo} />
          </div>
          <NameDescription {...creationInfo} />
        </div>

        <ItemDetails {...details} />
      </div>
    </div>
  );
};

export default ProviderDetails;
