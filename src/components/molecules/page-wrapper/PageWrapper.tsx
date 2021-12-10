import { typedMemo } from '@/helpers/typedMemo';
import { Button, ButtonProps, Typography } from '@my-ui/core';
import { FC } from 'react';
import styles from './PageWrapper.module.scss';

export interface PageWrapperProps {
  title?: string;
  showButton?: boolean;
  buttonProps?: ButtonProps;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, title, showButton, buttonProps = {} }) => {
  return (
    <div className={styles.PageWrapper}>
      {(title || showButton) && (
        <div className={styles.PageWrapperHeader}>
          <Typography component='h2' variant='h2' className={styles.PageTitle}>
            {title}
          </Typography>
          {showButton && <Button {...buttonProps} type='button' />}
        </div>
      )}

      {children}
    </div>
  );
};

export default typedMemo(PageWrapper);
