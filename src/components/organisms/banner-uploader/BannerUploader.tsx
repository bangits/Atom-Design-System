import { Icons } from '@/atom-design-system';
import {
  BaseFileUploaderProps,
  createHandleFileUpload,
  DialogWithActions,
  DialogWithActionsProps,
  Typography
} from '@my-ui/core';
import 'cropperjs/dist/cropper.css';
import { ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import Cropper from 'react-cropper';
import styles from './BannerUploader.module.scss';

export interface BannerUploaderProps extends BaseFileUploaderProps {
  uploadedImage?: string;
  onSave: (base64Image: string) => void;
  onDelete?: () => void;
  minCropBoxWidth?: number;
  minCropBoxHeight?: number;
  maxSize?: number;
  aspectRatio?: number;
  translations: {
    upload: string;
    edit: string;
    pleaseUploadThePhoto: string;
    title: string;
    save: string;
    rotate: string;
    remove: string;
    cancel: string;
  };
  children: (openUploader: () => void) => ReactNode;
}

export enum BannerUploaderMode {
  VIEW,
  EDIT
}

export const BannerUploader = ({
  uploadedImage: uploadedImageProps,
  onSave,
  onDelete,
  minCropBoxWidth = 10,
  minCropBoxHeight = 10,
  translations,
  children,
  aspectRatio,
  maxSize = 2000000,
  accept,
  ...fileUploaderProps
}: BannerUploaderProps) => {
  const [uploadedImage, setUploadedImage] = useState(uploadedImageProps || '');
  const [mode, setMode] = useState<BannerUploaderMode>(BannerUploaderMode.VIEW);

  const [cropper, setCropper] = useState<Cropper>();

  const [isOpenedBannerUploader, setUploaderBannerUploader] = useState(false);
  const [isCropBoxResizable, setCropBoxResizable] = useState(true);

  const fileUploadInputRef = useRef<HTMLInputElement>(null);

  const onFileSelection = useCallback((file: File) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setUploadedImage(reader.result as string);

      setMode(BannerUploaderMode.EDIT);
    };
  }, []);

  const onFileUpload = useCallback(
    createHandleFileUpload({
      ...fileUploaderProps,
      maxSize,
      accept: accept || 'image/*',
      onChange: onFileSelection,
      onError: (error) => console.log(error)
    }),
    [accept, onFileSelection]
  );

  const actions = useMemo<DialogWithActionsProps['actions']>(
    () => [
      ...(uploadedImage
        ? mode === BannerUploaderMode.VIEW
          ? [
              {
                icon: <Icons.EditIcon />,
                label: translations.edit,
                onClick: () => setMode(BannerUploaderMode.EDIT),
                position: 'left' as const
              }
            ]
          : [
              {
                icon: <Icons.CloseIcon className={styles.CloseButton} />,
                label: translations.cancel,
                onClick: () => {
                  setMode(BannerUploaderMode.VIEW);

                  if (!uploadedImage.includes('http')) setUploadedImage('');
                },
                position: 'left' as const
              },
              {
                icon: <Icons.RotateIcon />,
                label: translations.rotate,
                onClick: () => cropper.rotate(90),
                position: 'right' as const
              },
              {
                icon: <Icons.CheckIcon width='1.6rem' />,
                label: translations.save,
                onClick: () => {
                  const imageBase64Source = cropper.getCroppedCanvas().toDataURL('image/gif');

                  setUploadedImage(imageBase64Source);

                  setMode(BannerUploaderMode.VIEW);

                  onSave(imageBase64Source);
                },
                position: 'right' as const
              }
            ]
        : [
            {
              icon: <Icons.CameraIcon />,
              label: translations.upload,
              onClick: () => fileUploadInputRef.current.click(),
              position: uploadedImage ? ('left' as const) : ('right' as const)
            }
          ]),
      ...(mode !== BannerUploaderMode.EDIT && uploadedImage
        ? [
            {
              icon: <Icons.TrashIndicator />,
              label: translations.remove,
              onClick: () => {
                setUploadedImage(null);

                if (onDelete) onDelete();
              },
              position: 'right' as const
            }
          ]
        : [])
    ],
    [uploadedImage, mode, cropper, onSave, translations, onDelete]
  );

  return (
    <>
      <DialogWithActions
        onClose={() => {
          setUploaderBannerUploader(false);

          if (mode === BannerUploaderMode.VIEW) {
            setUploadedImage(uploadedImageProps);
          }
        }}
        title={translations.title}
        isOpened={isOpenedBannerUploader}
        mode='dark'
        size='md'
        actions={actions}>
        <div className={styles.BannerUploader}>
          {!uploadedImage ? (
            <Typography className={styles.BannerUploaderDescription}>{translations.pleaseUploadThePhoto}</Typography>
          ) : mode === BannerUploaderMode.EDIT ? (
            <>
              <Cropper
                width='100%'
                style={{ height: '30rem', width: '100%' }}
                preview='.img-preview'
                aspectRatio={aspectRatio}
                minCropBoxHeight={minCropBoxHeight}
                minCropBoxWidth={minCropBoxWidth}
                cropBoxResizable={isCropBoxResizable}
                minContainerWidth={minCropBoxWidth}
                minContainerHeight={minCropBoxHeight}
                guides={false}
                viewMode={1}
                checkOrientation={false}
                dragMode='move'
                src={uploadedImage}
                onInitialized={(instance) => {
                  setCropper(instance);
                  instance.rotate(180);
                }}
                data={{ width: minCropBoxWidth, height: minCropBoxHeight }}
                crop={(event) => {
                  const width = event.detail.width;
                  const height = event.detail.height;

                  setCropBoxResizable(!(width < minCropBoxWidth || height < minCropBoxHeight));
                }}
              />
            </>
          ) : (
            <>
              <img src={uploadedImage} className={styles.BannerUploaderUploadedImage} />
            </>
          )}

          <input type='file' accept='image/*' hidden ref={fileUploadInputRef} onChange={onFileUpload} />
        </div>
      </DialogWithActions>

      {children(() => setUploaderBannerUploader(true))}
    </>
  );
};
