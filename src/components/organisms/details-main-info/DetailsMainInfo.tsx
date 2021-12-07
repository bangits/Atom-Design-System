import React from 'react';
import styles from './DetailsMainInfo.module.scss';
import { Card, TagCountry, Typography } from '@my-ui/core';

const DetailsMainInfo = () => {
  return (
    <Card className={styles.DetailsMainInfoWrapper} borderRadius={1.6}>
      <div className={styles.MainLogoContent}>
        <img src='https://novomatic.com/sites/default/files/2017-05/Logo_N-Shortbrand.png' alt='' />
      </div>
      <Typography variant='p1' component='h3' className={styles.BrandTitle}>
        Novomatic
      </Typography>
      <Typography variant='p3' component='p' className={styles.IdNumbers}>
        ID1234567
      </Typography>
    </Card>
  );
};

export default DetailsMainInfo;
