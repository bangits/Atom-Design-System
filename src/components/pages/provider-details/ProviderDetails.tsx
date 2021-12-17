import { DetailsMainInfoProps, ItemDetails, NameDescription, StatusView, StatusViewProps } from '@/components';
import CountView from '@/components/organisms/count-view/CountView';
import DetailsMainInfo from '@/components/organisms/details-main-info/DetailsMainInfo';
import { Breadcrumb } from '@my-ui/core';
import { BreadcrumbProps } from '@my-ui/core/dist/components/navigation/breadcrumb/Breadcrumb';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './ProviderDetails.module.scss';

export interface ProviderDetailsProps {
  noDataText?: string;
  breadCrumb?: BreadcrumbProps['links'];

  mainDetailsInfo?: DetailsMainInfoProps;
  statusInfo: StatusViewProps;

  translations: {
    totalGameCount: string;
    status: string;
    creationDate: string;
    createdBy: string;
    generalInformation: string;
    games: string;
    editButton: string;
  };

  totalGameCount: string;
  creationDate: string;
  createdBy: string;
  generalInformationContext: ReactNode;
  gamesTabContent: ReactNode;
}

const ProviderDetails: FC<ProviderDetailsProps> = ({
  statusInfo,
  mainDetailsInfo,
  totalGameCount,
  breadCrumb,
  noDataText = 'N/A',
  translations,
  creationDate,
  createdBy,
  generalInformationContext,
  gamesTabContent
}) => {
  return (
    <div className={styles.ProviderDetailsBase}>
      <Breadcrumb links={breadCrumb} />
      <div className={styles['ProviderDetailsBase--container']}>
        <div className={styles['ProviderDetailsBase--leftBlock']}>
          <DetailsMainInfo {...mainDetailsInfo} noDataText={noDataText} />

          <CountView noDataText={noDataText} title={translations.totalGameCount} count={totalGameCount} />

          <div className={styles.StatusContent}>
            <StatusView {...statusInfo} label={translations.status} noDataText={noDataText} />
          </div>
          <NameDescription
            noDataText={noDataText}
            data={[
              {
                name: translations.creationDate,
                description: creationDate
              },
              {
                name: translations.createdBy,
                description: createdBy
              }
            ]}
          />
        </div>
        <div
          className={classNames(styles['ProviderDetails__Bottom-Fading-Cell'], 'ProviderDetails__Bottom-Fading-Cell')}>
          <ItemDetails
            tabs={[
              {
                title: translations.generalInformation,
                value: 1,
                content: <>{generalInformationContext}</>,
                disableScroll: true
              },
              {
                title: translations.games,
                value: 2,
                content: gamesTabContent,
                disableScroll: true
              }
            ]}
            defaultTabValue={1}
          />
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
