import { FromToValues } from '@/components';
import { CheckboxProps, DatepickerProps, SelectProps, TextInputProps } from '@my-ui/core';
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
  | FromToValues;

export type CheckboxFilter = {
  label: string;
  name: string;
  checkboxProps: (CheckboxProps & { label: string; value: string | number; name: string })[];
};

export type FilterProp = {
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
      type: 'custom';
      component: (props: { onChange: (name: string, value: FilterValueType) => void }) => JSX.Element;
    }
);

export interface FiltersProps<T> {
  filters: FilterProp[];
  checkboxFilters?: CheckboxFilter[];
  clearLabel?: string;
  applyLabel?: string;
  resultLabel?: string;
  defaultOpened?: boolean;
  initialValues: T;
  onSubmit: (state: T) => void;
  onClear?: (state: T) => void;
}
