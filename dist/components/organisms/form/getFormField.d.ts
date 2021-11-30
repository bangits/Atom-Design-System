/// <reference types="react" />
import { DatepickerProps, SelectProps, TextInputProps } from '@my-ui/core';
import { FormFieldProp } from './FormFieldTypes';
declare const getFormField: (field: FormFieldProp) => import("react").FunctionComponent<any> | ((props: TextInputProps) => JSX.Element) | ((props: SelectProps<any, boolean, any>) => JSX.Element) | ((props: (import("@my-ui/core").RadioButtonProps & {
    label: string;
    value: string | number;
})[]) => JSX.Element) | ((props: DatepickerProps) => JSX.Element);
export default getFormField;
