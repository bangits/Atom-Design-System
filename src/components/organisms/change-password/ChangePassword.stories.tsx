import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ChangePassword from './ChangePassword';

export default {
  component: ChangePassword,
  decorators: [withKnobs],
  title: 'components/organisms/Change Password'
};

export const Default = () => {
  return (
    <>
      <ChangePassword
        title={text('title', 'Change Password')}
        skipOnSubmit={() => {}}
        subTitle={text('subTitle', '  Please change your password below.')}
        skipButton={text('skipButton', 'Skip')}
        changeButton={text('changeButton', 'Change')}
        renderInputs={(InputComponent, name) => {
          return (
            <React.Fragment>
              <InputComponent />
            </React.Fragment>
          );
        }}
        confirmPasswordInputName={text('confirmPasswordInputName', 'confirmPasswordInputName')}
        newPasswordInputName={text('newPasswordInputName', 'newPasswordInputName')}
        newPasswordInputLabel='newPassword'
        confirmPasswordInputLabel='confirmPassword'
      />
    </>
  );
};
