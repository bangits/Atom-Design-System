import { PlusCircleOutlinedIcon } from '@/icons';
import { Checkbox, Scroll, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, useState, ReactNode, useEffect } from 'react';
import { CreatableRow } from './CustomRow';
import styles from './CreatableTable.module.scss';
import { CreatableColumn } from './CreatableColumn';
import { FormFieldProp, FormFieldTypes, FormFieldValueType } from '../form';

export interface CreatableViewModel {
  index: number;
  from: string;
  to: string;
  amount: string;
  remove: (index: number) => any;
  fields: any[];
  renderInputs: (InputComponent: React.ElementType, name: string, fieldType: FormFieldTypes, props: any) => JSX.Element;
}

export interface CreatableTableProps {
  addTier: () => void;
  amountOrPercent: boolean;
  columns: {
    type: 'custom' | 'default';
    value: string | ReactNode;
    props?: {
      beforeLabel: string;
      afterLabel: string;
    };
  }[];
  buttonName: string;
}

const CreatableTable: FC<CreatableTableProps> = ({ buttonName, columns, children, addTier }) => {
  return (
    <div className={classNames(styles.CreatableTable)}>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => {
              return <CreatableColumn index={index} column={column} />;
            })}
          </tr>
        </thead>

        <tbody>{children}</tbody>
        <tfoot>
          <tr>
            <th>
              <div onClick={addTier} className={styles[`CreatableTable--right-block`]}>
                <PlusCircleOutlinedIcon height='2rem' width='2rem' />
                <Typography variant='p4'>{buttonName}</Typography>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
      {/* <button onClick={() => console.log({ ...state, amountOrPercent })}>Click</button> */}
    </div>
  );
};

export default CreatableTable;
