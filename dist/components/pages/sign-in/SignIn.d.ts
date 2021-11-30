import { TextInput } from '@my-ui/core';
import React from 'react';
export interface SignInProps {
    renderInputs?: (InputComponent: typeof TextInput, name: string) => JSX.Element;
    title?: string;
    subtitle?: string;
    buttonText?: string;
    loginErrorMessage?: string;
    usernameInputLabel: string;
    passwordInputLabel: string;
    usernameInputName?: string;
    passwordInputName?: string;
    buttonProps?: string;
}
declare const _default: React.FC<SignInProps>;
export default _default;
