import { action } from '@storybook/addon-actions';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import TranslationGroup from './TranslationGroup';

export default {
  component: TranslationGroup,
  decorators: [withKnobs],
  title: 'components/molecules/TranslationGroup'
};

export const Default = () => {
  return (
    <TranslationGroup
      selectedSubCategory={3}
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
