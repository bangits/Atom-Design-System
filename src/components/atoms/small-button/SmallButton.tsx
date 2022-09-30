import { Button, ButtonProps } from '@my-ui/core';
import classNames from 'classnames';
import styles from './SmallButton.module.scss';

const SmallButton = (buttonProps: ButtonProps) => {
  return <Button {...buttonProps} className={classNames(styles.SmallButton, buttonProps.className)} variant='link' />;
};

export default SmallButton;
