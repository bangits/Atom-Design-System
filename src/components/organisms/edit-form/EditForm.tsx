import { typedMemo } from '@/helpers';
import { Card, Select, SelectProps, TextInput, TextInputProps } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './EditForm.module.scss';

export type FormSelectProps = SelectProps<any[], boolean, any>;
export interface EditFormProps {
  title: string;
  applyButton: ReactNode;
  closeButton: ReactNode;
  renderInputs: (
    InputComponent: React.ComponentType,
    name: string,
    fieldType: 'select' | 'input' | 'custom'
  ) => JSX.Element;
  fields: Array<
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
    )
  >;
}

const EditForm: FC<EditFormProps> = ({ title, applyButton, closeButton, fields, renderInputs }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.EditFormBase)}>
      <div className={classNames(styles['EditFormBase--header'])}>
        <span>{title}</span>
        <div className={classNames(styles['EditFormBase--buttons'])}>
          {applyButton}
          {closeButton}
        </div>
      </div>
      <div className={classNames(styles['EditFormBase--content'])}>
        {fields.map((field, idx) => (
          <div className={styles['EditFormBase--field']}>
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
                          ) : (
                            <Select
                              disabled={field.disabled}
                              {...(props as SelectProps<any, any, any>)}
                              {...field.props}
                              fullWidth
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
  );
};

export default typedMemo(EditForm);
