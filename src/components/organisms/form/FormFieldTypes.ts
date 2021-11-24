import { CheckboxProps, DatepickerProps, RadioButtonProps, SelectProps, TextInputProps } from '@my-ui/core';

export type FormFieldTypes = 'select' | 'input' | 'custom' | 'datepicker' | 'checkbox' | 'radio';
export type FormFieldValueType = string | number | string[] | number[] | Date;

export type FormFieldProp = {
  name: string;
  col?: number;
  additionalProps?: any;
  component?: () => JSX.Element;
} & (
  | {
      label?: string;
      type: 'input';
      props?: TextInputProps;
    }
  | {
      label?: string;
      type: 'select';
      props?: SelectProps<any, boolean, any>;
    }
  | {
      type: 'radio';
      label: string;
      props?: (RadioButtonProps & { label: string; value: string | number })[];
    }
  | {
      type: 'checkbox';
      label: string;
      props?: (CheckboxProps & { label: string; value: string | number })[];
    }
  | {
      type: 'datepicker';
      label?: string;
      props?: Omit<DatepickerProps, 'onChange'>;
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
