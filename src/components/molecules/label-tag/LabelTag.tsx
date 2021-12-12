import { Label } from '@/components/atoms';
import { Tag, TagProps, Typography } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './LabelTag.module.scss';

export interface LabelTagProps {
  label: string;
  tag: TagProps;
}

const LabelTag: FC<LabelTagProps> = ({ label, tag }) => {
  return (
    <div className={styles.LabelTagBase}>
      <Typography variant='p4' className={styles['LabelTagBase--label']}>
        {label}
      </Typography>
      <Tag {...tag} className={styles['LabelTagBase--tag']} />
    </div>
  );
};

export default LabelTag;
