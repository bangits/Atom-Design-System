import { PasswordInput } from '@/components/molecules';
import { ChangePasswordIcon } from '@/icons';
import { Button, Card, TextInput, TextInputProps, Typography } from '@my-ui/core';
import React, { FC, useCallback, useMemo } from 'react';
import styles from './ChangePassword.module.scss';

export interface ChangePasswordProps {
  renderInputs?: (InputComponent: typeof TextInput, name: string) => JSX.Element;
  title?: string;
  subTitle?: string;
  skipButton?: string;
  changeButton?: string;
  newPasswordInputLabel?: string;
  confirmPasswordInputLabel?: string;
  newPasswordInputName?: string;
  confirmPasswordInputName?: string;
  buttonProps?: string;
  changePasswordErrorMessageName?: string;
  skipOnSubmit: () => void;
}

const ChangePassword: FC<ChangePasswordProps> = ({
  title,
  subTitle,
  changeButton,
  skipButton,
  newPasswordInputName = 'New Password',
  confirmPasswordInputName = 'Confirm Password',
  buttonProps,
  renderInputs,
  changePasswordErrorMessageName,
  newPasswordInputLabel,
  confirmPasswordInputLabel,
  skipOnSubmit
}) => {
  const createPasswordInputRenderer = useCallback(
    (inputProps: TextInputProps): typeof TextInput =>
      (props) =>
        <PasswordInput {...inputProps} {...props} />,
    []
  );

  const newPasswordInput = useMemo(
    () =>
      renderInputs(
        createPasswordInputRenderer({
          label: newPasswordInputLabel,
          type: 'password'
        }),
        newPasswordInputName
      ),
    [renderInputs, newPasswordInputLabel, newPasswordInputName]
  );

  const confirmPasswordInput = useMemo(
    () =>
      renderInputs(
        createPasswordInputRenderer({
          label: confirmPasswordInputLabel,
          type: 'password'
        }),
        confirmPasswordInputName
      ),
    [renderInputs, confirmPasswordInputLabel, confirmPasswordInputName]
  );

  return (
    <div className={styles.ChangePasswordWrapper}>
      <Card className={styles.CardWrapper}>
        <div className={styles.ChangeContent}>
          <ChangePasswordIcon className={styles.Icon} />
          <Typography variant='h2' component='h2'>
            {title}
          </Typography>
          <Typography variant='p3' component='p'>
            {subTitle}
          </Typography>
          <div className={styles.InputsGroup}>
            <div className={styles.InputContent}>{newPasswordInput}</div>
            <div className={styles.InputContent}>
              {confirmPasswordInput}

              {changePasswordErrorMessageName && (
                <Typography variant='p5' color='danger' className={styles.ErrorMessage}>
                  {changePasswordErrorMessageName}
                </Typography>
              )}
            </div>
          </div>
          <div className={styles.BtnGroup}>
            <Button type='button' variant='ghost' onClick={skipOnSubmit}>
              {skipButton}
            </Button>
            <Button type='submit' {...buttonProps}>
              {changeButton}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChangePassword;
