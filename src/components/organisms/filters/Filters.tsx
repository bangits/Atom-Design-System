import { typedMemo } from '@/helpers/typedMemo';
import { Button, Checkbox, CheckboxProps, RadioGroup, TextInput, TextInputProps } from '@my-ui/core';
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
    <div className={classNames(styles.FiltersBase, styles[`FiltersBase--${isOpen ? 'open' : 'closed'}`])}>
      <div>
        {filters &&
          filters.map((filter, key) => {
            return (
              <div key={key}>
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
      <div>
        <div>Icon Container</div>
        <div>
          <span onClick={handelOpenClick}>Open-Close Icon</span>
          <span onClick={() => onClear(state)}>{clearLabel}</span>
          <Button onClick={() => onSubmit(state)}>{applyLabel}</Button>
        </div>
      </div>
    </div>
  );
};

export default typedMemo(Filters);
