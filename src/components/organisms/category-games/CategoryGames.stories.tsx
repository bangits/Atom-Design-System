import { ItemCategoriesCard } from '@/atom-design-system';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CategoryGames from './CategoryGames';

export default {
  title: 'components/organisms/CategoryGames',
  component: CategoryGames,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <CategoryGames
      buttonProps={{
        onClick: () => action('onButtonClick'),
        children: 'Add Games'
      }}>
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
    </CategoryGames>
  );
};
