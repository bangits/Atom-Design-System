import { InfoTooltip, LabelEndMark } from '@/atom-design-system';
import { typedMemo } from '@/helpers/typedMemo';
import { Button, ButtonProps, Typography } from '@my-ui/core';
import { FC, ReactNode } from 'react';
import styles from './PageWrapper.module.scss';

export interface PageWrapperProps {
  title?: string;
  showButton?: boolean;
  buttonProps?: ButtonProps;
  buttonElement?: ReactNode;
  infoIcon?: boolean;
  infoTooltipText?: string;
  id?: string | number;
  subText?: string;
}

const PageWrapper: FC<PageWrapperProps> = ({
  children,
  title,
  showButton,
  buttonElement,
  buttonProps = {},
  infoTooltipText,
  infoIcon,
  id,
  subText
}) => {
  return (
    <div className={styles.PageWrapper}>
      {(title || showButton) && (
        <div className={styles.PageWrapperHeader}>
          <Typography component='h2' variant='h3' className={styles.PageTitle}>
            {title}
            {infoIcon && <InfoTooltip isQuestion={infoIcon} infoTooltipText={infoTooltipText} />}
            {subText && <LabelEndMark label={subText} text={id?.toString()} />}
          </Typography>

          {showButton && (buttonElement || <Button {...buttonProps} type='button' />)}
        </div>
      )}

      {children}
    </div>
  );
};

export default typedMemo(PageWrapper);
