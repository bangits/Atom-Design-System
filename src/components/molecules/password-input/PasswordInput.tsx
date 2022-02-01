import { typedMemo } from '@/helpers';
import { TextInput } from '@my-ui/core';
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
        startIcon={props.startIcon === undefined ?
          <>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 15.1' width='1.4rem' fill='currentColor'>
              <path d='M10.5 5.3h-.9V3.6C9.6 1.6 8 0 6 0S2.4 1.6 2.4 3.6v1.7h-.9C.7 5.3 0 5.9 0 6.7v6.9c0 .8.7 1.5 1.5 1.4h9c.8 0 1.5-.6 1.5-1.4V6.7c0-.8-.7-1.4-1.5-1.4zm-4 4.5v2.5c0 .3-.2.5-.5.5s-.5-.2-.6-.5V9.8c-.4-.2-.6-.7-.6-1.1 0-.7.6-1.2 1.3-1.2.7 0 1.2.6 1.2 1.2-.1.5-.4.9-.8 1.1zm2-4.5h-5V3.6c0-.7.3-1.3.8-1.7 1-1 2.6-1 3.6 0 .5.4.7 1.1.8 1.7v1.7z' />
            </svg>
          </>

          // <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          //   <g data-name='Group 2403'>
          //     <path data-name='Path 3521' d='M0 0h24v24H0z' style={{ fill: 'none' }} />
          //     <path data-name='Path 3522' d='M0 0h24v24H0z' style={{ opacity: '.87', fill: 'none' }} />
          //   </g>
          //   <g data-name='Group 2404'>
          //     <path
          //       data-name='Path 3523'
          //       d='M16.25 7h-.875V5.286a4.376 4.376 0 0 0-8.75 0V7H5.75A1.738 1.738 0 0 0 4 8.714v8.571A1.738 1.738 0 0 0 5.75 19h10.5A1.738 1.738 0 0 0 18 17.286V8.714A1.738 1.738 0 0 0 16.25 7zM8.375 5.286a2.626 2.626 0 0 1 5.25 0V7h-5.25zm7.875 3.428z'
          //       transform='translate(1 2)'
          //       style={{ fill: 'currentColor' }}
          //     />
          //     <circle
          //       data-name='Ellipse 218'
          //       cx='2'
          //       cy='2'
          //       r='2'
          //       transform='translate(10 13)'
          //       style={{ fill: '#fff' }}
          //     />
          //   </g>
          // </svg>
        : null}
        endIcon={
          !show ? (
            <>
              {/* <svg
                style={{ cursor: 'pointer' }}
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                onClick={iconClickHandler}>
                <path
                  style={{ fill: 'currentColor' }}
                  d='M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z'
                />
              </svg> */}

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

              {/* <svg
                style={{ cursor: 'pointer' }}
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                onClick={iconClickHandler}>
                <path
                  style={{ fill: 'currentColor' }}
                  d='M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z'
                />
              </svg> */}
            </>
          )
        }
      />
    </>
  );
};

export default typedMemo(PasswordInput);
