import { Button, Select, TextInput, Typography } from '@my-ui/core';
import TextInputs from '@my-ui/core/dist/components/inputs-and-elements/TextInput/TextInput';
import React, { FC, useState } from 'react';
import styles from './ProjectLanguages.module.scss';

export interface TranslationFormProps {
  value?: string;
}

const TranslationForm: FC<TranslationFormProps> = ({ value }) => {
  const [defaultValue, setValue] = useState(value);

  return (
    <>
      <Button />
      <Select />
      <Typography>fnsdlkfjsdklfjsdklfj</Typography>
      <TextInput value={defaultValue} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};

export default TranslationForm;
