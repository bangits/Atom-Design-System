import { FormFieldProp, FormFieldTypes } from '@/components';
import { typedMemo } from '@/helpers';
import { ApplyIcon, CloseIcon, InfoTooltipIcon } from '@/icons';
import { Card, IconButton, SelectProps, Tooltip } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './EditForm.module.scss';
import EditFormFields from './EditFormFields';

export type FormSelectProps = SelectProps<any[], boolean, any>;
export interface EditFormProps {
  applyButtonDisabled?: boolean;
  applyButtonTooltipText?: string;
  closeButtonTooltipText?: string;
  title?: ReactNode;
  tooltipText?: string;
  fields?: FormFieldProp[];
  fullWidth?: boolean;
  showActions?: boolean;
  hideClose?: boolean;
  removeCard?: boolean;
  justifyContent?: string;
  col?: 6 | 12;

  onToggle?: () => void;
  onSubmit?: (onToggle: () => void) => void;
  renderInputs?: (
    InputComponent: React.ElementType,
    name: string,
    fieldType: FormFieldTypes,
    props: any
  ) => JSX.Element;
}

const EditForm: FC<EditFormProps> = ({
  title,
  tooltipText,
  fields,
  renderInputs,
  onToggle,
  onSubmit,
  applyButtonTooltipText,
  closeButtonTooltipText,
  children,
  col,
  fullWidth,
  showActions = true,
  removeCard,
  justifyContent,
  applyButtonDisabled,
  hideClose
}) => {
  const content = children || (
    <div
      className={classNames(styles['EditFormBase--content'], {
        [styles[`EditFormBase--field--${justifyContent}`]]: justifyContent
      })}>
      <EditFormFields
        fullWidth={fullWidth}
        justifyContent={justifyContent}
        fields={fields}
        renderInputs={renderInputs}
      />
    </div>
  );

  return (
    <div
      className={classNames(styles.EditForm, {
        [styles[`EditForm--${col}`]]: col
      })}>
      {showActions && (
        <div className={classNames(styles['EditFormBase--header'])}>
          <span>
            {title}
            {tooltipText && (
              <Tooltip text={tooltipText}>
                <InfoTooltipIcon className={styles['EditFormBase--header-tooltip']} width='1.5rem' height='1.5rem' />
              </Tooltip>
            )}
          </span>
          <div className={classNames(styles['EditFormBase--buttons'])}>
            <Tooltip showEvent='hover' text={applyButtonTooltipText}>
              <IconButton
                icon={<ApplyIcon />}
                type='button'
                onClick={() => onSubmit(onToggle)}
                className={classNames({
                  [styles['EditFormBase__button--disabled']]: applyButtonDisabled
                })}
                disabled={applyButtonDisabled}
              />
            </Tooltip>
            {!hideClose && (
              <Tooltip showEvent='hover' text={closeButtonTooltipText}>
                <IconButton icon={<CloseIcon />} type='button' onClick={onToggle} />
              </Tooltip>
            )}
          </div>
        </div>
      )}

      {removeCard ? (
        content
      ) : (
        <Card borderRadius={1.6} className={classNames(styles.EditFormBase)}>
          {content}
        </Card>
      )}
    </div>
  );
};

export default typedMemo(EditForm);
