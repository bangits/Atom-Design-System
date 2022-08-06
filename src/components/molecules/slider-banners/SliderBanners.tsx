import { TextWithTooltip } from '@my-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './SliderBanners.module.scss';

export interface SliderBanner {
  id: string | number;
  name: string;
  img: string;
}

export interface SliderBannersProps {
  banners: SliderBanner[];
}

const SliderBanners: FC<SliderBannersProps> = ({ banners }) => {
  return (
    <ul className={styles.SliderBanners}>
      {banners.map((b, index) => (
        <li key={b.id} className={classNames(styles['SliderBanners__item'], styles['SliderBannersItem'])}>
          <TextWithTooltip className={styles['SliderBannersItem__name']}>
            {index + 1}. {b.name}
          </TextWithTooltip>
          <img className={styles['SliderBannersItem__img']} alt={b.name} src={b.img} />
        </li>
      ))}
    </ul>
  );
};

export default SliderBanners;
