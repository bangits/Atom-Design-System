import { PlayArrowIcon } from '@/icons';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './GameLaunchBtns.module.scss';

export interface GameLaunchBtnsProps {
  showPlayBtn?: boolean;
  showDemoPlayBtn?: boolean;
  playDemoText?: string;

  onPlayBtnClick(): void;
  onDemoPlayBtnClick(): void;
}

const GameLaunchBtns: FC<GameLaunchBtnsProps> = ({
  onDemoPlayBtnClick,
  onPlayBtnClick,
  showDemoPlayBtn,
  showPlayBtn,
  playDemoText
}) => {
  return (
    <>
      {showPlayBtn && (
        <button
          type='button'
          role='button'
          className={classNames(styles['HoverBox-PlayBtn'], 'HoverBox-PlayBtn')}
          onClick={onPlayBtnClick}>
          <span className={classNames(styles['HoverBox-PlayBtnInner'], 'HoverBox-PlayBtnInner')}>
            <span className={classNames(styles['HoverBox-PlayBtnIcon'], 'HoverBox-PlayBtnIcon')}>
              <PlayArrowIcon width={'100%'} />
            </span>
          </span>
        </button>
      )}
      {showDemoPlayBtn && (
        <span className={classNames(styles['HoverBox-Link'], 'HoverBox-Link')}>
          <button
            role='button'
            onClick={onDemoPlayBtnClick}
            className={classNames(styles['HoverBox-Link__Text'], 'HoverBox-Link__Text')}>
            {playDemoText}
          </button>
        </span>
      )}
    </>
  );
};

export default GameLaunchBtns;
