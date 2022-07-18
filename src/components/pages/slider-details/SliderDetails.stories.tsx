import { ProductsIcon } from '@/icons';
import { action } from '@storybook/addon-actions';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProjectCard from '../../organisms/project-card/ProjectCard';
import SliderDetails from './SliderDetails';

export default {
  title: 'components/pages/Slider Details',
  component: SliderDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <SliderDetails
      breadCrumb={[
        {
          label: 'Projects',
          isRedirect: true
        },
        {
          label: 'Irbet Project'
        }
      ]}
      sliderName={text('sliderName', 'Ainsworth')}
      domain={text('domain', 'domain.atomconstruct.com')}
      backgroundImgUrl={text('backgroundImgUrl', null)}
      onBackgroundImgClick={action('onBackgroundImgClick')}
      additionalProps={{
        createdDate: '15/07/2022',
        createdBy: 'Admin',
        lastUpdateDate: '15/07/2022',
        lastUpdatedBy: 'Operator-1'
      }}
      statusInfo={object('statusInfo', {
        statusLabel: 'Validated',
        label: '',
        variant: 'active',
        actions: [
          {
            buttonVariant: 'dark',
            iconName: 'BlockButtonIcon',
            tooltipText: 'Block',
            onClick: () => {}
          }
        ]
      })}
      footerContent={<>Footer</>}
      headerContent={<>HeaderContent</>}
      settingsContent={<>Settings</>}
      socialMediaContent={<>Social Media</>}
      //Translations
      translations={{
        lastUpdateDate: 'last Update Date',
        lastUpdatedBy: 'last Updated By',
        createdBy: 'Created By',
        creationDate: 'Creation Date',
        generalInformation: 'Settings',
        projectIndustry: 'Project Industry',
        projectType: 'Project Type',
        status: 'Status',
        footer: 'Footer',
        header: 'Header',
        socialMedia: 'Social Media'
      }}
    />
  );
};
