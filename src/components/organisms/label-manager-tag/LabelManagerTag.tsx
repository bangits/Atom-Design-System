import { useRef, useState, useEffect, useCallback } from 'react';
import { PrimaryKey } from '@atom/common';
import { Icons, Tooltip } from '@/atom-design-system';
import styles from './LabelManagerTag.module.scss';
import classNames from 'classnames';

export interface LabelManagerTagProps {
  labelText: string;
  isActive?: boolean;
  isBordered?: boolean;
  isMinified?: boolean;
  hasSuffixIcon?: boolean;
  suffixIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onSufficIconClick?: () => void;
  onClick: () => void;
}

export const LabelManagerTag = ({
  labelText,
  isBordered,
  onClick,
  isActive,
  isMinified,
  hasSuffixIcon,
  suffixIcon: SuffixIcon = Icons.CloseIcon,
  onSufficIconClick
}: LabelManagerTagProps) => {
  const labelTextRef = useRef<HTMLSpanElement>();
  const [isLabeltextOverflowed, setIsLabeltextOverflowed] = useState(false);

  const checkISLabelTextOverflowed = useCallback(() => {
    if (labelTextRef.current && labelTextRef.current.offsetWidth < labelTextRef.current.scrollWidth) {
      setIsLabeltextOverflowed(true);
    }
  }, []);

  useEffect(() => checkISLabelTextOverflowed(), []);

  return (
    <div
      onClick={onClick}
      className={classNames(styles.Container, {
        [styles['Container--bordered']]: isBordered,
        [styles['Container--is-minified']]: isMinified
      })}>
      <Icons.Label className={classNames(styles.LabelIcon, { [styles['LabelIcon--active']]: isActive })} />

      <Tooltip text={isLabeltextOverflowed && labelText}>
        <span ref={labelTextRef} className={styles.LabelText}>
          {labelText}
        </span>
      </Tooltip>

      {hasSuffixIcon && (
        <Tooltip text={'Delete'}>
          <SuffixIcon className={styles.SuffixIcon} onClick={() => onSufficIconClick?.()} width='1.5rem' />
        </Tooltip>
      )}
    </div>
  );
};
