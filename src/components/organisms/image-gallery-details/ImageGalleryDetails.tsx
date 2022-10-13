import { Card, Typography } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './ImageGalleryDetails.module.scss';

export interface ImageGalleryDetailsProps {
  title: ReactNode;
  leftContent: ReactNode;
  rightContent: ReactNode;
  rightContentCentered?: boolean;
}

const ImageGalleryDetails: FC<ImageGalleryDetailsProps> = ({
  leftContent,
  rightContent,
  rightContentCentered,
  title
}) => {
  return (
    <Card className={styles.ImageGalleryDetails}>
      <Typography variant='p3' className={styles.ImageGalleryDetails__Title}>
        {title}
      </Typography>

      <div className={styles.ImageGalleryDetails__Container}>
        <Card className={styles.ImageGalleryDetails__Left}>{leftContent}</Card>
        <Card
          className={classNames(styles.ImageGalleryDetails__Right, {
            [styles['ImageGalleryDetails__Right--Centered']]: rightContentCentered
          })}>
          {rightContent}
        </Card>
      </div>
    </Card>
  );
};

export default ImageGalleryDetails;
