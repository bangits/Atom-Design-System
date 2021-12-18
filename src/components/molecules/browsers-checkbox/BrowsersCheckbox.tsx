import classNames from 'classnames';
import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './BrowsersCheckbox.module.scss';

export interface BrowsersCheckboxProps {
  browserIcon?: ReactNode;
  disabled?: boolean;
  defaultSelected?: boolean;
  onChange?: (value: boolean) => void;
}

const BrowsersCheckbox: FC<BrowsersCheckboxProps> = ({ browserIcon, disabled, defaultSelected = false, onChange }) => {
  const [selected, setSelected] = useState<boolean>(defaultSelected);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  const onClickHandler = useCallback(() => {
    setSelected(!selected);
  }, [selected, setSelected]);

  return (
    <>
      <div
        onClick={!disabled ? onClickHandler : null}
        className={classNames(styles.BrowsersCheckboxBase, {
          [styles['BrowsersCheckboxBase--selected']]: selected
        })}>
        {browserIcon}
      </div>
    </>
  );
};

export default BrowsersCheckbox;
