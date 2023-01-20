import { Icons } from '@/atom-design-system';
import { Button, ButtonProps, Card } from '@my-ui/core';
import classNames from 'classnames';
import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './EmptyForm.module.scss';

export interface EmptyFormProps {
  imgContent?: ReactNode;
  buttonProps?: ButtonProps;
  imgContentSize?: 'lg' | 'md';

  fullHeight?: boolean;
  removeCard?: boolean;
}

const EmptyForm: FC<PropsWithChildren<EmptyFormProps>> = ({
  buttonProps,
  children,
  imgContent = <Icons.EmptyFormIcon />,
  removeCard,
  fullHeight,
  imgContentSize = 'md'
}) => {
  return (
    <Card
      className={classNames(styles.EmptyForm, {
        [styles['EmptyForm--RemoveCard']]: removeCard,
        [styles['EmptyForm--FullHeight']]: fullHeight
      })}>
      {buttonProps && (
        <div className={styles['EmptyForm__ButtonContainer']}>
          <Button variant='link' startIcon={<Icons.PlusCircleLarge />} {...buttonProps} />
        </div>
      )}

      <div
        className={classNames(styles['EmptyForm__ImgContent'], {
          [styles[`EmptyForm__ImgContent--${imgContentSize}`]]: imgContentSize
        })}>
        {imgContent}
      </div>
      <div className={styles['EmptyForm__Content']}>{children}</div>
    </Card>
  );
};

export default EmptyForm;
