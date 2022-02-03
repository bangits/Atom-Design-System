import { useStyles } from '@/helpers/useStyles';
import { ArrowRightIcon } from '@/icons';
import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode, useCallback, useLayoutEffect, useRef, useState } from 'react';
import styles from './ProjectCard.module.scss';

export type Colors = 'purple' | 'orange' | 'lime';
export interface ProjectCardProps {
  col: 6 | 12;
  maxCount: number;
  title: string;
  logo: ReactNode;
  items: {
    title?: string;
    imgSrc: string;
  }[];
  onArrowClick: () => void;
  viewMoreLabel: string;
  viewLessLabel: string;
  mode: 'small' | 'large';
  color: Colors;
}

const ProjectCard: FC<ProjectCardProps> = ({
  col,
  maxCount = 0,
  title,
  logo,
  items = [],
  onArrowClick,
  viewMoreLabel,
  viewLessLabel,
  mode,
  color = 'purple'
}) => {
  const [isOpenedCollapse, setOpenedCollapse] = useState<boolean>(false);
  const [height, setHeight] = useState<number>();

  const viewMoreClassNames = useStyles(
    {
      open: {
        paddingBottom: '24px',
        height: (data) => data.height + 24,
        minHeight: 228
      },
      closed: {
        height: 228
      },
      iconTransform: {
        transform: 'rotate(180deg)',
        transition: '.5s'
      }
    },
    { height }
  );

  const handleViewClick = useCallback(() => {
    setOpenedCollapse(!isOpenedCollapse);
  }, [isOpenedCollapse]);

  const containerRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const height = containerRef.current.scrollHeight;

    // Using setTimeout for setting the height after first render
    setHeight(height);
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className={classNames(styles.ProjectCardWrapper, {
        [styles[`ProjectCardWrapper--${col}`]]: col,
        [styles[`ProjectCardWrapper--${col}`]]: col,
        [viewMoreClassNames.closed]: !isOpenedCollapse,
        [viewMoreClassNames.open]: isOpenedCollapse
      })}>
      <div className={styles.CardHeader}>
        <div>{logo}</div>
        <div>
          <ArrowRightIcon onClick={onArrowClick} />
        </div>
      </div>
      <div className={styles.TitleContent}>
        <div>
          <Typography variant='p4' component='h2'>
            {title}
          </Typography>
        </div>
        <div>
          <Typography variant='p3' component='p' className={styles[`TitleContent--${color}-color`]}>
            <span>{items.length}</span>/ {maxCount}
          </Typography>
        </div>
      </div>
      <hr className={styles.Divider} />

      <div className={styles.GameWrapper}>
        <div className={styles.GamesContent}>
          {items.map((item, key) =>
            mode === 'small' ? (
              <div className={styles.Game} key={key}>
                <div className={styles.GameImg}>
                  <img src={item.imgSrc} />
                </div>
                <div className={styles.GameLabel}>
                  <Typography variant='p4' component='span'>
                    {item.title}
                  </Typography>
                </div>
              </div>
            ) : (
              <div className={styles.OnlyImg} key={key}>
                <div className={styles.ImgContent}>
                  <img src={item.imgSrc} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {height > 228 && (
        <div onClick={handleViewClick} className={classNames(styles['ProjectCardWrapper--viewMore'], 'HELLLO WORLD')}>
          <div
            className={classNames({
              [viewMoreClassNames.iconTransform]: isOpenedCollapse
            })}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <g id='Group_24108' transform='translate(-555 -465)'>
                <g id='Group_24107' transform='translate(0 6)'>
                  <path
                    id='Icon_ionic-ios-arrow-down'
                    d='M11.189,14.739l3.781-3.309a.786.786,0,0,1,1.009,0,.576.576,0,0,1,0,.885L11.7,16.064a.789.789,0,0,1-.985.018L6.4,12.318a.574.574,0,0,1,0-.885.786.786,0,0,1,1.009,0Z'
                    transform='translate(555.813 459.753)'
                    fill='currentColor'
                  />
                  <path
                    id='Icon_ionic-ios-arrow-down-2'
                    d='M11.189,14.739l3.781-3.309a.786.786,0,0,1,1.009,0,.576.576,0,0,1,0,.885L11.7,16.064a.789.789,0,0,1-.985.018L6.4,12.318a.574.574,0,0,1,0-.885.786.786,0,0,1,1.009,0Z'
                    transform='translate(555.813 455.753)'
                    fill='currentColor'
                  />
                </g>
                <rect id='Rectangle_11242' width='24' height='24' transform='translate(555 465)' fill='none' />
              </g>
            </svg>
          </div>
          <span>{isOpenedCollapse ? viewLessLabel : viewMoreLabel}</span>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
