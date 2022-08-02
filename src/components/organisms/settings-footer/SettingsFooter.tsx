import { arrayMoveMutable, Icons, SortableList } from '@/atom-design-system';
import { Button, ButtonProps, Card } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { SortEndHandler } from 'react-sortable-hoc';
import styles from './SettingsFooter.module.scss';
import SettingsFooterGroup, { SettingsFooterGroupProps } from './SettingsFooterGroup';

export interface SettingsFooterProps {
  addButtonProps?: ButtonProps;
  groups: Omit<SettingsFooterGroupProps, 'translations'>[];
  translations: SettingsFooterGroupProps['translations'];
  onSortEnd?: SortEndHandler;
}

const SettingsFooter: FC<SettingsFooterProps> = ({
  addButtonProps = {},
  groups: groupsProp,
  onSortEnd,
  translations
}) => {
  const [groups, setGroups] = useState(groupsProp);

  useEffect(() => {
    setGroups(groupsProp);
  }, [groupsProp]);

  return (
    <div className={styles.SettingsFooter}>
      <Button
        variant='link'
        startIcon={<Icons.PlusCircleLarge />}
        {...addButtonProps}
        className={classNames(addButtonProps.className, styles['SettingsFooter__Button'])}
      />

      <Card className={styles['SettingsFooter__Card']}>
        <SortableList
          onSortEnd={(sortInfo, event) => {
            const { oldIndex, newIndex } = sortInfo;

            setGroups((prevItems) => [...arrayMoveMutable(prevItems, oldIndex, newIndex)]);

            onSortEnd(sortInfo, event);
          }}>
          {groups.map((g, index) => (
            <SettingsFooterGroup index={index} translations={translations} {...g} />
          ))}
        </SortableList>
      </Card>
    </div>
  );
};

export default SettingsFooter;
