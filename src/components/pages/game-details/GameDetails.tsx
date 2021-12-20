import { ItemDetails, NameDescription, StatusView, StatusViewProps } from '@/components';
import { typedMemo } from '@/helpers';
import { PhotoCamIcon } from '@/icons';
import { Breadcrumb, BreadcrumbProps, Button, ButtonProps, Card } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode, useState } from 'react';
import styles from './GameDetails.module.scss';
export interface GameDetailsProps {
  statusInfo: Omit<StatusViewProps, 'label'>;
  breadCrumbs?: BreadcrumbProps['links'];
  creationDate: string;
  createdBy: string;
  lastUpdateDate: string;
  lastUpdateBy: string;
  noDataText: string;
  gameName: string;
  gameId: string;

  backgroundImgUrl: string;
  mainImgUrl: string;

  generalInformationContext: ReactNode;

  buttons: {
    playButtonProps: ButtonProps;
    playDemoButtonProps: ButtonProps;
  };

  translations: {
    creationDate: string;
    createdBy: string;
    lastUpdateDate: string;
    lastUpdateBy: string;
    status: string;
    generalInformation: string;
    assets: string;
    playButton: string;
    playDemoButton: string;
  };
}
const GameDetails: FC<GameDetailsProps> = ({
  breadCrumbs,
  buttons,
  generalInformationContext,
  statusInfo,
  translations,
  creationDate,
  createdBy,
  lastUpdateBy,
  lastUpdateDate,
  noDataText,
  gameId,
  gameName,
  backgroundImgUrl,
  mainImgUrl
}) => {
  const [tabValue, setTabValue] = useState(1);
  const [subTabValue, setSubTabValue] = useState(1);
  const [edit, setEdit] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className={classNames(styles.GameDetailsBase)}>
      <div className={classNames(styles['BreadCrumbWrapper'])}>
        <Breadcrumb links={breadCrumbs} />
      </div>
      {/* MainCarcass */}
      <div className={classNames(styles['MainCarcass'], 'MainCarcass')}>
        <div className={classNames(styles['MainCarcass__Sidebar'], 'MainCarcass__Sidebar')}>
          {/*  */}
          <div className={classNames(styles['GameDetails__Sidebar-Widget'], 'GameDetails__Sidebar-Widget')}>
            <Card className={classNames(styles['ProfileBlock'], 'ProfileBlock')} borderRadius={1.6}>
              <div className={classNames(styles['ProfileBlock__ImgCell'], 'ProfileBlock__ImgCell')}>
                <img
                  className={classNames(styles['ProfileBlock__Img'], 'ProfileBlock__Img')}
                  src={mainImgUrl}
                  alt={mainImgUrl}
                />

                <PhotoCamIcon
                  width='21'
                  className={classNames(styles['ProfileBlock__PhotoCamIcon'], 'ProfileBlock__PhotoCamIcon')}
                />
              </div>
              <div className={classNames(styles['ProfileBlock__Cover'], 'ProfileBlock__Cover')}>
                <img
                  className={classNames(styles['ProfileBlock__CoverImg'], 'ProfileBlock__CoverImg')}
                  src={backgroundImgUrl}
                  alt={backgroundImgUrl}
                />
                <div
                  className={classNames(
                    styles['ProfileBlock__CoverPhotoIconCell'],
                    'ProfileBlock__CoverPhotoIconCell'
                  )}>
                  <PhotoCamIcon
                    width='10'
                    className={classNames(styles['ProfileBlock__CoverPhotoIcon'], 'ProfileBlock__CoverPhotoIcon')}
                  />
                </div>
              </div>
              <div className={classNames(styles['ProfileBlock__Info'], 'ProfileBlock__Info')}>
                <div className={classNames(styles['ProfileBlock__Title'], 'ProfileBlock__Title')}>{gameName}</div>
                <div className={classNames(styles['ProfileBlock__SubTitle'], 'ProfileBlock__SubTitle')}>{gameId}</div>
              </div>
            </Card>
          </div>
          {/*  */}
          <div className={styles['GameDetails__Sidebar-Widget']}>
            <StatusView {...statusInfo} label={'Status'} />
          </div>

          <div
            className={classNames(
              styles['CardWrapper'],
              styles['CardWrapper--Change-Update'],
              'CardWrapper',
              'CardWrapper--Change-Update'
            )}>
            <NameDescription
              data={[
                {
                  name: translations.creationDate,
                  description: creationDate
                },
                {
                  name: translations.createdBy,
                  description: createdBy
                },
                {
                  name: translations.lastUpdateDate,
                  description: lastUpdateDate
                },
                {
                  name: translations.lastUpdateBy,
                  description: lastUpdateBy
                }
              ]}
              noDataText={noDataText}
            />
          </div>

          <div
            className={classNames(
              styles['EmptyWrapper'],
              styles['EmptyWrapper--Two-Cols'],
              'EmptyWrapper',
              'EmptyWrapper--Two-Cols'
            )}>
            <Button {...buttons.playDemoButtonProps} variant='ghost'>
              {translations.playDemoButton}
            </Button>
            <Button {...buttons.playButtonProps}>{translations.playButton}</Button>
          </div>
        </div>

        <div className={classNames(styles['MainCarcass__Content'], 'MainCarcass__Content')}>
          <ItemDetails
            tabs={[
              {
                title: translations.generalInformation,
                value: 1,
                content: generalInformationContext
              },
              {
                title: translations.assets,
                value: 2
              }
            ]}
            defaultTabValue={1}
          />
        </div>
      </div>
      {/* MainCarcass */}
    </div>
  );
};

export default typedMemo(GameDetails);
