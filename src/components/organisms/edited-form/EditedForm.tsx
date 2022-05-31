import { typedMemo } from '@/helpers';
import { DustbinIcon, PenIcon } from '@/icons';
import { Card, IconButton, Tag, Tooltip, useStyles } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode, useCallback, useLayoutEffect, useRef, useState } from 'react';
import styles from './EditedForm.module.scss';

export interface EditedFormProps {
  editButtonTooltipText?: string;
  deleteButtonTooltipText?: string;
  options?: (
    | {
        title: ReactNode;
        value: ReactNode | string;
        variant: 'default';
        shouldLineTranslation?: boolean;
      }
    | {
        title: ReactNode | string;
        variant: 'label';
      }
    | {
        title: ReactNode | string;
        value: ReactNode | string;
        variant: 'bold';
      }
    | {
        title: ReactNode | string;
        value: string[];
        variant: 'tag';
      }
  )[];
  noDataText?: ReactNode;
  title?: ReactNode;
  viewMoreLabel?: string;
  viewLessLabel?: string;
  onToggle?: () => void;
  col?: 6 | 12;
  showDeleteButton?: boolean;
  onDelete?: () => void;
  showEditIcons?: boolean;
}

const EditedForm: FC<EditedFormProps> = ({
  title,
  noDataText = 'N/A',
  options,
  viewMoreLabel = 'View More',
  viewLessLabel = 'View Less',
  onToggle,
  editButtonTooltipText,
  children,
  col,
  showDeleteButton,
  deleteButtonTooltipText,
  onDelete,
  showEditIcons = true
}) => {
  const [isOpenedCollapse, setOpenedCollapse] = useState<boolean>(false);
  const [height, setHeight] = useState<number>();

  const viewMoreClassNames = useStyles(
    {
      open: {
        paddingBottom: '24px',
        height: (data) => data.height + 24,
        minHeight: 248
      },
      closed: {
        height: 248
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
      className={classNames(styles.EditedFormBase, {
        [styles[`EditedFormBase--${col}`]]: col,
        [styles[`EditedFormBase--${col}`]]: col
      })}
      style={{ opacity: height ? 1 : 0 }}>
      <div className={classNames(styles['EditedFormBase--control'])}>
        <span className={classNames(styles['EditedFormBase--control-title'])}>{title}</span>
        {showEditIcons && (
          <div className={classNames(styles['EditedFormBase--control-button'])}>
            <Tooltip showEvent='hover' text={editButtonTooltipText}>
              <IconButton icon={<PenIcon />} onClick={onToggle} />
            </Tooltip>
            {showDeleteButton && (
              <Tooltip showEvent='hover' text={deleteButtonTooltipText}>
                <IconButton icon={<DustbinIcon />} onClick={onDelete} />
              </Tooltip>
            )}
          </div>
        )}
      </div>
      <Card borderRadius={1.6} className={classNames(styles['EditedFormBase--card-content'])}>
        <div
          className={classNames(styles['EditedFormBase--content'], {
            [viewMoreClassNames.closed]: !isOpenedCollapse,
            [viewMoreClassNames.open]: isOpenedCollapse,
            [styles[`EditedFormBase--content-children`]]: children
          })}
          ref={containerRef}>
          {children ? (
            <div>{children}</div>
          ) : (
            <>
              {options &&
                options?.map((option, index) =>
                  option.variant === 'default' ? (
                    <div
                      key={index}
                      className={classNames(styles['EditedFormBase--option'], {
                        [styles['EditedFormBase--option--line-translation']]: option.shouldLineTranslation
                      })}>
                      <span className={classNames(styles['EditedFormBase--option-title'])}>{option.title}</span>
                      <span className={classNames(styles['EditedFormBase--option-value'])}>
                        {option.value || noDataText}
                      </span>
                    </div>
                  ) : option.variant === 'label' ? (
                    <div key={index} className={classNames(styles['EditedFormBase--option-label'])}>
                      <span>{option.title}</span>
                    </div>
                  ) : option.variant === 'tag' ? (
                    <div key={index} className={classNames(styles['EditedFormBase--option-tag'])}>
                      <span className={classNames(styles['EditedFormBase--option-title'])}>{option.title}</span>
                      <div>
                        {option.value.length === 0 ? (
                          <span className={classNames(styles['EditedFormBase--option-value'])}>{noDataText}</span>
                        ) : (
                          option.value?.map((o, index) => <Tag title={o} key={index} />)
                        )}
                      </div>
                    </div>
                  ) : option.variant === 'bold' ? (
                    <div key={index} className={classNames(styles['EditedFormBase--option'])}>
                      <span className={classNames(styles['EditedFormBase--option-title'])}>{option.title}</span>
                      <span
                        className={classNames(
                          styles['EditedFormBase--option-value'],
                          styles['EditedFormBase--option-value-bold']
                        )}>
                        {option.value || noDataText}
                      </span>
                    </div>
                  ) : null
                )}
            </>
          )}
          {height > 248 && (
            <div onClick={handleViewClick} className={classNames(styles['EditedFormBase--viewMore'], 'HELLLO WORLD')}>
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
      </Card>
    </div>
  );
};

export default typedMemo(EditedForm);
