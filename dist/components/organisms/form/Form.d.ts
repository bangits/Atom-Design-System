import { ButtonProps } from '@my-ui/core';
import React from 'react';
import { FormFieldProp, FormFieldTypes } from './FormFieldTypes';
export interface FormProps {
    onBackButtonClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    showBackButton?: boolean;
    title: string;
    firstButtonProps: ButtonProps;
    secondButtonProps: ButtonProps;
    renderInputs: (InputComponent: React.ElementType, name: string, fieldType: FormFieldTypes, props: any) => JSX.Element;
    fields: FormFieldProp[];
}
declare const _default: React.FC<FormProps>;
export default _default;
