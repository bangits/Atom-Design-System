import React from 'react';
import styles from './LabelGroup.module.scss';
import { Typography } from '@my-ui/core';

const LabelGroup = () => {
  return (
    <div className={styles.LabelGroupWrapper}>
      <Typography component='span' variant='p4' className={styles.FirstLabel}>
        Total Market
      </Typography>
      <Typography component='span' variant='p4' className={styles.CountriesLabel}>
        ( 19 Countries )
      </Typography>
    </div>
  );
};

export default LabelGroup;
