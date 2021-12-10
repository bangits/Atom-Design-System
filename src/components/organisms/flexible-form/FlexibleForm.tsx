import { EditedForm, EditedFormProps, EditForm, EditFormProps } from '@/components';
import React, { FC } from 'react';
import classNames from 'classnames';

export interface FlexibleFormProps {
  editedFormProps?: EditedFormProps;
  editFormProps?: EditFormProps;
  isEdit?: boolean;
  className?: string;
}

const FlexibleForm: FC<FlexibleFormProps> = ({ editedFormProps, editFormProps, isEdit = false, className }, props) => {
  return (
    <div className={classNames(className, 'FlexibleForm')} {...props}>
      {isEdit ? <EditForm {...editFormProps} /> : <EditedForm {...editedFormProps} />}
    </div>
  );
};

export default FlexibleForm;
