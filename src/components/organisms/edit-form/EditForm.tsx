import { typedMemo } from '@/helpers';
import { Card } from '@my-ui/core';
import classNames from 'classnames';
import React from 'react';
import styles from './EditForm.module.scss';

const EditForm = () => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.EditFormBase)}>
      <div className={classNames(styles['EditFormBase'])}></div>
    </Card>
  );
};

export default typedMemo(EditForm);
