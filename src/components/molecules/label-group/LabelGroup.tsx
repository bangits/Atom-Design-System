import React, { FC } from 'react';
import styles from './LabelGroup.module.scss';
import { Typography } from '@my-ui/core';

export interface LabelGroupProps {
  title?: string;
  totalLabel?: string;
}

const LabelGroup: FC<LabelGroupProps> = ({ children, title, totalLabel }) => {
  return (
    <div className={styles.LabelGroupWrapper}>
      <div className={styles.LabelGroupContainer}>
        <Typography component='span' variant='p4' className={styles.FirstLabel}>
          {title}
        </Typography>
        <Typography component='span' variant='p4' className={styles.CountriesLabel}>
          ( {totalLabel} )
        </Typography>
      </div>
      {children}
    </div>
  );
};

export default LabelGroup;
