import { Icons } from '@/atom-design-system';
import { PasswordInput } from '@/components/molecules';
import { typedMemo } from '@/helpers';
import { Button, TextInput, TextInputProps, Typography } from '@my-ui/core';
import React, { FC, useCallback, useMemo } from 'react';
import styles from './SignIn.module.scss';


export interface SignInProps {
  renderInputs?: (InputComponent: typeof TextInput, name: string) => JSX.Element;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  loginErrorMessage?: string;
  usernameInputLabel: string;
  passwordInputLabel: string;
  usernameInputName?: string;
  passwordInputName?: string;
  buttonProps?: string;
}

const SignIn: FC<SignInProps> = ({
  title,
  subtitle,
  buttonText,
  renderInputs,
  usernameInputLabel,
  passwordInputLabel,
  buttonProps,
  loginErrorMessage,
  usernameInputName = 'username',
  passwordInputName = 'password'
}) => {
  const createEmailInputRenderer = useCallback(
    (inputProps: TextInputProps): typeof TextInput =>
      (props) =>
        <TextInput containerClassName={styles.LoginBottom} {...inputProps} {...props} />,
    []
  );

  const createPasswordInputRenderer = useCallback(
    (inputProps: TextInputProps): typeof TextInput =>
      (props) =>
        <PasswordInput containerClassName={styles.LoginBottom} {...inputProps} {...props} />,
    []
  );

  const emailInput = useMemo(
    () =>
      renderInputs(
        createEmailInputRenderer({
          label: usernameInputLabel,
          type: 'text',
          startIcon: (
            <Icons.UserIcon />
          )
        }),
        usernameInputName
      ),
    [renderInputs, usernameInputLabel, usernameInputName]
  );

  const passwordInput = useMemo(
    () =>
      renderInputs(
        createPasswordInputRenderer({
          label: passwordInputLabel,
          type: 'password'
        }),
        passwordInputName
      ),
    [renderInputs, passwordInputLabel, passwordInputName]
  );

  return (
    <div className={styles.LoginPageWrapper}>
      <div className={styles.LoginPageBox}>
        <div>
          <Typography variant='h1' component='h2' className={styles.LoginPageTitle}>
            {title}
          </Typography>
          <Typography variant='p4' component='p' className={styles.LoginPageSubTitle}>
            {subtitle}
          </Typography>

          <div className={styles.FormWrapper}>
            {emailInput}

            {passwordInput}

            {loginErrorMessage && (
              <Typography variant='p5' color='danger'>
                {loginErrorMessage}
              </Typography>
            )}
          </div>

          <div className={styles.LoginButton}>
            <Button type='submit' {...buttonProps}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default typedMemo(SignIn);
