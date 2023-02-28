import { Icons } from '@/atom-design-system';
import { DownloadPopUpIcon } from '@/icons';
import { BaseFileUploaderProps, IconButton, Tooltip, Typography } from '@my-ui/core';
import classNames from 'classnames';
import 'cropperjs/dist/cropper.css';
import { useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ImagePreview.module.scss';
import ReactPortal from './Portal';

export interface ImagePreviewProps extends BaseFileUploaderProps {
  uploadedFile?: string;
  onDownloadClick: () => void;
  idInfo: string;
  translations: {
    download: string;
    cancel: string;
  };
  opened: boolean;
  onClose: () => void;
}

export const ImagePreview = ({
  uploadedFile,
  onDownloadClick,
  translations,
  idInfo,
  opened,
  onClose
}: ImagePreviewProps) => {
  const actions = useMemo(
    () => [
      {
        icon: <DownloadPopUpIcon className={styles.CloseButton} />,
        onClick: onDownloadClick,
        label: translations.download
      },
      {
        icon: <Icons.CloseIcon className={styles.CloseButton} />,
        onClick: onClose,
        label: translations.cancel
      }
    ],
    [uploadedFile, onDownloadClick, translations, onClose]
  );

  return (
    <ReactPortal wrapperId={opened ? 'Portal' : ''}>
      {opened && (
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
      <CSSTransition in={opened} timeout={200} classNames={{ exit: styles['Dialog--exit'] }} unmountOnExit>
        <>
          <div className={styles.ImagePreview}>
            <img src={uploadedFile} />
          </div>
          <div className={classNames(styles.Overlay)} tabIndex={0} role='button' onClick={onClose} />
        </>
      </CSSTransition>
    </ReactPortal>
  );
};
