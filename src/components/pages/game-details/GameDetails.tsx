import { ItemDetails, NameDescription, ProfileBlock, StatusView, StatusViewProps } from '@/components';
import { typedMemo } from '@/helpers';
import { Breadcrumb, BreadcrumbProps, Button, ButtonProps } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
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
  isLoadingImage?: boolean;
  backgroundImgUrl: string;
  mainImgUrl: string;

  onMainImgClick?: () => void;
  onBackgroundImgClick?: () => void;

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
  isShowEditIcons?: boolean;
  rgsInfo?: boolean;
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
  mainImgUrl,
  onMainImgClick,
  onBackgroundImgClick,
  isLoadingImage,
  isShowEditIcons = true,
  rgsInfo = true
}) => {
  return (
    <div className={classNames(styles.GameDetailsBase)}>
      <div className={classNames(styles['BreadCrumbWrapper'])}>
        <Breadcrumb links={breadCrumbs} />
      </div>
      <div className={classNames(styles['MainCarcass'], 'MainCarcass')}>
        <div className={classNames(styles['MainCarcass__Sidebar'], 'MainCarcass__Sidebar')}>
          <ProfileBlock
            isLoadingImage={isLoadingImage}
            backgroundImgUrl={backgroundImgUrl}
            itemId={gameId}
            itemName={gameName}
            mainImgUrl={mainImgUrl}
            onBackgroundImgClick={onBackgroundImgClick}
            onMainImgClick={onMainImgClick}
          />

          <div className={styles['GameDetails__Sidebar-Widget']}>
            <StatusView {...statusInfo} label={translations.status} />
          </div>

          {rgsInfo && (
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
          )}

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
    </div>
  );
};

export default typedMemo(GameDetails);
