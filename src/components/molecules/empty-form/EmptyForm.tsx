import { Icons } from '@/atom-design-system';
import { Button, ButtonProps, Card, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './EmptyForm.module.scss';

export interface EmptyFormProps {
  imgContent?: ReactNode;
  buttonProps?: ButtonProps;

  removeCard?: boolean;
  buttonTooltip?: string;
}

const EmptyForm: FC<PropsWithChildren<EmptyFormProps>> = ({
  buttonProps,
  children,
  imgContent = <Icons.EmptyFormIcon />,
  removeCard,
  buttonTooltip
}) => {
  return (
    <Card
      className={classNames(styles.EmptyForm, {
        [styles['EmptyForm--RemoveCard']]: removeCard
      })}>
      {buttonProps && (
        <div className={styles['EmptyForm__ButtonContainer']}>
          <Tooltip disabled={!buttonTooltip} text={buttonTooltip}>
            <span>
              <Button variant='link' startIcon={<Icons.PlusCircleLarge />} {...buttonProps} />
            </span>
          </Tooltip>
        </div>
      )}

      <div className={styles['EmptyForm__ImgContent']}>{imgContent}</div>
      <div className={styles['EmptyForm__Content']}>{children}</div>
    </Card>
  );
};

export default EmptyForm;
