import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import TranslationGroups from './TranslationGroups';

export default {
  title: 'components/organisms/TranslationGroups',
  component: TranslationGroups,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <TranslationGroups
      selectedSubCategory={2}
      translationsGroups={[
        {
          id: 1,
          name: 'Partner Management',
          subCategories: [
            {
              id: 2,
              name: 'Partners'
            },
            {
              id: 3,
              name: 'Partners2'
            }
          ]
        },
        {
          id: 4,
          name: 'Game Management',
          subCategories: [
            {
              id: 5,
              name: 'Games'
            },
            {
              id: 6,
              name: 'Games2'
            }
          ]
        }
      ]}
      onTranslationGroupSelect={action('onTranslationGroupSelect')}
    />
  );
};
