import { typedMemo } from '@/helpers/typedMemo';
import { Button, ButtonProps, Typography } from '@my-ui/core';
import { FC, ReactNode } from 'react';
import styles from './PageWrapper.module.scss';

export interface PageWrapperProps {
  title?: string;
  showButton?: boolean;
  buttonProps?: ButtonProps;
  buttonElement?: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, title, showButton, buttonElement, buttonProps = {} }) => {
  return (
    <div className={styles.PageWrapper}>
      {(title || showButton) && (
        <div className={styles.PageWrapperHeader}>
          <Typography component='h2' variant='h3' className={styles.PageTitle}>
            {title}
          </Typography>
          {showButton && (buttonElement || <Button {...buttonProps} type='button' />)}
        </div>
      )}

      {children}
    </div>
  );
};

export default typedMemo(PageWrapper);
