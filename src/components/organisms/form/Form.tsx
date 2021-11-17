import { Select } from '@/components';
import { typedMemo } from '@/helpers';
import {
  Button,
  ButtonProps,
  Card,
  SelectProps,
  TextInput,
  TextInputProps,
  Typography,
  DatepickerProps,
  CheckboxProps,
  RadioButtonProps
} from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Form.module.scss';
import formField from './getFormField';
import { FormFieldProp } from './FormFieldTypes';
import getFormField from './getFormField';

type FormSelectProps = SelectProps<any[], boolean, any>;
export interface FormProps {
  onClick: (e: any) => void;
  showBackButton: boolean;
  title: string;
  firstButtonProps: ButtonProps;
  secondButtonProps: ButtonProps;
  renderInputs: (
    InputComponent: React.ComponentType,
    name: string,
    fieldType: 'select' | 'input' | 'custom' | 'datePicker' | 'checkbox' | 'radioButton'
  ) => JSX.Element;
  fields: FormFieldProp[];
}

const Form: FC<FormProps> = ({
  title,
  firstButtonProps,
  secondButtonProps,
  fields,
  showBackButton,
  renderInputs,
  onClick
}) => {
  return (
    <>
      <div className={styles.ProviderWrapper}>
        <Card borderRadius={1.6} className={styles.ProviderCard}>
          <div className={styles.ProviderContainer}>
            <Typography variant='h2' color='primary' className={styles.ProviderTitle}>
              {title}
            </Typography>
            <div className={styles.ProviderContainerWrapper}>
              <div className={styles.ProviderFormGroup}>
                {fields.map((field, idx) => (
                  <div
                    className={classNames(styles.ProviderForm, {
                      [styles[`ProviderForm--col-${field.col || 6}`]]: field.col || 6
                    })}>
                    {field.type === 'custom'
                      ? field.component()
                      : // @ts-ignore
                        renderInputs(getFormField(field), field.name, field.type)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.ProviderButtonGroup}>
            {showBackButton && (
              <div className={styles.ProviderBackButton} onClick={onClick}>
                <svg xmlns='http://www.w3.org/2000/svg' width='10.11' height='10.11' viewBox='0 0 11.207 11.414'>
                  <path
                    id='Path_2014'
                    data-name='Path 2014'
                    d='M102,657H92m0,0,5,5m-5-5,5-5'
                    transform='translate(-91.293 -651.293)'
                    fill='none'
                    stroke='#8EA6C1'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                  />
                </svg>
              </div>
            )}
            <div className={styles.ProviderButtons}>
              <Button
                variant='ghost'
                {...firstButtonProps}
                className={classNames(styles.ProviderCloseButton, firstButtonProps.className)}
              />

              <Button {...secondButtonProps} type='submit' />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default typedMemo(Form);
