import { Select } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProjectLanguages from './ProjectLanguages';

export default {
  title: 'components/organisms/Project Languages',
  component: ProjectLanguages,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ProjectLanguages
      renderLanguagesSelect={(changeOpenedCustomSelect) => (
        <Select
          options={[
            {
              label: 'AM',
              value: 1
            },
            {
              label: 'EN',
              value: 2
            },
            {
              label: 'RU',
              value: 3
            },
          ]}
          onChange={() => changeOpenedCustomSelect(false)}
        />
      )}

      translations={{
        add: "Add",
        default: "Default",
        supported: "Supported",
        tableHeaders: {
          language: "Language",
          languageTag: "Language Tag",
          type: "Type"
        }
      }}
      tableLoadingRowIds={['EN']}
      shouldShowAddWalletButton
      languages={[
        {
          isDefault: true,
          language: "Armenian",
          languageTag: "AM",
        },
        {
          isDefault: false,
          language: "Russian",
          languageTag: "RU",
        },
        {
          isDefault: false,
          language: "English",
          languageTag: "EN",
        },
      ]}
    />
  );
};
