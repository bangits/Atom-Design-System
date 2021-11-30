import { TextInputProps } from '@my-ui/core';
import React from 'react';
export interface FromToInputProps {
    fromInputProps?: TextInputProps;
    toInputProps?: TextInputProps;
    fromInputDefaultValue?: TextInputProps['value'];
    toInputDefaultValue?: TextInputProps['value'];
    onChange?(values: FromToValues): void;
}
export declare type FromToValues = {
    from: TextInputProps['value'];
    to: TextInputProps['value'];
};
declare const _default: React.FC<FromToInputProps>;
export default _default;
