import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import SignIn from './SignIn';

export default {
  component: SignIn,
  decorators: [withKnobs],
  title: 'components/pages/Sign In'
};

export const Default = () => {
  return (
    <SignIn
      title={text('title', 'Sign In')}
      subtitle={text('subtitle', 'Login to manage your account')}
      buttonText={text('buttonText', 'Login')}
      renderInputs={(InputComponent, name) => {
        return (
          <React.Fragment>
            <InputComponent />
          </React.Fragment>
        );
      }}
      passwordInputLabel='password'
      usernameInputLabel='username'
    />
  );
};
