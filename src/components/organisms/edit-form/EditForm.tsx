import { FormFieldProp, FormFieldTypes } from '@/components';
import { typedMemo } from '@/helpers';
import { ApplyIcon, CloseIcon } from '@/icons';
import { Card, IconButton, SelectProps, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './EditForm.module.scss';
import EditFormFields from './EditFormFields';

export type FormSelectProps = SelectProps<any[], boolean, any>;
export interface EditFormProps {
  applyButtonTooltipText?: string;
  closeButtonTooltipText?: string;
  title?: ReactNode;
  onToggle?: () => void;
  onSubmit?: (onToggle: () => void) => void;
  renderInputs: (InputComponent: React.ElementType, name: string, fieldType: FormFieldTypes, props: any) => JSX.Element;
  fields: FormFieldProp[];
  col?: 6 | 12;
  fullWidth?: boolean;
}

const EditForm: FC<EditFormProps> = ({
  title,
  fields,
  renderInputs,
  onToggle,
  onSubmit,
  applyButtonTooltipText,
  closeButtonTooltipText,
  children,
  col,
  fullWidth
}) => {
  return (
    <div
      className={classNames(styles.EditForm, {
        [styles[`EditForm--${col}`]]: col
      })}>
      <div className={classNames(styles['EditFormBase--header'])}>
        <span>{title}</span>
        <div className={classNames(styles['EditFormBase--buttons'])}>
          <Tooltip showEvent='hover' text={applyButtonTooltipText}>
            <IconButton icon={<ApplyIcon />} type='button' onClick={() => onSubmit(onToggle)} />
          </Tooltip>
          <Tooltip showEvent='hover' text={closeButtonTooltipText}>
            <IconButton icon={<CloseIcon />} type='button' onClick={onToggle} />
          </Tooltip>
        </div>
      </div>
      <Card borderRadius={1.6} className={classNames(styles.EditFormBase)}>
        {children || (
          <div className={classNames(styles['EditFormBase--content'])}>
            <EditFormFields fullWidth={fullWidth} fields={fields} renderInputs={renderInputs} />
          </div>
        )}
      </Card>
    </div>
  );
};

export default typedMemo(EditForm);
