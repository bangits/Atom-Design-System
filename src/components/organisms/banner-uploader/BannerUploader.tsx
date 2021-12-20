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

export interface BannerUploaderProps extends Omit<BaseFileUploaderProps, 'accept'> {
  uploadedImage?: string;
  onSave: (base64Image: string) => void;
  onDelete?: () => void;
  minCropBoxWidth?: number;
  minCropBoxHeight?: number;
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
  ...fileUploaderProps
}: BannerUploaderProps) => {
  const [uploadedImage, setUploadedImage] = useState(uploadedImageProps || '');
  const [mode, setMode] = useState<BannerUploaderMode>(BannerUploaderMode.VIEW);

  const [cropper, setCropper] = useState<Cropper>();

  const [isOpenedBannerUploader, setUploaderBannerUploader] = useState(false);

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
      accept: 'image/*',
      onChange: onFileSelection
    }),
    []
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
                icon: <Icons.CloseIcon />,
                label: translations.cancel,
                onClick: () => {
                  setUploadedImage(null);
                  setMode(BannerUploaderMode.VIEW);
                },
                position: 'left' as const
              },
              {
                icon: <Icons.EllipseIcon />,
                label: translations.rotate,
                onClick: () => cropper.rotate(90),
                position: 'right' as const
              },
              {
                icon: <Icons.CheckIcon width='1.6rem' />,
                label: translations.save,
                onClick: () => {
                  setUploadedImage(cropper.getCroppedCanvas().toDataURL());

                  setMode(BannerUploaderMode.VIEW);
                },
                position: 'right' as const
              }
            ]
        : [
            {
              icon: <Icons.EditIcon />,
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
        onClose={() => setUploaderBannerUploader(false)}
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
                style={{ height: '30rem', width: '100%' }}
                zoomTo={0.5}
                initialAspectRatio={1}
                preview='.img-preview'
                src={uploadedImage}
                viewMode={1}
                minCropBoxHeight={minCropBoxHeight}
                minCropBoxWidth={minCropBoxWidth}
                background={false}
                responsive={true}
                autoCropArea={1}
                cropBoxResizable={false}
                checkOrientation={false}
                width='100%'
                onInitialized={(instance) => {
                  setCropper(instance);
                  instance.rotate(180);
                }}
                guides={true}
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
