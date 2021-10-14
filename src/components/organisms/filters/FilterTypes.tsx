import { CheckboxProps, SelectProps, TextInputProps } from '@my-ui/core';
import { RadioButtonProps } from '@my-ui/core/dist/components/checkbox-and-radio-button/RadioButton/RadioButton';

export type FilterType = 'select' | 'checkbox' | 'radio' | 'input' | 'dropdown' | 'from-to';
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
      props: SelectProps;
    }
  | {
      type: 'checkbox';
      label: string;
      checkboxProps: CheckboxProps & { label: string; value: string | number }[];
    }
  | {
      type: 'radio';
      props: RadioButtonProps & { label: string; value: string | number }[];
    }
  | {
      type: 'from-to';
      fromInputProps: TextInputProps;
      toInputProps: TextInputProps;
    }
);
export interface FiltersProps<T> {
  filters?: Filter[];
  checkboxFilters?: Filter[];
  clearLabel: string;
  applyLabel: string;
  resultLabel: string;
  defaultOpened?: boolean;
  initialValues?: T;
  onSubmit: (state: T) => void;
  onClear: () => void;
}
