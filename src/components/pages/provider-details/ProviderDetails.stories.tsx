import { Button, CopyField } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ProviderDetails from './ProviderDetails';
import { Countries, LabelGroup, LicenseGroup } from '@/components';
import CurrencyGroup from '@/components/molecules/currency-group/CurrencyGroup';

export default {
  title: 'components/pages/Provider Details',
  component: ProviderDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ProviderDetails
      mainDetailsInfo={{
        imgURL: 'https://novomatic.com/sites/default/files/2017-05/Logo_N-Shortbrand.png',
        nameLabel: 'Novomatic',
        idLabel: 'ID1234567'
      }}
      statusInfo={{
        label: 'Status',
        statusLabel: 'Active',
        actions: [
          {
            iconName: 'LogOutIcon',
            onClick: () => {},
            tooltipText: 'Terminate'
          }
        ]
      }}
      countViewInfo={{
        title: 'Total Game Count',
        count: '1024'
      }}
      creationInfo={{
        data: [
          {
            name: 'Created Date',
            description: '09/05/2021 12:00:00'
          },
          {
            name: 'Created By',
            description: 'email@gmail.com'
          }
        ]
      }}
      breadCrumb={{
        links: [
          {
            label: 'Provider Management',
            isRedirect: true
          },
          {
            label: 'Novomatic details'
          }
        ]
      }}
      details={{
        tabs: [
          {
            title: 'General Information',
            value: 1,
            content: (
              <div>
                <LabelGroup>
                  <Countries />
                </LabelGroup>

                <LabelGroup>
                  <Countries />
                </LabelGroup>

                <LabelGroup>
                  <Countries />
                </LabelGroup>

                <LabelGroup>
                  <CurrencyGroup
                    currencies={[
                      {
                        title: 'YEN',
                        inactive: true
                      },
                      {
                        title: 'YEN',
                        inactive: true
                      },
                      {
                        title: 'YEN',
                        inactive: true
                      },
                      {
                        title: 'YEN',
                        inactive: true
                      },
                      {
                        title: 'YEN',
                        inactive: true
                      },
                      {
                        title: 'YEN',
                        inactive: true
                      },
                      {
                        title: 'YEN',
                        inactive: true
                      }
                    ]}
                  />
                </LabelGroup>

                <LabelGroup>
                  <LicenseGroup
                    tags={[
                      {
                        title: 'Malta License',
                        inactive: true
                      },
                      {
                        title: 'Malta License',
                        inactive: true
                      }
                    ]}
                  />
                </LabelGroup>

                <LabelGroup>
                  <CopyField />
                </LabelGroup>

                <LabelGroup>
                  <CopyField />
                </LabelGroup>
              </div>
            )
          },
          {
            title: 'Games',
            value: 2,
            content: <div>Content</div>
          }
        ],
        defaultTabValue: 1
      }}
    />
  );
};
