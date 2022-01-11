import { Typography } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './LabelEndMark.module.scss';

export interface LabelEndMarkProps {
  label: string;
  text: string;
  noDataText?: string;
}

const LabelEndMark: FC<LabelEndMarkProps> = ({ label, text, noDataText = 'N/A' }) => {
  return (
    <div className={styles.LabelEndMarkBase}>
      <Typography variant='p4' color='primary'>
        {label}:{' '}
      </Typography>
      <Typography variant='p4' className={styles['LabelEndMarkBase--description']}>{text || noDataText}</Typography>
    </div>
  );
};

export default LabelEndMark;
