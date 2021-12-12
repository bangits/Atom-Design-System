import { Card, Typography } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './DetailsMainInfo.module.scss';

export interface DetailsMainInfoProps {
  label?: string;
  id?: string;
  src?: string;
  noDataText?: string;
}

const DetailsMainInfo: FC<DetailsMainInfoProps> = ({ label, id, src, noDataText }) => {
  return (
    <Card className={styles.DetailsMainInfoWrapper} borderRadius={1.6}>
      <div className={styles.MainLogoContent}>
        <img src={src} alt='logo' />
      </div>
      <Typography variant='h6' component='h6' className={styles.BrandTitle}>
        {label || noDataText}
      </Typography>
      <Typography variant='p5' component='p' className={styles.IdNumbers}>
        {id || noDataText}
      </Typography>
    </Card>
  );
};

export default DetailsMainInfo;
