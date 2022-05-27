import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './NameAndId.module.scss';

export interface NameAndIdProps {
  name?: ReactNode;
  id?: ReactNode;
  noDataText?: ReactNode;
  defaultColors?: boolean;
}

const NameAndId: FC<NameAndIdProps> = ({ name, id, noDataText, defaultColors }) => {
  return (
    <div className={styles.NameAndIdBase}>
      <span
        className={classNames({
          [styles[`NameAndIdBase--default_name`]]: defaultColors,
          [styles[`NameAndIdBase--name`]]: !defaultColors
        })}>
        {name || noDataText}
      </span>
      <span
        className={classNames({
          [styles[`NameAndIdBase--default_id`]]: defaultColors,
          [styles[`NameAndIdBase--id`]]: !defaultColors
        })}>
        {id || noDataText}
      </span>
    </div>
  );
};

export default NameAndId;
