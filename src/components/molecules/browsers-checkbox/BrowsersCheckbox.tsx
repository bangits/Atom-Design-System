import classNames from 'classnames';
import React, { FC, ReactNode, useCallback, useState } from 'react';
import styles from './BrowsersCheckbox.module.scss';

export interface BrowsersCheckboxProps {
  browserIcon?: ReactNode;
  disabled?: boolean;
  defaultSelected?: boolean;
  selected?: boolean;
  onChange?: (value: boolean) => void;
}

const BrowsersCheckbox: FC<BrowsersCheckboxProps> = ({
  browserIcon,
  disabled,
  selected: selectedProp,
  defaultSelected,
  onChange
}) => {
  const [selected, setSelected] = useState<boolean>(defaultSelected);

  const onClickHandler = useCallback(() => {
    setSelected(!selected);

    if (onChange) onChange(!(selectedProp !== undefined ? selectedProp : selected));
  }, [selected, selectedProp, setSelected, onChange]);

  return (
    <>
      <div
        onClick={!disabled ? onClickHandler : null}
        className={classNames(styles.BrowsersCheckboxBase, {
          [styles['BrowsersCheckboxBase--selected']]: selectedProp !== undefined ? selectedProp : selected
        })}>
        {browserIcon}
      </div>
    </>
  );
};

export default BrowsersCheckbox;
