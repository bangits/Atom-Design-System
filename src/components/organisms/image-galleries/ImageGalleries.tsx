import { ScrollableView } from '@/atom-design-system';
import { FC, PropsWithChildren } from 'react';
import styles from './ImageGalleries.module.scss';

export interface ImageGalleriesProps {
  isLoading: boolean;
  isAllImagesLoaded: boolean;

  onPageChange(newPage: number): void;
}

const ImageGalleries: FC<PropsWithChildren<ImageGalleriesProps>> = ({
  children,
  isAllImagesLoaded,
  isLoading,
  onPageChange
}) => {
  return (
    <ScrollableView
      onPageChange={onPageChange}
      disableOnPageChange={isAllImagesLoaded || isLoading}
      showLoader={isLoading}
      className={styles.GamesScroll}>
      <div className={styles.ImageGalleries}>{children}</div>
    </ScrollableView>
  );
};

export default ImageGalleries;
