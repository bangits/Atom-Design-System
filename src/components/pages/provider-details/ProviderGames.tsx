import { Icons } from '@/atom-design-system';
import { EmptyGameListIcon } from '@/icons';
import { Button, CardImg, Loader, Scroll, Tag, TextInput, Typography } from '@my-ui/core';
import classNames from 'classnames';
import { useState } from 'react';
import styles from './ProviderDetails.module.scss';

export interface ProviderGamesProps {
  translations: {
    noGames: string;
    addGame: string;
    search: string;
  };
  gameTypes: {
    id: number;
    name: string;
    gameCount: number;
  }[];
  games: {
    id: number;
    name: string;
    icon: string;
  }[];
  searchInputMaxLength: number;
  isLoadingGames: boolean;
  isAllGamesLoaded: boolean;
  isTabLoading: boolean;
  hasGames: boolean;

  onChange(gameTypeId: number, search: string, page: number): void;
  onGameClick(gameId: number): void;
  onAddGameClick(): void;
}

export const ProviderGames = ({
  translations,
  gameTypes,
  games,
  onGameClick,
  searchInputMaxLength,
  onChange,
  onAddGameClick,
  isLoadingGames,
  isAllGamesLoaded,
  isTabLoading,
  hasGames
}: ProviderGamesProps) => {
  const [searchValue, setSearchValue] = useState('');

  const [selectedGameType, setSelectedGameType] = useState<number>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div className={classNames(styles['GamesList'], 'GamesList')}>
      <div className={classNames(styles['GamesList__Header'], 'GamesList__Header')}>
        <div className={classNames(styles['GamesList__Header-1'], 'GamesList__Header-1')}>
          {hasGames && !isTabLoading ? (
            <TextInput
              label={translations.search}
              endIcon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16px'
                  style={{ fill: '#8ea6c1', cursor: 'pointer', opacity: '0.5' }}
                  viewBox='0 0 512 512'
                  onClick={() => {
                    if (searchValue.length < 3) return;

                    setCurrentPage(1);

                    onChange(selectedGameType, searchValue, 1);
                  }}>
                  <path d='m503.6 463.2-96.7-96.4C438.1 327.1 455 278 455 227.5 455 101.8 353.1 0 227.5 0 101.8 0 0 101.8 0 227.5 0 353.1 101.8 455 227.5 455c50.5.1 99.6-16.9 139.3-48.1l96.4 96.7c11.1 11.1 29.1 11.2 40.2.2l.2-.2c11.1-11.1 11.2-29.1.2-40.2l-.2-.2zM56.9 227.5c0-94.2 76.4-170.6 170.6-170.6 94.2 0 170.6 76.4 170.6 170.6 0 94.2-76.4 170.6-170.6 170.6-94.3 0-170.6-76.4-170.6-170.6z' />
                </svg>
              }
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              maxLength={searchInputMaxLength}
            />
          ) : null}
        </div>
        <div className={classNames(styles['GamesList__Header-2'], 'GamesList__Header-2')}>
          <Button
            type='button'
            className={classNames(styles['GamesList__Add-Game-Btn'], 'GamesList__Add-Game-Btn')}
            startIcon={
              <Icons.PlusCircle
                onClick={() => {
                  setCurrentPage(1);

                  onChange(selectedGameType, searchValue, 1);
                }}
              />
            }
            onClick={onAddGameClick}>
            {translations.addGame}
          </Button>
        </div>
      </div>

      {isTabLoading ? (
        <div className={styles.GamesLoading}>
          <Loader />
        </div>
      ) : games && games.length ? (
        <div className={classNames(styles['GamesList__Fill'], 'GamesList__Fill')}>
          <div className={classNames(styles['TagsCell'], 'TagsCell')}>
            {gameTypes.map((type) => (
              <Tag
                className={classNames(styles['GameDetailsBase__GameTag'], 'GameDetailsBase__GameTag')}
                title={`${type.name}(${type.gameCount})`}
                closeIcon={false}
                inactive={selectedGameType !== type.id}
                key={type.id}
                onClick={() => {
                  setSelectedGameType((prevTypeId) => (prevTypeId === type.id ? null : type.id));

                  setCurrentPage(1);

                  onChange(type.id, searchValue, 1);
                }}
              />
            ))}
          </div>
          <Scroll
            height='40rem'
            autoHide
            onScroll={(e) => {
              if (isAllGamesLoaded || isLoadingGames) return;

              const isScrolledToBottom =
                (e.target as HTMLDivElement).offsetHeight + (e.target as HTMLDivElement).scrollTop >=
                (e.target as HTMLDivElement).scrollHeight;

              if (isScrolledToBottom) {
                onChange(selectedGameType, searchValue, currentPage + 1);

                setCurrentPage(currentPage + 1);
              }
            }}>
            <div className={classNames(styles['GamesContainer'], 'GamesContainer')}>
              {games.map((game) => (
                <CardImg title={game.name} image={game.icon} key={game.id} handleClick={() => onGameClick(game.id)} />
              ))}
            </div>
            {isLoadingGames && <Loader />}
          </Scroll>
        </div>
      ) : (
        <div className={classNames(styles['GamesList__Empty'], 'GamesList__Empty')}>
          <div className={classNames(styles['Empty-Page-Cell'], 'Empty-Page-Cell')}>
            <span className={classNames(styles['Empty-Page-Icon-Cell'], 'Empty-Page-Icon-Cell')}>
              <EmptyGameListIcon />
            </span>
          </div>
          <Typography component='p' variant='p3' className={classNames(styles['Empty-Page-Title'], 'Empty-Page-Title')}>
            {translations.noGames}
          </Typography>
        </div>
      )}
    </div>
  );
};
