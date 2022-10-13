import { Icons } from '@/atom-design-system';
import { Button, ButtonProps, Card } from '@my-ui/core';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './AddConditionCard.module.scss';

export interface AddConditionCardProps {
  addButtonProps: ButtonProps;

  addCard?: boolean;
  disabled?: boolean;

  onClick?(): void;
}

const AddConditionCard: FC<PropsWithChildren<AddConditionCardProps>> = ({ addButtonProps, addCard, disabled }) => {
  const content = (
    <div
      className={classNames(styles['AddConditionCard__Border'], {
        [styles['AddConditionCard__Border--disabled']]: disabled
      })}>
      <Button
        startIcon={<Icons.PlusCircleLarge />}
        variant='link'
        {...addButtonProps}
        onClick={(...args) => !disabled && addButtonProps.onClick?.(...args)}
        className={classNames(styles['AddConditionCard__Button'], addButtonProps?.className)}
      />
    </div>
  );

  return addCard ? (
    <Card borderRadius={1.6} className={styles.AddConditionCard}>
      {content}
    </Card>
  ) : (
    content
  );
};

export default AddConditionCard;
