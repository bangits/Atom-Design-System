import {
  ItemDetails,
  ItemDetailsProps,
  NameDescription,
  NameDescriptionProps,
  StatusView,
  StatusViewProps
} from '@/components';
import { Breadcrumb } from '@my-ui/core';
import { BreadcrumbProps } from '@my-ui/core/dist/components/navigation/breadcrumb/Breadcrumb';
import React, { FC } from 'react';
import styles from './PartnerDetails.module.scss';
export interface PartnerDetailsProps extends StatusViewProps {
  parentCompany: NameDescriptionProps;
  breadCrumbProps: BreadcrumbProps;
  itemDetailsProps: ItemDetailsProps;
  docInfo: NameDescriptionProps;
}

const PartnerDetails: FC<PartnerDetailsProps> = ({
  parentCompany,
  breadCrumbProps,
  itemDetailsProps,
  docInfo,
  ...props
}) => {
  return (
    <div className={styles.PartnerDetailsBase}>
      <Breadcrumb links={breadCrumbProps.links} />
      <div className={styles['PartnerDetailsBase--container']}>
        <div className={styles['PartnerDetailsBase--leftBlock']}>
          <NameDescription data={parentCompany.data} title={parentCompany.title} children={parentCompany.children} />
          <StatusView statusInfo={props.statusInfo} />
          <NameDescription data={docInfo.data} title={docInfo.title} children={docInfo.children} />
        </div>
        <ItemDetails
          tabs={itemDetailsProps.tabs}
          defaultSubTabValue={itemDetailsProps?.defaultSubTabValue}
          defaultTabValue={itemDetailsProps?.defaultTabValue}
        />
      </div>
    </div>
  );
};

export default PartnerDetails;
