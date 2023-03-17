/* eslint-disable @typescript-eslint/member-ordering */
import { ButtonWithIcon, Divider, GameCard, GameCardProps, Icons, InfoTooltip, ScrollableView } from '@/atom-design-system';
import { Button, Tooltip, Typography } from '@my-ui/core';
import styles from './GameList.module.scss';
import { ChangeEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import { ToolsIcon } from '@/icons';

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
  bulkActionsClick?: ({ selectedGamesLength }) => void;
  selectedGamesClick?: ({ gameIds }) => void;
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
  isProvider,
  bulkActionsClick,
  selectedGamesClick
}: GameListProps) => {

  const [selectedItemIds, setSelectedItemIds] = useState([]);

  const selectedItemIdsHashMap = useMemo(
    () =>
      Object.values(selectedItemIds).reduce(
        (acc, id) => ({
          ...acc,
          [id]: true
        }),
        {}
      ),
    [selectedItemIds]
  );
  const createItemSelectHandler = useCallback<(id: number | string) => ChangeEventHandler<HTMLInputElement>>(
    (itemId) => () => {
      if (!selectedItemIdsHashMap[itemId]) {
        setSelectedItemIds((prevSelectedItemIds) => [...prevSelectedItemIds, itemId]);
        selectedGamesClick({ gameIds: selectedItemIds })
        return;
      }

      setSelectedItemIds((prevSelectedItemIds) => prevSelectedItemIds.filter((id) => id !== itemId));
    },
    [selectedItemIdsHashMap]
  );

  const selectedGamesLength = Object.keys(selectedItemIdsHashMap).length

  // console.log(selectedGamesLength);

  useEffect(() => { setSelectedItemIds([]) }, [])
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
            <Tooltip text='Activate' showEvent='hover'>
              <ButtonWithIcon
                icon='BlockButtonIcon'
                onClick={() => bulkActionsClick({ selectedGamesLength })}
                iconProps={{
                  width: '1.8rem',
                  height: '1.8rem'
                }}
                className={styles.RefreshButton} />
            </Tooltip>
          </>
        )}
      </div>
      <div className={styles.GamesContainer}>
        {games.map((game) => (
          <div className={styles.GameCard} key={game.id}>
            <GameCard
              checkboxProps={{
                onChange: createItemSelectHandler(game.id),
                checked: !!selectedItemIdsHashMap[game.id]
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
