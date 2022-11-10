import { CloseWidePopUp } from '@/icons';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { FormFieldProp, getFormField } from '../form';
import styles from './CreatableTable.module.scss';

export interface CreatableRowProps {
  renderInputs: (InputComponent: React.ElementType, name: string, fieldType: ReactNode, props: any) => JSX.Element;
  fields: any;
  lastTier?: boolean;
  removeTier: () => void;
  variant?: 'writable' | 'edit';
}

export const CreatableRow: FC<CreatableRowProps> = ({ renderInputs, fields, removeTier, variant, lastTier = true }) => {
  return (
    <tr
      className={classNames(styles['CreatableTable--input'], {
        [styles['CreatableTable--writable']]: variant === 'writable',
        [styles['CreatableTable--edit']]: variant === 'edit'
      })}>
      {fields?.map((field) => {
        const fieldElement = renderInputs(getFormField(field), field.name, field.type, field.additionalProps);

        return fieldElement && <td key={field.name}>{fieldElement}</td>;
      })}

      {lastTier ? (
        <td>{variant === 'edit' && <CloseWidePopUp height='1rem' width='1rem' onClick={removeTier} />}</td>
      ) : (
        //@TODO this moment i dont
        <td></td>
      )}
    </tr>
  );
};
