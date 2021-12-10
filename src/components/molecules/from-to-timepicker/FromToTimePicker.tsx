import { typedMemo } from '@/helpers';
import React, { FC } from 'react';

export interface FromToTimepickerProps {
  onChange?(values: any): void;
}

// export type FromToValues = { from: TextInputProps['value']; to: TextInputProps['value'] };

const FromToInput: FC<FromToTimepickerProps> = ({ onChange }) => {
  return <div></div>;
};

export default typedMemo(FromToInput);
