import { EditedForm, EditedFormProps, EditForm, EditFormProps } from '@/components';
import React, { FC, ReactNode, useCallback, useState } from 'react';

export interface FlexibleFormProps {
  editedFormProps?: EditedFormProps;
  editFormProps?: EditFormProps;
  isEdit?: boolean;
  noDataText?: ReactNode;
  onSubmit?: (onToggle: () => void) => void;
  title: ReactNode;
}

const FlexibleForm: FC<FlexibleFormProps> = ({
  editedFormProps,
  editFormProps,
  isEdit = false,
  onSubmit,
  noDataText,
  title
}) => {
  const [toggle, setToggle] = useState<boolean>(isEdit);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <div>
      {toggle ? (
        <EditForm {...editFormProps} onToggle={onToggle} title={title} onSubmit={onSubmit} />
      ) : (
        <EditedForm {...editedFormProps} onToggle={onToggle} title={title} noDataText={noDataText} />
      )}
    </div>
  );
};

export default FlexibleForm;
