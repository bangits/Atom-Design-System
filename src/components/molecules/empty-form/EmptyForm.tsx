import { Icons } from '@/atom-design-system';
import { Button, ButtonProps, Card } from '@my-ui/core';
import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './EmptyForm.module.scss';

export interface EmptyFormProps {
  imgContent?: ReactNode;
  buttonProps?: ButtonProps;
}

const EmptyForm: FC<PropsWithChildren<EmptyFormProps>> = ({
  buttonProps,
  children,
  imgContent = <Icons.EmptyFormIcon />
}) => {
  return (
    <Card className={styles.EmptyForm}>
      {buttonProps && (
        <div className={styles['EmptyForm__ButtonContainer']}>
          <Button variant='link' startIcon={<Icons.PlusCircleLarge />} {...buttonProps} />
        </div>
      )}

      <div className={styles['EmptyForm__ImgContent']}>{imgContent}</div>
      <div className={styles['EmptyForm__Content']}>{children}</div>
    </Card>
  );
};

export default EmptyForm;
