import { FilterValueType, FromToInput, RadioGroup } from '@/components';
import { typedMemo } from '@/helpers';
import { DatePicker, Select, TextInput } from '@my-ui/core';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Filters.module.scss';
import { FilterProp } from './FilterTypes';
export interface FilterProps<T> {
  filter: FilterProp<T>;
  value: FilterValueType;
  onFilterChange: (filterName: string, value: FilterValueType) => void;
  filterValues: T;
}

const Filter = <T,>({ filter, value, onFilterChange, filterValues }: FilterProps<T>) => {
  let filterComponent: ReactNode | null = null;

  switch (filter.type) {
    case 'radio':
      filterComponent = (
        <RadioGroup
          label={filter.label}
          radios={filter.props}
          value={value as string}
          onChange={(e) => onFilterChange(filter.name, e.target.value)}
        />
      );
      break;
    case 'input':
      filterComponent = (
        <TextInput
          {...filter.props}
          value={value as string}
          onChange={(e) =>
            onFilterChange(
              filter.name,
              e.target.value && filter.props?.type === 'number' ? +e.target.value : e.target.value
            )
          }
        />
      );
      break;
    case 'select':
      filterComponent = (
        <Select
          {...filter.props}
          value={value as string}
          onChange={(updatedOptions) => onFilterChange(filter.name, updatedOptions as string[] | string)}
          fullWidth
        />
      );
      break;
    case 'truthly-select':
      filterComponent = (
        <Select
          {...filter.props}
          isMulti={false}
          value={String(value) as string}
          onChange={(value: string) => {
            onFilterChange(filter.name, value === 'null' ? null : value === 'true');
          }}
          fullWidth
          options={[
            {
              value: 'null',
              label: filter.translations.nullValue
            },
            {
              value: 'true',
              label: filter.translations.trueValue
            },
            {
              value: 'false',
              label: filter.translations.falseValue
            }
          ]}
        />
      );
      break;
    case 'from-to':
      filterComponent = (
        <FromToInput
          fromInputProps={{ ...(filter.fromInputProps || {}), value: (value as { from: string })?.from || '' }}
          toInputProps={{ ...(filter.toInputProps || {}), value: (value as { to: string })?.to || '' }}
          onChange={(updatedValues) => onFilterChange(filter.name, updatedValues)}
        />
      );
      break;
    case 'datepicker':
      filterComponent = (
        <DatePicker
          {...filter.props}
          {...(filter.props.selectsRange
            ? { startDate: value[0] as Date, endDate: value[1] as Date }
            : { selected: value as Date })}
          placeholderText={filter.label}
          onChange={(updatedDate) => onFilterChange(filter.name, updatedDate)}
        />
      );
      break;
    case 'custom':
      filterComponent = <filter.component onChange={onFilterChange} filterValues={filterValues} />;
  }

  return (
    <div
      className={classNames(styles.FilterContainer, {
        [styles.FilterContainerFromTo]: filter.type === 'from-to'
      })}
      key={filter.name}>
      {filterComponent}
    </div>
  );
};

export default typedMemo(Filter);
