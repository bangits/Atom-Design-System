/// <reference types="react" />
import { CheckboxProps, DatepickerProps, RadioButtonProps, SelectProps, TextInputProps } from '@my-ui/core';
export declare type FormFieldTypes = 'select' | 'input' | 'custom' | 'datepicker' | 'checkbox' | 'radio';
export declare type FormFieldValueType = string | number | string[] | number[] | Date;
export declare type FormFieldProp = {
    name: string;
    col?: number;
    additionalProps?: any;
} & ({
    label?: string;
    type: 'input';
    props?: TextInputProps;
    component?: (props: TextInputProps) => JSX.Element;
} | {
    label?: string;
    type: 'select';
    props?: SelectProps<any, boolean, any>;
    component?: (props: SelectProps<any, boolean, any>) => JSX.Element;
} | {
    type: 'radio';
    label: string;
    props?: (RadioButtonProps & {
        label: string;
        value: string | number;
    })[];
    component?: (props: (RadioButtonProps & {
        label: string;
        value: string | number;
    })[]) => JSX.Element;
} | {
    type: 'checkbox';
    label: string;
    props?: (CheckboxProps & {
        label: string;
        value: string | number;
    })[];
    component?: (props: (CheckboxProps & {
        label: string;
        value: string | number;
    })[]) => JSX.Element;
} | {
    type: 'datepicker';
    label?: string;
    props?: Omit<DatepickerProps, 'onChange'>;
    component?: (props: DatepickerProps) => JSX.Element;
} | {
    type: 'custom';
    component: () => JSX.Element;
});
export interface FormFieldProps {
    filters: FormFieldProp[];
    className?: string;
}
