import { Typography } from '@my-ui/core';
import React, { FC, ReactNode } from 'react';
import styles from './FullScreenPopUp.module.scss';
import classNames from 'classnames';

import { FullScreenIcon, CloseWidePopUp } from '@/icons';

export interface FullScreenPopUpProps {}

export const FullScreenPopUp = ({}) => {
  return (
    <aside className={classNames(styles['FullScreenPopUp'], 'FullScreenPopUp')}>
      <div className={classNames(styles['FullScreenPopUp__Header'], 'FullScreenPopUp__Header')}>
        <div className={classNames(styles['FullScreenPopUp__Tools-Cell'], 'FullScreenPopUp__Tools-Cell')}>
          <span
            className={classNames(
              styles['IconSpace'],
              styles['FullScreenPopUpIcons'],
              styles['FullScreenPopUpIcon--Wide'],
              'IconSpace',
              'FullScreenPopUpIcons',
              'FullScreenPopUpIcons--Wide'
            )}>
            <FullScreenIcon width='20' />
          </span>
          <span
            className={classNames(
              styles['IconSpace'],
              styles['FullScreenPopUpIcons'],
              styles['FullScreenPopUpIcons--Close'],
              'IconSpace',
              'FullScreenPopUpIcons',
              'FullScreenPopUpIcons--Close'
            )}>
            <CloseWidePopUp width='10' />
          </span>
        </div>
      </div>
      <div className={classNames(styles['FullScreenPopUp__Body'], 'FullScreenPopUp__Body')}>
        <div className={classNames(styles['Game-Screen-Cover'])}>
          <img src='https://newslotgames.net/images/slots/2020/diamond-link-oasis-riches-1.jpg' alt='' />
        </div>
        <div className={classNames(styles['FullScreenPopUp__Content'], 'FullScreenPopUp__Content')}>
          <div className={classNames(styles['FullScreenPopUp__Content-Inner'], 'FullScreenPopUp__Content-Inner')}>
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
