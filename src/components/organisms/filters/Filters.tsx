import { typedMemo } from '@/helpers/typedMemo';
import { Button, CheckboxProps, RadioButton, RadioGroup, TextInput, TextInputProps } from '@my-ui/core';
import { RadioButtonProps } from '@my-ui/core/dist/components/checkbox-and-radio-button/RadioButton/RadioButton';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import styles from './Filters.module.scss';

export type FilterType = 'select' | 'checkbox' | 'radio' | 'input' | 'dropdown';
export interface FilterReducerProps {
  type?: FilterType;
  props?: TextInputProps | RadioButtonProps;
  name?: string;
  value?: string;
  state?: unknown;
  setState?: (value: unknown) => void;
}

export type Filter = {
  name: string;
} & (
  | {
      type: 'input';
      props: TextInputProps;
    }
  | {
      type: 'select';
      props: { x: string };
    }
  | {
      type: 'checkbox';
      props: CheckboxProps;
    }
  | {
      type: 'radio';
      props: RadioButtonProps[];
    }
);
export interface FiltersProps<T> {
  filters?: Filter[];
  checkboxFilters?: {
    name: string;
    checkboxProps: CheckboxProps[];
  }[];
  clearLabel: string;
  applyLabel: string;
  resultLabel: string;
  defaultOpened?: boolean;
  initialValues?: T;
  onSubmit: (state: T) => void;
  onClear: () => void;
}

const filterReducer = (filter: Filter, state, setState) => {
  switch (filter.type) {
    case 'radio':
      return (
        <>
          <RadioGroup
            value={state[filter.name]}
            onChange={(e) => setState({ ...state, [filter.name]: e.target.value })}>
            {filter.props.map((prop) => (
              <RadioButton key={prop.value} {...prop} />
            ))}
          </RadioGroup>
        </>
      );
    case 'input':
      return (
        <TextInput
          {...filter.props}
          value={state[filter.name]}
          onChange={(e) => setState({ ...state, [filter.name]: e.target.value })}
        />
      );
  }
};

function Filters<T>({
  filters,
  checkboxFilters,
  clearLabel,
  applyLabel,
  resultLabel,
  defaultOpened,
  initialValues,
  onSubmit,
  onClear
}: FiltersProps<T>) {
  const [state, setState] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const handelOpenClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className={classNames(styles.FiltersBase, styles[`FiltersBase--${isOpen ? 'open' : 'closed'}`])}>
      <div>
        {filters &&
          filters.map((filter, key) => {
            return <div key={key}>{filterReducer(filter, state, setState)}</div>;
          })}
        {/* Checkbox Filter Reducer */}
        {/* {checkboxFilters &&
              checkboxFilters.map((filter, key) => {
                return (
                  <div key={key}>
                    {filterReducer(filter, state, setState)}
                  </div>
                );
              })} */}
      </div>
      <div>
        <div>Icon Container</div>
        <div>
          <span onClick={handelOpenClick}>Open-Close Icon</span>
          <span onClick={onClear}>{clearLabel}</span>
          <Button disabled={!isOpen} onClick={() => onSubmit(state)}>
            {applyLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default typedMemo(Filters);
