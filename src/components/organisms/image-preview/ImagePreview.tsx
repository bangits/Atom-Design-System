import { Icons } from '@/atom-design-system';
import { DownloadPopUpIcon } from '@/icons';
import { BaseFileUploaderProps, IconButton, Tooltip, Typography } from '@my-ui/core';
import classNames from 'classnames';
import 'cropperjs/dist/cropper.css';
import { ReactNode, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ImagePreview.module.scss';

export interface ImagePreviewProps extends BaseFileUploaderProps {
  uploadedFile?: string;
  onDownloadClick: () => void;
  idInfo: string;
  translations: {
    download: string;
    cancel: string;
  };
  opened: boolean;
  children: (openUploader: () => void) => ReactNode;
}

export const ImagePreview = ({
  uploadedFile,
  onDownloadClick,
  translations,
  children,
  idInfo,
  opened
}: ImagePreviewProps) => {
  const [isOpenedImagePreview, setUploaderImagePreview] = useState(opened);

  const actions = useMemo(
    () => [
      {
        icon: <DownloadPopUpIcon className={styles.CloseButton} />,
        onClick: onDownloadClick,
        label: translations.download
      },
      {
        icon: <Icons.CloseIcon className={styles.CloseButton} />,
        onClick: () => {
          setUploaderImagePreview(false);
        },
        label: translations.cancel
      }
    ],
    [uploadedFile, onDownloadClick, translations, isOpenedImagePreview]
  );

  return (
    <>
      {isOpenedImagePreview && (
        <div className={styles.HeaderSection}>
          <Typography className={styles.Infos}>{idInfo}</Typography>
          <div className={styles.Actions}>
            {actions.map((action, index) => (
              <div key={index}>
                <Tooltip text={action.label}>
                  <IconButton icon={action.icon} onClick={action.onClick} />
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      )}
      <CSSTransition
        in={isOpenedImagePreview}
        timeout={200}
        classNames={{ exit: styles['Dialog--exit'] }}
        unmountOnExit>
        <>
          <div className={styles.ImagePreview}>
            <img height={600} src={uploadedFile} />
          </div>
          <div
            className={classNames(styles.Overlay)}
            tabIndex={0}
            role='button'
            onClick={() => {
              setUploaderImagePreview(false);
            }}
          />
        </>
      </CSSTransition>
      {children(() => setUploaderImagePreview(true))}
    </>
  );
};
