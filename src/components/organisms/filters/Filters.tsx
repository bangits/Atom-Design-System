import { typedMemo } from '@/helpers/typedMemo';
import { Button, Card, Checkbox, RadioButton, RadioGroup, Select, TextInput, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import { FilterArrow } from '../../../icons';
import styles from './Filters.module.scss';
import { Filter, FiltersProps } from './FilterTypes';

const filterReducer = (filter: Filter, state, setState) => {
  if (!filter) return;
  switch (filter.type) {
    case 'radio':
    // return (
    //   <div>
    //     <span className={styles.FilterRadioName}>{filter.label}</span>
    //     <div className={styles.FilterRadioContainer} style={{ display: 'flex' }}>
    //       <RadioGroup
    //         value={state[filter.name]}
    //         onChange={(e) => setState({ ...state, [filter.name]: e.target.value })}>
    //         {filter.props.map((prop) => (
    //           <div className={styles.FilterRadioGroup}>
    //             <div className={styles.FilterRadio}>
    //               <RadioButton key={prop.value} id={prop.value?.toString()} {...prop} />
    //             </div>
    //             <label className={styles.FilterRadioLabel} htmlFor={prop.value?.toString()}>
    //               {prop.label}
    //             </label>
    //           </div>
    //         ))}
    //       </RadioGroup>
    //     </div>
    //   </div>
    // );
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
          // value={state?.[filter.name].filter(
          //   (option) => option.label === 'type'
          // )}
          defaultValue={state?.[filter.name]}
          onChange={(e) => setState({ ...state, [filter.name]: e.filter((option) => option.value !== '*') })}
          fullWidth
          {...filter.props}
        />
      );
    case 'from-to':
      return (
        <>
          <TextInput
            {...filter.fromInputProps}
            fullWidth
            value={state?.[filter.name]?.from}
            onChange={(e) => setState({ ...state, [filter.name]: { ...state?.[filter.name], from: e.target.value } })}
            containerClassName={styles.FromInput}
          />
          <TextInput
            {...filter.toInputProps}
            fullWidth
            value={state[filter.name]?.to}
            onChange={(e) => setState({ ...state, [filter.name]: { ...state?.[filter.name], to: e.target.value } })}
            containerClassName={styles.ToInput}
          />
        </>
      );
  }
};

const checkboxReducer = (filter: Filter, state, setState) => {
  switch (filter.type) {
    case 'checkbox':
      return (
        <div className={styles.FilterCheckbox}>
          <div className={styles.FilterNameChekbox}>
            <span>{filter.label}</span>
          </div>
          <div className={styles.FilterCheckboxContainer}>
            {filter.checkboxProps.map((prop) => {
              return (
                <div className={styles.FilterCheckboxWrapper} key={prop.name}>
                  <div className={styles.FilterCheckboxCheckContainer}>
                    <Checkbox
                      onChange={(e) =>
                        setState({
                          ...state,
                          [filter.name]: e.target.checked
                            ? [...(state[filter.name] || []), prop.value]
                            : state[filter.name].filter((id) => id !== prop.value)
                        })
                      }
                      checked={(state[filter.name] || []).includes(prop.value)}
                      id={prop.name}
                    />
                  </div>
                  <label htmlFor={prop.name} className={styles.FilterLabelChekcbox}>
                    {prop.label}
                  </label>
                </div>
              );
            })}
          </div>
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
  const [dropdownFilters, setDropdownFilters] = useState<any>(filters);
  const [dropdownCheckboxFilters, setDropdownCheckboxFilters] = useState<any>(checkboxFilters);

  const handelOpenClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const dropdownOptions = useMemo(
    () => [
      ...filters?.map((filter: Filter) => {
        return {
          label: filter.props?.label
            ? filter.props?.label
            : filter.props?.inputLabel
            ? filter.props?.inputLabel
            : filter?.toInputProps?.label
            ? filter?.toInputProps?.label
            : filter?.fromInputProps?.label
            ? filter?.fromInputProps?.label
            : filter?.label
            ? filter?.label
            : '',
          value: filter?.name,
          filterProps: filter
        };
      })
    ],
    [filters]
  );

  const dropdownCheckboxOptions = useMemo(
    () => [
      ...checkboxFilters.map((filter) => {
        return { label: filter?.label, value: filter?.name, filterProps: filter };
      })
    ],
    [checkboxFilters]
  );

  const dropdownFiltersDefaultValues = useMemo(() => dropdownOptions.map((value) => value.value), [dropdownOptions]);
  const dropdownCheckboxFiltersDefaultValues = useMemo(
    () => dropdownCheckboxOptions.map((value) => value.value),
    [dropdownCheckboxOptions]
  );

  console.log(dropdownFilters);

  return (
    <Card
      borderRadius={1.6}
      className={classNames(styles.FiltersBase, styles[`FiltersBase--${isOpen ? 'open' : 'closed'}`])}>
      <div className={styles.FiltersContainer}>
        {filters &&
          dropdownFilters.map((filter, key) => {
            return (
              <div
                className={classNames(styles.FilterContainer, {
                  [styles.FilterContainerFromTo]: filter.type === 'from-to'
                })}
                key={key}>
                {filterReducer(filter, state, setState)}
              </div>
            );
          })}
      </div>
      <div className={styles.Checkbox}>
        {checkboxFilters &&
          dropdownCheckboxFilters.map((filter, key) => {
            return <div key={key}>{checkboxReducer(filter, state, setState)}</div>;
          })}
      </div>
      <div className={styles.ControlContainer}>
        <div>
          <Select
            selectAll={false}
            dropdown
            isSearchable={false}
            dropdownLabel={'Filters'}
            isMulti={true}
            onChange={(e) => {
              setDropdownCheckboxFilters([
                ...e.filter((e) => e.value !== '*')?.map((filterProp) => filterProp.filterProps)
              ]);
              setDropdownFilters([...e.filter((e) => e.value !== '*')?.map((filterProp) => filterProp.filterProps)]);
            }}
            defaultValue={[...dropdownFiltersDefaultValues, ...dropdownCheckboxFiltersDefaultValues]}
            options={[...dropdownOptions, ...dropdownCheckboxOptions]}
          />
        </div>
        <div className={styles.ToggleContainer}>
          <Typography variant='p4' className={styles.UserFoundLabel}>
            {resultLabel}
          </Typography>
          <div className={styles.ArrowIconContainer}>
            <span onClick={handelOpenClick}>
              <svg id='Arrow' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path
                  id='Path_1991'
                  data-name='Path 1991'
                  d='M0,5,5,0l5,5M0,12,5,7l5,5'
                  transform='translate(17 18) rotate(180)'
                  fill='none'
                  stroke='#3c54b2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                />
                <rect id='Rectangle_893' data-name='Rectangle 893' width='24' height='24' fill='none' />
              </svg>
            </span>
          </div>
          <Typography variant='p1' className={!isOpen ? styles.ClearLabel : styles.ClearLabelActive}>
            {/* @ts-ignore */}
            <span onClick={isOpen ? onClear : undefined}>{clearLabel}</span>
          </Typography>
          <Button disabled={!isOpen} onClick={() => onSubmit(state)}>
            {applyLabel}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default typedMemo(Filters);
