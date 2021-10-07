import { typedMemo } from '@/helpers/typedMemo';
import React from 'react';
import styles from './SignIn.module.scss';
import { Typography, Button, TextInput } from '@my-ui/core';
import { LoginPerson } from '@/assets/svg';

const SignIn = () => {
  return (
    <div className={styles.LoginPageWrapper}>
      <div className={styles.LoginPageBox}>
        <div>
          <Typography variant='h1' component='h2' className={styles.LoginPageTitle}>
            Sign In
          </Typography>
          <Typography variant='p4' component='p' className={styles.LoginPageSubTitle}>
            Login to manage your account
          </Typography>

          <div className={styles.FormWrapper}>
            <TextInput
              label='Email or Username'
              type='text'
              startIcon={
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                  <path data-name='Path 3524' d='M0 0h24v24H0z' style={{ fill: 'none' }} />
                  <path
                    data-name='Path 3525'
                    d='M12 4a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
                    style={{ fill: '#8ea6c1' }}
                  />
                </svg>
              }
            />
            <TextInput
              label='Password'
              type='password'
              startIcon={
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                  <g data-name='Group 2403'>
                    <path data-name='Path 3521' d='M0 0h24v24H0z' style={{ fill: 'none' }} />
                    <path data-name='Path 3522' d='M0 0h24v24H0z' style={{ opacity: '.87', fill: 'none' }} />
                  </g>
                  <g data-name='Group 2404'>
                    <path
                      data-name='Path 3523'
                      d='M16.25 7h-.875V5.286a4.376 4.376 0 0 0-8.75 0V7H5.75A1.738 1.738 0 0 0 4 8.714v8.571A1.738 1.738 0 0 0 5.75 19h10.5A1.738 1.738 0 0 0 18 17.286V8.714A1.738 1.738 0 0 0 16.25 7zM8.375 5.286a2.626 2.626 0 0 1 5.25 0V7h-5.25zm7.875 3.428z'
                      transform='translate(1 2)'
                      style={{ fill: '#8ea6c1' }}
                    />
                    <circle
                      data-name='Ellipse 218'
                      cx='2'
                      cy='2'
                      r='2'
                      transform='translate(10 13)'
                      style={{ fill: '#fff' }}
                    />
                  </g>
                </svg>
              }
              endIcon={
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                  <path data-name='Path 3526' d='M0 0h24v24H0z' style={{ fill: 'none' }} />
                  <path
                    data-name='Path 3527'
                    d='M12 6a9.77 9.77 0 0 1 8.82 5.5 9.822 9.822 0 0 1-17.64 0A9.77 9.77 0 0 1 12 6m0-2a11.827 11.827 0 0 0-11 7.5 11.817 11.817 0 0 0 22 0A11.827 11.827 0 0 0 12 4zm0 5a2.5 2.5 0 1 1-2.5 2.5A2.5 2.5 0 0 1 12 9m0-2a4.5 4.5 0 1 0 4.5 4.5A4.507 4.507 0 0 0 12 7z'
                    style={{ fill: '#8ea6c1' }}
                  />
                </svg>
              }
            />
          </div>

          <div className={styles.LoginButton}>
            <Button type='button'>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default typedMemo(SignIn);
