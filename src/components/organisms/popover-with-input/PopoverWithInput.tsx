import { ButtonForm, ButtonFormProps } from '@/atom-design-system';
import { Button, TextInput } from '@my-ui/core';
import { ComponentType } from '@my-ui/core/dist/types';
import { FC, useState } from 'react';
import styles from './PopoverWithInput.module.scss';

export interface PopoverWithInputProps {
  title: string;
  totalCount: string;
  buttonLabel: string;
  renderOpenElement: ButtonFormProps['renderOpenElement'];

  initialPosition?: number;
  showPosition?: ButtonFormProps['showPosition'];
  component?: ComponentType;

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
  renderOpenElement
}) => {
  const [inputValue, setInputValue] = useState<number | string>(initialPosition || '');

  return (
    <Component className={styles['PopoverWithInput']}>
      <ButtonForm showPosition={showPosition} renderOpenElement={renderOpenElement}>
        <div>
          <p className={styles['PopoverWithInput__name']}>{title}</p>
          <p className={styles['PopoverWithInput__total']}>{totalCount}</p>
          <TextInput
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type='number'
            maxLength={6}
            containerClassName={styles['PopoverWithInput__input']}
          />
          <Button
            onClick={() => inputValue && onSave(+inputValue)}
            className={styles['PopoverWithInput__button']}
            variant='link'>
            {buttonLabel}
          </Button>
        </div>
      </ButtonForm>
    </Component>
  );
};

export default PopoverWithInput;
