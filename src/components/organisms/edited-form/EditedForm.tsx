import { typedMemo } from '@/helpers';
import { DustbinIcon, InfoTooltipIcon, PenIcon } from '@/icons';
import { Card, IconButton, Tooltip, useStyles } from '@my-ui/core';
import classNames from 'classnames';
import { CSSProperties, FC, ReactNode, useCallback, useLayoutEffect, useRef, useState } from 'react';
import styles from './EditedForm.module.scss';
import EditedFormOptions from './EditedFormOptions';

export interface EditedFormProps {
  editButtonTooltipText?: string;
  deleteButtonTooltipText?: string;
  options?: (
    | {
        title: ReactNode;
        value: ReactNode | string;
        variant: 'default';
        shouldLineTranslation?: boolean;
        col?: 3 | 4 | 6 | 12;
        overflow?: 'ellipsis' | 'none';
        labelText?: string;
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
    | {
        title: ReactNode | string;
        value: ReactNode;
        shouldLineTranslation?: boolean;
        fullWidth?: boolean;
        alignItem?: 'end';
        variant: 'custom';
      }
  )[];
  noDataText?: ReactNode;
  title?: ReactNode;
  tooltipText?: string;
  viewMoreLabel?: string;
  viewLessLabel?: string;
  onToggle?: () => void;
  col?: 6 | 12;
  showDeleteButton?: boolean;
  onDelete?: () => void;
  showEditIcons?: boolean;
  startJustify?: boolean;
  removeCard?: boolean;
  removeShadow?: boolean;
  disableEditButton?: boolean;
  height?: CSSProperties['height'];
}

const EditedForm: FC<EditedFormProps> = ({
  title,
  tooltipText,
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
  showEditIcons = true,
  removeCard,
  startJustify,
  disableEditButton = false,
  removeShadow,
  height: heightProp = 248
}) => {
  const containerRef = useRef<HTMLDivElement>();

  const [isOpenedCollapse, setOpenedCollapse] = useState<boolean>(false);
  // eslint-disable-next-line prefer-const
  let [height, setHeight] = useState<number>();

  const containerHeight = containerRef.current?.scrollHeight;

  if (height !== containerHeight) height = containerHeight;

  const viewMoreClassNames = useStyles(
    {
      open: {
        paddingBottom: '24px',
        height: (data) => data.height + 24,
        minHeight: 248
      },
      closed: {
        height: (data) => data.heightProp
      },
      iconTransform: {
        transform: 'rotate(180deg)',
        transition: '.5s'
      }
    },
    { height, heightProp }
  );

  const handleViewClick = useCallback(() => {
    setOpenedCollapse(!isOpenedCollapse);
  }, [isOpenedCollapse]);

  useLayoutEffect(() => {
    const height = containerRef.current?.scrollHeight;

    if (height !== undefined) setHeight(height);
  }, [containerRef, children]);

  if (removeCard) return <>{children}</>;

  return (
    <div
      className={classNames(styles.EditedFormBase, {
        [styles[`EditedFormBase--${col}`]]: col,
        [styles[`EditedFormBase--${col}`]]: col
      })}
      style={{ opacity: height ? 1 : 0 }}>
      <div className={styles['EditedFormBase--control']}>
        <span className={styles['EditedFormBase--control-title']}>
          {title}
          {tooltipText && (
            <Tooltip text={tooltipText}>
              <InfoTooltipIcon className={styles['EditedFormBase--control-tooltip']} width='1.5rem' height='1.5rem' />
            </Tooltip>
          )}
        </span>
        {showEditIcons && (
          <div className={classNames(styles['EditedFormBase--control-button'])}>
            <Tooltip showEvent='hover' text={editButtonTooltipText}>
              <div>
                <IconButton disabled={disableEditButton} icon={<PenIcon />} onClick={onToggle} />
              </div>
            </Tooltip>
            {showDeleteButton && (
              <Tooltip showEvent='hover' text={deleteButtonTooltipText}>
                <IconButton icon={<DustbinIcon />} onClick={onDelete} />
              </Tooltip>
            )}
          </div>
        )}
      </div>
      <Card
        borderRadius={1.6}
        className={classNames(styles['EditedFormBase--card-content'], {
          [styles['EditedFormBase--remove-shadow']]: removeShadow
        })}>
        <div
          className={classNames(styles['EditedFormBase--content'], {
            [viewMoreClassNames.closed]: !isOpenedCollapse,
            [viewMoreClassNames.open]: isOpenedCollapse,
            [styles['EditedFormBase--content-children']]: children,
            [styles['EditedFormBase--content-start-justify']]: startJustify
          })}
          ref={containerRef}>
          {children || <EditedFormOptions options={options} noDataText={noDataText} />}

          {height > 248 && heightProp !== 'auto' && (
            <div onClick={handleViewClick} className={styles['EditedFormBase--viewMore']}>
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
