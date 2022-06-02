import { typedMemo } from '@/helpers';
import classNames from 'classnames';
import React from 'react';
import styles from './Form.module.scss';
import { FormFieldProp, FormFieldTypes } from './FormFieldTypes';
import getFormField from './getFormField';

export interface FormFieldsProps {
  renderInputs: (InputComponent: React.ElementType, name: string, fieldType: FormFieldTypes, props: any) => JSX.Element;
  fields: FormFieldProp[];
}

const FormFields = ({ fields, renderInputs }: FormFieldsProps) => {
  return (
    <div className={styles.ProviderContainerWrapper}>
      <div className={styles.ProviderFormGroup}>
        {fields?.map((field) => (
          <div
            key={field.name}
            className={classNames(styles.ProviderForm, {
              [styles[`ProviderForm--col-${field.col || 6}`]]: field.col || 6
            })}>
            {field.type === 'custom'
              ? field.component()
              : renderInputs(getFormField(field), field.name, field.type, field.additionalProps)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default typedMemo(FormFields);
