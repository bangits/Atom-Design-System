import {
  ItemDetails,
  ItemDetailsProps,
  NameDescription,
  NameDescriptionProps,
  StatusView,
  StatusViewProps
} from '@/components';
import { Breadcrumb, Status, StatusProps } from '@my-ui/core';
import { BreadcrumbProps } from '@my-ui/core/dist/components/navigation/breadcrumb/Breadcrumb';
import React, { FC } from 'react';
import styles from './PartnerDetails.module.scss';
export interface PartnerDetailsProps extends StatusViewProps {
  noDataText?: string;
  parentCompany: NameDescriptionProps;
  breadCrumbProps: BreadcrumbProps;
  itemDetailsProps: ItemDetailsProps;
  docInfo: Omit<NameDescriptionProps, 'children'> & {
    status?: {
      statusVariant?: StatusProps['variant'];
      statusName?: string;
      statusLabel?: string;
    };
  };
}

const PartnerDetails: FC<PartnerDetailsProps> = ({
  parentCompany,
  breadCrumbProps,
  itemDetailsProps,
  docInfo,
  noDataText = 'N/A',
  ...props
}) => {
  return (
    <div className={styles.PartnerDetailsBase}>
      <Breadcrumb links={breadCrumbProps.links} />
      <div className={styles['PartnerDetailsBase--container']}>
        <div className={styles['PartnerDetailsBase--leftBlock']}>
          <NameDescription data={parentCompany.data} title={parentCompany.title} children={parentCompany.children} />
          <StatusView statusInfo={props.statusInfo} />
          <NameDescription data={docInfo.data} title={docInfo.title}>
            {docInfo.status && (
              <>
                <span>{docInfo.status.statusName}</span>
                <Status variant={docInfo.status.statusVariant}>{docInfo.status.statusLabel}</Status>
              </>
            )}
          </NameDescription>
        </div>
        <ItemDetails
          tabs={itemDetailsProps.tabs}
          defaultSubTabValue={itemDetailsProps?.defaultSubTabValue}
          defaultTabValue={itemDetailsProps?.defaultTabValue}
          noDataText={noDataText}
        />
      </div>
    </div>
  );
};

export default PartnerDetails;
