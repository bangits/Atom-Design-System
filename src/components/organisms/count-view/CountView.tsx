import { Card, Tag, Typography } from '@my-ui/core';
import React from 'react';
import styles from './CountView.module.scss';

const CountView = () => {
  return (
    <Card className={styles.CountViewWrapper} borderRadius={1.6}>
      <Typography component='span' variant='p5' className={styles.CardTitle}>
        Total Game Count
      </Typography>
      <div className={styles.TagWrapper}>
        <Tag title='1024' color='primary' />
      </div>
    </Card>
  );
};

export default CountView;
