import { ButtonForm, ButtonFormProps } from '@/atom-design-system';
import { Button, TextInput, TextInputProps } from '@my-ui/core';
import { ComponentType } from '@my-ui/core/dist/types';
import classNames from 'classnames';
import { FC, useState } from 'react';
import styles from './PopoverWithInput.module.scss';

export interface PopoverWithInputProps {
  title: string;
  totalCount?: string;
  buttonLabel: string;
  renderOpenElement: ButtonFormProps['renderOpenElement'];

  initialPosition?: number;
  showPosition?: ButtonFormProps['showPosition'];
  component?: ComponentType;

  inputProps?: TextInputProps;

  onSave?(value: number): void;
}

const PopoverWithInput: FC<PopoverWithInputProps> = ({
  buttonLabel,
  title,
  totalCount,
  initialPosition,
  onSave,
  showPosition,
  component: Component = 'div',
  renderOpenElement,
  inputProps = {}
}) => {
  const [inputValue, setInputValue] = useState<number | string>(initialPosition || '');

  return (
    <Component className={styles['PopoverWithInput']}>
      <ButtonForm showPosition={showPosition} renderOpenElement={renderOpenElement}>
        {({ close }) => (
          <div>
            <p className={styles['PopoverWithInput__name']}>{title}</p>

            {totalCount && <p className={styles['PopoverWithInput__total']}>{totalCount}</p>}

            <TextInput
              type='number'
              value={inputValue}
              maxLength={6}
              onChange={(e) => {
                setInputValue(e.target.value);

                inputProps.onChange?.(e);
              }}
              {...inputProps}
              containerClassName={classNames(styles['PopoverWithInput__input'], inputProps.className)}
            />
            <Button
              onClick={() => {
                if (inputValue) {
                  onSave(+inputValue);
                  close();
                }
              }}
              className={styles['PopoverWithInput__button']}
              variant='link'>
              {buttonLabel}
            </Button>
          </div>
        )}
      </ButtonForm>
    </Component>
  );
};

export default PopoverWithInput;
