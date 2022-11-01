import { PlusCircleOutlinedIcon } from '@/icons';
import { Checkbox, Scroll, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, useState, ReactNode, useEffect } from 'react';
import { CreatableRow } from './CreatableRow';
import styles from './CreatableTable.module.scss';
import { CreatableColumn } from './CreatableColumn';
import { FormFieldTypes } from '../form';

export interface CreatableTableViewModel {
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
  margin?: number;
  editMode?: boolean;
}

const CreatableTable: FC<CreatableTableProps> = ({ buttonName, columns, children, addTier, margin, editMode }) => {
  return (
    <>
      <div style={margin && { margin }} className={classNames(styles.CreatableTable)}>
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => {
                return <CreatableColumn index={index} column={column} />;
              })}
            </tr>
          </thead>
          <tbody>
            <Scroll height='42.6rem' autoHide autoHeightMin='3.6rem'>
              {children}
            </Scroll>
          </tbody>
          {editMode && (
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
          )}
        </table>
      </div>
    </>
  );
};

export default CreatableTable;
