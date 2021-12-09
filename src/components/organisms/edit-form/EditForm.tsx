import { FormFieldProp, FormFieldTypes, getFormField } from '@/components';
import { typedMemo } from '@/helpers';
import { ApplyIcon, CloseIcon } from '@/icons';
import { Card, IconButton, SelectProps, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './EditForm.module.scss';

export type FormSelectProps = SelectProps<any[], boolean, any>;
export interface EditFormProps {
  applyButtonTooltipText?: string;
  closeButtonTooltipText?: string;
  title: string;
  onToggle?: () => void;
  onSubmit?: (onToggle: () => void) => void;
  renderInputs: (InputComponent: React.ElementType, name: string, fieldType: FormFieldTypes, props: any) => JSX.Element;
  fields: FormFieldProp[];
}

const EditForm: FC<EditFormProps> = ({
  title,
  fields,
  renderInputs,
  onToggle,
  onSubmit,
  applyButtonTooltipText,
  closeButtonTooltipText
}) => {
  return (
    <div className={classNames(styles.EditForm)}>
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
        <div className={classNames(styles['EditFormBase--content'])}>
          {fields.map((field, idx) => (
            <div className={styles['EditFormBase--field']} key={idx}>
              {field.type === 'custom'
                ? field.component()
                : renderInputs(getFormField(field), field.name, field.type, field.additionalProps)}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default typedMemo(EditForm);
