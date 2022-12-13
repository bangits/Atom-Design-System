import { TextWithTooltip, Typography } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './CustomItemCard.module.scss';

export interface CustomItemCardCardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  index?: ReactNode;
}

const CustomItemCardCard: FC<CustomItemCardCardProps> = ({ actions, subtitle, title, index }) => {
  return (
    <div className={classNames(styles.CustomItemCard)}>
      <div className={styles.CustomItemCard__Main}>
        {actions && <div className={styles.CustomItemCard__Actions}>{actions}</div>}

        <div className={styles.CustomItemCard__Img}>
          {subtitle && (
            <TextWithTooltip className={styles.CustomItemCard__Subtitle} displayText={subtitle}>
              <Typography
                className={styles['CustomItemCard__Subtitle-Content']}
                component='span'
                variant='p5'
                color='primary'>
                {title}
              </Typography>
            </TextWithTooltip>
          )}
          {title && (
            <TextWithTooltip className={styles.CustomItemCard__Title} displayText={title}>
              <Typography className={styles['CustomItemCard__Title-Content']} component='span' variant='p5'>
                {subtitle}
              </Typography>
            </TextWithTooltip>
          )}
        </div>
      </div>

      <div className={styles.CustomItemCard__Bottom}>
        {index && <div className={styles.CustomItemCard__Index}>{index}</div>}
        <div className={styles.CustomItemCard__Status}></div>
      </div>
    </div>
  );
};

export default CustomItemCardCard;
