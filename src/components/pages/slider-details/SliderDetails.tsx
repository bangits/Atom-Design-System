import { ItemDetails, NameDescription, ProfileBlock, StatusView, StatusViewProps } from '@/components';
import { Breadcrumb, BreadcrumbProps } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './SliderDetails.module.scss';

export interface SliderDetailsProps {
  noDataText?: string;
  breadCrumb: BreadcrumbProps['links'];

  statusInfo: StatusViewProps;

  translations: {
    status: string;
    projectIndustry: string;
    projectType: string;
    createdBy: string;
    creationDate: string;
    lastUpdatedBy: string;
    lastUpdateDate: string;
    generalInformation: string;
    header: string;
    footer: string;
    socialMedia: string;
  };

  sliderName: string;
  backgroundImgUrl: string;
  domain: number | string;

  additionalProps: {
    createdBy: string;
    createdDate: string;
    lastUpdatedBy: string;
    lastUpdateDate: string;
  };

  onBackgroundImgClick: () => void;

  //Contents
  settingsContent: ReactNode;
  headerContent: ReactNode;
  footerContent: ReactNode;
  socialMediaContent: ReactNode;
}

const SliderDetails: FC<SliderDetailsProps> = ({
  noDataText,
  breadCrumb,
  backgroundImgUrl,
  domain,
  sliderName,
  onBackgroundImgClick,
  statusInfo,
  translations,
  additionalProps,
  settingsContent,
  headerContent,
  footerContent,
  socialMediaContent
}) => {
  return (
    <div className={styles.SliderDetailsBase}>
      <Breadcrumb links={breadCrumb} />
      <div className={styles['ProjectDetailsBase--container']}>
        <div className={styles['ProjectDetailsBase--leftBlock']}>
          <ProfileBlock
            backgroundImgUrl={backgroundImgUrl}
            itemId={domain}
            itemName={sliderName}
            onBackgroundImgClick={onBackgroundImgClick}
          />

          <div className={styles.StatusContent}>
            <StatusView {...statusInfo} label={translations.status} noDataText={noDataText} />
          </div>

          <div className={styles.InfoContent}>
            <NameDescription
              noDataText={noDataText}
              data={[
                {
                  name: translations.createdBy,
                  description: additionalProps.createdBy
                },
                {
                  name: translations.creationDate,
                  description: additionalProps.createdDate
                },
                {
                  name: translations.lastUpdatedBy,
                  description: additionalProps.lastUpdatedBy
                },
                {
                  name: translations.lastUpdateDate,
                  description: additionalProps.lastUpdateDate
                }
              ]}
            />
          </div>
        </div>
        <div className={classNames(styles['ProjectDetails__Bottom-Fading-Cell'])}>
          <ItemDetails
            tabs={[
              {
                title: translations.generalInformation,
                value: 1,
                content: settingsContent
              },
              {
                title: translations.header,
                value: 2,
                content: headerContent
              },
              {
                title: translations.footer,
                value: 3,
                content: footerContent
              },
              {
                title: translations.socialMedia,
                value: 4,
                content: socialMediaContent
              }
            ]}
            defaultSubTabValue={1}
            defaultTabValue={1}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderDetails;
