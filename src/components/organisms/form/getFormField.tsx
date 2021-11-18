import { RadioGroup, RadioGroupProps, CheckboxGroup, CheckboxGroupProps } from '@/components';
import { DatePicker, Select, TextInput, TextInputProps, SelectProps, DatepickerProps } from '@my-ui/core';
import { ReactNode } from 'react';
import { FormFieldProp } from './FormFieldTypes';

const getFormField = (field: FormFieldProp) => {
  let fieldComponent: ((props: any) => ReactNode) | null = null;

  switch (field.type) {
    case 'radio':
      fieldComponent = (props: RadioGroupProps) => (
        <RadioGroup label={field.label} name={field.name} {...field.props} {...props} />
      );
      break;
    case 'checkbox':
      fieldComponent = (props: CheckboxGroupProps) => <CheckboxGroup label={field.label} {...field.props} {...props} />;
      break;
    case 'input':
      fieldComponent = (props: TextInputProps) => (
        <TextInput {...field.props} {...props} label={field.label} fullWidth />
      );
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
    case 'custom':
      fieldComponent = field.component;
  }

  return fieldComponent;
};

export default getFormField;
