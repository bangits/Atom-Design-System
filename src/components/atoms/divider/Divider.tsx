import classNames from 'classnames';
import { FC } from 'react';
import styles from './Divider.module.scss';

export const Divider: FC<{ showDivider?: boolean; className?: string; variant?: string; large?: boolean }> = ({
  children,
  showDivider = true,
  className,
  variant = false,
  large = false
}) => {
  if (!showDivider) return <>{children}</>;

  return (
    <div
      className={classNames(className, {
        [styles[`Divider`]]: !variant,
        [styles[`VerticalDivider`]]: variant === 'horizontal',
        [styles[`Large`]]: large
      })}>
      {children}
    </div>
  );
};
