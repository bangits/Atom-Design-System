import { Icons, typedMemo } from '@/atom-design-system';
import { TextWithTooltip } from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './ImageGallery.module.scss';

export interface ImageGalleryProps<T> {
  galleryName: string;
  imageSources: string[];
  maxImagesCount?: number;
  item?: T;
  onDeleteButtonClick?(item: T): void;

  onViewButtonClick(): void;
}

const ImageGallery = <T,>({
  imageSources,
  galleryName,
  maxImagesCount = 8,
  onViewButtonClick,
  onDeleteButtonClick,
  item
}: ImageGalleryProps<T>) => {
  const maxImageSources = imageSources.slice(0, maxImagesCount);

  return (
    <div className={styles.ImageGallery}>
      <div className={styles.ImageGallery__Images}>
        {[...maxImageSources, ...new Array(maxImagesCount - maxImageSources.length).fill(null)].map((src, index) =>
          src ? (
            <img src={src} key={src} className={styles.ImageGallery__Image} />
          ) : (
            <Icons.CameraIcon
              key={index}
              className={classNames(styles.ImageGallery__Image, styles['ImageGallery__Image--Empty'])}
            />
          )
        )}

        {imageSources.length >= maxImagesCount && <span className={styles.ImageGallery__Rest}>...</span>}

        <div className={styles.ImageGallery__Layer}>
          <button type='button' className={styles.ImageGallery__View} onClick={onViewButtonClick}>
            <Icons.ViewIcon />
          </button>
          {onDeleteButtonClick && (
            <button type='button' className={styles.ImageGallery__View} onClick={() => onDeleteButtonClick(item)}>
              <Icons.TrashIcon style={{ width: 10 }} />
            </button>
          )}
        </div>
      </div>

      <TextWithTooltip displayText={galleryName} className={styles.ImageGallery__Name}>
        {galleryName}
      </TextWithTooltip>
    </div>
  );
};

export default typedMemo(ImageGallery);
