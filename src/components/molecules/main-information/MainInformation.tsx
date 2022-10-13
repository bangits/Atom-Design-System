import { IconDropdown } from '@/atom-design-system';
import { CopyButton } from '@/components/atoms/copy-button';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './MainInformation.module.scss';

export interface MainInformationProps {
  icon?: ReactNode;
  name?: ReactNode;
  id?: string | number;
  idLabel?: string;
  addCopyButton?: boolean;
  addSpacings?: boolean;
  selectContent?: ReactNode;
}

const MainInformation: FC<MainInformationProps> = ({
  addSpacings = true,
  name,
  id,
  addCopyButton,
  icon,
  idLabel,
  selectContent
}) => {
  return (
    <div
      className={classNames(styles.MainInformation, {
        [styles['MainInformation--with-spacings']]: addSpacings
      })}>
      <span className={styles['MainInformation__icon']}>{icon}</span>
      <div className={styles['MainInformation__informations']} style={{}}>
        <div className={styles['MainInformation__name']}>
          {name}
          {selectContent && <IconDropdown>{selectContent}</IconDropdown>}
        </div>
        <div className={styles['MainInformation__id_block']}>
          <div className={styles['MainInformation__id']}>
            {idLabel} {id} {addCopyButton && <CopyButton copyText={id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInformation;
