import { Icons } from '@/atom-design-system';
import { Checkbox, IconButton } from '@my-ui/core';
import styles from './GameCategoriesCard.module.scss';

const GameCategoriesCard = () => {
  return (
    <div className={styles.GameCategoriesCard}>
      <div className={styles['GameCategoriesCard__top-part']}>
        <Checkbox />

        <span>1</span>
      </div>

      <div className={styles['GameCategoriesCard__actions']}>
        <IconButton className={styles['GameCategoriesCard__play']} icon={<Icons.PlayArrowIcon width='100%' />} />

        <ul className={styles['GameCategoriesCard__bottom-part']}>
          <li>
            <IconButton className={styles['GameCategoriesCard__action']} icon={<Icons.ViewIcon width='100%' />} />
          </li>
          <li>
            <IconButton
              className={styles['GameCategoriesCard__action']}
              icon={<Icons.RecalculateIcon width='100%' />}
            />
          </li>
          <li>
            <IconButton className={styles['GameCategoriesCard__action']} icon={<Icons.TrashIndicator width='100%' />} />
          </li>
        </ul>
      </div>
      <img
        className={styles['GameCategoriesCard__img']}
        src='https://i.ibb.co/LYJf14x/27Wins-1.png'
        alt='27 Wins Pragmatic'
      />
      <span className={styles['GameCategoriesCard__name']}>27 Wins Pragmatic </span>
    </div>
  );
};

export default GameCategoriesCard;
