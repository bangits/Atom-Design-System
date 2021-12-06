import React, { FC } from 'react';
import styles from './LabelGroup.module.scss';
import { Typography } from '@my-ui/core';

const LabelGroup: FC = ({ children }) => {
  return (
    <div className={styles.LabelGroupWrapper}>
      <div className={styles.LabelGroupContainer}>
        <Typography component='span' variant='p4' className={styles.FirstLabel}>
          Total Market
        </Typography>
        <Typography component='span' variant='p4' className={styles.CountriesLabel}>
          ( 19 Countries )
        </Typography>
      </div>
      {children}
    </div>
  );
};

export default LabelGroup;
