import { PlusIcon } from '@/icons';
import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './AddConditionCard.module.scss';

export interface AddConditionCardProps {
  addCondition: string;
  col: 6 | 12;
  onClick: () => void;
  disabled?: boolean;
}

const AddConditionCard: FC<AddConditionCardProps> = ({ addCondition, col, onClick, disabled }) => {
  return (
    <div
      onClick={!disabled ? onClick : null}
      className={classNames(styles.ConditionCard, {
        [styles[`ConditionCard--col-${col}`]]: col,
        [styles['ConditionCard--disabled']]: disabled
      })}>
      <PlusIcon />
      <Typography className={styles['ConditionCard--title']} variant='p3'>
        {addCondition}
      </Typography>
    </div>
  );
};

export default AddConditionCard;
