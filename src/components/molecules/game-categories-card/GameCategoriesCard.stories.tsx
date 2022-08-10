import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import GameCategoriesCard from './GameCategoriesCard';

export default {
  component: GameCategoriesCard,
  decorators: [withKnobs],
  title: 'components/molecules/GameCategoriesCard'
};

export const Default = () => {
  return (
    <div style={{ width: 100 }}>
      <GameCategoriesCard
        index={1}
        checkboxProps={{
          onChange: action('onCheckboxChange')
        }}
        onDeleteButtonClick={action('onDeleteButtonClick')}
        onPlayButtonClick={action('onPlayButtonClick')}
        positionChangeProps={{
          buttonLabel: 'Apply',
          title: 'Change position',
          totalCount: 'Total games count: 12',
          initialPosition: 1,
          onPositionChange: action('onPositionChange')
        }}
        onViewButtonClick={action('onViewButtonClick')}
        showActions
        imgSrc='https://i.ibb.co/LYJf14x/27Wins-1.png'
        name='Burning Hot'
        providerName='Pragmatic'
      />
    </div>
  );
};
