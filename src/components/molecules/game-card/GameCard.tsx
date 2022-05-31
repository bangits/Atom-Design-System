/* eslint-disable @typescript-eslint/member-ordering */
import { Icons } from '@/atom-design-system';
import { PlayArrowIcon, ViewCardImageIcon } from '@/icons';
import { CardImg, typedMemo } from '@my-ui/core';
import classNames from 'classnames';
import React from 'react';
import styles from './GameCard.module.scss';

export interface GameCardProps {
  id: string | number;
  name: string;
  icon?: string;
  playDemo?: string;
  isPlayIconShow?: boolean;
  isActivate?: boolean;
  isShowActivateOrDeactivateButton?: boolean;
  onGameClick?(gameId: string | number, isDemo: boolean): void;
  onGameDetailsClick?(gameId: string | number): void;
  onActivateClick?(game: { id: number | string; name: string }): void;
  onDeActivateClick?(game: { id: number | string; name: string }): void;
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
}

const GameCard = ({
  id,
  name,
  icon,
  onGameClick,
  onGameDetailsClick,
  playDemo,
  onActivateClick,
  onDeActivateClick,
  isShowActivateOrDeactivateButton = true,
  isActivate = true,
  isPlayIconShow = true
}: GameCardProps) => {
  return (
    <CardImg
      title={name}
      image={icon || 'https://i.ibb.co/c2yqT5q/image.png'}
      hoverComponent={
        <span className={classNames(styles['HoverBox'], 'HoverBox')}>
          {isPlayIconShow && (
            <button
              type='button'
              role='button'
              className={classNames(styles['HoverBox-PlayBtn'], 'HoverBox-PlayBtn')}
              onClick={() => onGameClick?.(id, false)}>
              <span className={classNames(styles['HoverBox-PlayBtnInner'], 'HoverBox-PlayBtnInner')}>
                <span className={classNames(styles['HoverBox-PlayBtnIcon'], 'HoverBox-PlayBtnIcon')}>
                  <PlayArrowIcon width={'100%'} />
                </span>
              </span>
            </button>
          )}
          {isShowActivateOrDeactivateButton && (
            <button
              type='button'
              role='button'
              style={{ marginTop: '20px' }}
              className={classNames(styles['HoverBox-ActivateIcon'], styles['HoverBox-ViewIcon'], 'HoverBox-ViewIcon')}
              onClick={() => (isActivate ? onActivateClick?.({ id, name }) : onDeActivateClick?.({ id, name }))}>
              {isActivate ? <Icons.ActivateIcon width={'100%'} /> : <Icons.DeActivateIcon width={'100%'} />}
            </button>
          )}
          <button
            type='button'
            role='button'
            className={classNames(styles['HoverBox-ViewIcon'], 'HoverBox-ViewIcon')}
            onClick={() => onGameDetailsClick?.(id)}>
            <ViewCardImageIcon width={'100%'} />
          </button>
          {playDemo && (
            <span className={classNames(styles['HoverBox-Link'], 'HoverBox-Link')}>
              <button
                role='button'
                onClick={() => onGameClick?.(id, true)}
                className={classNames(styles['HoverBox-Link__Text'], 'HoverBox-Link__Text')}>
                {playDemo}
              </button>
            </span>
          )}
          <span className={classNames(styles['HoverBox-OpacityLayer'], 'HoverBox-OpacityLayer')}></span>
        </span>
      }
    />
  );
};

export default typedMemo(GameCard);
