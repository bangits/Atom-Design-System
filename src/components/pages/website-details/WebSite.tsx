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
    lastUpdatedBy: string;
    lastUpdateDate: string;
    generalInformation: string;
    header: string;
    footer: string;
    socialMedia: string;
    desktop: string;
    tablet: string;
    mobile: string;
  };

  sliderName: string;
  backgroundImgUrl: string;
  domain: string;

  additionalProps: {
    createdBy: string;
    createdDate: string;
    lastUpdatedBy: string;
    lastUpdateDate: string;
  };

  onBackgroundImgClick: () => void;

  //Contents
  settingsContent: ReactNode;
  socialMediaContent: ReactNode;
  footerContentDesktop: ReactNode;
  footerContentTablet: ReactNode;
  footerContentMobile: ReactNode;
  headerContentDesktop: ReactNode;
  headerContentTablet: ReactNode;
  headerContentMobile: ReactNode;
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
  socialMediaContent,
  footerContentDesktop,
  footerContentTablet,
  footerContentMobile,
  headerContentDesktop,
  headerContentTablet,
  headerContentMobile
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
                disableScroll: true,
                subTabs: [
                  {
                    title: translations.desktop,
                    value: 1,
                    content: headerContentDesktop
                  },
                  {
                    title: translations.tablet,
                    value: 2,
                    content: headerContentTablet
                  },
                  {
                    title: translations.mobile,
                    value: 3,
                    content: headerContentMobile
                  }
                ]
              },
              {
                title: translations.footer,
                value: 3,
                disableScroll: true,
                subTabs: [
                  {
                    title: translations.desktop,
                    value: 1,
                    content: footerContentDesktop
                  },
                  {
                    title: translations.tablet,
                    value: 2,
                    content: footerContentTablet
                  },
                  {
                    title: translations.mobile,
                    value: 3,
                    content: footerContentMobile
                  }
                ]
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
