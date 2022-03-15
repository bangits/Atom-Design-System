import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Sidebar.module.scss';

export interface SidebarBottomProps {
  logoSrc: string;
  title: string;
  isSidebarClosed: boolean;
}

const SidebarBottom: FC<SidebarBottomProps> = ({
  title = 'Circus',
  logoSrc = 'https://res.cloudinary.com/dheh8nj2p/image/upload/v1647289750/Group_24740_1_totdn3.png',
  isSidebarClosed
}) => {
  return (
    <div
      className={classNames(styles.BottomContainer, {
        [styles['BottomContainer--closed']]: isSidebarClosed
      })}>
      <div
        className={classNames(styles['BottomContainer--img'], {
          [styles['BottomContainer--img-closed']]: isSidebarClosed
        })}>
        <img src={logoSrc} alt='Logo' />
      </div>
      {!isSidebarClosed && <span className={styles['BottomContainer--title']}>{title}</span>}
    </div>
  );
};

export default SidebarBottom;
