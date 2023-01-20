import { InfoTooltipIcon } from '@/icons';
import { Tag, TextInput, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { EditedFormProps } from './EditedForm';
import styles from './EditedForm.module.scss';

export interface EditedFormOptionsProps {
  options: EditedFormProps['options'];
  noDataText?: ReactNode;
}

const EditedFormOptions: FC<EditedFormOptionsProps> = ({ options, noDataText }) => {
  return (
    <>
      {options &&
        options?.map((option, index) => {
          const title = (
            <span className={classNames(styles['EditedFormBase--option-title'])}>
              {option.title}
              {option.tooltipText && (
                <Tooltip showEvent='hover' text={option.tooltipText}>
                  <InfoTooltipIcon
                    className={styles['EditedFormBase--option-tooltip']}
                    width='1.5rem'
                    height='1.5rem'
                  />
                </Tooltip>
              )}
            </span>
          );

          switch (option.variant) {
            case 'default':
              return (
                <>
                  {option.labelText && <TextInput value={option.labelText} />}
                  <div
                    key={index}
                    className={classNames(
                      styles['EditedFormBase--option'],
                      styles[`EditedFormBase--option--${option.col || 6}`],
                      {
                        [styles['EditedFormBase--option--line-translation']]: option.shouldLineTranslation,
                        [styles['EditedFormBase--option--overflow--none']]: option.overflow === 'none'
                      }
                    )}>
                    {title}

                    <span
                      onClick={option.onRedirectClick}
                      className={classNames(styles['EditedFormBase--option-value'], {
                        [styles['EditedFormBase--option-hover']]: option.onRedirectClick
                      })}>
                      {option.value || noDataText}
                    </span>
                  </div>
                </>
              );
            case 'label':
              return (
                <div key={index} className={classNames(styles['EditedFormBase--option-label'])}>
                  <span>{option.title}</span>
                </div>
              );
            case 'custom':
              return (
                <div
                  key={index}
                  className={classNames(styles['EditedFormBase--option'], styles['EditedFormBase--custom'], {
                    [styles['EditedFormBase--option--line-translation']]: option.shouldLineTranslation,
                    [styles['EditedFormBase--option--full-width']]: option.fullWidth,
                    [styles['EditedFormBase--option--align-end']]: option.alignItem === 'end'
                  })}>
                  {title}
                  {option.value || <span className={styles['EditedFormBase--option-value']}>{noDataText}</span>}
                </div>
              );
            case 'tag':
              return (
                <div key={index} className={classNames(styles['EditedFormBase--option-tag'])}>
                  {title}
                  <div>
                    {option.value.length === 0 ? (
                      <span className={classNames(styles['EditedFormBase--option-value'])}>{noDataText}</span>
                    ) : (
                      option.value?.map?.((o, index) => <Tag title={o} key={index} />)
                    )}
                  </div>
                </div>
              );
            case 'bold':
              return (
                <div key={index} className={classNames(styles['EditedFormBase--option'])}>
                  {title}
                  <span
                    className={classNames(
                      styles['EditedFormBase--option-value'],
                      styles['EditedFormBase--option-value-bold']
                    )}>
                    {option.value || noDataText}
                  </span>
                </div>
              );
          }
        })}
    </>
  );
};

export default EditedFormOptions;
