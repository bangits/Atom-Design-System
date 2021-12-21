import { Icons } from '@/atom-design-system';
import { NoDataIcon } from '@/icons';
import { Typography } from '@my-ui/core';
import React from 'react';
import styles from './UserProjects.module.scss';

const UserProjects = () => {
  return (
    <>
      <div className={styles.UserProjectsWrapper}>
        <div className={styles.AddButtonWrapper}>
          <Icons.PlusCircleLarge className={styles.AddButton} />
        </div>
        <Typography component='h4' variant='h6' className={styles.TitleUserProjects}>
          Add Partner & Projects
        </Typography>
        <Typography component='span' variant='p4' className={styles.UserProjectsText}>
          <a href=''>Click here</a> to add partner and projects
        </Typography>
      </div>
      <div className={styles.NoDataWrapper} style={{display:'none'}}>
        <NoDataIcon />
        <Typography component='h4' variant='h6' className={styles.TitleUserProjects}>
          Add Partner & Projects
        </Typography>
        <Typography component='span' variant='p4' className={styles.UserProjectsText}>
          <a href=''>Click here</a> to add partner and projects
        </Typography>
      </div>
    </>
  );
};

export default UserProjects;


//remove display:none--written for test
