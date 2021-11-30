import { DatepickerProps, SelectProps, TextInputProps } from '@my-ui/core';
import React, { ReactNode } from 'react';
export declare type FormSelectProps = SelectProps<any[], boolean, any>;
export interface EditFormProps {
    title: string;
    applyButton: ReactNode;
    closeButton: ReactNode;
    renderInputs: (InputComponent: React.ComponentType, name: string, fieldType: 'select' | 'input' | 'custom' | 'datePicker') => JSX.Element;
    fields: Array<{
        name: string;
    } & ({
        type: 'select';
        disabled?: boolean;
        props?: FormSelectProps;
        component?: (props: FormSelectProps) => JSX.Element;
    } | {
        type: 'input';
        disabled?: boolean;
        props?: TextInputProps;
        component?: (props: TextInputProps) => JSX.Element;
    } | {
        type: 'custom';
        disabled?: boolean;
        component: () => JSX.Element;
    } | {
        type: 'datePicker';
        disabled?: boolean;
        props?: DatepickerProps;
        component?: (props: DatepickerProps) => JSX.Element;
    })>;
}
declare const _default: React.FC<EditFormProps>;
export default _default;
