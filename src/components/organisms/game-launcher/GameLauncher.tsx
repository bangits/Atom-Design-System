import { Typography } from '@my-ui/core';
import React, { FC, ReactNode } from 'react';
import styles from './GameLauncher.module.scss';
import classNames from 'classnames';

import { FullScreenIcon, CloseWidePopUp } from '@/icons';

export interface GameLauncherProps {}

export const GameLauncher = ({}) => {
  return (
    <aside className={classNames(styles['GameLauncher'], 'GameLauncher')}>
      <div className={classNames(styles['GameLauncher__Header'], 'GameLauncher__Header')}>
        <div className={classNames(styles['GameLauncher__Tools-Cell'], 'GameLauncher__Tools-Cell')}>
          <span
            className={classNames(
              styles['IconSpace'],
              styles['GameLauncherIcons'],
              styles['GameLauncherIcon--Wide'],
              'IconSpace',
              'GameLauncherIcons',
              'GameLauncherIcons--Wide'
            )}>
            <FullScreenIcon width='20' />
          </span>
          <span
            className={classNames(
              styles['IconSpace'],
              styles['GameLauncherIcons'],
              styles['GameLauncherIcons--Close'],
              'IconSpace',
              'GameLauncherIcons',
              'GameLauncherIcons--Close'
            )}>
            <CloseWidePopUp width='10' />
          </span>
        </div>
      </div>
      <div className={classNames(styles['GameLauncher__Body'], 'GameLauncher__Body')}>
        <div className={classNames(styles['ScreenCover'])}>
          <img src='https://newslotgames.net/images/slots/2020/diamond-link-oasis-riches-1.jpg' alt='' />
        </div>
        <div className={classNames(styles['GameLauncher__Content'], 'GameLauncher__Content')}>
          <div className={classNames(styles['GameLauncher__Content-Inner'], 'GameLauncher__Content-Inner')}>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/-T5eEgVMblQ'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
          </div>
        </div>
      </div>
    </aside>
  );
};
