import { Icons } from '@/atom-design-system';
import { EmptyGameListIcon } from '@/icons';
import { Button, CardImg, Tag, TextInput, Typography } from '@my-ui/core';
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

  onChange(gameTypeId: number, search: string): void;
  onGameClick(gameId: number): void;
}

export const ProviderGames = ({
  translations,
  gameTypes,
  games,
  onGameClick,
  searchInputMaxLength,
  onChange
}: ProviderGamesProps) => {
  const [searchValue, setSearchValue] = useState('');

  const [selectedGameType, setSelectedGameType] = useState<number>(null);

  return (
    <div className={classNames(styles['GamesList'], 'GamesList')}>
      <div className={classNames(styles['GamesList__Header'], 'GamesList__Header')}>
        <div className={classNames(styles['GamesList__Header-1'], 'GamesList__Header-1')}>
          <TextInput
            placeholder={translations.search}
            endIcon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16px'
                style={{ fill: '#8ea6c1', cursor: 'pointer', opacity: '0.5' }}
                viewBox='0 0 512 512'>
                <path d='m503.6 463.2-96.7-96.4C438.1 327.1 455 278 455 227.5 455 101.8 353.1 0 227.5 0 101.8 0 0 101.8 0 227.5 0 353.1 101.8 455 227.5 455c50.5.1 99.6-16.9 139.3-48.1l96.4 96.7c11.1 11.1 29.1 11.2 40.2.2l.2-.2c11.1-11.1 11.2-29.1.2-40.2l-.2-.2zM56.9 227.5c0-94.2 76.4-170.6 170.6-170.6 94.2 0 170.6 76.4 170.6 170.6 0 94.2-76.4 170.6-170.6 170.6-94.3 0-170.6-76.4-170.6-170.6z' />
              </svg>
            }
            value={searchValue}
            maxLength={searchInputMaxLength}
          />
        </div>
        <div className={classNames(styles['GamesList__Header-2'], 'GamesList__Header-2')}>
          <Button
            type='button'
            className={classNames(styles['GamesList__Add-Game-Btn'], 'GamesList__Add-Game-Btn')}
            endIcon={
              <Icons.PlusCircle
                onClick={() => {
                  setSearchValue(searchValue);

                  onChange(selectedGameType, searchValue);
                }}
              />
            }>
            {translations.addGame}
          </Button>
        </div>
      </div>

      {games && games.length ? (
        <div className={classNames(styles['GamesList__Fill'], 'GamesList__Fill')}>
          <div className={classNames(styles['TagsCell'], 'TagsCell')}>
            {gameTypes.map((type) => (
              <Tag
                className={classNames(styles['GameDetailsBase__GameTag'], 'GameDetailsBase__GameTag')}
                title={`${type.name}(${type.gameCount})`}
                closeIcon={false}
                inactive={selectedGameType !== type.id}
                key={type.id}
                handleClick={() => {
                  setSelectedGameType((prevTypeId) => (prevTypeId === type.id ? null : type.id));

                  onChange(type.id, searchValue);
                }}
              />
            ))}
          </div>
          <div className={classNames(styles['GamesContainer'], 'GamesContainer')}>
            {games.map((game) => (
              <CardImg title={game.name} image={game.icon} key={game.id} handleClick={() => onGameClick(game.id)} />
            ))}
          </div>
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
