/* eslint-disable @typescript-eslint/member-ordering */
import { GameCard, GameCardProps, Icons } from '@/atom-design-system';
import { Button, Loader, Scroll } from '@my-ui/core';
import { useState } from 'react';
import styles from './GameList.module.scss';

export interface GameListProps {
  games: GameCardProps[];
  playDemo?: string;
  isAllGamesLoaded: boolean;
  isLoadingGames: boolean;
  isProvider?: boolean;
  onChange(page: number): void;
  onGameDetailsClick(id: number): void;
  onActivateOrDeactivateClick?({ id, name, status }): void;
  onGameClick?(gameId: string | number, isDemo: boolean): void;
  isShowActivateOrDeactivateButton?: boolean;
  updateWebText?: string;
  updateText?: string;
  updateWebContentButtonClick: () => void;
  updateContentButtonClick: () => void;
  isDisabled?: boolean;
}

const GameList = ({
  games,
  playDemo,
  isLoadingGames,
  isAllGamesLoaded,
  onChange,
  onGameDetailsClick,
  onActivateOrDeactivateClick,
  onGameClick,
  updateWebText,
  updateText,
  isShowActivateOrDeactivateButton,
  updateWebContentButtonClick,
  updateContentButtonClick,
  isDisabled,
  isProvider
}: GameListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <Scroll
      height='60rem'
      autoHide
      onScroll={(e) => {
        if (isAllGamesLoaded || isLoadingGames) return;
        const isScrolledToBottom =
          (e.target as HTMLDivElement).offsetHeight + (e.target as HTMLDivElement).scrollTop >=
          (e.target as HTMLDivElement).scrollHeight;

        if (isScrolledToBottom) {
          onChange(currentPage + 1);
          setCurrentPage(currentPage + 1);
        }
      }}
      className={styles.GamesScroll}>
      <div style={{ display: 'flex', gap: 20 }}>
        {updateWebText && (
          <Button onClick={updateWebContentButtonClick} variant='link' startIcon={<Icons.ExchangeIcon />}>
            {updateWebText}
          </Button>
        )}
        {updateText && (
          <Button
            className={isDisabled && styles.UpdateButton}
            disabled={isDisabled}
            onClick={updateContentButtonClick}
            variant='link'
            startIcon={<Icons.ExchangeIcon />}>
            {updateText}
          </Button>
        )}
      </div>
      <div className={styles.GamesContainer}>
        {games.map((game) => (
          <div className={styles.GameCard} key={game.id}>
            <GameCard
              isProvider={isProvider}
              isShowActivateOrDeactivateButton={isShowActivateOrDeactivateButton}
              isActivate={game.status === 'Inactive' ? true : false}
              onGameClick={onGameClick}
              onActivateOrDeactivateClick={onActivateOrDeactivateClick}
              onGameDetailsClick={onGameDetailsClick}
              {...game}
              isPlayIconShow={!!playDemo}
              playDemo={playDemo}
              providerName={game.providerName}
            />
          </div>
        ))}
      </div>

      <div className={styles.LoaderContainer}>{isLoadingGames && <Loader />}</div>
    </Scroll>
  );
};

export default GameList;
