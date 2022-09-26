import { AddIcon, RuleIcon } from '@/icons';
import { Button, Icons, Select } from '@my-ui/core';
import React, { FC, ReactNode, useState } from 'react';
import { AddConditionCard } from '../add-condition-card';
import CriteriaForm from './CriteriaForm';
import styles from './AddCriteria.module.scss';

export interface AddCriteriaProps {
  onClick: () => void;
  renderCustomSelect: ReactNode;
  buttonTitle: string;
  criteries: {
    activities: { criteria: string; checkToPerform: string; buttonTitle: string }[];
  }[];
}

const AddCriteria: FC<AddCriteriaProps> = ({ renderCustomSelect, buttonTitle, criteries }) => {
  const [criteryList, setCriteryList] = useState<AddCriteriaProps['criteries']>(criteries);
  return (
    <div className={styles.ActivityBox}>
      {criteryList.map(({ activities }) => (
        <CriteriaForm activities={activities} buttonTitle={buttonTitle} renderCustomSelect={renderCustomSelect} />
      ))}
      <RuleIcon />

      <div className={styles['ActivityBox--empty-box']}>
        <AddConditionCard
          col={12}
          onClick={() => {
            criteryList.push({
              activities: [{ criteria: '', buttonTitle: '', checkToPerform: '' }]
            });

            setCriteryList([...criteryList]);
          }}
          addCondition='Add Condition'
        />
      </div>
    </div>
  );
};

export default AddCriteria;
