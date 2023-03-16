import { ButtonForm, ButtonFormProps } from '@/atom-design-system';
import { ComponentType } from '@my-ui/core/dist/types';
import { FC } from 'react';
import FormWithInput, { FormWithInputProps } from './FormWithInput';
import styles from './PopoverWithInput.module.scss';

export interface PopoverWithInputProps extends FormWithInputProps {
  renderOpenElement: ButtonFormProps['renderOpenElement'];

  showPosition?: ButtonFormProps['showPosition'];
  component?: ComponentType;
}

const PopoverWithInput: FC<PopoverWithInputProps> = ({
  showPosition,
  component: Component = 'div',
  renderOpenElement,
  ...formWithInputProps
}) => (
  <Component className={styles['PopoverWithInput']}>
    <ButtonForm showPosition={showPosition} renderOpenElement={renderOpenElement}>
      {({ close }) => <FormWithInput {...formWithInputProps} close={close} />}
    </ButtonForm>
  </Component>
);

export default PopoverWithInput;
