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
          <ChangePasswordIcon />
          <Typography variant="h3" component="h3">Change Password</Typography>
          <Typography variant="p4" component="p">Please change your password below.</Typography>
          <PasswordInput/>
          <PasswordInput/>
          <div>
              <Button title="Skip"/>
              <Button/>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChangePassword;
