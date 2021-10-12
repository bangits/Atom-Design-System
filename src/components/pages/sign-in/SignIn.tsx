import { PasswordInput } from '@/components/molecules';
import { typedMemo } from '@/helpers';
import { Button, TextInput, TextInputProps, Typography } from '@my-ui/core';
import React, { FC, useCallback } from 'react';
import styles from './SignIn.module.scss';

export interface SignInProps {
  renderInputs?: (InputComponent: typeof TextInput, name: string) => JSX.Element;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const SignIn: FC<SignInProps> = ({ title, subtitle, buttonText, renderInputs }) => {
  const createEmailInputRenderer = useCallback(
    (inputProps: TextInputProps): typeof TextInput =>
      (props) =>
        <TextInput {...inputProps} {...props} />,
    []
  );
  const createPasswordInputRenderer = useCallback(
    (inputProps: TextInputProps): typeof TextInput =>
      (props) =>
        <PasswordInput {...inputProps} {...props} />,
    []
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
            {renderInputs(
              createEmailInputRenderer({
                label: 'Email or Username',
                type: 'text',
                startIcon: (
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                    <path data-name='Path 3524' d='M0 0h24v24H0z' style={{ fill: 'none' }} />
                    <path
                      data-name='Path 3525'
                      d='M12 4a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
                      style={{ fill: '#8ea6c1' }}
                    />
                  </svg>
                )
              }),
              'email'
            )}

            {renderInputs(
              createPasswordInputRenderer({
                label: 'Password',
                type: 'password'
              }),
              'password'
            )}
          </div>

          <div className={styles.LoginButton}>
            <Button type='submit'>{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default typedMemo(SignIn);
