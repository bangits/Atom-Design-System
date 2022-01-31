import { HidableSelect, HidableSelectProps, Table } from '@/components';
import React, { FC } from 'react';
import styles from './ProjectLanguages.module.scss';

export interface ProjectLanguages {
  languageTag: string;
  language: string;
  isDefault: boolean;
}

export interface ProjectLanguagesProps {
  languages: ProjectLanguages[];
  tableLoadingRowIds: (number | string)[];
  shouldShowAddWalletButton: boolean;
  renderLanguagesSelect: HidableSelectProps['renderCustomSelect'];
  translations: {
    supported: string;
    default: string;
    add: string;
    tableHeaders: {
      languageTag: string;
      language: string;
      type: string;
    };
  };
}

const ProjectLanguages: FC<ProjectLanguagesProps> = ({
  languages,
  tableLoadingRowIds,
  shouldShowAddWalletButton,
  renderLanguagesSelect,
  translations
}) => {
  return (
    <>
      <div className={styles.ProjectLanguagesTableContent}>
        <Table
          isWithSelection={false}
          checkIsRowActive={(row) => row.isDefault}
          columns={[
            {
              Header: translations.tableHeaders.languageTag,
              accessor: 'languageTag' as keyof ProjectLanguages,
              disableSortBy: true,
            },
            {
              Header: translations.tableHeaders.language,
              accessor: 'language' as keyof ProjectLanguages,
              disableSortBy: true,
              maxWidth: '20rem'
            },

            {
              Header: translations.tableHeaders.type,
              accessor: 'isDefault' as keyof ProjectLanguages,
              disableSortBy: true,
              renderColumn: (_, isDefault) => (isDefault ? translations.default : translations.supported)
            }
          ]}
          data={languages}
          className={styles.ProjectLanguagesTable}
          loadingRowsIds={tableLoadingRowIds}
          loadingRowColumnProperty='languageTag'
          rowUniqueKey='languageTag'
        />
        <div className={styles.LanguagesActionsContainer}>
          {shouldShowAddWalletButton && (
            <HidableSelect renderCustomSelect={renderLanguagesSelect} buttonTitle={translations.add} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectLanguages;
