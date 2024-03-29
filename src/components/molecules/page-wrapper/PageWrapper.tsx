import { InfoTooltip, LabelEndMark } from '@/atom-design-system';
import { typedMemo } from '@/helpers/typedMemo';
import { LargeArrowIcon } from '@/icons';
import { Breadcrumb, BreadcrumbProps, Button, ButtonProps, Typography } from '@my-ui/core';
import { FC, ReactNode } from 'react';
import styles from './PageWrapper.module.scss';

export interface PageWrapperProps {
  title?: string;
  customTitle?: ({ pageTitle }: { pageTitle: string }) => ReactNode;
  showButton?: boolean;
  buttonProps?: ButtonProps;
  buttonElement?: ReactNode;
  infoIcon?: boolean;
  infoTooltipText?: string;
  id?: string | number;
  subText?: string;
  subTitle?: string;
  breadCrumbLinks?: BreadcrumbProps['links'];
}

const PageWrapper: FC<PageWrapperProps> = ({
  children,
  title,
  customTitle,
  showButton,
  buttonElement,
  buttonProps = {},
  infoTooltipText,
  infoIcon,
  id,
  subText,
  subTitle,
  breadCrumbLinks
}) => {
  return (
    <div className={styles.PageWrapper}>
      {breadCrumbLinks && (
        <div className={styles['DetailsPage__breadCrumb']}>
          <Breadcrumb links={breadCrumbLinks} />
        </div>
      )}
      {(title || showButton || customTitle) && (
        <div className={styles.PageWrapperHeader}>
          {customTitle ? (
            customTitle({ pageTitle: styles.PageTitle })
          ) : (
            <Typography component='h2' variant='h3' className={styles.PageTitle}>
              {title}
              {infoIcon && <InfoTooltip isQuestion={infoIcon} infoTooltipText={infoTooltipText} />}
              {subText && <LabelEndMark label={subText} text={id?.toString()} />}
              {subTitle && (
                <span className={styles['PageTitle--span']}>
                  <LargeArrowIcon height='0.8rem' width='2.4rem' />
                  <span className={styles['PageTitle--span--span']}>{subTitle}</span>
                </span>
              )}
            </Typography>
          )}

          {showButton && (buttonElement || <Button {...buttonProps} type='button' />)}
        </div>
      )}

      {children}
    </div>
  );
};

export default typedMemo(PageWrapper);
