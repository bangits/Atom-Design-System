import { Icons } from '@/atom-design-system';
import { HidableSelect } from '@/components';
import { IconButton, Tooltip } from '@my-ui/core';
import React, { ReactNode } from 'react';
import { Table } from '..';
import styles from './UserLanguages.module.scss';

export interface UserLanguage {
  code: string;
  id: number | string;
  isDefault: boolean;
  languageId: number;
  name: string;
}

export interface UserLanguagesProps {
  languages: UserLanguage[];
  onDefaultLanguageChange: (currencyId: number | string) => void;
  // onDefaultBallanceChange: (balance: number) => void;
  tableLoadingRowIds: (number | string)[];
  balanceMaxLength?: number;
  shouldShowAddLanguageButton?: boolean;
  renderLanguagesSelect: (changeOpenedLanguagesSelect: (isOpened: boolean) => void) => ReactNode;
  translations: {
    id: string;
    languageTag: string;
    add: string;
    isDefault: string;
    code: string;
    name: string;
    other: string;
  };
}

const UserLanguages = ({
  languages,
  translations,
  tableLoadingRowIds,
  renderLanguagesSelect,
  onDefaultLanguageChange,
  shouldShowAddLanguageButton = true
}: UserLanguagesProps) => {
  return (
    <>
      <div className={styles.UserDetailsTableContent}>
        <Table
          isWithSelection={false}
          actions={[
            {
              component: (props) => (
                <Tooltip showEvent='hover' text={translations.isDefault}>
                  <IconButton icon={<Icons.CheckButtonIcon />} {...props} />
                </Tooltip>
              ),
              onClick: (column) => onDefaultLanguageChange(column.id),
              shouldShow: (column) => !column.isDefault,
              props: {}
            }
          ]}
          checkIsRowActive={(row) => row.isDefault}
          columns={[
            {
              Header: 'Language Tag',
              accessor: 'code' as keyof UserLanguage,
              disableSortBy: true,
              renderColumn: (_, value) => value?.toUpperCase()
            },
            {
              Header: 'language',
              accessor: 'name' as keyof UserLanguage,
              disableSortBy: true,
              renderColumn: (_, value) => value.toString()
            },
            {
              Header: 'type',
              accessor: 'isDefault' as keyof UserLanguage,
              disableSortBy: true,
              renderColumn: (_, isDefault) => (isDefault ? translations.isDefault : translations.other),
              maxWidth: '11rem'
            }
          ]}
          data={languages}
          className={styles.UserDetailsTable}
          loadingRowsIds={tableLoadingRowIds}
          loadingRowColumnProperty='id'
          rowUniqueKey='languageId'
          scrollProps={{
            showHorizontalScroll: false
          }}
        />
        <div className={styles.LanguageActionsContainer}>
          {shouldShowAddLanguageButton && (
            <HidableSelect renderCustomSelect={renderLanguagesSelect} buttonTitle={translations.add} />
          )}
        </div>
      </div>
    </>
  );
};

export default UserLanguages;
