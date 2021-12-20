import { BrowsersCheckbox } from '@/components';
import { ChromeIcon, EdgeIcon, FirefoxIcon, OperaIcon, SafariIcon } from '@/icons';
import React, { FC, useEffect, useState } from 'react';
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
  onChange?: (values: (string | number)[]) => void;
  disabled?: boolean;
}

const BrowsersCheckboxGroup: FC<BrowsersCheckboxGroupProps> = ({ browsersEnum, onChange, initialValues, disabled }) => {
  const [values, setValues] = useState<(number | string)[]>(initialValues || []);

  useEffect(() => {
    onChange?.(values);
    setValues(values);
  }, [values]);  

  return (
    <div className={styles.BrowsersCheckboxGroupBase}>
      <BrowsersCheckbox
        browserIcon={<ChromeIcon />}
        disabled={disabled}
        defaultSelected={!values.includes(browsersEnum.CHROME)}
        onChange={(value) => {
          !value
            ? setValues([browsersEnum.CHROME, ...values])
            : setValues([...(values.filter((e) => e !== browsersEnum.CHROME))]);
        }}
      />
      <BrowsersCheckbox
        browserIcon={<EdgeIcon />}
        disabled={disabled}
        defaultSelected={!values.includes(browsersEnum.EDGE)}
        onChange={(value) => {
          !value
            ? setValues([browsersEnum.EDGE, ...values])
            : setValues([...(values.filter((e) => e !== browsersEnum.EDGE))]);
        }}
      />
      <BrowsersCheckbox
        browserIcon={<FirefoxIcon />}
        disabled={disabled}
        defaultSelected={!values.includes(browsersEnum.FIREFOX)}
        onChange={(value) => {
          !value
            ? setValues([browsersEnum.FIREFOX, ...values])
            : setValues([...(values.filter((e) => e !== browsersEnum.FIREFOX))]);
        }}
      />
      <BrowsersCheckbox
        browserIcon={<OperaIcon />}
        disabled={disabled}
        defaultSelected={!values.includes(browsersEnum.OPERA)}
        onChange={(value) => {
          !value
            ? setValues([browsersEnum.OPERA, ...values])
            : setValues([...(values.filter((e) => e !== browsersEnum.OPERA))]);
        }}
      />
      <BrowsersCheckbox
        browserIcon={<SafariIcon />}
        disabled={disabled}
        defaultSelected={!values.includes(browsersEnum.SAFARI)}
        onChange={(value) => {
          !value
            ? setValues(!values.includes(browsersEnum.SAFARI) ? [browsersEnum.SAFARI, ...values] : values)
            : setValues([...(values.filter((e) => e !== browsersEnum.SAFARI))]);
        }}
      />
    </div>
  );
};

export default BrowsersCheckboxGroup;
