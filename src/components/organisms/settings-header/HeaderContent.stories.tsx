import { Icons, Tooltip } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import HeaderContent from './HeaderContent';

export default {
  title: 'components/organisms/ Header Content',
  component: HeaderContent,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <HeaderContent
      noDataText='Not Completed'
      navBarProps={{
        title: 'Navbar Pages',
        total: '',
        currencies: [
          {
            id: '1',
            title: 'Casino',
            closeIcon: true,
            endIcon: (
              <Tooltip text='tooltip Text'>
                <Icons.LinkIcon />
              </Tooltip>
            ),
            value: 1
          },

          {
            id: '3',
            title: 'Live Casino',
            closeIcon: true,
            endIcon: (
              <Tooltip text='tooltip Text 2'>
                <Icons.LinkIcon />
              </Tooltip>
            ),
            value: 2,
            tooltipText: 'asd'
          }
        ]
      }}
    />
  );
};
