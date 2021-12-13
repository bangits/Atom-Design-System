import { typedMemo } from '@/helpers';
import { DateTimePicker, DateTimePickerProps } from '@my-ui/core';
import React, { FC, useState } from 'react';
import styles from './FromToTimePicker.module.scss';

export interface FromToTimepickerProps {
  fromPickerProps?: DateTimePickerProps;
  toPickerProps?: DateTimePickerProps;

  fromPickerDefaultValue?: Date;
  toPickerDefaultValue?: Date;

  selected?: [Date, Date];

  onChange?(values: [Date, Date]): void;
}

const FromToTimePicker: FC<FromToTimepickerProps> = ({
  onChange,
  fromPickerProps,
  toPickerProps,
  fromPickerDefaultValue,
  toPickerDefaultValue,
  selected
}) => {
  const [selectedDateFrom, setSelectedDateFrom] = useState<Date>(fromPickerDefaultValue || null);
  const [selectedDateTo, setSelectedDateTo] = useState<Date>(toPickerDefaultValue || null);

  return (
    <div className={styles.FromToTimePickerContainer}>
      <DateTimePicker
        {...(fromPickerProps || {})}
        maxDate={selectedDateTo}
        onChange={(value) => {
          setSelectedDateFrom(value);

          onChange([value, selected !== undefined ? selected && selected[1] : selectedDateTo]);
        }}
        className={styles.FromPicker}
        selected={selected !== undefined ? selected && selected[0] : selectedDateFrom}
      />
      <DateTimePicker
        {...(toPickerProps || {})}
        minDate={selectedDateFrom}
        onChange={(value) => {
          setSelectedDateTo(value);

          onChange([selected !== undefined ? selected && selected[0] : selectedDateFrom, value]);
        }}
        className={styles.ToPicker}
        selected={selected !== undefined ? selected && selected[1] : selectedDateTo}
      />
    </div>
  );
};

export default typedMemo(FromToTimePicker);
