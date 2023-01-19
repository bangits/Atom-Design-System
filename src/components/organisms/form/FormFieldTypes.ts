import {
  AddProviderNameIdProps,
  CheckboxGroupProps,
  RadioGroupProps,
  TableFieldProps,
  TextInputProps
} from '@/components';
import { CheckboxProps, DatepickerProps, DateTimePickerProps, SelectProps } from '@my-ui/core';
import { ReactNode } from 'react';

export type FormFieldTypes =
  | 'select'
  | 'input'
  | 'field'
  | 'custom'
  | 'datepicker'
  | 'timepicker'
  | 'checkbox'
  | 'radio'
  | 'header'
  | 'from-to-input'
  | 'single-checkbox';
export type FormFieldValueType = string | number | string[] | number[] | Date;

export type FormFieldProp = {
  name: string;
  col?: number;
  additionalProps?: any;
  justifyContent?: 'flex-end';
  labelText?: string;
  labelPositionRelative?: boolean;
  removeMargin?: boolean;
} & (
  | {
      label?: string;
      type: 'input';
      props?: TextInputProps;
      component?: (props: TextInputProps) => JSX.Element;
    }
  | {
      label?: string;
      type: 'from-to-input';
      props?: Omit<AddProviderNameIdProps, 'onChange'>;
      component?: (props: AddProviderNameIdProps) => JSX.Element;
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
      type: 'single-checkbox';
      props?: CheckboxProps;
      label?: string;
      component?: (props: CheckboxProps) => JSX.Element;
    }
  | {
      type: 'datepicker';
      label?: string;
      props?: Omit<DatepickerProps, 'onChange'>;
      component?: (props: DatepickerProps) => JSX.Element;
    }
  | {
      type: 'timepicker';
      label?: string;
      props?: Omit<DateTimePickerProps, 'onChange'>;
      component?: (props: DateTimePickerProps) => JSX.Element;
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
  | {
      label?: string;
      type: 'field';
      props?: TableFieldProps;
      component?: (props: TableFieldProps) => JSX.Element;
    }
);

export interface FormFieldProps {
  filters: FormFieldProp[];
  className?: string;
  type: string;
  name: string;
  col?: number;
}
