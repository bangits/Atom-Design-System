import { withKnobs } from '@storybook/addon-knobs';
import GameCategoriesCard from './GameCategoriesCard';

export default {
  component: GameCategoriesCard,
  decorators: [withKnobs],
  title: 'components/molecules/GameCategoriesCard'
};

export const Default = () => {
  return (
    <div style={{ width: 100, height: 110 }}>
      <GameCategoriesCard />
    </div>
  );
};
