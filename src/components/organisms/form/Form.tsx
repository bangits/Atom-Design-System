import { Select } from '@/components';
import { typedMemo } from '@/helpers';
import { Button, ButtonProps, Card, SelectProps, TextInput, TextInputProps, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
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
    } & (
      | {
          type: 'select';
          props?: FormSelectProps;
          component?: (props: FormSelectProps) => JSX.Element;
        }
      | {
          type: 'input';
          props?: TextInputProps;
          component?: (props: TextInputProps) => JSX.Element;
        }
      | {
          type: 'custom';
          component: () => JSX.Element;
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
                    {field.type === 'custom' ? (
                      field.component()
                    ) : (
                      <>
                        {field.component
                          ? // @ts-ignore
                            renderInputs(field.component, field.name, field.type)
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
                      </>
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

            <Button {...secondButtonProps} type='submit' />
          </div>
        </Card>
      </div>
    </>
  );
};

export default typedMemo(Form);
