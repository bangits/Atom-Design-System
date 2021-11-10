import { typedMemo } from '@/helpers/typedMemo';
import { Typography } from '@my-ui/core';
import { FC } from 'react';
import styles from './PageWrapper.module.scss';

export interface PageWrapperProps {
  title: string;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, title }) => {
  return (
    <div className={styles.PageWrapper}>
      <div className={styles.PageWrapperHeader}>
        <Typography component='h2' variant='h2' className={styles.PageTitle}>
          {title}
        </Typography>
      </div>

      {children}
    </div>
  );
};

export default typedMemo(PageWrapper);
