import { Button, Card, Typography } from '@my-ui/core';
import { ReactNode } from 'react';
import styles from './PasswordChangeAfterLogin.module.scss';
import { Icons } from '@/atom-design-system';
import { useTranslation } from '@atom/common';
import classNames from 'classnames';

export interface PasswordChangeAfterLoginProps {
  passwordInput: ReactNode;
  confirmPasswordInput: ReactNode;
  canSkip: boolean;
  isLoading: boolean;
  onSkip?: () => void;
}

export const PasswordChangeAfterLogin = ({
  passwordInput,
  confirmPasswordInput,
  canSkip,
  isLoading,
  onSkip
}: PasswordChangeAfterLoginProps) => {
  const t = useTranslation();

  return (
    <div className={styles.Background}>
      <div className={styles.CardWrapper}>
        <Card className={styles.Card}>
          <div className={styles.Form}>
            <Icons.UnBlockPopupIcon className={styles.Icon} />
            <Typography className={styles.Title} color='primary' fontWeight={500} variant='h3'>
              {t.get('changePassword')}
            </Typography>
            <Typography className={styles.SubTitle} color='primary' variant='h6'>
              {t.get('changePasswordBelow')}
            </Typography>
            <div className={styles.PasswordField}>{passwordInput}</div>
            <div className={styles.ConfirmPasswordField}>{confirmPasswordInput}</div>
            <div
              className={classNames(styles.Actions, {
                [styles['Actions--skipable']]: canSkip
              })}>
              {canSkip && (
                <Button className={styles.ActionButton} type='button' onClick={() => onSkip?.()} variant='ghost'>
                  {t.get('skip')}
                </Button>
              )}
              <Button className={styles.ActionButton} disabled={isLoading} type='submit'>
                {t.get('change')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
