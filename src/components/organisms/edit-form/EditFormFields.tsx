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
        <div className={styles['EditFormBase--field']} key={idx}>
          {field.type === 'custom'
            ? field.component()
            : renderInputs(getFormField(field), field.name, field.type, field.additionalProps)}
        </div>
      ))}
    </>
  );
};

export default typedMemo(EditFormFields);
