import { ProductsIcon } from '@/icons';
import { action } from '@storybook/addon-actions';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProjectCard from './../../organisms/project-card/ProjectCard';
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
      generalInformationContent={
        <>
          <ProjectCard
            col={6}
            color='purple'
            mode='small'
            title='Products'
            onArrowClick={action('onArrowClick')}
            logo={<ProductsIcon />}
            maxCount={100}
            viewLessLabel='View Less'
            viewMoreLabel='View More'
            items={[
              {
                title: 'Game',
                imgSrc:
                  'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
              },
              {
                title: 'Game',
                imgSrc:
                  'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
              },
              {
                title: 'Game',
                imgSrc:
                  'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
              },
              {
                title: 'Game',
                imgSrc:
                  'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
              },
              {
                title: 'Game',
                imgSrc:
                  'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
              },
              {
                title: 'Game',
                imgSrc:
                  'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
              }
            ]}
          />
        </>
      }
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
