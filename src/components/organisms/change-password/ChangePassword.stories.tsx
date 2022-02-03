import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ChangePassword from './ChangePassword';

export default {
  component: ChangePassword,
  decorators: [withKnobs],
  title: 'components/organisms/ChangePassword'
};

export const Default = () => {
  return (
    <>
      <ChangePassword
        title={text('title', 'Change Password')}
        subTitle={text('subTitle', '  Please change your password below.')}
        skipButton={text('skipButton', 'Skip')}
        changeButton={text('changeButton', 'Change')}
        confirmPasswordInputName={text('confirmPasswordInputName', 'confirmPasswordInputName')}
        newPasswordInputName={text('newPasswordInputName', 'newPasswordInputName')}
        newPasswordInputLabel='New Password'
        confirmPasswordInputLabel='Confirm Password'
        renderInputs={(InputComponent, name) => {
          return (
            <React.Fragment>
              <InputComponent />
            </React.Fragment>
          );
        }}
       
      />
    </>
  );
};
