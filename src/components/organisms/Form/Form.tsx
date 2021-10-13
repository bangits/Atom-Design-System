import { ButtonProps, TextInput, TextInputProps, Typography, Card, Button, Select, SelectProps } from '@my-ui/core';
import React, { FC } from 'react';
import { typedMemo } from '@/helpers';
import styles from './Form.module.scss';
import classNames from 'classnames';

export interface FormProps {
  title: string;
  firstButtonProps: ButtonProps;
  secondButtonProps: ButtonProps;
  renderInputs: (InputComponent: typeof TextInput /*| typeof Select*/, name: string) => JSX.Element;
  fields: Array<
    {
      name: string;
    } & (
      | {
          type: 'select';
          props: SelectProps;
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
        <Card borderRadius='1.6' className={styles.ProviderCard}>
          <div className={styles.ProviderContainer}>
            <Typography variant='h2' color='primary' className={styles.ProviderTitle}>
              {title}
            </Typography>
            <div className={styles.ProviderContainerWrapper}>
              <div className={styles.ProviderFormGroup}>
                {fields.map((field, idx) =>
                  renderInputs(
                    (props: typeof field.props) => (
                      <>
                        {field.type === 'input' ? (
                          <TextInput
                            key={idx}
                            {...props}
                            {...field.props}
                            containerClassName={classNames(styles.ProviderForm, field.props.containerClassName)}
                          />
                        ) : (
                          <Select {...props} {...field.props} />
                        )}
                      </>
                    ),
                    field.name
                  )
                )}
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
