/* eslint-disable @typescript-eslint/member-ordering */
import { ButtonWithIcon, Divider, GameCard, GameCardProps, Icons, InfoTooltip, ScrollableView } from '@/atom-design-system';
import { Button, Tooltip, Typography } from '@my-ui/core';
import styles from './GameList.module.scss';
import { ChangeEventHandler, Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { ToolsIcon } from '@/icons';

export interface GameListProps {
  games: GameCardProps[];
  playDemo?: string;
  isAllGamesLoaded: boolean;
  isLoadingGames: boolean;
  isProvider?: boolean;
  isShowActivateOrDeactivateButton?: boolean;
  updateWebText?: string;
  updateText?: string;
  isDisabled?: boolean;
  selectedGameIds?: (string | number)[]

  setSelectedItemIds: Dispatch<SetStateAction<(string | number)[]>>
  onChange(page: number): void;
  onGameDetailsClick(id: number): void;
  onActivateOrDeactivateClick?({ id, name, status }): void;
  onGameClick?(gameId: string | number, isDemo: boolean): void;
  updateWebContentButtonClick: () => void;
  updateContentButtonClick: () => void;
  bulkActionsClick?: ({ selectedGamesLength }) => void;
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
  isProvider,
  bulkActionsClick,
  selectedGameIds,
  setSelectedItemIds
}: GameListProps) => {
  const selectedGameIdsHashMap = useMemo(
    () => selectedGameIds ?
      Object.values(selectedGameIds).reduce(
        (acc, id) => ({
          ...acc,
          [id]: true
        }),
        {}
      ) : {},
    [selectedGameIds]
  );

  const gamesHashMap = useMemo(
    () =>
      Object.values(games).reduce(
        (acc, game) => ({
          ...acc,
          [game.id]: game,
        }),
        {} as Record<string, GameCardProps>
      ),
    [games]
  );

  const createItemSelectHandler = useCallback<(id: number | string) => ChangeEventHandler<HTMLInputElement>>(
    (itemId) => () => {
      if (!selectedGameIdsHashMap[itemId]) {
        setSelectedItemIds((prevSelectedItemIds) => [...prevSelectedItemIds, itemId]);
        return;
      }

      setSelectedItemIds((prevSelectedItemIds) => prevSelectedItemIds.filter((id) => id !== itemId));
    },
    [selectedGameIdsHashMap, selectedGameIds]
  );

  const selectedGamesLength = Object.keys(selectedGameIdsHashMap).length

  const firstGameStatus = selectedGameIds && selectedGameIds[0] && gamesHashMap[selectedGameIds[0]].status

  const isEveryGameWithSameStatus = useMemo(() => firstGameStatus && selectedGameIds.every(gameId => gamesHashMap[gameId].status === firstGameStatus), [selectedGameIds, gamesHashMap, firstGameStatus])

  return (
    <ScrollableView
      onPageChange={onChange}
      disableOnPageChange={isAllGamesLoaded || isLoadingGames}
      showLoader={isLoadingGames}
      className={styles.GamesScroll}>
      <div style={{ display: 'flex' }}>
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

        {selectedGamesLength > 1 && (
          <>
            <Divider showDivider />
            <Typography className='size-medium form-color mt-2'>
              Selected: <span className='italic'>{selectedGamesLength} games</span>
            </Typography>
            <Divider showDivider />
            <Button
              className={isDisabled && styles.UpdateButton}
              disabled={isDisabled}
              onClick={() => setSelectedItemIds([])}
              variant='link'
            >
              Clear Selection
            </Button>
            <Divider showDivider />
            {isEveryGameWithSameStatus && <Tooltip text='Activate' showEvent='hover'>
              <ButtonWithIcon
                icon={firstGameStatus === 'Inactive' ? 'BlockButtonIcon' : 'ActivatePopupIcon'}
                onClick={() => bulkActionsClick({ selectedGamesLength })}
                iconProps={{
                  width: '1.8rem',
                  height: '1.8rem'
                }}
              />
            </Tooltip>}
          </>
        )}
      </div>
      <div className={styles.GamesContainer}>
        {games.map((game) => (
          <div className={styles.GameCard} key={game.id}>
            <GameCard
              checkboxProps={{
                onChange: createItemSelectHandler(game.id),
                checked: !!selectedGameIdsHashMap[game.id]
              }}
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
    </ScrollableView>
  );
};

export default GameList;
