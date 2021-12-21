import { BrowsersCheckbox } from '@/components';
import { ChromeIcon, EdgeIcon, FirefoxIcon, OperaIcon, SafariIcon } from '@/icons';
import React, { FC, useCallback, useState } from 'react';
import styles from './BrowsersCheckboxGroup.module.scss';

export interface BrowsersCheckboxGroupProps {
  browsersEnum: {
    SAFARI: number | string;
    CHROME: number | string;
    FIREFOX: number | string;
    EDGE: number | string;
    OPERA: number | string;
  };
  initialValues?: (number | string)[];
  values?: (number | string)[];
  onChange?: (values: (string | number)[]) => void;
  disabled?: boolean;
}

const BrowsersCheckboxGroup: FC<BrowsersCheckboxGroupProps> = ({
  browsersEnum,
  onChange,
  values: valuesProp,
  initialValues,
  disabled
}) => {
  const [stateValues, setValues] = useState<(number | string)[]>(initialValues || []);

  const values = valuesProp !== undefined ? valuesProp : stateValues;

  const createBrowserCheckboxOnChange = useCallback(
    (enumValue: string | number) => (value: boolean) => {
      const updatedValues = !value ? [enumValue, ...values] : [...values.filter((value) => value !== enumValue)]

      setValues(updatedValues)
      
      onChange?.(updatedValues);
    },
    [onChange, values]
  );

  return (
    <div className={styles.BrowsersCheckboxGroupBase}>
      <BrowsersCheckbox
        browserIcon={<ChromeIcon />}
        disabled={disabled}
        selected={!values.includes(browsersEnum.CHROME)}
        onChange={createBrowserCheckboxOnChange(browsersEnum.CHROME)}
      />
      <BrowsersCheckbox
        browserIcon={<EdgeIcon />}
        disabled={disabled}
        selected={!values.includes(browsersEnum.EDGE)}
        onChange={createBrowserCheckboxOnChange(browsersEnum.EDGE)}
      />
      <BrowsersCheckbox
        browserIcon={<FirefoxIcon />}
        disabled={disabled}
        selected={!values.includes(browsersEnum.FIREFOX)}
        onChange={createBrowserCheckboxOnChange(browsersEnum.FIREFOX)}
      />
      <BrowsersCheckbox
        browserIcon={<OperaIcon />}
        disabled={disabled}
        selected={!values.includes(browsersEnum.OPERA)}
        onChange={createBrowserCheckboxOnChange(browsersEnum.OPERA)}
      />
      <BrowsersCheckbox
        browserIcon={<SafariIcon />}
        disabled={disabled}
        selected={!values.includes(browsersEnum.SAFARI)}
        onChange={createBrowserCheckboxOnChange(browsersEnum.SAFARI)}
      />
    </div>
  );
};

export default BrowsersCheckboxGroup;
