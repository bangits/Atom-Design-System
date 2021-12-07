import { typedMemo } from '@/helpers';
import { useStyles } from '@/helpers/useStyles';
import { Card } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode, useCallback, useState } from 'react';
import styles from './EditedForm.module.scss';

export interface EditedFormProps {
  options: {
    title: ReactNode;
    value: ReactNode;
  }[];
  editButton: ReactNode;
  title?: string;
  viewMoreLabel?: string;
}

const EditedForm: FC<EditedFormProps> = ({ title, editButton, options, viewMoreLabel }) => {
  const [isMore, setIsMore] = useState<boolean>(true);
  const viewMoreClassNames = useStyles(
    {
      open: {
        height: '100%',
        paddingBottom: '24px',
        transition: '1s'
      },
      closed: {
        height: '228px',
        transition: '1s'
      },
      iconTransform: {
        transform: 'rotate(180deg)',
        transition: '.5s'
      }
    },
    {}
  );

  const handleViewClick = useCallback(() => {
    setIsMore(!isMore);
  }, [isMore]);

  return (
    <div className={classNames(styles.EditedFormBase)}>
      <div className={classNames(styles['EditedFormBase--control'])}>
        <span className={classNames(styles['EditedFormBase--control-title'])}>{title}</span>
        <div className={classNames(styles['EditedFormBase--control-button'])}>{editButton}</div>
      </div>
      <Card
        borderRadius={1.6}
        className={classNames(styles['EditedFormBase-content'], {
          [viewMoreClassNames.closed]: isMore,
          [viewMoreClassNames.open]: !isMore
        })}>
        {options &&
          options?.map((option, index) => {
            if (!isMore) {
              return (
                <div key={index} className={classNames(styles['EditedFormBase--option'])}>
                  <span className={classNames(styles['EditedFormBase--option-title'])}>{option.title}</span>
                  <span className={classNames(styles['EditedFormBase--option-value'])}>{option.value}</span>
                </div>
              );
            } else if (isMore && index < 8) {
              return (
                <div key={index} className={classNames(styles['EditedFormBase--option'])}>
                  <span className={classNames(styles['EditedFormBase--option-title'])}>{option.title}</span>
                  <span className={classNames(styles['EditedFormBase--option-value'])}>{option.value}</span>
                </div>
              );
            }
          })}
        {options?.length > 8 && (
          <div onClick={handleViewClick} className={classNames(styles['EditedFormBase--viewMore'])}>
            <div
              className={classNames({
                [viewMoreClassNames.iconTransform]: !isMore
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
            <span>{viewMoreLabel}</span>
          </div>
        )}
      </Card>
    </div>
  );
};

export default typedMemo(EditedForm);
