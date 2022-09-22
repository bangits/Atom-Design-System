import { PlusIcon } from '@/icons';
import { Typography } from '@my-ui/core';
import React, { ReactNode, FC } from 'react';
import styles from './AddActivity.module.scss';

interface CriteriaCardProps {
  fields: (e: void) => ReactNode;
}
const CriteriaCard: FC<CriteriaCardProps> = ({ fields }) => {
  return <div className={styles.CriteriaCard}>{fields}</div>;
};

export default CriteriaCard;
