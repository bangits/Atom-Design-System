import { TextInput, TextInputProps } from '@my-ui/core';
import React from 'react';

export type SearchInputProps = TextInputProps;

const SearchInput = (textInputProps: TextInputProps) => {
  return (
    <TextInput
      startIcon={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16px'
          style={{ fill: '#8ea6c1', cursor: 'pointer', opacity: '0.5' }}
          viewBox='0 0 512 512'>
          <path d='m503.6 463.2-96.7-96.4C438.1 327.1 455 278 455 227.5 455 101.8 353.1 0 227.5 0 101.8 0 0 101.8 0 227.5 0 353.1 101.8 455 227.5 455c50.5.1 99.6-16.9 139.3-48.1l96.4 96.7c11.1 11.1 29.1 11.2 40.2.2l.2-.2c11.1-11.1 11.2-29.1.2-40.2l-.2-.2zM56.9 227.5c0-94.2 76.4-170.6 170.6-170.6 94.2 0 170.6 76.4 170.6 170.6 0 94.2-76.4 170.6-170.6 170.6-94.3 0-170.6-76.4-170.6-170.6z' />
        </svg>
      }
      {...textInputProps}
    />
  );
};

export default SearchInput;
