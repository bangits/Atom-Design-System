import { Breadcrumb, BreadcrumbProps, Card } from '@my-ui/core';
import { FC, ReactNode } from 'react';
import styles from './PageCard.module.scss';

export interface PageCardProps {
  children: ReactNode;
  breadcrumbProps?: BreadcrumbProps;
}

const PageCard: FC<PageCardProps> = ({ children, breadcrumbProps }) => {
  const cardElement = <Card className={styles.PageCard}>{children}</Card>;

  return breadcrumbProps ? (
    <div className={styles.PageCardWrapper}>
      <div className={styles['PageCardWrapper__breadcrumb']}>
        <Breadcrumb {...breadcrumbProps} />
      </div>

      {cardElement}
    </div>
  ) : (
    cardElement
  );
};

export default PageCard;
