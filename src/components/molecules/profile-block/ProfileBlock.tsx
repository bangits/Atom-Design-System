import { typedMemo } from '@/helpers/typedMemo';
import { PhotoCamIcon } from '@/icons';
import { Card } from '@my-ui/core';
import classNames from 'classnames';
import styles from './ProfileBlock.module.scss';

export interface ProfileBlockProps {
  onBackgroundImgClick: () => void;
  onMainImgClick?: () => void;
  backgroundImgUrl: string;
  mainImgUrl?: string;
  itemName: string;
  itemId: number | string;
}

const ProfileBlock = ({
  onBackgroundImgClick,
  onMainImgClick,
  backgroundImgUrl,
  mainImgUrl,
  itemId,
  itemName
}: ProfileBlockProps) => {
  return (
    <>
      <Card className={classNames(styles['ProfileBlock'], 'ProfileBlock')} borderRadius={1.6}>
        {onMainImgClick !== undefined && (
          <div
            className={classNames(styles['ProfileBlock__ImgCell'], 'ProfileBlock__ImgCell', {
              [styles['ProfileBlock__ImgCell--uploaded']]: !!mainImgUrl
            })}
            onClick={mainImgUrl ? undefined : onMainImgClick}>
            {mainImgUrl && (
              <img className={classNames(styles['ProfileBlock__Img'], 'ProfileBlock__Img')} src={mainImgUrl} />
            )}

            <PhotoCamIcon
              onClick={!mainImgUrl ? undefined : onMainImgClick}
              width='2.1rem'
              className={classNames(styles['ProfileBlock__PhotoCamIcon'], 'ProfileBlock__PhotoCamIcon')}
            />
          </div>
        )}
        <div
          className={classNames(styles['ProfileBlock__Cover'], 'ProfileBlock__Cover', {
            [styles['ProfileBlock__Cover--uploaded']]: !!backgroundImgUrl
          })}
          onClick={backgroundImgUrl ? undefined : onBackgroundImgClick}>
          {backgroundImgUrl && (
            <img
              className={classNames(styles['ProfileBlock__CoverImg'], 'ProfileBlock__CoverImg')}
              src={backgroundImgUrl}
            />
          )}
          <div
            className={classNames(styles['ProfileBlock__CoverPhotoIconCell'], 'ProfileBlock__CoverPhotoIconCell')}
            onClick={!backgroundImgUrl ? undefined : onBackgroundImgClick}>
            <PhotoCamIcon
              width='1rem'
              className={classNames(styles['ProfileBlock__CoverPhotoIcon'], 'ProfileBlock__CoverPhotoIcon')}
            />
          </div>
        </div>
        <div
          className={classNames(styles['ProfileBlock__Info'], 'ProfileBlock__Info', {
            [styles['ProfileBlock__Info--without-logo']]: onMainImgClick === undefined
          })}>
          <div className={classNames(styles['ProfileBlock__Title'], 'ProfileBlock__Title')}>{itemName}</div>
          <div className={classNames(styles['ProfileBlock__SubTitle'], 'ProfileBlock__SubTitle')}>{itemId}</div>
        </div>
      </Card>
    </>
  );
};

export default typedMemo(ProfileBlock);
