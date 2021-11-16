import { CheckboxProps, DatepickerProps, SelectProps, TextInputProps, RadioButtonProps } from '@my-ui/core';

export type FormFieldTypes = 'select' | 'input' | 'custom' | 'datePicker' | 'checkbox' | 'radioButton';
export type FormFieldValueType = string | number | string[] | number[] | Date;

export type FormFieldProp = {
  name: string;
  label: string;
  col?: number;
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
      type: 'checkbox';
      label: string;
      props: (CheckboxProps & { label: string; value: string | number })[];
    }
  | {
      type: 'datepicker';
      props: DatepickerProps;
    }
  | {
      type: 'custom';
      component: () => JSX.Element;
    }
);

export interface FormFieldProps {
  filters: FormFieldProp[];
  className?: string;
}
