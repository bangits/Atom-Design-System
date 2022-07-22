import { Icons, Tooltip } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import DnDFooterContent from './DnDFooterContent';

export default {
  title: 'components/organisms/FooterContent',
  component: DnDFooterContent,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <DnDFooterContent
      data={[
        {
          title: 'Pages',
          index: 1,
          editClick: () => alert('edit'),
          groupTitle: 'Group Title',
          groupTitleLabel: 'About',
          pages: [
            {
              title: 'Casino'
            },
            {
              title: 'Live Casino'
            },
            {
              title: 'Slots'
            },
            {
              title: 'Sport'
            }
          ]
        },
        {
          title: 'Pages 2',
          index: 2,
          editClick: () => alert('edit 2'),
          groupTitle: 'Group Title 2',
          groupTitleLabel: 'About 2',
          pages: [
            {
              title: 'Casino'
            },
            {
              title: 'Live Casino'
            },
            {
              title: 'Slots'
            },
            {
              title: 'Sport'
            }
          ]
        },
        {
          title: 'Pages 3',
          index: 3,
          editClick: () => alert('edit 3'),
          groupTitle: 'Group Title 3',
          groupTitleLabel: 'About 3',
          pages: [
            {
              title: 'Casino'
            },
            {
              title: 'Live Casino'
            },
            {
              title: 'Slots'
            },
            {
              title: 'Sport'
            }
          ]
        }
      ]}
    />
  );
};
