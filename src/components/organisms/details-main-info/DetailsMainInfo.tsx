import React, { FC, ReactNode } from 'react';
import styles from './DetailsMainInfo.module.scss';
import { Card, TagCountry, Typography } from '@my-ui/core';

export interface DetailsMainInfoProps {
  imgURL: string;
  nameLabel: string;
  idLabel: string;
  noDataText?: ReactNode;
}

const DetailsMainInfo: FC<DetailsMainInfoProps> = ({ imgURL, nameLabel, idLabel, noDataText }) => {
  return (
    <Card className={styles.DetailsMainInfoWrapper} borderRadius={1.6}>
      <div className={styles.MainLogoContent}>
        <img src={imgURL} alt={idLabel} />
      </div>
      <Typography variant='p1' component='h3' className={styles.BrandTitle}>
        {nameLabel || noDataText}
      </Typography>
      <Typography variant='p3' component='p' className={styles.IdNumbers}>
        {idLabel || noDataText}
      </Typography>
    </Card>
  );
};

export default DetailsMainInfo;
