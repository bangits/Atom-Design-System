import { typedMemo } from '@/helpers';
import { DateTimePicker, DateTimePickerProps } from '@my-ui/core';
import { FC, useMemo, useState } from 'react';
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

  const dateFromPlusOneMinute = useMemo(() => {
    const selectedDateFromCloned = new Date(selectedDateFrom);

    if (toPickerProps.hideTimeSelection) selectedDateFromCloned.setHours(selectedDateFromCloned.getHours() + 24);
    else selectedDateFromCloned.setMinutes(selectedDateFromCloned.getMinutes() + 1);

    return selectedDateFromCloned;
  }, [toPickerProps.hideTimeSelection, selectedDateFrom]);

  return (
    <div className={styles.FromToTimePickerContainer}>
      <DateTimePicker
        {...(fromPickerProps || {})}
        onChange={(value) => {
          setSelectedDateFrom(value);

          onChange([value, null]);
        }}
        className={styles.FromPicker}
        selected={selected !== undefined ? selected && selected[0] : selectedDateFrom}
      />
      <DateTimePicker
        {...(toPickerProps || {})}
        minDate={toPickerProps?.minDate || dateFromPlusOneMinute}
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
