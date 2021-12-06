import { IconButton } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import StatusView from './StatusView';

export default {
  title: 'components/organisms/Status View',
  component: StatusView,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <StatusView
      statusInfo={{
        label: 'Status',
        variant: 'active',
        statusLabel: 'Validated',
        actions: [
          <IconButton
            variant='dark'
            icon={
              <svg
                id='Component_101_48'
                data-name='Component 101 – 48'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <g id='stop-svgrepo-com' transform='translate(5 5)'>
                  <g id='Group_23860'>
                    <path
                      id='Path_43298'
                      data-name='Path 43298'
                      d='M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM9.485,8.9a.589.589,0,0,1-.589.589H5.1A.589.589,0,0,1,4.515,8.9V5.1A.589.589,0,0,1,5.1,4.515H8.9a.589.589,0,0,1,.589.589Z'
                      fill='#505d6e'
                    />
                  </g>
                </g>
                <rect id='Rectangle_11198' data-name='Rectangle 11198' width='24' height='24' fill='none' />
              </svg>
            }
          />,
          <IconButton
            variant='dark'
            icon={
              <svg
                id='Component_101_48'
                data-name='Component 101 – 48'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <g id='stop-svgrepo-com' transform='translate(5 5)'>
                  <g id='Group_23860'>
                    <path
                      id='Path_43298'
                      data-name='Path 43298'
                      d='M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM9.485,8.9a.589.589,0,0,1-.589.589H5.1A.589.589,0,0,1,4.515,8.9V5.1A.589.589,0,0,1,5.1,4.515H8.9a.589.589,0,0,1,.589.589Z'
                      fill='#505d6e'
                    />
                  </g>
                </g>
                <rect id='Rectangle_11198' data-name='Rectangle 11198' width='24' height='24' fill='none' />
              </svg>
            }
          />
        ]
      }}
    />
  );
};
