import { typedMemo } from '@/helpers/typedMemo';
import { PhotoCamIcon } from '@/icons';
import { Card } from '@my-ui/core';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './ProfileBlock.module.scss';
import { CopyButton } from '@/components/atoms/copy-button';

export interface ProfileBlockProps {
  onBackgroundImgClick?: () => void;
  onMainImgClick?: () => void;
  backgroundImgUrl: string;
  mainImgUrl?: string;
  itemName: string;
  //speed fix
  itemId: any;
  isLoadingImage?: boolean;
  viewMode?: boolean;
  addCopyButton?: boolean;
}

const ProfileBlock = ({
  onBackgroundImgClick,
  onMainImgClick,
  backgroundImgUrl,
  mainImgUrl,
  itemId,
  itemName,
  isLoadingImage,
  viewMode = false,
  addCopyButton
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

            {!isLoadingImage && !viewMode && (
              <PhotoCamIcon
                onClick={!mainImgUrl ? undefined : onMainImgClick}
                width='2.1rem'
                className={classNames(styles['ProfileBlock__PhotoCamIcon'], 'ProfileBlock__PhotoCamIcon')}
              />
            )}
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
          {!viewMode && (
            <div
              className={classNames(styles['ProfileBlock__CoverPhotoIconCell'], 'ProfileBlock__CoverPhotoIconCell')}
              onClick={!backgroundImgUrl ? undefined : onBackgroundImgClick}>
              {!isLoadingImage && (
                <PhotoCamIcon
                  width='1rem'
                  className={classNames(styles['ProfileBlock__CoverPhotoIcon'], 'ProfileBlock__CoverPhotoIcon')}
                />
              )}
            </div>
          )}
        </div>
        <div
          className={classNames(styles['ProfileBlock__Info'], 'ProfileBlock__Info', {
            [styles['ProfileBlock__Info--without-logo']]: onMainImgClick === undefined
          })}>
          <div className={classNames(styles['ProfileBlock__Title'], 'ProfileBlock__Title')}>{itemName}</div>
          <div className={classNames(styles['ProfileBlock__SubTitle'], 'ProfileBlock__SubTitle')}>
            {itemId} {addCopyButton && <CopyButton copyText={itemId} />}
          </div>
        </div>
      </Card>
    </>
  );
};

export default typedMemo(ProfileBlock);
