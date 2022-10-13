import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import ItemCategoriesCard from './ItemCategoriesCard';

export default {
  component: ItemCategoriesCard,
  decorators: [withKnobs],
  title: 'components/molecules/ItemCategoriesCard'
};

export const Default = () => {
  return (
    <div style={{ width: 100 }}>
      <ItemCategoriesCard
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
