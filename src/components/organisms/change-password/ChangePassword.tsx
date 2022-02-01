import React from 'react';
import styles from './ChangePassword.module.scss';
import { Card, Typography, Button } from '@my-ui/core';
import { ChangePasswordIcon } from '@/icons';
import { PasswordInput } from '@/components/molecules';

const ChangePassword = () => {
  return (
    <div className={styles.ChangePasswordWrapper}>
      <Card className={styles.CardWrapper}>
        <div className={styles.ChangeContent}>
          <ChangePasswordIcon className={styles.Icon}/>
          <Typography variant='h2' component='h2'>
            Change Password
          </Typography>
          <Typography variant='p3' component='p'>
            Please change your password below.
          </Typography>
          <div className={styles.InputsGroup}>
            <div className={styles.InputContent}>
              <PasswordInput fullWidth startIcon={null} />
            </div>
            <div className={styles.InputContent}>
              <PasswordInput fullWidth startIcon={null} />
            </div>
          </div>
          <div className={styles.BtnGroup}>
            <Button variant='ghost'>Skip</Button>
            <Button>Change</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChangePassword;
