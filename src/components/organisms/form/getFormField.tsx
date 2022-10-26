import {
  AddProviderNameId,
  AddProviderNameIdProps,
  CheckboxGroup,
  CheckboxGroupProps,
  RadioGroup,
  RadioGroupProps,
  TextInput,
  TextInputProps,
  CheckboxWithLabel,
  CheckboxWithLabelProps,
  TableField,
  TableFieldProps
} from '@/components';
import { DatePicker, DatepickerProps, DateTimePicker, DateTimePickerProps, Select, SelectProps } from '@my-ui/core';
import { FormFieldProp } from './FormFieldTypes';

const getFormField = (field: FormFieldProp) => {
  if (field.component) return field.component;

  let fieldComponent: React.ElementType | null = null;

  switch (field.type) {
    case 'radio':
      fieldComponent = (props: RadioGroupProps) => {
        return (
          <RadioGroup
            label={field.label}
            name={field.name}
            {...field.props}
            {...props}
            value={props.value?.toString()}
          />
        );
      };
      break;
    case 'checkbox':
      fieldComponent = (props: CheckboxGroupProps) => <CheckboxGroup label={field.label} {...field.props} {...props} />;
      break;
    case 'single-checkbox':
      fieldComponent = (props: CheckboxWithLabelProps) => <CheckboxWithLabel label={field.label} {...props} />;
      break;
    case 'input':
      fieldComponent = (props: TextInputProps) => (
        <TextInput autoComplete='off' {...field.props} {...props} label={field.label} fullWidth />
      );
      break;
    case 'field':
      fieldComponent = (props: TableFieldProps) => <TableField {...field.props} {...props} />;
      break;
    case 'from-to-input':
      fieldComponent = (props: AddProviderNameIdProps) => <AddProviderNameId {...field.props} {...props} />;
      break;
    case 'select':
      fieldComponent = (props: SelectProps<any, boolean, any>) => (
        <Select {...field.props} {...props} label={field.label} fullWidth />
      );
      break;
    case 'datepicker':
      fieldComponent = (props: DatepickerProps) => (
        <DatePicker {...field.props} {...props} placeholderText={field.label} fullWidth />
      );
      break;
    case 'timepicker':
      fieldComponent = (props: DateTimePickerProps) => (
        <DateTimePicker {...field.props} {...props} placeholderText={field.label} />
      );
      break;
    case 'custom':
      fieldComponent = field.component;
  }

  return fieldComponent;
};

export default getFormField;
