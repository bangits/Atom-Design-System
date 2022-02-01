import { HidableSelect, HidableSelectProps } from '@/components';
import { Table } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './ProjectCurrencies.module.scss';

export interface ProjectCurrencies {
  currencyCode: string;
  currencyName: string;
  isDefault: boolean;
}

export interface ProjectCurrenciesProps {
  languages: ProjectCurrencies[];
  tableLoadingRowIds: (number | string)[];
  shouldShowAddWalletButton: boolean;
  renderLanguagesSelect: HidableSelectProps['renderCustomSelect'];
  translations: {
    supported: string;
    default: string;
    add: string;
    tableHeaders: {
      currencyName: string;
      currencyCode: string;
      type: string;
    };
  };
}

const ProjectCurrencies: FC<ProjectCurrenciesProps> = ({
  languages,
  tableLoadingRowIds,
  shouldShowAddWalletButton,
  renderLanguagesSelect,
  translations
}) => {
  return (
    <>
      <div className={styles.ProjectCurrenciesTableContent}>
        <Table
          isWithSelection={false}
          checkIsRowActive={(row) => row.isDefault}
          columns={[
            {
              Header: translations.tableHeaders.currencyCode,
              accessor: 'currencyCode' as keyof ProjectCurrencies,
              disableSortBy: true
            },
            {
              Header: translations.tableHeaders.currencyName,
              accessor: 'currencyName' as keyof ProjectCurrencies,
              disableSortBy: true,
              maxWidth: '20rem'
            },

            {
              Header: translations.tableHeaders.type,
              accessor: 'isDefault' as keyof ProjectCurrencies,
              disableSortBy: true,
              renderColumn: (_, isDefault) => (isDefault ? translations.default : translations.supported),
              maxWidth: '10rem'
            }
          ]}
          data={languages}
          className={styles.ProjectCurrenciesTable}
          loadingRowsIds={tableLoadingRowIds}
          loadingRowColumnProperty='currencyCode'
          rowUniqueKey='currencyCode'
        />
        <div className={styles.CurrenciesActionsContainer}>
          {shouldShowAddWalletButton && (
            <HidableSelect renderCustomSelect={renderLanguagesSelect} buttonTitle={translations.add} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCurrencies;
