import { action } from '@storybook/addon-actions';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProjectDetails from './ProjectDetails';

export default {
  title: 'components/pages/Project Details',
  component: ProjectDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ProjectDetails
      breadCrumb={[
        {
          label: 'Projects',
          isRedirect: true
        },
        {
          label: 'Irbet Project'
        }
      ]}
      projectName={text('projectName', 'Irbet')}
      projectId={text('projectId', 'ID123456789')}
      backgroundImgUrl={text('backgroundImgUrl', null)}
      onBackgroundImgClick={action('onBackgroundImgClick')}
      partnerInfo={{
        partnerName: 'Albatros',
        partnerId: '412464654'
      }}
      projectInfo={{
        projectIndustry: 'Gambling & Casino',
        projectType: 'Web Solution'
      }}
      creationInfo={{
        createdBy: 'email@gmail.com',
        creationDate: '02/02/2022 12:00:00'
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
      generalInformationContent={<>General Information</>}
      licensesContent={<>Licenses</>}
      languagesContent={<>Languages</>}
      currenciesContent={<>Currencies</>}
      //Translations
      translations={{
        createdBy: 'Created By',
        creationDate: 'Creation Date',
        currencies: 'Currencies',
        generalInformation: 'Information',
        languages: 'Languages',
        licenses: 'Licenses',
        partner: 'Partner',
        partnerId: 'Partner ID',
        projectIndustry: 'Project Industry',
        projectType: 'Project Type',
        settings: 'Settings',
        status: 'Status'
      }}
    />
  );
};
