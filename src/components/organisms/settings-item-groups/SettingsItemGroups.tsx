import { arrayMoveMutable, Icons, SortableList } from '@/atom-design-system';
import { Button, ButtonProps, Card } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { SortEndHandler } from 'react-sortable-hoc';
import SettingsItemGroup, { SettingsItemGroupProps } from './SettingsItemGroup';
import styles from './SettingsItemGroups.module.scss';

export interface SettingsItemGroupsProps {
  addButtonProps?: ButtonProps;
  groups: Omit<SettingsItemGroupProps, 'translations'>[];
  translations: SettingsItemGroupProps['translations'];
  onSortEnd?: SortEndHandler;

  showCard?: boolean;
}

const SettingsItemGroups: FC<SettingsItemGroupsProps> = ({
  addButtonProps,
  groups: groupsProp,
  onSortEnd,
  translations,
  showCard = true
}) => {
  const [groups, setGroups] = useState(groupsProp);

  const content = (
    <SortableList
      onSortEnd={(sortInfo, event) => {
        const { oldIndex, newIndex } = sortInfo;

        setGroups((prevItems) => [...arrayMoveMutable(prevItems, oldIndex, newIndex)]);

        onSortEnd(sortInfo, event);
      }}>
      {groups.map((g, index) => (
        <SettingsItemGroup index={index} translations={translations} {...g} />
      ))}
    </SortableList>
  );

  useEffect(() => {
    setGroups(groupsProp);
  }, [groupsProp]);

  return (
    <div className={styles.SettingsItemGroups}>
      {addButtonProps && (
        <Button
          variant='link'
          startIcon={<Icons.PlusCircleLarge />}
          {...addButtonProps}
          className={classNames(addButtonProps.className, styles['SettingsItemGroups__Button'])}
        />
      )}

      {showCard ? <Card className={styles['SettingsItemGroups__Card']}>{content}</Card> : content}
    </div>
  );
};

export default SettingsItemGroups;
