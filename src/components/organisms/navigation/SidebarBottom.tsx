import classNames from 'classnames';
import { FC } from 'react';
import styles from './Sidebar.module.scss';

export interface SidebarBottomProps {
  logoSrc: string;
  title: string;
  isSidebarClosed: boolean;
}

const SidebarBottom: FC<SidebarBottomProps> = ({ title, logoSrc, isSidebarClosed }) => {
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
