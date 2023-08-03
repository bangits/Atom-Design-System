import { Breadcrumb, BreadcrumbProps } from '@my-ui/core';
import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './DetailsPage.module.scss';

export interface DetailsPageProps {
  breadCrumbLinks?: BreadcrumbProps['links'];
  sidebarContent?: ReactNode;
}

const DetailsPage: FC<PropsWithChildren<DetailsPageProps>> = ({ breadCrumbLinks, sidebarContent, children }) => {
  return (
    <div className={styles.DetailsPage}>
      {breadCrumbLinks && (
        <div className={styles['DetailsPage__breadCrumb']}>
          <Breadcrumb links={breadCrumbLinks} />
        </div>
      )}

      <div className={styles['DetailsPage__content-wrapper']}>
        {sidebarContent && <div className={styles['DetailsPage__sidebar']}>{sidebarContent}</div>}

        <div className={styles['DetailsPage__content']}>{children}</div>
      </div>
    </div>
  );
};

export default DetailsPage;
