import { CopyButton } from '@/components/atoms/copy-button';
import { AssignToIcon } from '@/icons';
import classNames from 'classnames';
import { FC, ReactNode, useState } from 'react';
import styles from './MainInformation.module.scss';

export interface MainInformationProps {
  icon?: ReactNode;
  name?: ReactNode;
  id?: string;
  idLabel?: string;
  addCopyButton?: boolean;
  addSpacings?: boolean;
  assignToClick?: () => void;
  assignTo?: boolean;
  selectContent?: ReactNode;
}

const MainInformation: FC<MainInformationProps> = ({
  addSpacings = true,
  name,
  id,
  addCopyButton,
  icon,
  idLabel,
  assignTo,
  assignToClick,
  selectContent
}) => {
  const [showSelect, setShowSelect] = useState<boolean>(false);
  return (
    <div
      className={classNames(styles.MainInformation, {
        [styles['MainInformation--with-spacings']]: addSpacings
      })}>
      <span className={styles['MainInformation__icon']}>{icon}</span>
      <div className={styles['MainInformation__informations']} style={{}}>
        <span className={styles['MainInformation__name']}>
          {name}
          {assignTo && (
            <span className={styles['MainInformation__assign_icon']}>
              <AssignToIcon
                onClick={() => {
                  setShowSelect((prev) => !prev);
                  assignToClick;
                }}
              />
              {showSelect && <div className={styles['MainInformation__assign_content']}>{selectContent}</div>}
            </span>
          )}
        </span>
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
