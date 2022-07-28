import { Icons } from '@/atom-design-system';
import classNames from 'classnames';
import { Children, FC, PropsWithChildren } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import styles from './SortableItem.module.scss';

export interface SortableItemProps {
  onClose?(): void;
}

const SortableItem: FC<PropsWithChildren<SortableItemProps>> = ({ children, onClose }) => {
  const arrayOfChildrens = Children.toArray(children);

  return (
    <div className={styles.SortableItem}>
      {arrayOfChildrens.map((child, index) => (
        <div key={index} className={styles['SortableItem__item']}>
          {child}
        </div>
      ))}

      <button type='button' className={classNames(styles['SortableItem__sort'], 'DnD-SortIcon')}>
        <Icons.SortIcon />
      </button>

      {onClose && (
        <button type='button' className={styles['SortableItem__remove']} onClick={onClose}>
          <Icons.CloseIcon />
        </button>
      )}
    </div>
  );
};

export default SortableElement(SortableItem);
