import {
  DetailsMainInfoProps,
  ItemDetails,
  NameDescription,
  ProfileBlock,
  StatusView,
  StatusViewProps
} from '@/components';
import CountView from '@/components/organisms/count-view/CountView';
import { Breadcrumb, BreadcrumbProps } from '@my-ui/core';
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
    partnerName: string;
    integrationType: string;
  };

  totalGameCount: string;
  creationDate: string;
  createdBy: string;
  providerName: string;
  partnerName: string;
  integrationType: string;
  backgroundImgUrl: string;
  providerId: number | string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
  generalInformationContext: ReactNode;
  gamesTabContent: ReactNode;
  isCmsUser: boolean;

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
  partnerName,
  integrationType,
  providerId,
  backgroundImgUrl,
  lastUpdatedBy,
  lastUpdatedDate,
  isCmsUser = false
}) => {
  return (
    <div className={styles.ProviderDetailsBase}>
      <Breadcrumb links={breadCrumb} />
      <div className={styles['ProviderDetailsBase--container']}>
        <div className={styles['ProviderDetailsBase--leftBlock']}>
          <ProfileBlock
            isShowEditIcons={!isCmsUser}
            backgroundImgUrl={backgroundImgUrl}
            itemId={providerId}
            itemName={providerName}
            onBackgroundImgClick={onBackgroundImgClick}
          />
          {!isCmsUser && (
            <>
              {partnerName ? (
                <div className={styles['ProviderDetailsBase--doubleBlock']}>
                  <NameDescription
                    noDataText={noDataText}
                    data={[
                      {
                        name: translations.integrationType,
                        description: integrationType
                      },
                      {
                        name: translations.partnerName,
                        description: partnerName
                      }
                    ]}
                  />
                </div>
              ) : (
                <div className={styles['ProviderDetailsBase--doubleBlock']}>
                  <NameDescription
                    noDataText={noDataText}
                    data={[
                      {
                        name: translations.integrationType,
                        description: integrationType
                      }
                    ]}
                  />
                </div>
              )}
            </>
          )}

          {/* <div className={styles.StatusContent}>
            <NameDescription
              noDataText={noDataText}
              data={[
                {
                  name: translations.integrationType,
                  description: integrationType
                }
              ]}
            />
          </div> */}
          {!isCmsUser && (
            <>
              {' '}
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
            </>
          )}
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
