import { typedMemo } from '@/helpers/typedMemo';
import { LockIcon } from '@/icons/index';
import { Button, Checkbox, CheckboxProps, RadioGroup, TextInput, TextInputProps, Card, Typography } from '@my-ui/core';
import { RadioButtonProps } from '@my-ui/core/dist/components/checkbox-and-radio-button/RadioButton/RadioButton';
import { StatusProps } from '@my-ui/core/dist/components/Status/Status';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import styles from './Filters.module.scss';

export interface FilterReducerProps {
  type?: FilterType;
  props?: TextInputProps | RadioButtonProps;
  name?: string;
  value?: string;
  state?: unknown;
  setState?: (value: unknown) => void;
}

const filterReducer = (type, props, name, value, state, setState) => {
  const TypesEnum = {
    input: (
      <TextInput
        {...props}
        name={name}
        value={value ? value : state[name]}
        onChange={(e) => setState({ ...state, [name]: e.target.value })}
      />
    ),
    radio: (
      <RadioGroup name={name} {...props}>
        {' '}
      </RadioGroup>
    ), //Ask to Armen
    checkbox: <Checkbox />
  };
  return TypesEnum[type];
};

export type FilterType = 'select' | 'checkbox' | 'radio' | 'input' | 'dropdown';

export type IObject =
  | {
      type: 'checked';
      parameters: IParametersCheck;
    }
  | {
      type: 'counter';
      parameters: IParametersCounter;
    };
export type ObjectType = IObject['type']; //// in case you need this union
export type ObjectParameters = IObject['parameters']; //// in case you need this union
export interface IParametersCheck {
  checked: boolean;
}
export interface IParametersCounter {
  max: number;
  min: number;
  step: number;
}

export interface FiltersProps {
  filters?: {
    type?: FilterType;
    name?: string;
    props?: TextInputProps | RadioButtonProps | StatusProps;
  }[];
  checkboxFilter?: {
    type?: string;
    name?: string;
    props?: CheckboxProps;
  }[];
  clearLabel?: string;
  applyLabel?: string;
  resultLabel?: string;
  defaultOpened?: boolean;
  initialValues?: {};
  onSubmit?: (state: any) => void;
  onClear?: () => void;
}

const Filters: FC<FiltersProps> = ({
  filters,
  checkboxFilter,
  clearLabel,
  applyLabel,
  resultLabel,
  defaultOpened,
  initialValues,
  onSubmit,
  onClear
}) => {
  const INITIAL_STATE = { ...initialValues };

  const [state, setState] = useState(INITIAL_STATE);
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const handelOpenClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  console.log(state, isOpen);

  return (
    <Card
      borderRadius='1.6'
      className={classNames(styles.FiltersBase, styles[`FiltersBase--${isOpen ? 'open' : 'closed'}`])}>
      <div className={styles.FiltersContainer}>
        {filters &&
          filters.map((filter, key) => {
            return (
              <div className={styles.FilterContainer} key={key}>
                {filterReducer(filter.type, filter.props, filter.name, filter.props.value, state, setState)}
              </div>
            );
          })}
        {/* Checkbox Filter Reducer */}
        {checkboxFilter &&
          checkboxFilter.map((filter, key) => {
            return (
              <div key={key}>
                {filterReducer(filter.type, filter.props, filter.name, filter.props.value, state, setState)}
              </div>
            );
          })}
      </div>
      <div className={styles.ControlContainer}>
        <div>
          {/* <LockIcon/>  */}
          <Typography variant='p4' className={styles.FilterLabel}>
            Filters
          </Typography>
        </div>
        <div className={styles.ToggleContainer}>
          <Typography variant='p4' className={styles.UserFoundLabel}>
            1062 users found
          </Typography>
          <span onClick={handelOpenClick}>Open-Close Icon</span>
          <Typography variant='p3' className={styles.ClearLabel} onClick={() => onClear(state)}>
            {clearLabel}
          </Typography>
          <Button onClick={() => onSubmit(state)}>{applyLabel}</Button>
        </div>
      </div>
    </Card>
  );
};

export default typedMemo(Filters);
