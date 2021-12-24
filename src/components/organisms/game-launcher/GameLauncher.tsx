import { closeFullScreen, openFullScreen } from '@/helpers';
import { CloseWidePopUp, FullScreenIcon } from '@/icons';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import styles from './GameLauncher.module.scss';

export interface GameLauncherProps {
  iframeUrl: string;
  gameBackgroundUrl: string;
  onCloseButtonClick?: () => void;
}

export const GameLauncher = ({ iframeUrl, gameBackgroundUrl, onCloseButtonClick }: GameLauncherProps) => {
  const [isFullScreen, setFullScreenMode] = useState(false);

  const toggleFullScreen = useCallback(() => {
    setFullScreenMode((prevFullScreenMode) => {
      if (prevFullScreenMode) closeFullScreen();
      else openFullScreen();

      return !prevFullScreenMode;
    });
  }, []);

  const checkForClosingFullScreen = useCallback(() => {
    if (!document.fullscreenElement) setFullScreenMode(false);
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', checkForClosingFullScreen);

    /* Firefox */
    document.addEventListener('mozfullscreenchange', checkForClosingFullScreen);

    /* Chrome, Safari and Opera */
    document.addEventListener('webkitfullscreenchange', checkForClosingFullScreen);

    /* IE / Edge */
    document.addEventListener('msfullscreenchange', checkForClosingFullScreen);
  }, []);

  return (
    <aside className={classNames(styles['GameLauncher'], 'GameLauncher')}>
      <div className={classNames(styles['GameLauncher__Header'], 'GameLauncher__Header')}>
        <div className={classNames(styles['GameLauncher__Tools-Cell'], 'GameLauncher__Tools-Cell')}>
          <span
            onClick={toggleFullScreen}
            className={classNames(
              styles['IconSpace'],
              styles['GameLauncherIcons'],
              styles['GameLauncherIcon--Wide'],
              'IconSpace',
              'GameLauncherIcons',
              'GameLauncherIcons--Wide'
            )}>
            <FullScreenIcon width='2rem' />
          </span>
          <span
            onClick={onCloseButtonClick}
            className={classNames(
              styles['IconSpace'],
              styles['GameLauncherIcons'],
              styles['GameLauncherIcons--Close'],
              'IconSpace',
              'GameLauncherIcons',
              'GameLauncherIcons--Close'
            )}>
            <CloseWidePopUp width='1rem' />
          </span>
        </div>
      </div>
      <div className={classNames(styles['GameLauncher__Body'], 'GameLauncher__Body')}>
        {gameBackgroundUrl && (
          <div className={classNames(styles['ScreenCover'])}>
            <img src={gameBackgroundUrl} alt='' />
          </div>
        )}
        <div className={classNames(styles['GameLauncher__Content'], 'GameLauncher__Content')}>
          <div className={classNames(styles['GameLauncher__Content-Inner'], 'GameLauncher__Content-Inner')}>
            <iframe
              width='100%'
              height='315'
              src={iframeUrl}
              title='Game Launcher'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              className={classNames({
                [styles.FullScreenIFrame]: isFullScreen
              })}></iframe>
          </div>
        </div>
      </div>
    </aside>
  );
};
