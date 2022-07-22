import { EditFormProps, getFormField } from '@/components';
import { typedMemo } from '@/helpers';
import styles from './EditForm.module.scss';

const EditFormFields = ({
  fields,
  renderInputs,
  fullWidth
}: {
  renderInputs: EditFormProps['renderInputs'];
  fields: EditFormProps['fields'];
  fullWidth?: boolean;
}) => {
  return (
    <>
      {fields.map((field, idx) => (
        <div
          className={
            field.type === 'header'
              ? styles['EditFormBase--field-header']
              : fullWidth
              ? styles['EditFormBase--field--full-width']
              : styles['EditFormBase--field']
          }
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
