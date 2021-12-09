import { EditFormProps, getFormField } from '@/components';
import { typedMemo } from '@/helpers';
import styles from './EditForm.module.scss';

const EditFormFields = ({
  fields,
  renderInputs
}: {
  renderInputs: EditFormProps['renderInputs'];
  fields: EditFormProps['fields'];
}) => {
  return (
    <>
      {fields.map((field, idx) => (
        <div
          className={field.type === 'header' ? styles['EditFormBase--field-header'] : styles['EditFormBase--field']}
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
