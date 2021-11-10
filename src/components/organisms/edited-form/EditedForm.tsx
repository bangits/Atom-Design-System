import { Card, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './EditedForm.module.scss';

export interface EditedFormProps {
  options: {
    title: string;
    value: string | number;
  }[];
  editButton: ReactNode;
  title?: string;
}

const EditedForm: FC<EditedFormProps> = ({ title, editButton, options }) => {
  return (
    <div className={classNames(styles.EditedFormBase)}>
      <div className={classNames(styles['EditedFormBase--control'])}>
        <Typography variant='p3'>{title}</Typography>
        <div className={classNames(styles['EditedFormBase--control-button'])}>{editButton}</div>
      </div>
      <Card borderRadius={1.6} className={classNames(styles['EditedFormBase-content'])}>
        {options &&
          options.map((option) => (
            <div key={option.title} className={classNames(styles['EditedFormBase--option'])}>
              <span className={classNames(styles['EditedFormBase--option-title'])}>{option.title}</span>
              <span className={classNames(styles['EditedFormBase--option-value'])}>{option.value}</span>
            </div>
          ))}
      </Card>
    </div>
  );
};

export default EditedForm;
