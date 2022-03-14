import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Label.module.scss';

export interface LabelProps {
  optional?: boolean;
  optionalText?: ReactNode;
  text?: ReactNode;
  isForInput?: boolean;
}

export const Label: FC<LabelProps> = ({ text, optional = false, isForInput = false, optionalText }) => {
  return (
    <Typography
      variant={isForInput ? 'p4' : 'p5'}
      className={classNames(styles.Label, {
        [styles['Label--for-input']]: isForInput
      })}>
      {text}

      {optional && <span className={styles.LabelOptional}>{optionalText}</span>}
    </Typography>
  );
};
