import {
  ButtonForm,
  ButtonFormProps,
  FormWithInput,
  FormWithInputProps,
  GameLaunchBtns,
  Icons
} from '@/atom-design-system';
import { typedMemo } from '@/helpers';
import { Checkbox, CheckboxProps, TextWithTooltip, Typography } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useCallback, useState } from 'react';
import styles from './ItemCategoriesCard.module.scss';

export interface ItemCategoriesCardProps {
  checkboxProps?: CheckboxProps;
  showActions?: boolean;
  index?: number;
  imgSrc: string;
  name: string;
  providerName: string;

  replaceWithChangeProps?: FormWithInputProps;
  positionChangeProps?: FormWithInputProps & {
    onPositionChange?(position: number): void;
  };
  actionsShowPosition?: ButtonFormProps['showPosition'];

  translations?: {
    playDemoText?: string;
    view: string;
    replaceWith: string;
    setPosition: string;
    delete: string;
  };

  onViewButtonClick?(): void;
  onDeleteButtonClick?(): void;
  onPlayButtonClick?(): void;
  onDemoPlayButtonClick?(): void;
}

const ItemCategoriesCard: FC<ItemCategoriesCardProps> = ({
  imgSrc,
  name,
  providerName,
  checkboxProps,
  index,
  onDeleteButtonClick,
  onPlayButtonClick,
  onDemoPlayButtonClick,
  positionChangeProps,
  replaceWithChangeProps,
  onViewButtonClick,
  actionsShowPosition,
  showActions,
  translations
}) => {
  const [selectedForm, setSelectedForm] = useState<number | null>(null);
  const [showSelectedFrom, setShowSelectedForm] = useState(false);

  const closeSelectedForm = useCallback(() => setShowSelectedForm(false), []);

  const onBackBtnClick = useCallback<FormWithInputProps['onBackBtnClick']>((e) => {
    e.stopPropagation();

    closeSelectedForm();
  }, []);

  const SelectedFormContent = {
    1: () => <FormWithInput {...replaceWithChangeProps} onBackBtnClick={onBackBtnClick} close={closeSelectedForm} />,
    2: () => (
      <FormWithInput
        {...positionChangeProps}
        onBackBtnClick={onBackBtnClick}
        onSave={positionChangeProps.onPositionChange}
        close={closeSelectedForm}
      />
    )
  }[selectedForm];

  return (
    <div
      className={classNames(styles.ItemCategoriesCard, {
        [styles['ItemCategoriesCard--with-actions']]: showActions
      })}>
      <div className={styles['ItemCategoriesCard__main']}>
        {checkboxProps && (
          <Checkbox
            {...checkboxProps}
            className={classNames(styles['ItemCategoriesCard__checkbox'], checkboxProps?.className)}
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
                {SelectedFormContent && <SelectedFormContent />}
              </div>

              <div className={styles['ItemCategoriesCard__more-actions']}>
                <button onClick={onViewButtonClick} className={styles['ItemCategoriesCard__action']} type='button'>
                  <Icons.ViewIcon width='1.6rem' /> {translations?.view}
                </button>

                <button
                  onClick={() => {
                    setSelectedForm(1);

                    setShowSelectedForm(true);
                  }}
                  className={styles['ItemCategoriesCard__action']}
                  type='button'>
                  <Icons.ReplaceIcon width='1.6rem' /> {translations?.replaceWith}
                </button>

                <button
                  onClick={() => {
                    setSelectedForm(2);

                    setShowSelectedForm(true);
                  }}
                  className={styles['ItemCategoriesCard__action']}
                  type='button'>
                  <Icons.SetPositionIcon width='1.6rem' /> {translations?.setPosition}
                </button>

                <button
                  className={classNames(
                    styles['ItemCategoriesCard__action'],
                    styles['ItemCategoriesCard__action--danger']
                  )}
                  type='button'
                  onClick={onDeleteButtonClick}>
                  <Icons.TrashIndicator width='1.2rem' /> {translations?.delete}
                </button>
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
            <Icons.EmptyCardImagePokerToken />
          </span>
        )}
      </div>

      <span className={styles['ItemCategoriesCard__name']}>
        {name && (
          <TextWithTooltip className={styles.ItemCategoriesCard__title} displayText={name}>
            <Typography className={styles['ItemCategoriesCard__title-content']} component='h3' variant='p4'>
              {name}
            </Typography>
          </TextWithTooltip>
        )}

        {providerName && (
          <TextWithTooltip className={styles.ItemCategoriesCard__subtitle} displayText={providerName}>
            <Typography
              className={styles['ItemCategoriesCard__subtitle-content']}
              component='span'
              variant='p5'
              color='primary'>
              {providerName}
            </Typography>
          </TextWithTooltip>
        )}
      </span>
    </div>
  );
};

export default typedMemo(ItemCategoriesCard);
