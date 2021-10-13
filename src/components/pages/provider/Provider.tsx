import React from 'react';
import styles from './Provider.module.scss';
import { Button, TextInput, TextInputProps, Typography, Card } from '@my-ui/core';

const Provider = () => {
  return (
    <div className={styles.ProviderWrapper}>
      <Card borderRadius='1.6' className={styles.ProviderCard}>
        <div className={styles.ProviderContainer}>
          <Typography variant='h2' color='primary' className={styles.ProviderTitle}>
            Add Provider
          </Typography>
          <div className={styles.ProviderContainerWrapper}>
            <div className={styles.ProviderFormGroup}>
              <TextInput containerClassName={styles.ProviderForm} />
              <TextInput containerClassName={styles.ProviderForm} />
              <TextInput containerClassName={styles.ProviderForm} />
              <TextInput containerClassName={styles.ProviderForm} />
              <TextInput containerClassName={styles.ProviderForm} />
              <TextInput containerClassName={styles.ProviderForm} />
              <TextInput containerClassName={styles.ProviderForm} />
            </div>
          </div>
        </div>
        <div className={styles.ProviderButtonGroup}>
          <Button variant='ghost' className={styles.ProviderCloseButton}>
            Close
          </Button>
          <Button>Save</Button>
        </div>
      </Card>
    </div>
  );
};

export default Provider;
