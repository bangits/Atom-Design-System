import { Icons } from '@/atom-design-system';
import { TextInput } from '@/components';
import { typedMemo } from '@/helpers';
import { useCallback, useState } from 'react';

const PasswordInput: typeof TextInput = ({ startIcon, endIcon, ...props }) => {
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
          !startIcon ? (
            <>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 15.1' width='1.4rem' fill='currentColor'>
                <path d='M10.5 5.3h-.9V3.6C9.6 1.6 8 0 6 0S2.4 1.6 2.4 3.6v1.7h-.9C.7 5.3 0 5.9 0 6.7v6.9c0 .8.7 1.5 1.5 1.4h9c.8 0 1.5-.6 1.5-1.4V6.7c0-.8-.7-1.4-1.5-1.4zm-4 4.5v2.5c0 .3-.2.5-.5.5s-.5-.2-.6-.5V9.8c-.4-.2-.6-.7-.6-1.1 0-.7.6-1.2 1.3-1.2.7 0 1.2.6 1.2 1.2-.1.5-.4.9-.8 1.1zm2-4.5h-5V3.6c0-.7.3-1.3.8-1.7 1-1 2.6-1 3.6 0 .5.4.7 1.1.8 1.7v1.7z' />
              </svg>
            </>
          ) : null
        }
        endIcon={[
          !show ? (
            <Icons.VisibilityOff style={{ marginRight: endIcon ? '7px' : 0 }} width='2rem' onClick={iconClickHandler} />
          ) : (
            <Icons.Visibility style={{ marginRight: endIcon ? '7px' : 0 }} width='2rem' onClick={iconClickHandler} />
          ),
          ...(endIcon ? [endIcon] : [])
        ]}
      />
    </>
  );
};

export default typedMemo(PasswordInput);
