import { EditedFormOptions, Icons } from '@/atom-design-system';
import { IconButton } from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import styles from './SettingsFooter.module.scss';

export interface SettingsFooterGroupProps {
  indexValue: number;
  groupTitle: string;
  pages: string[];
  noDataText?: string;
  translations: {
    groupTitle: string;
    pages: string;
  };
  onEdit?(): void;
}

const SettingsFooterGroup: FC<SettingsFooterGroupProps> = ({
  indexValue,
  translations,
  groupTitle,
  pages,
  noDataText,
  onEdit
}) => {
  return (
    <div className={styles.SettingsFooterGroup}>
      <span className={styles['SettingsFooterGroup__Index']}>{indexValue}</span>
      <EditedFormOptions
        options={[
          {
            title: translations.groupTitle,
            value: groupTitle,
            variant: 'default'
          },
          {
            title: translations.pages,
            value: pages,
            variant: 'tag'
          }
        ]}
        noDataText={noDataText || 'N/A'}
      />

      <div className={styles['SettingsFooterGroup__Actions']}>
        {onEdit && (
          <IconButton onClick={onEdit} className={styles['SettingsFooterGroup__Edit']} icon={<Icons.EditIcon />} />
        )}
        <IconButton
          className={classNames(styles['SettingsFooterGroup__Sort'], 'DnD-SortIcon')}
          icon={<Icons.SortIcon />}
        />
      </div>
    </div>
  );
};

export default SortableElement(SettingsFooterGroup);
