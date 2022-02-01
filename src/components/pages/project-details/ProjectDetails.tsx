import { ItemDetails, NameDescription, ProfileBlock, StatusView, StatusViewProps } from '@/components';
import { Breadcrumb, BreadcrumbProps } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './ProjectDetails.module.scss';

export interface ProjectDetailsProps {
  noDataText?: string;
  breadCrumb: BreadcrumbProps['links'];

  statusInfo: StatusViewProps;

  translations: {
    status: string;
    partner: string;
    partnerId: string;
    projectIndustry: string;
    projectType: string;
    createdBy: string;
    creationDate: string;
    generalInformation: string;
    licenses: string;
    settings: string;
    languages: string;
    currencies: string;
  };

  projectName: string;
  backgroundImgUrl: string;
  projectId: number | string;

  partnerInfo: {
    partnerId: number | string;
    partnerName: string;
  };

  projectInfo: {
    projectIndustry: string;
    projectType: string;
  };

  creationInfo: {
    createdBy: string;
    creationDate: string;
  };

  onBackgroundImgClick: () => void;

  //Contents
  generalInformationContent: ReactNode;
  licensesContent: ReactNode;
  languagesContent: ReactNode;
  currenciesContent: ReactNode;
}

const ProjectDetails: FC<ProjectDetailsProps> = ({
  noDataText,
  breadCrumb,
  backgroundImgUrl,
  projectId,
  projectName,
  onBackgroundImgClick,
  statusInfo,
  translations,
  partnerInfo,
  projectInfo,
  creationInfo,
  generalInformationContent,
  licensesContent,
  languagesContent,
  currenciesContent
}) => {
  return (
    <div className={styles.ProjectDetailsBase}>
      <Breadcrumb links={breadCrumb} />
      <div className={styles['ProjectDetailsBase--container']}>
        <div className={styles['ProjectDetailsBase--leftBlock']}>
          <ProfileBlock
            backgroundImgUrl={backgroundImgUrl}
            itemId={projectId}
            itemName={projectName}
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
                  name: translations.partner,
                  description: partnerInfo.partnerName
                },
                {
                  name: translations.partnerId,
                  description: partnerInfo.partnerId
                }
              ]}
            />
          </div>

          <div className={styles.InfoContent}>
            <NameDescription
              noDataText={noDataText}
              data={[
                {
                  name: translations.projectIndustry,
                  description: projectInfo.projectIndustry
                },
                {
                  name: translations.projectType,
                  description: projectInfo.projectType
                }
              ]}
            />
          </div>
          <div className={styles.InfoContent}>
            <NameDescription
              noDataText={noDataText}
              data={[
                {
                  name: translations.createdBy,
                  description: creationInfo.createdBy
                },
                {
                  name: translations.creationDate,
                  description: creationInfo.creationDate
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
                content: generalInformationContent
              },
              {
                title: translations.licenses,
                value: 2,
                content: licensesContent
              },
              {
                title: translations.settings,
                value: 3,
                subTabs: [
                  {
                    title: translations.languages,
                    value: 1,
                    content: languagesContent
                  },
                  {
                    title: translations.currencies,
                    value: 2,
                    content: currenciesContent
                  }
                ]
              }
            ]}
            defaultTabValue={1}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
