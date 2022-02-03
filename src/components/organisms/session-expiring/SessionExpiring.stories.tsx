import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import SessionExpiring from './SessionExpiring';

export default {
  component: SessionExpiring,
  decorators: [withKnobs],
  title: 'components/organisms/SessionExpiring'
};

export const Default = () => {
  return (
    <>
      <SessionExpiring
        title={text('title', 'Session Expire Warning')}
        subTitle={text('subTitle', 'Your session will expire in 3 minutes. Do you want to extend the session?')}
        logOutButton={text('logOutButton', 'Log out')}
        extend={text('extend', 'Extend')}
        timeRemaining={text('timeRemaining','Time remaining')}
       
      />
    </>
  );
};
