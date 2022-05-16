import { GameCard, GameCardProps } from '@/atom-design-system';
import { Loader, Scroll } from '@my-ui/core';
import React from 'react';
import styles from './GameList.module.scss';

export interface GameListProps {
  games: GameCardProps[];
  playDemo?: string;
}

const GameList = ({ games, playDemo }: GameListProps) => {
  return (
    <Scroll
      height='55rem'
      autoHide
      onScroll={(e) => {
        // if (isAllGamesLoaded || isLoadingGames) return;
        const isScrolledToBottom =
          (e.target as HTMLDivElement).offsetHeight + (e.target as HTMLDivElement).scrollTop >=
          (e.target as HTMLDivElement).scrollHeight;

        console.log(isScrolledToBottom);

        // if (isScrolledToBottom) {
        //   onChange(selectedGameType, searchValue, currentPage + 1);
        //   setCurrentPage(currentPage + 1);
        // }
      }}
      className={styles.GamesScroll}>
      <div className={styles.GamesContainer}>
        {games.map((game) => (
          <div className={styles.GameCard} key={game.id}>
            <GameCard {...game} playDemo={playDemo} />
          </div>
        ))}
      </div>

      <div className={styles.LoaderContainer}>
        <Loader />
      </div>
    </Scroll>
  );
};

export default GameList;
