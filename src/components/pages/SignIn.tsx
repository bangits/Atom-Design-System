import { typedMemo } from '@/helpers/typedMemo';
import React from 'react';
import styles from './SignIn.module.scss';

const SignIn = () => {
  return <div className={styles.SignIn}>Sign In</div>;
};

export default typedMemo(SignIn);
