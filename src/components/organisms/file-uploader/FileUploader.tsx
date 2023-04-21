import { Icons } from '@/atom-design-system';
import { Label, LabelProps } from '@/components/atoms';
import {
  FileUploader as MyUIFileUploader,
  FileUploaderProps as MyUIFileUploaderProps,
  Tooltip,
  Typography
} from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './FileUploader.module.scss';
import { FileUploaderVariants } from './enums';
import { renderEl } from './vaiantMapings';

export interface FileUploaderProps extends Omit<MyUIFileUploaderProps, 'renderEl'> {
  variant?: FileUploaderVariants;
  errorMessage?: string;
  labelProps?: LabelProps;
  tooltipProps?: {
    icon?: keyof typeof Icons;
    tooltipText: string | ReactNode;
  };
}

export const FileUploader: FC<FileUploaderProps> = ({
  errorMessage,
  labelProps,
  tooltipProps,
  variant = FileUploaderVariants.input,
  ...fileUploaderProps
}) => {
  const { fullWidth, disabled } = fileUploaderProps;

  const TooltipIcon = tooltipProps && Icons[tooltipProps.icon || 'InformationIcon'];

  return (
    <>
      <div
        className={classNames(styles.FileUploaderLabelContainer, {
          [styles['FileUploaderLabelContainer--fullWidth']]: fullWidth,
          [styles['FileUploaderLabelContainer--disabled']]: disabled
        })}>
        {labelProps && <Label {...labelProps} />}

        {tooltipProps && (
          <Tooltip showEvent='hover' text={tooltipProps.tooltipText} placement='top'>
            <div className={styles.FileUploaderTooltipIcon}>
              <TooltipIcon />
            </div>
          </Tooltip>
        )}
      </div>

      <div
        className={classNames(styles.FileUploaderErrorMessage, {
          [styles['FileUploaderErrorMessage--sameLineError']]: variant === FileUploaderVariants.link
        })}>
        <MyUIFileUploader {...fileUploaderProps} renderEl={(props) => renderEl(variant, props)} />

        {errorMessage && (
          <Typography
            className={classNames(styles.FileUploaderErrorMessage, {
              [styles['FileUploaderErrorMessage--fullWidth']]: fullWidth,
              [styles['FileUploaderErrorMessage--disabled']]: disabled,
              [styles['FileUploaderErrorMessage--marginLeft']]: variant === FileUploaderVariants.link
            })}
            color='danger'
            variant='p5'>
            {errorMessage}
          </Typography>
        )}
      </div>
    </>
  );
};

export {
  FileUploaderErrors,
  LinkFileUploader,
  InputFileUploader,
  BaseFileUploaderProps,
  RenderElProps,
  FileUploaderProps as MyUIFileUploaderProps
} from '@my-ui/core';
