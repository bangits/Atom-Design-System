import { IconDropdown } from '@/atom-design-system';
import { CopyButton } from '@/components/atoms/copy-button';
import { typedMemo } from '@/helpers/typedMemo';
import { PhotoCamIcon } from '@/icons';
import { Card } from '@my-ui/core';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './ProfileBlock.module.scss';

export interface ProfileBlockProps {
  onBackgroundImgClick?: () => void;
  onMainImgClick?: () => void;
  backgroundImgUrl: string;
  emptyBackgroundIllustration?: ReactNode;
  mainImgUrl?: string;
  itemName: string;
  itemId?: ReactNode;
  isLoadingImage?: boolean;
  viewMode?: boolean;
  addCopyButton?: boolean;
  itemLabel?: string;
  assignTo?: boolean;
  selectContent?: ReactNode;
}

const ProfileBlock = ({
  onBackgroundImgClick,
  onMainImgClick,
  backgroundImgUrl,
  emptyBackgroundIllustration,
  mainImgUrl,
  itemId,
  itemName,
  isLoadingImage,
  viewMode = false,
  addCopyButton,
  itemLabel,
  selectContent
}: ProfileBlockProps) => {
  return (
    <>
      <Card className={classNames(styles['ProfileBlock'], 'ProfileBlock')} borderRadius={1.6}>
        <div className={styles['ProfileBlock__Images']}>
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
            {backgroundImgUrl ? (
              <img
                className={classNames(styles['ProfileBlock__CoverImg'], 'ProfileBlock__CoverImg', {
                  [styles['ProfileBlock__Image']]:
                    backgroundImgUrl === 'https://nid.com.ua/wp-content/themes/realestate-7/images/no-image.png' ||
                    backgroundImgUrl === 'https://i.ibb.co/dMQPWnZ/no-image.png' ||
                    backgroundImgUrl === 'https://i.ibb.co/c2yqT5q/image.png'
                })}
                src={backgroundImgUrl}
              />
            ) : (
              <div className={styles['ProfileBlock__EmptyBackgroundIllustration']}>{emptyBackgroundIllustration}</div>
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
        </div>
        <div
          className={classNames(styles['ProfileBlock__Info'], 'ProfileBlock__Info', {
            [styles['ProfileBlock__Info--without-logo']]: onMainImgClick === undefined
          })}>
          <div className={classNames(styles['ProfileBlock__Title'], 'ProfileBlock__Title')}>
            {itemName}

            {selectContent && <IconDropdown>{selectContent}</IconDropdown>}
          </div>
          <div className={classNames(styles['ProfileBlock__SubTitle'], 'ProfileBlock__SubTitle')}>
            {itemLabel} {itemId} {addCopyButton && <CopyButton copyText={itemId} />}
          </div>
        </div>
      </Card>
    </>
  );
};

export default typedMemo(ProfileBlock);
