import { Icons } from '@/atom-design-system';
import { CheckboxGroup, Filter, FilterValueType } from '@/components';
import { arrayMoveMutable } from '@/helpers';
import { typedMemo } from '@/helpers/typedMemo';
import { Button, Card, Select, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import styles from './Filters.module.scss';
import { FilterProp, FiltersProps } from './FilterTypes';

export function Filters<T>({
  filters,
  selectProps,
  checkboxFilters,
  clearLabel,
  applyLabel,
  resultLabel,
  defaultOpened,
  initialValues,
  onSubmit,
  onClear,
  className
}: FiltersProps<T>) {
  const [filterValues, setFilterValues] = useReducer<
    (prev: T, updated: Record<string, FilterValueType> | 'clear') => T
  >(
    (prevState, updatedState) => (updatedState === 'clear' ? initialValues : { ...prevState, ...updatedState }),
    initialValues
  );

  const [isOpenedFilterCollapse, setIsOpenedFilterCollapse] = useState(defaultOpened);
  const [showedFilters, setShowedFilters] = useState<FilterProp<T>[]>(filters);

  const [showedCheckboxFilters, setShowedCheckboxFilters] = useState<typeof checkboxFilters>(checkboxFilters);

  const toggleFiltersCollapse = useCallback(
    () => setIsOpenedFilterCollapse(!isOpenedFilterCollapse),
    [isOpenedFilterCollapse]
  );

  const onFilterChange = useCallback((filterName: string, value: FilterValueType) => {
    setFilterValues({ [filterName]: value });
  }, []);

  const onFiltersConfigChange = useCallback(
    (selectedFilters) => {
      setShowedFilters([...selectedFilters.map((filter) => filters.find((f) => f?.name === filter)).filter((f) => f)]);
      setShowedCheckboxFilters([
        ...selectedFilters.map((filter) => checkboxFilters.find((f) => f?.name === filter)).filter((f) => f)
      ]);
    },
    [filters, checkboxFilters]
  );

  const filtersConfigOptions = useMemo(
    () =>
      [...filters, ...checkboxFilters].map((filter) => ({
        label: filter.label,
        value: filter.name
      })),
    [filters, checkboxFilters]
  );

  const filtersConfigDefaultValue = useMemo(
    () => filtersConfigOptions.map((value) => value.value),
    [filtersConfigOptions]
  );

  const onClearClick = useCallback(() => {
    if (!isOpenedFilterCollapse) return;

    setFilterValues('clear');

    onClear(filterValues);
  }, [isOpenedFilterCollapse]);

  const onDragChange = useCallback(
    ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
      setShowedFilters((prevFilters) => [...arrayMoveMutable(prevFilters, oldIndex, newIndex)]);
    },
    [setShowedFilters]
  );

  const SortableFilterItem = useMemo(
    () =>
      SortableElement(
        ({
          filter,
          filterValues,
          onFilterChange
        }: {
          filter: FilterProp<T>;
          filterValues: T;
          onFilterChange: (filterName: string, value: FilterValueType) => void;
        }) => (
          <Filter
            key={filter.name}
            value={filterValues[filter.name]}
            filter={filter}
            onFilterChange={onFilterChange}
            filterValues={filterValues}
          />
        )
      ),
    []
  );

  const SortableFiltersList = useMemo(
    () =>
      SortableContainer(
        ({
          filterValues,
          onFilterChange,
          items
        }: {
          filterValues: T;
          onFilterChange: (filterName: string, value: FilterValueType) => void;
          items: FilterProp<T>[];
        }) => {
          return (
            <div className={styles.FiltersContainer}>
              {items.map((filter, index) => (
                <SortableFilterItem
                  key={filter.name}
                  index={index}
                  filterValues={filterValues}
                  onFilterChange={onFilterChange}
                  filter={filter}
                />
              ))}
            </div>
          );
        }
      ),
    []
  );

  useEffect(() => setShowedFilters(filters), [filters]);
  useEffect(() => setShowedCheckboxFilters(checkboxFilters), [checkboxFilters]);

  return (
    <Card
      borderRadius={1.6}
      className={classNames(
        styles.FiltersBase,
        {
          [styles['FiltersBase--closed']]: !isOpenedFilterCollapse
        },
        className
      )}>
      <SortableFiltersList
        pressDelay={200}
        shouldCancelStart={() => false}
        axis='xy'
        items={showedFilters}
        filterValues={filterValues}
        onFilterChange={onFilterChange}
        onSortEnd={onDragChange}
        disableAutoscroll
      />

      <div className={styles.Checkbox}>
        {checkboxFilters &&
          showedCheckboxFilters.map((filter) => {
            return (
              <CheckboxGroup
                key={filter.name}
                label={filter.label}
                checkboxes={filter.checkboxProps}
                value={filterValues[filter.name] as (string | number)[]}
                onChange={(selectedCheckboxes: string[]) => onFilterChange(filter.name, selectedCheckboxes)}
              />
            );
          })}
      </div>
      <div className={styles.ControlContainer}>
        <div>
          <Select
            {...selectProps}
            dropdown
            dropdownLabel='Filters'
            isMulti={true}
            onChange={onFiltersConfigChange}
            defaultValue={filtersConfigDefaultValue}
            options={filtersConfigOptions}
            dropdownIcon={<Icons.FilterIcon />}
          />
        </div>
        <div className={styles.ToggleContainer}>
          <Typography variant='p4' className={styles.UserFoundLabel}>
            {resultLabel}
          </Typography>
          <div className={styles.ArrowIconContainer}>
            <span onClick={toggleFiltersCollapse}>
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
          <Typography variant='p3' className={!isOpenedFilterCollapse ? styles.ClearLabel : styles.ClearLabelActive}>
            <span onClick={onClearClick}>{clearLabel}</span>
          </Typography>
          <Button disabled={!isOpenedFilterCollapse} onClick={() => onSubmit(filterValues)}>
            {applyLabel}
          </Button>
        </div>
      </div>
    </Card>
  );
}

Filters.defaultProps = {
  checkboxFilters: []
};

export default typedMemo(Filters);
