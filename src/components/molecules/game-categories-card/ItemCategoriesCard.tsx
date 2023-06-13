import {
  ButtonForm,
  ButtonFormProps,
  FormWithInput,
  FormWithInputProps,
  GameLaunchBtns,
  Icons
} from '@/atom-design-system';
import { typedMemo } from '@/helpers';
import { Checkbox, CheckboxProps, TextWithTooltip, Tooltip, Typography } from '@my-ui/core';
import classNames from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useCallback, useState } from 'react';
import styles from './ItemCategoriesCard.module.scss';

export type FormWithInputAction = Partial<FormWithInputProps> & {
  actionLabel: string;
  actionIcon?: ReactNode;
  removeForm?: boolean;

  onActionClick?(): void;
};

export interface ItemCategoriesCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  checkboxProps?: CheckboxProps;
  cardTopComponent?: ReactNode;
  showCheckboxOnHover?: boolean;
  showActions?: boolean;
  index?: number;
  imgSrc: string;
  emptyImageIllustration?: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  subTitle?: string;

  formWithInputActions?: FormWithInputAction[];
  actionsShowPosition?: ButtonFormProps['showPosition'];

  translations?: {
    view: string;
    playDemoText?: string;
    delete?: string;
  };
  status?: 'active' | 'inactive';
  statusLabel?: string;

  onViewButtonClick?(): void;
  onDeleteButtonClick?(): void;
  onPlayButtonClick?(): void;
  onDemoPlayButtonClick?(): void;
}

const ItemCategoriesCard: FC<ItemCategoriesCardProps> = ({
  onDeleteButtonClick,
  onPlayButtonClick,
  onDemoPlayButtonClick,
  onViewButtonClick,
  imgSrc,
  emptyImageIllustration: EmptyImageIllustration = Icons.EmptyCardImagePokerToken,
  name,
  subTitle,
  checkboxProps,
  cardTopComponent,
  index,
  formWithInputActions,
  actionsShowPosition,
  showActions,
  translations,
  showCheckboxOnHover,
  status,
  statusLabel,
  ...props
}) => {
  const [selectedFormProps, setSelectedFormProps] = useState<FormWithInputAction | null>(null);
  const [showSelectedFrom, setShowSelectedForm] = useState(false);

  const closeSelectedForm = useCallback(() => setShowSelectedForm(false), []);

  const onBackBtnClick = useCallback<FormWithInputProps['onBackBtnClick']>((e) => {
    e.stopPropagation();

    closeSelectedForm();
  }, []);

  return (
    <div
      {...props}
      className={classNames(
        styles.ItemCategoriesCard,
        {
          [styles['ItemCategoriesCard--with-actions']]: showActions,
          [styles['ItemCategoriesCard--with-status']]: !!status,
          [styles[`ItemCategoriesCard--status-${status}`]]: status,
          [styles['ItemCategoriesCard--show-checkbox-hover']]: showCheckboxOnHover
        },
        props.className
      )}>
      <div className={styles['ItemCategoriesCard__main']}>
        {cardTopComponent && <div className={styles['ItemCategoriesCard__top']}>{cardTopComponent}</div>}

        {checkboxProps && !cardTopComponent && (
          <Checkbox
            {...checkboxProps}
            className={classNames(styles['ItemCategoriesCard__top'], checkboxProps?.className)}
          />
        )}

        {index ? <span className={styles['ItemCategoriesCard__index']}>{index}</span> : null}

        {showActions && (
          <ButtonForm
            showPosition={actionsShowPosition}
            className={styles['ItemCategoriesCard__more']}
            renderOpenElement={({ open }) => (
              <button type='button' onClick={open}>
                <Icons.DotsIcon />
              </button>
            )}>
            <div
              className={classNames(styles['ItemCategoriesCard__more-content'], {
                [styles['ItemCategoriesCard__more-content--with-selected-form']]: showSelectedFrom
              })}>
              <div className={styles['ItemCategoriesCard__more-form']}>
                {selectedFormProps && (
                  <FormWithInput
                    buttonLabel=''
                    title=''
                    {...selectedFormProps}
                    onBackBtnClick={(e) => {
                      onBackBtnClick(e);
                      selectedFormProps.onBackBtnClick?.(e);
                    }}
                    close={() => {
                      closeSelectedForm();
                      selectedFormProps.close?.();
                    }}
                  />
                )}
              </div>

              <div className={styles['ItemCategoriesCard__more-actions']}>
                <button onClick={onViewButtonClick} className={styles['ItemCategoriesCard__action']} type='button'>
                  <Icons.ViewIcon width='1.6rem' /> {translations?.view}
                </button>

                {formWithInputActions?.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      action.onActionClick?.();

                      if (action.removeForm) return;

                      setSelectedFormProps(action);

                      setShowSelectedForm(true);
                    }}
                    className={styles['ItemCategoriesCard__action']}
                    type='button'>
                    {action.actionIcon} {action.actionLabel}
                  </button>
                ))}

                {onDeleteButtonClick && (
                  <button
                    className={classNames(
                      styles['ItemCategoriesCard__action'],
                      styles['ItemCategoriesCard__action--danger']
                    )}
                    type='button'
                    onClick={onDeleteButtonClick}>
                    <Icons.TrashIndicator width='1.2rem' /> {translations?.delete}
                  </button>
                )}
              </div>
            </div>
          </ButtonForm>
        )}

        <div className={styles['ItemCategoriesCard__launch-btns']}>
          <GameLaunchBtns
            onDemoPlayBtnClick={onDemoPlayButtonClick}
            onPlayBtnClick={onPlayButtonClick}
            playDemoText={translations?.playDemoText}
            showDemoPlayBtn={!!onDemoPlayButtonClick}
            showPlayBtn={!!onPlayButtonClick}
          />
        </div>

        {imgSrc ? (
          <img className={styles['ItemCategoriesCard__img']} src={imgSrc} alt={name} />
        ) : (
          <span className={styles['ItemCategoriesCard__empty-img']}>
            <EmptyImageIllustration />
          </span>
        )}
      </div>

      <div className={styles['ItemCategoriesCard__name']}>
        {name && (
          <TextWithTooltip className={styles.ItemCategoriesCard__title} displayText={name}>
            <Typography className={styles['ItemCategoriesCard__title-content']} component='h3' variant='p4'>
              {name}
            </Typography>
          </TextWithTooltip>
        )}

        {subTitle && (
          <TextWithTooltip className={styles.ItemCategoriesCard__subtitle} displayText={subTitle}>
            <Typography
              className={styles['ItemCategoriesCard__subtitle-content']}
              component='span'
              variant='p5'
              color='primary'>
              {subTitle}
            </Typography>
          </TextWithTooltip>
        )}

        <Tooltip text={statusLabel}>
          <span className={styles['ItemCategoriesCard__indicator']} />
        </Tooltip>
      </div>
    </div>
  );
};

export default typedMemo(ItemCategoriesCard);
