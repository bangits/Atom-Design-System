import { EditedFormOptions, Icons } from '@/atom-design-system';
import { IconButton } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import styles from './SettingsItemGroups.module.scss';

export interface SettingsItemGroupProps {
  indexValue: number;
  groupTitle: string;
  elements: ReactNode[];
  noDataText?: string;
  translations: {
    groupTitle: string;
    elements: string;
  };
  customElements?: boolean;
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
  hideSortIcon,
  customElements
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
          ...[
            customElements
              ? {
                  title: translations.elements,
                  value: elements,
                  variant: 'custom' as const,
                }
              : {
                  title: translations.elements,
                  value: elements.map((el) => el.toString()),
                  variant: 'tag' as const
                }
          ]
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
