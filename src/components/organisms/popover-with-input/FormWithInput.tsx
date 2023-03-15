import { Icons } from '@/atom-design-system';
import { Button, TextInput, TextInputProps } from '@my-ui/core';
import classNames from 'classnames';
import { FC, MouseEventHandler, useState } from 'react';
import styles from './PopoverWithInput.module.scss';

export interface FormWithInputProps {
  title: string;
  totalCount?: string;
  infoText?: string;
  buttonLabel: string;
  inputProps?: TextInputProps;
  initialPosition?: number;
  onBackBtnClick?: MouseEventHandler<HTMLButtonElement>;

  close?(): void;
  onSave?(value: number): void;
}

const FormWithInput: FC<FormWithInputProps> = ({
  buttonLabel,
  title,
  inputProps = {},
  totalCount,
  initialPosition,
  infoText,
  onBackBtnClick,
  close,
  onSave
}) => {
  // TODO: This should be fixed later
  infoText = infoText ?? totalCount;

  const [inputValue, setInputValue] = useState<number | string>(initialPosition || '');

  return (
    <div
      className={classNames(styles['FormWithInput'], {
        [styles['FormWithInput--with-back']]: !!onBackBtnClick
      })}>
      {onBackBtnClick && (
        <button className={styles['FormWithInput__back']} type='button' onClick={onBackBtnClick}>
          <Icons.BackIcon width='0.8rem' />
        </button>
      )}

      <p className={styles['FormWithInput__name']}>{title}</p>

      {infoText && <p className={styles['FormWithInput__info']}>{infoText}</p>}

      <TextInput
        type='number'
        value={inputValue}
        maxLength={6}
        onChange={(e) => {
          setInputValue(e.target.value);

          inputProps.onChange?.(e);
        }}
        {...inputProps}
        containerClassName={classNames(styles['FormWithInput__input'], inputProps.className)}
      />
      <Button
        onClick={() => {
          if (inputValue) {
            onSave(+inputValue);
            close();
          }
        }}
        className={styles['FormWithInput__button']}
        variant='link'>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default FormWithInput;
