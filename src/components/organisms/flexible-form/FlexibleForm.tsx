import { EditedForm, EditedFormProps, EditForm, EditFormProps } from '@/components';
import React, { FC, useCallback, useState } from 'react';

export interface FlexibleFormProps {
  editedFormProps?: EditedFormProps;
  editFormProps?: EditFormProps;
  isEdit?: boolean;
  noDataText?: string;
  onSubmit?: (onToggle: () => void) => void;
}

const FlexibleForm: FC<FlexibleFormProps> = ({
  editedFormProps,
  editFormProps,
  isEdit = false,
  onSubmit,
  noDataText
}) => {
  const [toggle, setToggle] = useState<boolean>(isEdit);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <div>
      {toggle ? (
        <EditForm {...editFormProps} onToggle={onToggle} onSubmit={onSubmit} />
      ) : (
        <EditedForm {...editedFormProps} onToggle={onToggle} noDataText={noDataText} />
      )}
    </div>
  );
};

export default FlexibleForm;
