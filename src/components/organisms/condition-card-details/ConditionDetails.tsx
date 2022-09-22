import { Divider } from '@/atom-design-system';
import { PlusIcon } from '@/icons';
import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './ConditionDetails.module.scss';

export interface ConditionDetailsProps {
  conditionDetailsLabel: string;
  conditionDetailsSubLabel: string;
  col: 6 | 12;
  addActivity: () => void;
  addCriteria: () => void;
}

const ConditionDetails: FC<ConditionDetailsProps> = ({
  conditionDetailsLabel,
  conditionDetailsSubLabel,
  col,
  addActivity,
  addCriteria
}) => {
  return (
    <div
      className={classNames(styles.ConditionCard, {
        [styles[`ConditionCard--col-${col}`]]: col
      })}>
      <Typography className={styles['ConditionCard--title']} variant='h6'>
        {conditionDetailsLabel}
      </Typography>
      <Typography className={styles['ConditionCard--sub-title']} variant='p3'>
        {conditionDetailsSubLabel}
      </Typography>

      <div className={styles[`ConditionCard--actions`]}>
        <div onClick={addActivity} className={styles[`ConditionCard--actions-left-block`]}>
          <PlusIcon />
          <Typography variant='p4'>Add Activity</Typography>
        </div>
        <Divider large />
        <div onClick={addCriteria} className={styles[`ConditionCard--actions-right-block`]}>
          <PlusIcon />
          <Typography variant='p4'>Add Criteria</Typography>
        </div>
      </div>
    </div>
  );
};

export default ConditionDetails;
