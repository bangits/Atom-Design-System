import { Card } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './NameDescription.module.scss';

export interface NameDescriptionProps {
  title?: ReactNode;
  children?: ReactNode;
  noDataText?: string;
  data: {
    name: ReactNode;
    description: ReactNode;
    subNameDescription?: {
      name: ReactNode;
      description: ReactNode;
    }[];
  }[];
}

const NameDescription: FC<NameDescriptionProps> = ({ data, title, children, noDataText }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.NameDescriptionBase)}>
      {title && <span className={styles['NameDescriptionBase--title']}>{title}</span>}
      {data.map((d, index) => (
        <React.Fragment key={index}>
          <div className={classNames(styles['NameDescriptionBase--core'])}>
            <span className={styles['NameDescriptionBase--name']}>{d.name || noDataText}</span>
            <span className={styles['NameDescriptionBase--description']}>{d.description || noDataText}</span>
          </div>
          {d.subNameDescription &&
            d.subNameDescription?.map((sub, index) => (
              <div className={styles['NameDescriptionBase--sub-core']} key={index}>
                <span className={styles['NameDescriptionBase--sub-core__name']}>{sub.name || noDataText}</span>
                <span className={styles['NameDescriptionBase--sub-core__description']}>
                  {sub.description || noDataText}
                </span>
              </div>
            ))}
        </React.Fragment>
      ))}
      {children && <div className={styles['NameDescriptionBase--children']}>{children}</div>}
    </Card>
  );
};

export default NameDescription;
