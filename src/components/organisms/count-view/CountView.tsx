import { Card, Tag, Typography } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './CountView.module.scss';

export interface CountViewProps {
  title?: string;
  count?: string;
  noDataText?: string;
}

const CountView: FC<CountViewProps> = ({ title, count, noDataText }) => {
  return (
    <Card className={styles.CountViewWrapper} borderRadius={1.6}>
      <Typography component='span' variant='p5' color='primary' className={styles.CardTitle}>
        {title}
      </Typography>
      <div className={styles.TagWrapper}>
        <Tag title={count || '0'} color='primary' />
      </div>
    </Card>
  );
};

export default CountView;
