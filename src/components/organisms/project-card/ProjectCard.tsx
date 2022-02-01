import { ArrowRightIcon, ProductsIcon } from '@/icons';
import React from 'react';
import styles from './ProjectCard.module.scss';
import { Typography } from '@my-ui/core';
import classNames from 'classnames';

const ProjectCard = () => {
  return (
    <div className={classNames(styles.ProjectCardWrapper, styles['ProjectCardWrapper--12'])}>
      <div className={styles.CardHeader}>
        <div>
          <ProductsIcon />
        </div>
        <div>
          <ArrowRightIcon />
        </div>
      </div>
      <div className={styles.TitleContent}>
        <div>
          <Typography variant='p4' component='h2'>
            Products
          </Typography>
        </div>
        <div>
          <Typography variant='p3' component='p'>
            <span>23</span>/ 100
          </Typography>
        </div>
      </div>
      <hr className={styles.Divider} />
      <div className={styles.GameWrapper}>
        <div className={styles.GamesContent}>
          <div className={styles.Game}>
            <div className={styles.GameImg}>
              <img src='https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max' />
            </div>
            <div className={styles.GameLabel}>
              <Typography variant='p4' component='span'>
                Gaming
              </Typography>
            </div>
          </div>
          <div className={styles.Game}>
            <div className={styles.GameImg}>
              <img src='https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max' />
            </div>
            <div className={styles.GameLabel}>
              <Typography variant='p4' component='span'>
                Gaming
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.GamesContent}>
          <div className={styles.Game}>
            <div className={styles.GameImg}>
              <img src='https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max' />
            </div>
            <div className={styles.GameLabel}>
              <Typography variant='p4' component='span'>
                Gaming
              </Typography>
            </div>
          </div>
          <div className={styles.Game}>
            <div className={styles.GameImg}>
              <img src='https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max' />
            </div>
            <div className={styles.GameLabel}>
              <Typography variant='p4' component='span'>
                Gaming
              </Typography>
            </div>
          </div>
        </div>

        {/* <div className={styles.OnlyImg}>
            <div className={styles.ImgContent}>
                <img src="https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max"/>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
