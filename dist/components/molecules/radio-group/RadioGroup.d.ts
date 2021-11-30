import { RadioGroupProps as MyUIRadioGroupProps } from '@my-ui/core';
import { FC } from 'react';
export interface RadioType {
    value: string | number;
    label: string;
}
export interface RadioGroupProps extends MyUIRadioGroupProps {
    label: string;
    radios: RadioType[];
}
declare const _default: FC<RadioGroupProps>;
export default _default;
