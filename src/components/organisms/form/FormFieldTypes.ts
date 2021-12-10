import { CheckboxGroupProps, RadioGroupProps } from '@/components';
import { DatepickerProps, SelectProps, TextInputProps } from '@my-ui/core';
import { ReactNode } from 'react';

export type FormFieldTypes = 'select' | 'input' | 'custom' | 'datepicker' | 'checkbox' | 'radio' | 'header';
export type FormFieldValueType = string | number | string[] | number[] | Date;

export type FormFieldProp = {
  name: string;
  col?: number;
  additionalProps?: any;
} & (
  | {
      label?: string;
      type: 'input';
      props?: TextInputProps;
      component?: (props: TextInputProps) => JSX.Element;
    }
  | {
      label?: string;
      type: 'select';
      props?: SelectProps<any, boolean, any>;
      component?: (props: SelectProps<any, boolean, any>) => JSX.Element;
    }
  | {
      label: string;
      type: 'radio';
      props?: RadioGroupProps;
      component?: (props: RadioGroupProps) => JSX.Element;
    }
  | {
      label: string;
      type: 'checkbox';
      props?: CheckboxGroupProps;
      component?: (props: CheckboxGroupProps) => JSX.Element;
    }
  | {
      type: 'datepicker';
      label?: string;
      props?: Omit<DatepickerProps, 'onChange'>;
      component?: (props: DatepickerProps) => JSX.Element;
    }
  | {
      type: 'custom';
      component: () => JSX.Element;
    }
  | {
      type?: 'header';
      label?: ReactNode;
      component?: () => JSX.Element;
    }
);

export interface FormFieldProps {
  filters: FormFieldProp[];
  className?: string;
}
