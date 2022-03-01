import { Select } from '@my-ui/core';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import UserLanguages from './UserLanguages';

export default {
  title: 'components/organisms/User Languages',
  component: UserLanguages,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <UserLanguages
      onDefaultLanguageChange={action('onDefaultLanguageChange')}
      // onDefaultBallanceChange={action('onDefaultBallanceChange')}
      tableLoadingRowIds={[2]}
      translations={{
        add: 'Add',
        id: 'ID',
        other: 'Other',
        code: 'code',
        isDefault: 'default',
        languageTag: 'Language ID',
        name: 'Language Name'
      }}
      languages={[
        {
          id: 1,
          isDefault: true,
          languageId: 1,
          code: 'ENG',
          name: 'English'
        },
        {
          id: 2,
          isDefault: false,
          languageId: 1,
          code: 'ARM',
          name: 'Armenian',
        },
        {
          id: 3,
          isDefault: false,
          languageId: 3,
          code: 'RUS',
          name: 'Russian',
        }
      ]}
      renderLanguagesSelect={(changeOpenedLanguagesSelect) => (
        <Select
          options={[
            {
              label: 'English',
              value: 1
            },
            {
              label: 'Russian',
              value: 2
            }
          ]}
          onChange={() => changeOpenedLanguagesSelect(false)}
        />
      )}
    />
  );
};
