import { ItemDetails, NameDescription, StatusView, StatusViewProps } from '@/components';
import { typedMemo } from '@/helpers';
import { Breadcrumb, BreadcrumbProps, Button, ButtonProps, Card } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode, useState } from 'react';
import styles from './GameDetails.module.scss';
import { PhotoCamIcon } from '@/icons';
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
  noDataText
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
                  src='https://www.casinowow.com/media/uploads/Shining-Crown-Icon-190x190.png'
                  alt=''
                />

                <PhotoCamIcon
                  width='21'
                  className={classNames(styles['ProfileBlock__PhotoCamIcon'], 'ProfileBlock__PhotoCamIcon')}
                />
              </div>
              <div className={classNames(styles['ProfileBlock__Cover'], 'ProfileBlock__Cover')}>
                <img
                  className={classNames(styles['ProfileBlock__CoverImg'], 'ProfileBlock__CoverImg')}
                  src='https://www.punctul.ro/wp-content/uploads/2021/08/shining-crown-si-burning-hot.jpg'
                  alt=''
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
                <div className={classNames(styles['ProfileBlock__Title'], 'ProfileBlock__Title')}>Shining Crown</div>
                <div className={classNames(styles['ProfileBlock__SubTitle'], 'ProfileBlock__SubTitle')}>ID1234567</div>
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
                  name: translations.createdBy,
                  description: lastUpdateDate
                },
                {
                  name: translations.createdBy,
                  description: lastUpdateBy
                }
              ]}
              noDataText={noDataText}
            />
          </div>

          <div className={classNames(styles['EmptyWrapper'], 'EmptyWrapper')}>
            <Button {...buttons.playButtonProps}>{translations.playButton}</Button>
            <Button {...buttons.playDemoButtonProps} variant='ghost'>
              {translations.playDemoButton}
            </Button>
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
