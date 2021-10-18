import { typedMemo } from '@/helpers/typedMemo';
import { Button, Checkbox, RadioButton, RadioGroup, Select, TextInput } from '@my-ui/core';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import styles from './Filters.module.scss';
import { Filter, FiltersProps } from './FilterTypes';

const filterReducer = (filter: Filter, state, setState) => {
  switch (filter.type) {
    case 'radio':
      return (
        <div>
          <span>{filter.name}</span>
          <RadioGroup
            value={state[filter.name]}
            onChange={(e) => setState({ ...state, [filter.name]: e.target.value })}>
            {filter.props.map((prop) => (
              <div key={prop.value}>
                <RadioButton id={prop.label} {...prop} />

                <label htmlFor={prop.label}>{prop.label}</label>
              </div>
            ))}
          </RadioGroup>
        </div>
      );
    case 'input':
      return (
        <TextInput
          {...filter.props}
          value={state[filter.name]}
          onChange={(e) => setState({ ...state, [filter.name]: e.target.value })}
        />
      );
    case 'select':
      return (
        <Select
          onChange={(e: { label: string; value: string | number }[]) =>
            setState({ ...state, [filter.name]: e?.filter((option) => option.value !== '*') })
          }
          {...filter.props}
        />
      );
    case 'from-to':
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10.7rem', marginRight: '1.6rem' }}>
            <TextInput
              {...filter.fromInputProps}
              fullWidth
              value={state?.[filter.name]?.from}
              onChange={(e) => setState({ ...state, [filter.name]: { ...state?.[filter.name], from: e.target.value } })}
            />
          </div>
          <div style={{ width: '10.7rem' }}>
            <TextInput
              {...filter.toInputProps}
              fullWidth
              value={state[filter.name]?.to}
              onChange={(e) => setState({ ...state, [filter.name]: { ...state?.[filter.name], to: e.target.value } })}
            />
          </div>
        </div>
      );
  }
};

const checkboxReducer = (filter: Filter, state, setState) => {
  switch (filter.type) {
    case 'checkbox':
      return (
        <div>
          <h3>{filter.label}</h3>
          {filter.checkboxProps.map((prop) => {
            return (
              <div key={prop.value}>
                <Checkbox
                  onChange={(e) =>
                    setState({ ...state, [filter.type]: { ...state?.[filter.type], [prop.label]: e.target.checked } })
                  }
                  id={prop.label}
                  name={filter.name}
                  {...prop}
                />
                <label htmlFor={prop.label}>{prop.label}</label>
              </div>
            );
          })}
        </div>
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
        {checkboxFilters &&
          checkboxFilters.map((filter, key) => {
            return <div key={key}>{checkboxReducer(filter, state, setState)}</div>;
          })}
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
