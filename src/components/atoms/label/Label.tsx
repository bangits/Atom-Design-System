import { Typography } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './Label.module.scss';

export interface LabelProps {
  optional?: boolean;
  optionalText?: string;
  text?: string;
}

export const Label: FC<LabelProps> = ({ text, optional = false, optionalText }) => {
  return (
    <Typography variant='p4' className={styles.Label}>
      {text}

      {optional && <span className={styles.LabelOptional}>{optionalText}</span>}
    </Typography>
  );
};
