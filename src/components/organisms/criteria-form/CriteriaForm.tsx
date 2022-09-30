import { Icons } from '@/atom-design-system';
import { Button, ButtonProps, Card, IconButton } from '@my-ui/core';
import classNames from 'classnames';
import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './CriteriaForm.module.scss';

export interface CriteriaFormProps {
  fields?: ReactNode[][];
  leftButtons?: ReactNode;
  rightButtons?: ReactNode;

  criteriaConditionProps?: ButtonProps;
  criteriaFieldConditionProps?: ButtonProps;

  viewModeElement?: ReactNode;

  onCriteriaFieldRemove?(index: number): void;
}

const CriteriaForm: FC<PropsWithChildren<CriteriaFormProps>> = ({
  fields = [],
  leftButtons,
  rightButtons,
  criteriaConditionProps,
  criteriaFieldConditionProps,
  viewModeElement,
  onCriteriaFieldRemove
}) => {
  const showCondition = fields.length > 1;

  const content = !viewModeElement && (
    <>
      <div className={styles.CriteriaForm__Fields}>
        {fields.map((field, index) => (
          <div className={styles.CriteriaForm__Field} key={index}>
            {showCondition && criteriaFieldConditionProps && (
              <Button
                disabled={!!index}
                {...criteriaFieldConditionProps}
                variant='ghost'
                className={classNames(
                  styles['CriteriaForm__Field-Condition'],
                  styles['Condition'],
                  criteriaFieldConditionProps.className
                )}>
                {criteriaFieldConditionProps.children}

                {!index && <Icons.SwitchIcon />}
              </Button>
            )}

            {field}

            {onCriteriaFieldRemove && (
              <div className={styles['CriteriaForm__Field-Remove']}>
                <IconButton onClick={() => onCriteriaFieldRemove(index)} icon={<Icons.CloseIcon />} />
              </div>
            )}
          </div>
        ))}
      </div>

      {(leftButtons || rightButtons) && (
        <div className={styles.CriteriaForm__Buttons}>
          {leftButtons && <div className={styles['CriteriaForm__Left-Buttons']}>{leftButtons}</div>}
          {rightButtons && <div className={styles['CriteriaForm__Right-Buttons']}>{rightButtons}</div>}
        </div>
      )}
    </>
  );

  return (
    <Card
      borderRadius={viewModeElement ? 2.4 : 0.8}
      className={classNames(styles.CriteriaForm, {
        [styles['CriteriaForm--ShowedCondition']]: showCondition,
        [styles['CriteriaForm--ViewMode']]: viewModeElement
      })}>
      {criteriaConditionProps && (
        <Button
          {...criteriaConditionProps}
          className={classNames(
            styles.CriteriaForm__Condition,
            styles.Condition,
            styles.Condition,
            criteriaConditionProps.className
          )}>
          {criteriaConditionProps.children}
          <Icons.SwitchIcon />
        </Button>
      )}

      {viewModeElement || content}
    </Card>
  );
};

export default CriteriaForm;
