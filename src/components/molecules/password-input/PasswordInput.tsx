import { TextInput } from '@/components';
import { typedMemo } from '@/helpers';
import React, { useCallback, useState } from 'react';

const PasswordInput: typeof TextInput = (props) => {
  const [show, setShow] = useState(false);

  const iconClickHandler = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <>
      <TextInput
        {...props}
        type={show ? 'text' : 'password'}
        fullWidth
        startIcon={
          props.startIcon === undefined ? (
            <>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 15.1' width='1.4rem' fill='currentColor'>
                <path d='M10.5 5.3h-.9V3.6C9.6 1.6 8 0 6 0S2.4 1.6 2.4 3.6v1.7h-.9C.7 5.3 0 5.9 0 6.7v6.9c0 .8.7 1.5 1.5 1.4h9c.8 0 1.5-.6 1.5-1.4V6.7c0-.8-.7-1.4-1.5-1.4zm-4 4.5v2.5c0 .3-.2.5-.5.5s-.5-.2-.6-.5V9.8c-.4-.2-.6-.7-.6-1.1 0-.7.6-1.2 1.3-1.2.7 0 1.2.6 1.2 1.2-.1.5-.4.9-.8 1.1zm2-4.5h-5V3.6c0-.7.3-1.3.8-1.7 1-1 2.6-1 3.6 0 .5.4.7 1.1.8 1.7v1.7z' />
              </svg>
            </>
          ) : null
        }
        endIcon={
          !show ? (
            <>
              <svg
                style={{ cursor: 'pointer' }}
                onClick={iconClickHandler}
                width='2rem'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 18.5'>
                <path d='m19.6 0-3.3 3.1c-1.3-.4-2.7-.7-4.3-.7C4.4 2.4 0 9 0 9s1.9 3 5.1 5.1L2.2 17l1.4 1.4L21 1.4 19.6 0zm-6 5.8C10.3 4.3 6.9 7.7 8.3 11l-1.7 1.7C4.8 11.5 3.4 10 2.5 9 4 7.4 7.4 4.4 12 4.4c.9 0 1.8.1 2.6.3l-1 1.1zM19.4 4.7l-1.5 1.5c1.6 1 2.9 2.1 3.6 3-1.4 1.8-4.7 5.4-9.5 5.4-.8 0-1.5-.1-2.2-.3l-1.6 1.6c1.2.4 2.5.7 3.9.7 7.7 0 12-7.4 12-7.4s-1.7-2.6-4.7-4.5z' />
                <path d='m15.8 8.2-5.1 5c3.1 1.1 6.1-1.9 5.1-5z' />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 14'
                style={{ cursor: 'pointer' }}
                width='2rem'
                fill='currentColor'
                onClick={iconClickHandler}>
                <path d='M12 3C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
                <path d='M12 0C4.4 0 0 6.6 0 6.6S4.8 14 12 14c7.7 0 12-7.4 12-7.4S19.7 0 12 0zm0 12c-4.4 0-7.9-3.5-9.5-5.4C4 4.9 7.4 2 12 2c4.8 0 8.1 3 9.5 4.6C20.1 8.5 16.8 12 12 12z' />
              </svg>
            </>
          )
        }
      />
    </>
  );
};

export default typedMemo(PasswordInput);
