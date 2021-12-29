import { Icons } from '@/atom-design-system';
import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent, SVGProps } from 'react';
import styles from './ButtonWithIcon.module.scss';

export interface ButtonWithIconProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: keyof typeof Icons;
  onClick: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  iconProps?: SVGProps<SVGSVGElement>
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ children, icon, iconProps = {}, ...buttonProps }) => {
  const IconComponent = Icons[icon];

  return (
    <>
      <button type='button' {...buttonProps} className={classNames(styles.ButtonWithIcon, buttonProps.className)}>
        <div className={styles.ButtonIconWrapper}>
          <IconComponent {...iconProps} />
        </div>
        {children}
      </button>
    </>
  );
};
