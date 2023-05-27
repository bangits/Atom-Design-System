import { Icons } from '@/atom-design-system';
import { Button, ButtonProps, Card, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './EmptyForm.module.scss';

export interface EmptyFormProps {
  topPart?: ReactNode;
  imgContent?: ReactNode;
  buttonProps?: ButtonProps;
  imgContentSize?: 'lg' | 'md';
  buttonTooltip?: string;

  fullHeight?: boolean;
  removeCard?: boolean;
}

const EmptyForm: FC<PropsWithChildren<EmptyFormProps>> = ({
  topPart,
  buttonProps,
  children,
  imgContent = <Icons.EmptyFormIcon />,
  removeCard,
  fullHeight,
  imgContentSize = 'md',
  buttonTooltip
}) => {
  return (
    <div
      className={classNames(styles.EmptyForm, {
        [styles['EmptyForm--RemoveCard']]: removeCard,
        [styles['EmptyForm--FullHeight']]: fullHeight,
        [styles['EmptyForm--WithTopPart']]: !!topPart
      })}>
      {topPart && <div className={styles.EmptyForm__TopPart}>{topPart}</div>}

      <Card className={styles.EmptyForm__Card}>
        {buttonProps && (
          <Tooltip disabled={!buttonTooltip} text={buttonTooltip}>
            <div className={styles['EmptyForm__ButtonContainer']}>
              <Button variant='link' startIcon={<Icons.PlusCircleLarge />} {...buttonProps} />
            </div>
          </Tooltip>
        )}

        <div
          className={classNames(styles['EmptyForm__ImgContent'], {
            [styles[`EmptyForm__ImgContent--${imgContentSize}`]]: imgContentSize
          })}>
          {imgContent}
        </div>
        <div className={styles['EmptyForm__Content']}>{children}</div>
      </Card>
    </div>
  );
};

export default EmptyForm;
