import { GameCard, GameCardProps } from '@/atom-design-system';
import { Loader, Scroll } from '@my-ui/core';
import React, { useState } from 'react';
import styles from './GameList.module.scss';

export interface GameListProps {
  games: GameCardProps[];
  playDemo?: string;
  isAllGamesLoaded: boolean;
  isLoadingGames: boolean;
  onChange(page: number): void;
  onGameDetailsClick(id: number): void;
  onActivateClick?({ id: number, name: string }): void;
  onDeActivateClick?({ id: number, name: string }): void;
  onGameClick?(gameId: string | number, isDemo: boolean): void;
}

const GameList = ({
  games,
  playDemo,
  isLoadingGames,
  isAllGamesLoaded,
  onChange,
  onGameDetailsClick,
  onDeActivateClick,
  onActivateClick,
  onGameClick
}: GameListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // getEditUrl={(column) =>
  //   ROUTES.baseUrl + ROUTES.players + ROUTES.playerDetails.replace(':id', column.id.toString()) + '/?isEdit=true'
  // }
  // getViewUrl={(column) =>
  //   ROUTES.baseUrl + ROUTES.players + ROUTES.playerDetails.replace(':id', column.id.toString())
  // }

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
      <div className={styles.GamesContainer}>
        {games.map((game) => (
          <div className={styles.GameCard} key={game.id}>
            <GameCard
              onGameClick={onGameClick}
              onActivateClick={onActivateClick}
              onDeActivateClick={onDeActivateClick}
              onGameDetailsClick={onGameDetailsClick}
              {...game}
              isPlayIconShow={!!playDemo}
              playDemo={playDemo}
            />
          </div>
        ))}
      </div>

      <div className={styles.LoaderContainer}>{isLoadingGames && <Loader />}</div>
    </Scroll>
  );
};

export default GameList;
