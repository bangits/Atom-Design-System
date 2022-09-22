import { Button, Select } from '@my-ui/core';
import React, { ReactNode } from 'react';
import styles from './AddActivity.module.scss';
import { AddIcon } from '@/icons';
import CriteriaCard from './CriteriaCard';

export interface ActivityFormProps {
  buttonTitle: string;
  renderCustomSelect: () => ReactNode;
  criteries: {
    criteria: string;
    checkToPerform: boolean;
    value: string;
  }[];
}

const ActivityForm = ({ buttonTitle, renderCustomSelect, criteries }) => {
  return (
    <div className={styles['ActivityBox--box']}>
      <div>
        {renderCustomSelect}
        <Button onClick={() => {}} variant='link' startIcon={<AddIcon />} className={styles.AddButton}>
          {buttonTitle}
        </Button>
      </div>
      {criteries.map((critery) => {
        return <CriteriaCard fields={(e) => critery.field} />;
      })}
    </div>
  );
};

export default ActivityForm;
