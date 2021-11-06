import { Select } from '@/components';
import { typedMemo } from '@/helpers';
// @ts-ignore
import { Button, ButtonProps, Card, SelectProps, TextInput, TextInputProps, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Form.module.scss';

type FormSelectProps = SelectProps<any[], boolean, any>;
export interface FormProps {
  title: string;
  firstButtonProps: ButtonProps;
  secondButtonProps: ButtonProps;
  renderInputs: (
    InputComponent: React.ComponentType,
    name: string,
    fieldType: 'select' | 'input' | 'custom'
  ) => JSX.Element;
  fields: Array<
    {
      name: string;
      component?: () => JSX.Element;
    } & (
      | {
          type: 'select';
          props: FormSelectProps;
        }
      | {
          type: 'input';
          props: TextInputProps;
        }
    )
  >;
}

const Form: FC<FormProps> = ({ title, firstButtonProps, secondButtonProps, fields, renderInputs }) => {
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
                  <div className={styles.ProviderForm}>
                    {field.component
                      ? renderInputs(field.component, field.name, 'custom')
                      : renderInputs(
                          (props: typeof field.props) => (
                            <>
                              {field.type === 'input' ? (
                                <TextInput key={idx} {...(props as TextInputProps)} {...field.props} />
                              ) : (
                                <Select {...(props as SelectProps<any, any, any>)} {...field.props} fullWidth />
                              )}
                            </>
                          ),
                          field.name,
                          field.type
                        )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.ProviderButtonGroup}>
            <Button
              variant='ghost'
              {...firstButtonProps}
              className={classNames(styles.ProviderCloseButton, firstButtonProps.className)}
            />

            <Button {...secondButtonProps} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default typedMemo(Form);
