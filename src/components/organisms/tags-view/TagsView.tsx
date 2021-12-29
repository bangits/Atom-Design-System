import { Button, Card, Tag } from '@my-ui/core';
import classNames from 'classnames';
import React from 'react';
import styles from './TagsView.module.scss';

const Tags = () => {
  return (
    <Card borderRadius={1.6} className={classNames(styles.TagsView)}>
      <span className={classNames(styles['TagsView--title'])}>Tags</span>
      <div className={classNames(styles['TagsView--container'])}>
        <div>
          <Tag title='Lorem Ip' closeIcon className={styles['TagsView--tag']} />
        </div>
        <div>
          <Tag title='Lorem Ip' closeIcon className={classNames(styles['TagsView--tag'])} />
        </div>
        <div>
          <Tag title='Lorem Ip' closeIcon className={classNames(styles['TagsView--tag'])} />
        </div>
        <div>
          <Button
            variant='ghost'
            className={styles['TagsView--button']}
            startIcon={
              <svg xmlns='http://www.w3.org/2000/svg' width='9.424' height='9.424' viewBox='0 0 9.424 9.424'>
                <g id='Group_23677' data-name='Group 23677' transform='translate(-717.284 -219.283)'>
                  <path
                    id='close'
                    d='M3.943,3.332,6.537.737a.432.432,0,0,0-.61-.61L3.332,2.722.737.127a.432.432,0,0,0-.61.61L2.722,3.332.127,5.927a.432.432,0,1,0,.61.61L3.332,3.943,5.927,6.537a.432.432,0,0,0,.61-.61Zm0,0'
                    transform='translate(717.284 223.996) rotate(-45)'
                    fill='#6667ab'
                  />
                </g>
              </svg>
            }>
            <span>Add New</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Tags;
