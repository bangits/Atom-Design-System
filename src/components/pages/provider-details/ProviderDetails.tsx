import { DetailsMainInfoProps, ItemDetails, NameDescription, StatusView, StatusViewProps } from '@/components';
import CountView from '@/components/organisms/count-view/CountView';
import DetailsMainInfo from '@/components/organisms/details-main-info/DetailsMainInfo';
import { Breadcrumb, Button } from '@my-ui/core';
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
                content: (
                  <div>
                    {generalInformationContext}
                    {/*   <LabelGroup>
                      <Countries />
                    </LabelGroup>

                    <LabelGroup>
                      <Countries />
                    </LabelGroup>

                    <LabelGroup>
                      <Countries />
                    </LabelGroup>

                    <LabelGroup>
                      <CurrencyGroup />
                    </LabelGroup>

                    <LabelGroup>
                      <LicenseGroup />
                      <Tag title='Malta License' className={styles.License} inactive />
                    </LabelGroup>

                    <LabelGroup>
                      <CopyField />
                    </LabelGroup>

                    <LabelGroup>
                      <CopyField />
                    </LabelGroup> */}

                    <div className={styles.ButtonContent}>
                      <Button
                        variant='ghost'
                        startIcon={
                          <svg data-name='Component 61 – 1' xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                            <path data-name='Rectangle 919' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
                            <g transform='translate(6.001 5.754)'>
                              <path
                                data-name='Path 1944'
                                style={{
                                  fill: 'none',
                                  stroke: 'currentColor',
                                  strokeLinecap: 'round',
                                  strokeLinejoin: 'round'
                                }}
                                d='m7.41 82.473-6.6 6.6a.263.263 0 0 0-.069.121l-.734 2.94a.26.26 0 0 0 .252.323.258.258 0 0 0 .063-.008l2.937-.732a.26.26 0 0 0 .121-.069l6.6-6.6zm0 0'
                                transform='translate(0 -80.223)'
                              />
                              <path
                                data-name='Path 1945'
                                style={{
                                  fill: 'none',
                                  stroke: 'currentColor',
                                  strokeLinecap: 'round',
                                  strokeLinejoin: 'round'
                                }}
                                d='m337.8 1.35-.735-.735a1.331 1.331 0 0 0-1.838 0l-.9.9 2.573 2.573.9-.9a1.3 1.3 0 0 0 0-1.838zm0 0'
                                transform='translate(-326.182)'
                              />
                            </g>
                          </svg>
                        }>
                        {translations.editButton}
                      </Button>
                    </div>
                  </div>
                )
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
