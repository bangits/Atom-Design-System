import { Icons } from '@/atom-design-system';
import { IconButton, Tag } from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './CriteriaView.module.scss';

export interface CriteriaViewProps {
  criterias: {
    propertyName: string;
    checkName: string;
    values: string[];
  }[];

  condition: string | null;

  onDelete?(): void;
  onEdit?(): void;
}

const CriteriaView: FC<CriteriaViewProps> = ({ criterias, condition, onDelete, onEdit }) => {
  const hasCondition = criterias.length > 1;

  return (
    <div className={styles.CriteriaView}>
      <div
        className={classNames(styles.CriteriaView__Criterias, {
          [styles['CriteriaView__Criterias--Has-Condition']]: hasCondition
        })}>
        {criterias.map(({ checkName, propertyName, values }) => (
          <div className={styles.CriteriaView__Criteria}>
            <div className={styles.CriteriaView__PropName}>{propertyName}</div>
            <div className={styles.CriteriaView__Separator}>
              <Icons.ArrowNext />
            </div>
            <div className={styles.CriteriaView__CheckName}>{checkName}</div>
            <div className={styles.CriteriaView__Separator}>
              <Icons.ArrowNext />
            </div>
            <div className={styles.CriteriaView__Values}>
              {values.length > 1 ? values.map((v) => <Tag key={v} title={v} />) : values[0]}
            </div>
          </div>
        ))}
      </div>

      {condition && hasCondition && <div className={styles.CriteriaView__Condition}>{condition}</div>}

      <div className={styles.CriteriaView__Buttons}>
        {onEdit && <IconButton onClick={onEdit} className={styles.CriteriaView__Edit} icon={<Icons.EditIcon />} />}

        {onDelete && (
          <IconButton onClick={onDelete} className={styles.CriteriaView__Delete} icon={<Icons.TrashIndicator />} />
        )}
      </div>
    </div>
  );
};

export default CriteriaView;
