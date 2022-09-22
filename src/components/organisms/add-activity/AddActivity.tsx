import { AddIcon } from '@/icons';
import { Button, Icons, Select } from '@my-ui/core';
import React, { FC, ReactNode, useState } from 'react';
import { AddConditionCard } from '../add-condition-card';
import ActivityForm from './ActivityForm';
import styles from './AddActivity.module.scss';

export interface AddActivityProps {
  onClick: () => void;
  renderCustomSelect: ReactNode;
  buttonTitle: string;
  activities: {
    criteries: {
      criteria: string;
      checkToPerform: boolean;
      value: string;
      field: ReactNode;
    }[];
  }[];
}

const AddActivity: FC<AddActivityProps> = ({ renderCustomSelect, buttonTitle, activities }) => {
  return (
    <div className={styles.ActivityBox}>
      {activities.map(({ criteries }) => (
        <>
          <ActivityForm criteries={criteries} buttonTitle={buttonTitle} renderCustomSelect={renderCustomSelect} />
        </>
      ))}
      <div className={styles['ActivityBox--empty-box']}>
        <AddConditionCard col={12} onClick={() => {}} addCondition='Add Condition' />
      </div>
    </div>
  );
};

export default AddActivity;
