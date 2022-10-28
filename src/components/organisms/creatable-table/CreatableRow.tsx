import { CloseWidePopUp } from '@/icons';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { FormFieldProp, getFormField } from '../form';
import styles from './CreatableTable.module.scss';

export interface CreatableRowProps {
  renderInputs: (InputComponent: React.ElementType, name: string, fieldType: ReactNode, props: any) => JSX.Element;
  fields: any;
  removeTier: () => void;
  variant?: 'writable' | 'edit';
}

export const CreatableRow: FC<CreatableRowProps> = ({ renderInputs, fields, removeTier, variant }) => {
  return (
    <tr
      className={classNames(styles['CreatableTable--input'], {
        [styles['CreatableTable--writable']]: variant === 'writable',
        [styles['CreatableTable--edit']]: variant === 'edit'
      })}>
      {fields?.map((field) => {
        const fieldElement =
          field.type === 'custom'
            ? field.component()
            : renderInputs(getFormField(field), field.name, field.type, field.additionalProps);

        return fieldElement && <td key={field.name}>{fieldElement}</td>;
      })}

      <td>
        <CloseWidePopUp height='1rem' width='1rem' onClick={removeTier} />
      </td>
    </tr>
  );
};
