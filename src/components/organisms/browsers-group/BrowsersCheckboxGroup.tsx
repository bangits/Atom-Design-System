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

const BrowsersCheckboxGroup: FC<BrowsersCheckboxGroupProps> = ({ browsersEnum, onChange, initialValues }) => {
  const [values, setValues] = useState<(number | string)[]>(initialValues ?? []);

  useEffect(() => {
    onChange?.(values);
  }, [values]);
  return (
    <div className={styles.BrowsersCheckboxGroupBase}>
      <BrowsersCheckbox
        browserIcon={<ChromeIcon />}
        onChange={(value) => {
          value
            ? setValues([...values, browsersEnum.CHROME])
            : setValues([...values.filter((value) => value !== browsersEnum.CHROME)]);
        }}
      />
      <BrowsersCheckbox
        browserIcon={<EdgeIcon />}
        onChange={(value) => {
          value
            ? setValues([...values, browsersEnum.EDGE])
            : setValues([...values.filter((value) => value !== browsersEnum.EDGE)]);
        }}
      />
      <BrowsersCheckbox
        browserIcon={<FirefoxIcon />}
        onChange={(value) => {
          value
            ? setValues([...values, browsersEnum.FIREFOX])
            : setValues([...values.filter((value) => value !== browsersEnum.FIREFOX)]);
        }}
      />
      <BrowsersCheckbox
        browserIcon={<OperaIcon />}
        onChange={(value) => {
          value
            ? setValues([...values, browsersEnum.OPERA])
            : setValues([...values.filter((value) => value !== browsersEnum.OPERA)]);
        }}
      />
      <BrowsersCheckbox
        browserIcon={<SafariIcon />}
        onChange={(value) => {
          value
            ? setValues([...values, browsersEnum.SAFARI])
            : setValues([...values.filter((value) => value !== browsersEnum.SAFARI)]);
        }}
      />
    </div>
  );
};

export default BrowsersCheckboxGroup;
