import {
  DetailsMainInfoProps,
  ItemDetails,
  NameDescription,
  ProfileBlock,
  StatusView,
  StatusViewProps
} from '@/components';
import CountView from '@/components/organisms/count-view/CountView';
import { Breadcrumb } from '@my-ui/core';
import { BreadcrumbProps } from '@my-ui/core/dist/components/navigation/breadcrumb/Breadcrumb';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './ProviderDetails.module.scss';

export interface ProviderDetailsProps {
  noDataText?: string;
  breadCrumb: BreadcrumbProps['links'];

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
    lastUpdatedDate: string;
    lastUpdatedBy: string;
  };

  totalGameCount: string;
  creationDate: string;
  createdBy: string;
  providerName: string;
  backgroundImgUrl: string;
  providerId: number | string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
  generalInformationContext: ReactNode;
  gamesTabContent: ReactNode;

  onBackgroundImgClick: () => void;
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
  gamesTabContent,
  onBackgroundImgClick,
  providerName,
  providerId,
  backgroundImgUrl,
  lastUpdatedBy,
  lastUpdatedDate
}) => {
  return (
    <div className={styles.ProviderDetailsBase}>
      <Breadcrumb links={breadCrumb} />
      <div className={styles['ProviderDetailsBase--container']}>
        <div className={styles['ProviderDetailsBase--leftBlock']}>
          <ProfileBlock
            backgroundImgUrl={backgroundImgUrl}
            itemId={providerId}
            itemName={providerName}
            onBackgroundImgClick={onBackgroundImgClick}
          />

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
              },
              {
                name: translations.lastUpdatedDate,
                description: lastUpdatedDate
              },
              {
                name: translations.lastUpdatedBy,
                description: lastUpdatedBy
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
                content: <>{generalInformationContext}</>
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
