import styles from './Radio.module.scss';
import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { RadioButton, RadioGroup as MyUIRadioGroup, RadioGroupProps as MyUIRadioGroupProps } from '@my-ui/core';
import { typedMemo } from '@/helpers/typedMemo';
import { RadioGroup } from '@/components';
import classNames from 'classnames';

export type RadioTypes = {
  value?: string;
  icon?: ReactNode;
  checked?: boolean;
};

export interface RadioProps {
  radios?: RadioTypes[];
  label?: string;
  checked?: boolean;
}

const Radio: FC<RadioProps> = ({ checked, radios, ...radioGroupProps }) => {
  const [selectedDrink, setSelectedDrink] = useState<string>('');

  console.log(selectedDrink);

  return (
    <div className='container'>
      <MyUIRadioGroup>
        {radios?.map((radio) => (
          <div className={classNames(styles.ccSelector)} key={radio.value}>
            <RadioButton
              className={classNames(styles.RadioButton)}
              name={'ufgyvu'}
              id={radio.value?.toString()}
              {...radioGroupProps}
              onClick={() => setSelectedDrink(radio.value)}
              value={radio.value?.toString()}
              defaultChecked={checked}
            />
            <label
              className={classNames(
                {
                  [styles['RadioCardActive']]: selectedDrink === radio.value
                },
                styles.drinkcardCC
              )}
              htmlFor={radio.value?.toString()}>
              {radio.icon}
            </label>
          </div>
        ))}
      </MyUIRadioGroup>
    </div>
  );
};

export default typedMemo(Radio);
