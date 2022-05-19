import { typedMemo } from '@/helpers';
import { Button, ButtonProps, Card, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Form.module.scss';
import FormFields from './FormFields';
import { FormFieldProp, FormFieldTypes } from './FormFieldTypes';
import getFormField from './getFormField';

export interface FormProps {
  onBackButtonClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showBackButton?: boolean;
  title: string;
  firstButtonProps: ButtonProps;
  secondButtonProps: ButtonProps;
  renderInputs: (InputComponent: React.ElementType, name: string, fieldType: FormFieldTypes, props: any) => JSX.Element;
  fields: FormFieldProp[];
}

const Form: FC<FormProps> = ({
  title,
  firstButtonProps,
  secondButtonProps,
  fields,
  showBackButton = false,
  renderInputs,
  onBackButtonClick
}) => {
  return (
    <>
      <div className={styles.ProviderWrapper}>
        <Card borderRadius={1.6} className={styles.ProviderCard}>
          <div className={styles.ProviderContainer}>
            <Typography variant='h3' color='primary' className={styles.ProviderTitle}>
              {title}
            </Typography>
            <FormFields fields={fields} renderInputs={renderInputs} />
          </div>
          <div className={styles.ProviderButtonGroup}>
            {showBackButton && (
              <button type='button' className={styles.ProviderBackButton} onClick={onBackButtonClick}>
                {/* <svg xmlns='http://www.w3.org/2000/svg' width='10.11' height='10.11' viewBox='0 0 11.207 11.414'>
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
                </svg> */}

                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8.1 8.1' fill='#8EA6C1'>
                  <path d='M4 8.1s-.1 0-.2-.1L.1 4.3 0 4.2V4s0-.1.1-.1L3.8.2c.1-.2.4-.2.5-.1s.1.4 0 .5l-3 3.1h6.5c.2 0 .4.2.4.4s-.3.3-.5.3H1.3l3.1 3.1c.1.1.1.4 0 .5-.2.1-.3.1-.4.1z' />
                </svg>
              </button>
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
