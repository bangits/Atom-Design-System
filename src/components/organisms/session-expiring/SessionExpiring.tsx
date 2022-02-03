import { WarningIcon } from '@/icons';
import { Button, Card, TextInput, Typography } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './SessionExpiring.module.scss';
import Timer from './Timer';

export interface SessionExpiringProps {
  renderInputs?: (InputComponent: typeof TextInput, name: string) => JSX.Element;
  title: string;
  subTitle: string;
  logOutButton: string;
  extend: string;
  timeRemaining: string;
  buttonProps?: string;
}

const ChangePassword: FC<SessionExpiringProps> = ({
  title,
  subTitle,
  logOutButton,
  extend,
  buttonProps,
  timeRemaining
}) => {
  return (
    <div className={styles.SessionExpiringWrapper}>
      <Card className={styles.CardWrapper}>
        <div className={styles.ChangeContent}>
          <WarningIcon className={styles.Icon} width='8rem' />
          <Typography variant='h2' component='h2'>
            {title}
          </Typography>
          <Typography variant='p3' component='p'>
            {subTitle}
          </Typography>
          <div>{timeRemaining}</div>
          <div className={styles.InputsGroup}>
            <div className={styles.Timer}>
              <Timer />
            </div>
          </div>
          <div className={styles.BtnGroup}>
            <Button variant='ghost'>{extend}</Button>
            <Button type='submit' {...buttonProps}>
              {logOutButton}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChangePassword;