import { typedMemo } from '@/helpers';
import { ApplyIcon, CloseIcon } from '@/icons';
import {
  Card,
  DatePicker,
  DatepickerProps,
  IconButton,
  Select,
  SelectProps,
  TextInput,
  TextInputProps,
  Tooltip
} from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './EditForm.module.scss';

export type FormSelectProps = SelectProps<any[], boolean, any>;
export interface EditFormProps {
  applyButtonTooltipText?: string;
  closeButtonTooltipText?: string;
  title?: string;
  onToggle?: () => void;
  onSubmit?: (onToggle: () => void) => void;
  renderInputs?: (
    InputComponent: React.ComponentType,
    name: string,
    fieldType: 'select' | 'input' | 'custom' | 'datePicker'
  ) => JSX.Element;
  fields?: Array<
    {
      name: string;
    } & (
      | {
          type: 'select';
          disabled?: boolean;
          props?: FormSelectProps;
          component?: (props: FormSelectProps) => JSX.Element;
        }
      | {
          type: 'input';
          disabled?: boolean;
          props?: TextInputProps;
          component?: (props: TextInputProps) => JSX.Element;
        }
      | {
          type: 'custom';
          disabled?: boolean;
          component: () => JSX.Element;
        }
      | {
          type: 'datePicker';
          disabled?: boolean;
          props?: DatepickerProps;
          component?: (props: DatepickerProps) => JSX.Element;
        }
    )
  >;
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
          {fields?.map((field, idx) => (
            <div className={styles['EditFormBase--field']} key={idx}>
              {field.type === 'custom' ? (
                field.component()
              ) : (
                <>
                  {field.component
                    ? //@ts-ignore
                      renderInputs(field.component, field.name, field.type)
                    : renderInputs(
                        (props: typeof field.props) => (
                          <>
                            {field.type === 'input' ? (
                              <TextInput
                                key={idx}
                                disabled={field.disabled}
                                {...(props as TextInputProps)}
                                {...field.props}
                              />
                            ) : field.type === 'select' ? (
                              <Select
                                key={idx}
                                disabled={field.disabled}
                                {...(props as SelectProps<any, any, any>)}
                                {...field.props}
                                fullWidth
                              />
                            ) : (
                              <DatePicker
                                key={idx}
                                disabled={field.disabled}
                                {...field.props}
                                {...(props as DatepickerProps)}
                              />
                            )}
                          </>
                        ),
                        field.name,
                        field.type
                      )}
                </>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default typedMemo(EditForm);
