import { Button, IconButton, Select } from '@my-ui/core';
import React, { ReactNode, useState } from 'react';
import styles from './AddCriteria.module.scss';
import { AddIcon } from '@/icons';
// import CriteriaCard from './CriteriaCard';
import { Icons } from '@/atom-design-system';

export interface CriteriaFormProps {
  buttonTitle: string;
  renderCustomSelect: () => ReactNode;
  activities: {
    criteria: string;
    checkToPerform: boolean;
    value: string;
  }[];
}

const CriteriaForm = ({ buttonTitle, renderCustomSelect, activities }) => {
  // console.log(renderCustomSelect.props.children);

  const [showFields, setShowFields] = useState<CriteriaFormProps['activities']>(activities);
  return (
    <div className={styles['ActivityBox--box']}>
      <Button endIcon={<Icons.TopBottomArrowsIcon height='2rem' />}>
        <div className={styles['ActivityBox--box--main--doth']}>----</div>And
      </Button>
      <div className={styles['ActivityBox--box--main']}>
        {showFields.map((critery) => {
          return (
            <div className={styles['ActivityBox--box--main--and-button']}>
              <Button endIcon={<Icons.TopBottomArrowsIcon height='2rem' />}>
                <div className={styles['ActivityBox--box--main--doth']}>-------------</div>And
              </Button>
              {renderCustomSelect.props.children.map((field) => field)}
            </div>
          );
        })}
        <Button
          onClick={() => {
            showFields.push({ criteria: 'f', checkToPerform: null, value: '' });
            setShowFields([...showFields]);
          }}
          variant='link'
          startIcon={<AddIcon />}
          className={styles.AddButton}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default CriteriaForm;
