import { withKnobs } from '@storybook/addon-knobs';
import GameList from './GameList';

export default {
  component: GameList,
  decorators: [withKnobs],
  title: 'components/organisms/GameList'
};

export const Default = () => {
  return (
    <GameList
      updateWebText='Update Web Content'
      updateText='Update Game Content'
      onGameDetailsClick={() => {}}
      games={[
        {
          id: 1,
          name: 'Double Joker',
          icon: 'https://storageaccountatom.blob.core.windows.net/dev-storage/8c904504-3827-49f6-92de-42694ab77305_file'
        }
      ]}
      playDemo='Play Demo'
      isAllGamesLoaded={false}
      isLoadingGames={false}
      onChange={function (page: number): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
};
