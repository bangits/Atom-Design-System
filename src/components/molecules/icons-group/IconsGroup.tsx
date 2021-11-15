import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './IconsGroup.module.scss';

export interface IconsGroupProps {
  icons: {
    icon: ReactNode;
    isActive?: Boolean;
  }[];
}

const IconsGroup: FC<IconsGroupProps> = ({ icons }) => {
  return (
    <div className={classNames(styles.IconsGroupBase)}>
      {icons &&
        icons.map((i, index) => (
          <div
            key={index}
            className={classNames(styles['IconsGroupBase--icon'], {
              [styles['IconsGroupBase--active']]: i.isActive
            })}>
            {i.icon}
          </div>
        ))}
    </div>
  );
};

export default IconsGroup;
