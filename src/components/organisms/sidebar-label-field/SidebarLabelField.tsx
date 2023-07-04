import { ReactNode, useCallback, useMemo, useState } from 'react';
import { Card, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import styles from './SidebarLabelField.module.scss';
import { LabelManagerItem } from '../label-manager';
import { LabelManagerTag } from '../label-manager-tag';
import { Icons } from '@/atom-design-system';
import { PrimaryKey, useActionsMessagesHandler } from '@atom/common';

export interface SidebarLabelFieldProps {
  deleteAction: any;
  refetch: () => void;
  labelsList: LabelManagerItem[];
  labelManagerContainer: React.FC<any>;
  entityId: PrimaryKey;
  typeId: number;
  noDataText?: string | ReactNode;
  addSpacings?: boolean;
}

export const SidebarLabelField = ({
  noDataText,
  refetch,
  labelsList,
  deleteAction,
  typeId,
  entityId,
  labelManagerContainer: LabelManagerContainer
}: SidebarLabelFieldProps) => {
  const [deleteLabels] = deleteAction;
  const [isLabelManagerVisible, setIsLabelManagerVisible] = useState(false);
  const handler = useActionsMessagesHandler();

  const handleAdd = useCallback(() => {
    !labelsList?.length && !isLabelManagerVisible && setIsLabelManagerVisible(true);
  }, [labelsList]);

  const handleRemove = useCallback(
    (id: PrimaryKey) =>
      deleteLabels({
        ids: [entityId],
        labelId: id,
        typeId
      })
        .unwrap()
        .then((actionsResults) => {
          handler({ actionsResults });
          onApply?.(id, !!actionsResults.successCount);
        }),
    [entityId, typeId]
  );

  const onApply = useCallback(
    (_, isSuccess) => {
      if (isSuccess) {
        refetch?.();
        setIsLabelManagerVisible(false);
      }
    },
    [refetch]
  );

  const labelManagerProps = useMemo(
    () => ({
      actionType: 'add',
      searchAction: true,
      entityIds: [entityId],
      typeId,
      onApply,
      onOutsideClick: () => setIsLabelManagerVisible(false)
    }),
    [entityId, typeId]
  );

  return (
    <Card borderRadius={1.6} className={styles.Card}>
      <div className={styles.FielNameWrapper}>
        <span className={styles.FieldName}>Labels</span>
        <div className={styles.NoDataTextWrapper}>
          {!labelsList?.length && <span className={styles.NoDataText}>{noDataText}</span>}
          <Tooltip text={!!labelsList?.length && 'You can add up to 1 label(s)'}>
            <Icons.AddIcon
              onClick={handleAdd}
              className={classNames(styles.Icon, {
                [styles['Icon--disabled']]: !!labelsList?.length
              })}
            />
          </Tooltip>
        </div>
      </div>
      <div>
        {labelsList?.map((label) => (
          <div className={styles.LabelWrapper}>
            <LabelManagerTag
              isBorderedOnHover
              onSufficIconClick={() => handleRemove(label.id)}
              labelText={label.name}
              key={label.id}
              isActive={label.isActive}
              hasSuffixIcon
            />
          </div>
        ))}
      </div>
      {isLabelManagerVisible && (
        <div className={styles.LabelManagerContainer}>
          <LabelManagerContainer labelManagerProps={labelManagerProps} />
        </div>
      )}
    </Card>
  );
};
