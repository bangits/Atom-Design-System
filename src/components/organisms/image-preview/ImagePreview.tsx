import { Icons } from '@/atom-design-system';
import { DownloadIcon } from '@/icons';
import { BaseFileUploaderProps, IconButton, Tooltip, Typography } from '@my-ui/core';
import classNames from 'classnames';
import 'cropperjs/dist/cropper.css';
import { useCallback, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ImagePreview.module.scss';
import ReactPortal from './Portal';
import { PrimaryKey, useTranslation } from '@atom/common';

export interface ImagePreviewProps extends BaseFileUploaderProps {
  uploadedFiles?: { url: string; id: PrimaryKey }[];
  onDownloadClick: (props: { url: string; id: PrimaryKey }) => void;
  translations: {
    download: string;
    cancel: string;
  };
  opened: boolean;
  onClose: () => void;
}

export const ImagePreview = ({ uploadedFiles, onDownloadClick, translations, opened, onClose }: ImagePreviewProps) => {
  const [imagePosition, setImagePosition] = useState(0);

  const t = useTranslation();

  const actions = useMemo(
    () => [
      {
        icon: <DownloadIcon className={styles.CloseButton} />,
        onClick: () => onDownloadClick(uploadedFiles[imagePosition]),
        label: translations.download
      },
      {
        icon: <Icons.CloseIcon className={styles.CloseButton} />,
        onClick: onClose,
        label: translations.cancel
      }
    ],
    [uploadedFiles, onDownloadClick, imagePosition, translations, onClose]
  );

  const handlePrev = useCallback(() => setImagePosition(imagePosition - 1), [imagePosition]);
  const handleNext = useCallback(() => setImagePosition(imagePosition + 1), [imagePosition]);

  return (
    <div className={styles.Wrapper}>
      <ReactPortal wrapperId={opened ? 'Portal' : ''}>
        {opened && (
          <div className={styles.HeaderSection}>
            <Typography className={styles.Infos}>{uploadedFiles[imagePosition].id}</Typography>
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
            {!!uploadedFiles.length && !!imagePosition && (
              <div className={styles.PrevButton}>
                <Tooltip text={t.get('prev')}>
                  <IconButton onClick={handlePrev} icon={<Icons.ArrowPrev />} />
                </Tooltip>
              </div>
            )}
            <div className={styles.ImagePreview}>
              <img src={uploadedFiles[imagePosition].url} />
            </div>
            {!!uploadedFiles.length && uploadedFiles.length - 1 !== imagePosition && (
              <div className={styles.NextButton}>
                <Tooltip text={t.get('next')}>
                  <IconButton onClick={handleNext} icon={<Icons.ArrowNext />} />
                </Tooltip>
              </div>
            )}
            <div className={classNames(styles.Overlay)} tabIndex={0} role='button' onClick={onClose} />
          </>
        </CSSTransition>
      </ReactPortal>
    </div>
  );
};
