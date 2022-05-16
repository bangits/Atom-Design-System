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
  onGameClick?(gameId: string | number, isDemo: boolean): void;
  onGameDetailsClick?(gameId: string | number): void;
}

const GameCard = ({ id, name, icon, onGameClick, onGameDetailsClick, playDemo }: GameCardProps) => {
  return (
    <CardImg
      title={name}
      image={icon}
      hoverComponent={
        <span className={classNames(styles['HoverBox'], 'HoverBox')}>
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
