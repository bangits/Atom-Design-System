import { ButtonForm, ButtonFormProps, Icons } from '@/atom-design-system';
import { typedMemo } from '@/helpers';
import { Button, Checkbox, CheckboxProps, IconButton, TextInput } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useState } from 'react';
import styles from './ItemCategoriesCard.module.scss';

export interface ItemCategoriesCardProps {
  checkboxProps?: CheckboxProps;
  showActions?: boolean;
  index?: number;
  imgSrc: string;
  name: string;
  providerName: string;

  positionChangeProps?: {
    title: string;
    totalCount: string;
    buttonLabel: string;
    initialPosition?: number;
    showPosition?: ButtonFormProps['showPosition'];
    onPositionChange?(position: number): void;
  };

  onViewButtonClick?(): void;
  onDeleteButtonClick?(): void;
  onPlayButtonClick?(): void;
}

const ItemCategoriesCard: FC<ItemCategoriesCardProps> = ({
  imgSrc,
  name,
  providerName,
  checkboxProps,
  index,
  onDeleteButtonClick,
  onPlayButtonClick,
  positionChangeProps,
  onViewButtonClick,
  showActions
}) => {
  const [positionInputValue, setPositionInputValue] = useState<number | string>(
    positionChangeProps?.initialPosition || ''
  );

  return (
    <div className={styles.ItemCategoriesCard}>
      {(checkboxProps || index) && (
        <div
          className={classNames(styles['ItemCategoriesCard__top-part'], {
            [styles['ItemCategoriesCard__top-part--with-checkbox']]: !!checkboxProps
          })}>
          {checkboxProps && <Checkbox {...checkboxProps} />}

          {index ? <span className={styles['ItemCategoriesCard__index']}>{index}</span> : null}
        </div>
      )}

      {showActions && (
        <div className={styles['ItemCategoriesCard__actions']}>
          {onPlayButtonClick && (
            <IconButton
              onClick={onPlayButtonClick}
              className={styles['ItemCategoriesCard__play']}
              icon={<Icons.PlayArrowIcon width='100%' />}
            />
          )}

          <ul className={styles['ItemCategoriesCard__bottom-part']}>
            <li>
              <IconButton
                onClick={onViewButtonClick}
                className={styles['ItemCategoriesCard__action']}
                icon={<Icons.ViewIcon width='100%' />}
              />
            </li>
            {positionChangeProps && (
              <li className={styles['PositionChange']}>
                <ButtonForm
                  showPosition={positionChangeProps.showPosition}
                  renderOpenElement={({ open }) => (
                    <IconButton
                      className={styles['ItemCategoriesCard__action']}
                      icon={<Icons.RecalculateIcon width='100%' />}
                      onClick={open}
                    />
                  )}>
                  <div>
                    <p className={styles['PositionChange__name']}>{positionChangeProps.title}</p>
                    <p className={styles['PositionChange__total']}>{positionChangeProps.totalCount}</p>
                    <TextInput
                      onChange={(e) => setPositionInputValue(e.target.value)}
                      value={positionInputValue}
                      type='number'
                      maxLength={6}
                      containerClassName={styles['PositionChange__input']}
                    />
                    <Button
                      onClick={() => positionInputValue && positionChangeProps.onPositionChange(+positionInputValue)}
                      className={styles['PositionChange__button']}
                      variant='link'>
                      {positionChangeProps.buttonLabel}
                    </Button>
                  </div>
                </ButtonForm>
              </li>
            )}
            <li>
              <IconButton
                onClick={onDeleteButtonClick}
                className={styles['ItemCategoriesCard__action']}
                icon={<Icons.TrashIndicator width='100%' />}
              />
            </li>
          </ul>
        </div>
      )}
      <img className={styles['ItemCategoriesCard__img']} src={imgSrc} alt={name} />
      <span className={styles['ItemCategoriesCard__name']}>
        {name} {providerName && <span className={styles['ItemCategoriesCard__name--provider']}>{providerName}</span>}
      </span>
    </div>
  );
};

export default typedMemo(ItemCategoriesCard);
