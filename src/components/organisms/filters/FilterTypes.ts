import { FromToValues } from '@/components';
import { CheckboxProps, DatepickerProps, DateTimePickerProps, SelectProps, TextInputProps } from '@my-ui/core';
import { RadioButtonProps } from '@my-ui/core/dist/components/checkbox-and-radio-button/RadioButton/RadioButton';

export type FilterType = 'select' | 'checkbox' | 'radio' | 'input' | 'dropdown' | 'from-to' | 'datepicker';
export type FilterValueType =
  | string
  | number
  | string[]
  | number[]
  | { from: string; to: string }
  | Date
  | [Date, Date]
  | FromToValues
  | boolean;

export type CheckboxFilter = {
  label: string;
  name: string;
  checkboxProps: (CheckboxProps & { label: string; value: string | number; name: string })[];
};

export type FilterProp<T> = {
  name: string;
  label: string;
} & (
  | {
      type: 'input';
      props: TextInputProps;
    }
  | {
      type: 'select';
      props: SelectProps<any, boolean, any>;
    }
  | {
      type: 'truthly-select';
      props: Omit<SelectProps<any, boolean, any>, 'options'>;
      translations: {
        falseValue: string;
        trueValue: string;
        nullValue: string;
      };
    }
  | {
      type: 'radio';
      label: string;
      props: (RadioButtonProps & { label: string; value: string | number })[];
    }
  | {
      type: 'from-to';
      fromInputProps: TextInputProps;
      toInputProps: TextInputProps;
    }
  | {
      type: 'datepicker';
      props: Partial<DatepickerProps>;
    }
  | {
      type: 'timepicker';
      props: Partial<DateTimePickerProps>;
    }
  | {
      type: 'timepicker-from-to';
      props: Partial<DateTimePickerProps>;
      fromTimePickerProps: Partial<DateTimePickerProps>;
      toTimePickerProps: Partial<DateTimePickerProps>;
    }
  | {
      type: 'custom';
      component: (props: { onChange: (name: string, value: FilterValueType) => void; filterValues: T }) => JSX.Element;
    }
);

export interface FiltersProps<T> {
  selectProps?: SelectProps<any, boolean, any>;
  filters: FilterProp<T>[];
  onFiltersViewChange?: (updatedFilters: FilterProp<T>[]) => void;
  checkboxFilters?: CheckboxFilter[];
  clearLabel?: string;
  applyLabel?: string;
  saveLabel?: string;
  resultLabel?: string;
  defaultOpened?: boolean;
  initialValues: T;
  onSubmit: (state: T) => void;
  onSaveClick?: (
    filters: FilterProp<T>[],
    showedFilters: FilterProp<T>[],
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onClear?: (state: T) => void;
  className?: string;
  defaultFilters?: string[];
  showedFilters?: FilterProp<T>[];
}
