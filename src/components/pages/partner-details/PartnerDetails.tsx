import { ItemDetails, NameDescription, StatusView, StatusViewProps } from '@/components';
import { Breadcrumb, BreadcrumbProps, Status, StatusProps } from '@my-ui/core';
import React, { FC, ReactNode } from 'react';
import styles from './PartnerDetails.module.scss';
import classNames from 'classnames';
export interface PartnerDetailsProps {
  noDataText?: string;
  breadCrumbs: BreadcrumbProps['links'];

  parentCompany: string;
  parentCompanyId: number | string;

  statusInfo: Omit<StatusViewProps, 'label'>;

  translations: {
    parentCompany: string;
    parentCompanyId: string;
    status: string;
    expirationDate: string;
    type: string;
    documentID: string;
    providerInformation: string;
    mainInformation: string;
    organizationData: string;
  };

  docInfo: {
    documentID: string | number;
    type: string;
    expirationDate: string;
    statusLabel: string;
    statusVariant: StatusProps['variant'];
  };

  organizationDataMainInformationForms: ReactNode;
  organizationDataProviderInformation: ReactNode;
}

const PartnerDetails: FC<PartnerDetailsProps> = ({
  breadCrumbs,
  docInfo,
  noDataText = 'N/A',
  parentCompanyId,
  parentCompany,
  translations,
  statusInfo,
  organizationDataMainInformationForms,
  organizationDataProviderInformation
}) => {
  return (
    <div className={styles.PartnerDetailsBase}>
      <div className={styles['PartnerDetailsBase--breadCrumb']}>
        <Breadcrumb links={breadCrumbs} />
      </div>
      <div className={styles['PartnerDetailsBase--container']}>
        <div className={styles['PartnerDetailsBase--leftBlock']}>
          <div className={styles['PartnerDetailsBase__Sidebar']}>
            <div className={styles['PartnerDetailsBase__Sidebar-Widget']}>
              <NameDescription
                data={[
                  {
                    name: translations.parentCompany,
                    description: parentCompany
                  },
                  {
                    name: translations.parentCompanyId,
                    description: parentCompanyId
                  }
                ]}
                noDataText={noDataText}
              />
            </div>
            <div className={styles['PartnerDetailsBase__Sidebar-Widget']}>
              <StatusView {...statusInfo} label={translations.status} />
            </div>
            <div className={styles['PartnerDetailsBase__Sidebar-Widget']}>
              <NameDescription
                data={[
                  {
                    name: translations.documentID,
                    description: docInfo.documentID
                  },
                  {
                    name: translations.type,
                    description: docInfo.type
                  },
                  {
                    name: translations.expirationDate,
                    description: docInfo.expirationDate
                  }
                ]}
                noDataText={noDataText}>
                <span>{translations.status}</span>
                <Status variant={docInfo.statusVariant}>{docInfo.statusLabel}</Status>
              </NameDescription>
            </div>
          </div>
        </div>

        <div className={styles['PartnerDetailsBase__Main-Content']}>
          <ItemDetails
            tabs={[
              {
                title: translations.organizationData,
                value: 1,
                subTabs: [
                  {
                    title: translations.mainInformation,
                    value: 1,
                    content: (
                      <div className={classNames(styles['QuadCell'], 'QuadCell')}>
                        {organizationDataMainInformationForms}
                      </div>
                    )
                  },
                  {
                    title: translations.providerInformation,
                    value: 2,
                    content: <>{organizationDataProviderInformation}</>
                  }
                ]
              },
              {
                title: 'Projects',
                value: 2
              },
              {
                title: 'Documents',
                value: 3
              }
            ]}
            defaultTabValue={1}
            defaultSubTabValue={1}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
