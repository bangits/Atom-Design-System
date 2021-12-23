import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import IconsGroup from './IconsGroup';

export default {
  title: 'components/molecules/Icons Group',
  component: IconsGroup,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <IconsGroup
      icons={[
        {
          icon: (
            <svg xmlns='http://www.w3.org/2000/svg' width='1.2rem' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
              />
            </svg>
          )
        },
        {
          icon: (
            <svg xmlns='http://www.w3.org/2000/svg' width='1.2rem' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
              />
            </svg>
          ),
          isActive: true
        },
        {
          icon: (
            <svg xmlns='http://www.w3.org/2000/svg' width='1.2rem' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
              />
            </svg>
          )
        }
      ]}
    />
  );
};
