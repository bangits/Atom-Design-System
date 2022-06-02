import { TranslationGroups } from '@/atom-design-system';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Translation from './Translation';

export default {
  component: Translation,
  decorators: [withKnobs],
  title: 'components/pages/Translation'
};

export const Default = () => {
  return (
    <Translation
      translations={{
        cancel: 'Cancel',
        save: 'Save'
      }}
      collections={[
        {
          id: 1,
          name: 'Content'
        },
        {
          id: 2,
          name: 'System'
        }
      ]}
      onCollectionChange={action('onCollectionChange')}
      translationLeftContent={
        <TranslationGroups
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
          searchValue=""
        />
      }
    />
  );
};
