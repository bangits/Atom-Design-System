import { Icons } from '@/atom-design-system';
import { copyToClipboard } from '@/helpers';
import { Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './MainInformation.module.scss';

export interface MainInformationProps {
  icon?: ReactNode;
  name?: ReactNode;
  id?: string;
  idLabel?: string;
  addCopyButton?: boolean;
  addSpacings?: boolean;
}

const MainInformation: FC<MainInformationProps> = ({ addSpacings = true, name, id, addCopyButton, icon, idLabel }) => {
  return (
    <div
      className={classNames(styles.MainInformation, {
        [styles['MainInformation--with-spacings']]: addSpacings
      })}>
      <span className={styles['MainInformation__icon']}>{icon}</span>
      <div className={styles['MainInformation__informations']}>
        <span className={styles['MainInformation__name']}>{name}</span>
        <div className={styles['MainInformation__id']}>
          {idLabel} {id}
          {addCopyButton && (
            <Tooltip showEvent='click' text='Copied'>
              <button type='button' className={styles['MainInformation__copy']}>
                <span
                  onClick={() => {
                    copyToClipboard(id);
                  }}>
                  <Icons.CopyIcon />
                </span>
              </button>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainInformation;
