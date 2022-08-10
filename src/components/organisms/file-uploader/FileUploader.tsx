import { Icons } from '@/atom-design-system';
import { Label, LabelProps } from '@/components/atoms';
import {
  FileUploader as MyUIFileUploader,
  FileUploaderProps as MyUIFileUploaderProps,
  Tooltip,
  Typography
} from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './FileUploader.module.scss';

export { FileUploaderErrors } from '@my-ui/core';

export interface FileUploaderProps extends MyUIFileUploaderProps {
  errorMessage?: string;
  labelProps?: LabelProps;
  tooltipProps?: {
    icon?: keyof typeof Icons;
    tooltipText: string;
  };
}

export const FileUploader: FC<FileUploaderProps> = ({
  errorMessage,
  labelProps,
  tooltipProps,
  ...fileUploaderProps
}) => {
  const { fullWidth } = fileUploaderProps;

  const TooltipIcon = tooltipProps && Icons[tooltipProps.icon || 'InformationIcon'];

  return (
    <>
      <div
        className={classNames(styles.FileUploaderLabelContainer, {
          [styles['FileUploaderLabelContainer--fullWidth']]: fullWidth
        })}>
        {labelProps && <Label {...labelProps} />}

        {tooltipProps && (
          <Tooltip showEvent='click' text={tooltipProps.tooltipText} placement='top'>
            <div className={styles.FileUploaderTooltipIcon}>
              <TooltipIcon />
            </div>
          </Tooltip>
        )}
      </div>

      <MyUIFileUploader {...fileUploaderProps} />

      {errorMessage && (
        <Typography
          className={classNames(styles.FileUploaderErrorMessage, {
            [styles['FileUploaderErrorMessage--fullWidth']]: fullWidth
          })}
          color='danger'
          variant='p5'>
          {errorMessage}
        </Typography>
      )}
    </>
  );
};
