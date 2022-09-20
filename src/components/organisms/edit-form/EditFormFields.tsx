import { EditFormProps, getFormField } from '@/components';
import { typedMemo } from '@/helpers';
import classNames from 'classnames';
import styles from './EditForm.module.scss';

const EditFormFields = ({
  fields,
  renderInputs,
  fullWidth,
  justifyContent
}: {
  renderInputs: EditFormProps['renderInputs'];
  fields: EditFormProps['fields'];
  fullWidth?: boolean;
  justifyContent?: 'flex-end';
}) => {
  return (
    <>
      {fields.map((field, idx) => (
        <div
          className={classNames(
            field.type === 'header'
              ? styles['EditFormBase--field-header']
              : fullWidth
              ? styles['EditFormBase--field--full-width']
              : styles['EditFormBase--field'],

            styles[`EditFormBase--${field.col || 6}`],
            styles[`EditFormBase--field--${field.justifyContent}`]
          )}
          key={idx}>
          {field.type === 'custom' ? (
            field.component()
          ) : field.type === 'header' ? (
            <>{field.label}</>
          ) : (
            renderInputs(getFormField(field), field.name, field.type, field.additionalProps)
          )}
        </div>
      ))}
    </>
  );
};

export default typedMemo(EditFormFields);
