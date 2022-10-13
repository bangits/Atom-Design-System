import { EditedFormOptions, Icons } from '@/atom-design-system';
import { IconButton } from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import styles from './SettingsItemGroups.module.scss';

export interface SettingsItemGroupProps {
  indexValue: number;
  groupTitle: string;
  elements: string[];
  noDataText?: string;
  translations: {
    groupTitle: string;
    elements: string;
  };
  hideSortIcon?: boolean;
  onEdit?(): void;
  onRemove?(): void;
}

const SettingsItemGroup: FC<SettingsItemGroupProps> = ({
  indexValue,
  translations,
  groupTitle,
  elements,
  noDataText,
  onEdit,
  onRemove,
  hideSortIcon
}) => {
  return (
    <div className={styles.SettingsItemGroup}>
      <span className={styles['SettingsItemGroup__Index']}>{indexValue}</span>
      <EditedFormOptions
        options={[
          {
            title: translations.groupTitle,
            value: groupTitle,
            variant: 'default'
          },
          {
            title: translations.elements,
            value: elements,
            variant: 'tag'
          }
        ]}
        noDataText={noDataText || 'N/A'}
      />

      <div className={styles['SettingsItemGroup__Actions']}>
        {onRemove && (
          <IconButton onClick={onRemove} className={styles['SettingsItemGroup__Remove']} icon={<Icons.CloseIcon />} />
        )}
        {onEdit && (
          <IconButton onClick={onEdit} className={styles['SettingsItemGroup__Edit']} icon={<Icons.EditIcon />} />
        )}
        {!hideSortIcon && (
          <IconButton
            className={classNames(styles['SettingsItemGroup__Sort'], 'DnD-SortIcon')}
            icon={<Icons.SortIcon />}
          />
        )}
      </div>
    </div>
  );
};

export default SortableElement(SettingsItemGroup);
