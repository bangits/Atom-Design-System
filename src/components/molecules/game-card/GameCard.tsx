/* eslint-disable @typescript-eslint/member-ordering */
import { GameLaunchBtns, Icons } from '@/atom-design-system';
import { ViewCardImageIcon } from '@/icons';
import { CardImg, typedMemo } from '@my-ui/core';
import classNames from 'classnames';
import styles from './GameCard.module.scss';

export interface GameCardProps {
  id: string | number;
  name: string;
  icon?: string;
  playDemo?: string;
  isPlayIconShow?: boolean;
  isProvider?: boolean;
  isActivate?: boolean;
  isShowActivateOrDeactivateButton?: boolean;
  onGameClick?(gameId: string | number, isDemo: boolean): void;
  onGameDetailsClick?(gameId: string | number): void;
  onActivateOrDeactivateClick?(game: { id: number | string; name: string; status: string }): void;
  hasDemo?: boolean;
  mobileScreenModeIsPortrait?: boolean;
  mobileScreenModeIsLandscape?: boolean;
  tabletScreenModeIsPortrait?: boolean;
  tabletScreenModeIsLandscape?: boolean;
  backGroundImage?: {
    isDefault: boolean;
    path: string;
  };
  gameImage?: {
    isDefault: boolean;
    path: string;
  };
  status?: string;
  providerName?: string;
}

const GameCard = ({
  id,
  name,
  status,
  icon,
  onGameClick,
  onGameDetailsClick,
  playDemo,
  onActivateOrDeactivateClick,
  isShowActivateOrDeactivateButton = true,
  isActivate = true,
  isPlayIconShow = true,
  isProvider = false,
  providerName
}: GameCardProps) => {
  return (
    <span className={classNames(isProvider ? styles['HoverBox-Main-Provider'] : styles['HoverBox-Main'])}>
      {!isActivate && <div className={classNames(styles['HoverBox-Indicator'])}></div>}
      <CardImg
        title={
          <>
            {name}
            {providerName && <span className={styles['ProviderName']}>{providerName}</span>}
          </>
        }
        image={icon || 'https://i.ibb.co/c2yqT5q/image.png'}
        className={classNames(styles['CardContainer'], {
          [styles['CardContainer--with-provider']]: providerName
        })}
        hoverComponent={
          <span className={classNames(styles['HoverBox'], 'HoverBox')}>
            <GameLaunchBtns
              onDemoPlayBtnClick={() => onGameClick?.(id, true)}
              onPlayBtnClick={() => onGameClick?.(id, false)}
              playDemoText={playDemo}
              showDemoPlayBtn={!!playDemo}
              showPlayBtn={isPlayIconShow}
            />

            {isShowActivateOrDeactivateButton && (
              <>
                <button
                  type='button'
                  role='button'
                  style={{ marginTop: '20px' }}
                  className={classNames(
                    styles['HoverBox-ActivateIcon'],
                    styles['HoverBox-ViewIcon'],
                    'HoverBox-ViewIcon'
                  )}
                  onClick={() =>
                    isActivate
                      ? onActivateOrDeactivateClick?.({ id, name, status })
                      : onActivateOrDeactivateClick?.({ id, name, status })
                  }>
                  {isActivate ? <Icons.ActivateIcon width={'100%'} /> : <Icons.DeActivateIcon width={'100%'} />}
                </button>
              </>
            )}
            <button
              type='button'
              role='button'
              className={classNames(styles['HoverBox-ViewIcon'], 'HoverBox-ViewIcon')}
              onClick={() => onGameDetailsClick?.(id)}>
              <ViewCardImageIcon width={'100%'} />
            </button>
            <span className={classNames(styles['HoverBox-OpacityLayer'], 'HoverBox-OpacityLayer')}></span>
          </span>
        }
      />
    </span>
  );
};

export default typedMemo(GameCard);
