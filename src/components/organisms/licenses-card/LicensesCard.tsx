import { AddCircleIcon } from '@/icons';
import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './LicensesCard.module.scss';

export interface LicensesCardProps {
  addLicense: string;
  clickHere: string;
  toDoSomething: string;
  col: 6 | 12;
  onClick: () => void;
}

const LicensesCard: FC<LicensesCardProps> = ({ addLicense, clickHere, toDoSomething, col, onClick }) => {
  return (
    <div
      className={classNames(styles.LicensesCard, {
        [styles[`LicensesCard--col-${col}`]]: col
      })}>
      <div className={styles['LicensesCard--icon']}>
        <AddCircleIcon />
      </div>
      <Typography className={styles['LicensesCard--title']} variant='p3'>
        {addLicense}
      </Typography>
      <p onClick={onClick} className={styles['LicensesCard--click']}>
        <span>{clickHere}</span> {toDoSomething}
      </p>
    </div>
  );
};

export default LicensesCard;
