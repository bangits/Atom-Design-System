import { typedMemo } from '@/helpers/typedMemo';
import styles from './PageWrapper.module.scss';
import { Typography } from '@my-ui/core';

const PageWrapper = () => {
  return (
    <div className={styles.PageWrapper}>
      <div className={styles.PageWrapperHeader}>
        <Typography component='h2' variant='h2' className={styles.PageTitle}>
          Users
        </Typography>
      </div>
    </div>
  );
};

export default typedMemo(PageWrapper);
