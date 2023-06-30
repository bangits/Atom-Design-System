import { useRef, useState, useEffect, useCallback } from 'react';
import { Checkbox, Icons, Tooltip } from '@/atom-design-system';
import styles from './LabelManagerTag.module.scss';
import classNames from 'classnames';

export interface LabelManagerTagProps {
  labelText: string;
  isActive?: boolean;
  isBordered?: boolean;
  isMinified?: boolean;
  hasSuffixIcon?: boolean;
  hasCheckBox?: boolean;
  isSelected?: boolean;
  suffixIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onSufficIconClick?: () => void;
  onClick?: () => void;
}

export const LabelManagerTag = ({
  labelText,
  isBordered,
  onClick,
  isActive,
  isMinified,
  hasCheckBox,
  isSelected,
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

  const handleSuffixClick = useCallback((e) => {
    e.stopPropagation();
    onSufficIconClick?.();
  }, []);

  useEffect(() => checkISLabelTextOverflowed(), []);

  return (
    <div className={styles.Container}>
      {hasCheckBox && <Checkbox onChange={onClick} checked={isSelected} className={styles.Checkbox} />}
      <div
        onClick={onClick}
        className={classNames(styles.LabelContainer, {
          [styles['LabelContainer--bordered']]: isBordered || isSelected,
          [styles['LabelContainer--is-minified']]: isMinified,
          [styles['LabelContainer--has-checkbox']]: hasCheckBox
        })}>
        <Icons.Label
          className={classNames(styles.LabelIcon, {
            [styles['LabelIcon--active']]: isActive,
            [styles['LabelIcon--is-minified']]: isMinified
          })}
        />

        <Tooltip text={isLabeltextOverflowed && labelText}>
          <span ref={labelTextRef} className={styles.LabelText}>
            {labelText}
          </span>
        </Tooltip>

        {hasSuffixIcon && (
          <Tooltip text={'Delete'}>
            <SuffixIcon className={styles.SuffixIcon} onClick={handleSuffixClick} width='1.5rem' />
          </Tooltip>
        )}
      </div>
    </div>
  );
};
