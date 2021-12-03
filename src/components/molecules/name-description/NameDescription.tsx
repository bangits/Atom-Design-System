import { Card } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './NameDescription.module.scss';

export interface NameDescriptionProps {
  title?: string;
  data: {
    name: string;
    description: string;
    subNameDescription?: {
      name: string;
      description: string;
    }[];
  }[];
}

const NameDescription: FC<NameDescriptionProps> = ({ data, title }) => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.NameDescriptionBase)}>
      {title && <span className={styles['NameDescriptionBase--title']}>{title}</span>}
      {data.map((d) => (
        <>
          <div className={classNames(styles['NameDescriptionBase--core'])}>
            <span className={styles['NameDescriptionBase--name']}>{d.name}</span>
            <span className={styles['NameDescriptionBase--description']}>{d.description}</span>
          </div>
          {d.subNameDescription &&
            d.subNameDescription?.map((sub) => (
              <div className={styles['NameDescriptionBase--sub-core']}>
                <span className={styles['NameDescriptionBase--sub-core__name']}>{sub.name}</span>
                <span className={styles['NameDescriptionBase--sub-core__description']}>{sub.description}</span>
              </div>
            ))}
        </>
      ))}
    </Card>
  );
};

export default NameDescription;
