import { CloseWidePopUp } from '@/icons';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { FormFieldProp, getFormField } from '../form';
import styles from './CreatableTable.module.scss';

export interface CreatableRowProps {
  renderInputs: (InputComponent: React.ElementType, name: string, fieldType: ReactNode, props: any) => JSX.Element;
  fields: any;
  removeTier: () => void;
}

export const CreatableRow: FC<CreatableRowProps> = ({ renderInputs, fields, removeTier }) => {
  return (
    <tr>
      {fields?.map((field) => {
        const fieldElement =
          field.type === 'custom'
            ? field.component()
            : renderInputs(getFormField(field), field.name, field.type, field.additionalProps);

        return (
          fieldElement && (
            <td key={field.name} className={classNames(styles['CreatableTable--input'])}>
              {fieldElement}
            </td>
          )
        );
      })}

      <td>
        <CloseWidePopUp height='1rem' width='1rem' onClick={removeTier} />
      </td>
    </tr>
  );
};
