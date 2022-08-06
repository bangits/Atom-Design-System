import { ItemDetails, NameDescription, ProfileBlock, StatusView, StatusViewProps } from '@/components';
import { Breadcrumb, BreadcrumbProps, Button } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './WebSite.module.scss';

export interface WebSiteProps {
  noDataText?: string;
  breadCrumb: BreadcrumbProps['links'];

  statusInfo: StatusViewProps;

  translations: {
    status: string;
    projectIndustry: string;
    projectType: string;
    createdBy: string;
    creationDate: string;
    // lastUpdatedBy: string;
    lastUpdateDate: string;
    generalInformation: string;
    header: string;
    footer: string;
    socialMedia: string;
  };

  sliderName: string;
  backgroundImgUrl: string;
  domain: string;

  additionalProps: {
    createdBy: string;
    createdDate: string;
    // lastUpdatedBy: string;
    lastUpdateDate: string;
  };

  onBackgroundImgClick: () => void;

  //Contents
  settingsContent: ReactNode;
  headerContent: ReactNode;
  footerContent: ReactNode;
  socialMediaContent: ReactNode;
}

const WebSite: FC<WebSiteProps> = ({
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
    <div className={styles.WebSiteBase}>
      <Breadcrumb links={breadCrumb} />
      <div className={styles['WebSiteDetailsBase--container']}>
        <div className={styles['WebSiteDetailsBase--leftBlock']}>
          <ProfileBlock
            viewMode
            backgroundImgUrl={backgroundImgUrl}
            itemId={
              <Button variant='link' onClick={() => window.open(domain, '_blank')}>
                {domain}
              </Button>
            }
            itemName={sliderName}
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
                // {
                //   name: translations.lastUpdatedBy,
                //   description: additionalProps.lastUpdatedBy
                // },
                {
                  name: translations.lastUpdateDate,
                  description: additionalProps.lastUpdateDate
                }
              ]}
            />
          </div>
        </div>

        <div className={classNames(styles['WebSiteDetails__Bottom-Fading-Cell'])}>
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

export default WebSite;
