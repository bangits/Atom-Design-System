import { EditedForm, EditedFormProps, EditForm, EditFormProps } from '@/components';
import React, { FC } from 'react';
import classNames from 'classnames';

export interface FlexibleFormProps {
  editedFormProps?: EditedFormProps;
  editFormProps?: EditFormProps;
  isEdit?: boolean;
}

const FlexibleForm: FC<FlexibleFormProps> = ({ editedFormProps, editFormProps, isEdit = false }) => {
  return (
    <div className={classNames('FlexibleForm')}>
      {isEdit ? <EditForm {...editFormProps} /> : <EditedForm {...editedFormProps} />}
    </div>
  );
};

export default FlexibleForm;
