import { ReactNode, useCallback, useMemo, useState } from 'react';
import { Card, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import styles from './SidebarLabelField.module.scss';
import { LabelManagerItem } from '../label-manager';
import { LabelManagerTag } from '../label-manager-tag';
import { Icons } from '@/atom-design-system';
import { PrimaryKey, TRANSLATION_CHANGED_VALUE, useActionsMessagesHandler, useTranslation } from '@atom/common';

export interface SidebarLabelFieldProps {
  maxPossibleAttachedLabelsCount?: number;
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
  maxPossibleAttachedLabelsCount = 1,
  entityId,
  labelManagerContainer: LabelManagerContainer
}: SidebarLabelFieldProps) => {
  const t = useTranslation();
  const [deleteLabels] = deleteAction;
  const [isLabelManagerVisible, setIsLabelManagerVisible] = useState(false);
  const handler = useActionsMessagesHandler();

  const canAttachMoreLabels = useMemo(
    () => (labelsList ? labelsList?.length < maxPossibleAttachedLabelsCount : true),
    [labelsList, maxPossibleAttachedLabelsCount]
  );

  const handleAdd = useCallback(() => {
    canAttachMoreLabels && !isLabelManagerVisible && setIsLabelManagerVisible(true);
  }, [labelsList, canAttachMoreLabels]);

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
      <div className={styles.Wrapper}>
        <span
          className={classNames(styles.FieldName, {
            [styles['FieldName--margin-top']]: !!labelsList?.length
          })}>
          Labels
        </span>
        <div className={styles.LabelsListWrapper}>
          {!labelsList?.length ? (
            <span className={styles.NoDataText}>{noDataText}</span>
          ) : (
            <>
              {labelsList?.map((label) => (
                <>
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
                </>
              ))}
            </>
          )}
        </div>
        <Tooltip
          text={
            !canAttachMoreLabels &&
            t.get('labelsMaxCountTooltip').replace(TRANSLATION_CHANGED_VALUE, String(maxPossibleAttachedLabelsCount))
          }>
          <Icons.AddIcon
            onClick={handleAdd}
            className={classNames(styles.Icon, {
              [styles['Icon--disabled']]: !canAttachMoreLabels,
              [styles['Icon--margin-top']]: !!labelsList?.length
            })}
          />
        </Tooltip>
      </div>

      {isLabelManagerVisible && (
        <div className={styles.LabelManagerContainer}>
          <LabelManagerContainer labelManagerProps={labelManagerProps} />
        </div>
      )}
    </Card>
  );
};
