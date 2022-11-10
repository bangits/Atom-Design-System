import { Icons } from '@/atom-design-system';
import { Checkbox, CheckboxProps, TextWithTooltip, Typography } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode, useCallback, useState } from 'react';
import styles from './SortableItemCard.module.scss';

export interface SortableItemCardProps {
  checkboxProps?: CheckboxProps;
  showPlayButton?: boolean;
  playButtonLabel?: ReactNode;

  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;

  imgSrc?: string;

  index?: ReactNode;

  onPlayButtonClick?(): void;
  onPlayButtonLabelClick?(): void;
}

const SortableItemCard: FC<SortableItemCardProps> = ({ actions, subtitle, title, checkboxProps, imgSrc, index }) => {
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const onCheckboxChange = useCallback<CheckboxProps['onChange']>(
    (e) => {
      checkboxProps?.onChange?.(e);

      setCheckboxChecked((prevChecked) => !prevChecked);
    },
    [checkboxProps?.onChange]
  );

  return (
    <div
      className={classNames(styles.SortableItemCard, {
        [styles['SortableItemCard--Checked']]:
          checkboxProps.checked !== undefined ? checkboxProps.checked : isCheckboxChecked
      })}>
      <div className={styles.SortableItemCard__Main}>
        {checkboxProps && (
          <div className={styles.SortableItemCard__Checkbox}>
            <Checkbox {...checkboxProps} onChange={onCheckboxChange} />
          </div>
        )}

        {actions && <div className={styles.SortableItemCard__Actions}>{actions}</div>}

        {index && <div className={styles.SortableItemCard__Index}>{index}</div>}

        {imgSrc ? (
          <img className={styles.SortableItemCard__Img} src={imgSrc} alt={title.toString()} />
        ) : (
          <Icons.EmptyCardImagePokerToken className={styles.SortableItemCard__EmptyImg} />
        )}
      </div>

      {(title || subtitle) && (
        <div className={styles.SortableItemCard__Bottom}>
          {title && (
            <TextWithTooltip className={styles.SortableItemCard__Title} displayText={title}>
              <Typography className={styles['SortableItemCard__Title-Content']} component='h3' variant='p4'>
                {title}
              </Typography>
            </TextWithTooltip>
          )}

          {subtitle && (
            <TextWithTooltip className={styles.SortableItemCard__Subtitle} displayText={subtitle}>
              <Typography
                className={styles['SortableItemCard__Subtitle-Content']}
                component='span'
                variant='p5'
                color='primary'>
                {subtitle}
              </Typography>
            </TextWithTooltip>
          )}
        </div>
      )}
    </div>
  );
};

export default SortableItemCard;
