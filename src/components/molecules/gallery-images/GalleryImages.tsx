import { arrayMoveMutable, Button, ButtonProps, Icons, SortableList } from '@/atom-design-system';
import { Scroll } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useEffect, useMemo, useState } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import styles from './GalleryImages.module.scss';

export interface GalleryImageProps {
  imgSrc: string;
  active: boolean;

  onClick(): void;
}

const SortableComponent = SortableElement<GalleryImageProps>(({ imgSrc, active, onClick }: GalleryImageProps) => (
  <div
    className={classNames(styles.GalleryImages__Img, {
      [styles['GalleryImages__Img--Active']]: active
    })}
    onClick={onClick}>
    <img src={imgSrc} onDragStart={(e) => e.preventDefault()} />

    <span className={classNames(styles.GalleryImages__Sort, 'DnD-SortIcon')}>
      <Icons.SortIcon />
    </span>
  </div>
));

export interface GalleryImage {
  id: string | number;
  src: string;
}

export interface GalleryImagesProps {
  images: GalleryImage[];

  activeImgId?: string | number;

  saveButtonProps: ButtonProps;
  addButtonProps: ButtonProps;

  onImagesListChange(galleryImages: GalleryImage[]): void;
  onImageClick(imageId: string | number): void;
}

const GalleryImages: FC<GalleryImagesProps> = ({
  addButtonProps,
  saveButtonProps,
  images,
  activeImgId,
  onImageClick,
  onImagesListChange
}) => {
  const [imagesList, setImagesList] = useState(images);

  const isSorted = useMemo(() => JSON.stringify(images) !== JSON.stringify(imagesList), [imagesList, images]);

  useEffect(() => setImagesList(images), [images]);

  useEffect(() => onImagesListChange?.(imagesList), [imagesList]);

  return (
    <div className={styles.GalleryImages}>
      <Scroll height='47rem'>
        <SortableList
          axis='xy'
          helperClass={styles.GalleryImages__List}
          onSortEnd={(sortInfo) =>
            setImagesList([...arrayMoveMutable(imagesList, sortInfo.oldIndex, sortInfo.newIndex)])
          }>
          {addButtonProps && (
            <div className={styles.GalleryImages__Add}>
              <Button variant='link' {...addButtonProps}>
                <Icons.PlusCircleLarge />
                {addButtonProps.children}
              </Button>
            </div>
          )}

          {imagesList.map((image, index) => (
            <SortableComponent
              key={image.id}
              active={activeImgId === image.id}
              index={index}
              imgSrc={image.src}
              onClick={() => onImageClick(image.id)}
            />
          ))}
        </SortableList>
      </Scroll>

      {saveButtonProps && isSorted && (
        <div className={styles.GalleryImages__Buttons}>
          <Button {...saveButtonProps} />
        </div>
      )}
    </div>
  );
};

export default GalleryImages;
