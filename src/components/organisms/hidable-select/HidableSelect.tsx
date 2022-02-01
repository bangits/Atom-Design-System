import { Button, IconButton, Icons } from '@my-ui/core';
import React, { FC, ReactNode, useState } from 'react';
import styles from './HidableSelect.module.scss';

export interface HidableSelectProps {
  renderCustomSelect: (changeOpenedCustomSelect: (isOpened: boolean) => void) => ReactNode;
  buttonTitle: string;
}

const HidableSelect: FC<HidableSelectProps> = ({ renderCustomSelect, buttonTitle }) => {
  const [isOpenedCurrenciesSelect, setOpenedCurrenciesSelect] = useState(false);

  return (
    <div>
      {isOpenedCurrenciesSelect ? (
        <div className={styles.SelectContent}>
          {renderCustomSelect(setOpenedCurrenciesSelect)}
          <IconButton
            onClick={() => setOpenedCurrenciesSelect(false)}
            icon={
              <span className={styles.CloseIcon}>
                <Icons.CloseIcon />
              </span>
            }
          />
        </div>
      ) : (
        <Button
          onClick={() => setOpenedCurrenciesSelect(true)}
          variant='link'
          startIcon={<Icons.PlusCircleLarge />}
          className={styles.AddButton}>
          {buttonTitle}
        </Button>
      )}
    </div>
  );
};

export default HidableSelect;
