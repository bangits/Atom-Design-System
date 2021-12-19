import { ItemDetails, NameDescription, StatusView, StatusViewProps } from '@/components';
import { typedMemo } from '@/helpers';
import { Breadcrumb, BreadcrumbProps, Button, ButtonProps } from '@my-ui/core';
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
          {/* <div className={classNames(styles['CardWrapper'], 'CardWrapper')}> */}
          {/* <DetailsMainInfo
              label='Shining Crown'
              id='ID1234567'
              src='https://www.casinowow.com/media/uploads/Shining-Crown-Icon-190x190.png'
            /> */}
          {/* </div>  */}

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
