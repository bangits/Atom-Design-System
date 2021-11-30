import { CheckboxProps } from '@my-ui/core';
import React from 'react';
export interface CheckboxGroupProps {
    label: string;
    checkboxes: (CheckboxProps & {
        label: string;
    })[];
    value?: CheckboxProps['value'][];
    defaultValue?: CheckboxProps['value'][];
    onChange?: (checkedCheckboxes: CheckboxProps['value'][]) => void;
}
declare const _default: React.FC<CheckboxGroupProps>;
export default _default;
