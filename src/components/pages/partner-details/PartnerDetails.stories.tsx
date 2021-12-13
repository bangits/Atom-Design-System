import { FlexibleForm } from '@/components';
import { number, object, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import PartnerDetails from './PartnerDetails';

export default {
  title: 'components/pages/Partner Details',
  component: PartnerDetails,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <PartnerDetails
      breadCrumbs={object('breadCrumbProps', [])}
      parentCompany={text('parentCompany', null)}
      parentCompanyId={number('parentCompanyId', null)}
      translations={object('translations', {
        parentCompany: 'Parent Company',
        parentCompanyId: 'Parent Company ID',
        status: 'Status',
        documentID: 'Document ID',
        expirationDate: 'Expiration Date',
        type: 'Type',
        mainInformation: 'Main Information',
        organizationData: 'Organization Data',
        providerInformation: 'Provider Information',
        bankInformation: 'Bank Information',
        contanctInformation: 'Contact Information',
        managersContactInformation: 'Managers Contact Information',
        organizationDetails: 'Organization details'
      })}
      statusInfo={object('statusInfo', {
        statusLabel: 'Validated',
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
      docInfo={object('docInfo', {
        documentID: 5461213584,
        type: 'Partnership Agreement',
        expirationDate: '12/08/2021',
        statusLabel: 'Signed',
        statusVariant: 'active'
      })}
      organizationDataMainInformationForms={
        <>
          <FlexibleForm
            title='Account Information'
            editFormProps={{
              title: 'Account Information',

              renderInputs: (Component, name) => {
                return <Component />;
              },
              fields: [
                {
                  type: 'input',
                  name: 'email',
                  props: {
                    label: 'Email',
                    defaultValue: 'Antonian.evgenia@gmail.com'
                  }
                },
                {
                  type: 'input',
                  name: 'username',
                  props: {
                    label: 'Username',
                    defaultValue: 'Eva12345'
                  }
                },
                {
                  type: 'select',
                  name: 'currency',
                  props: {
                    inputLabel: 'Currency',
                    options: [
                      { label: 'AMD', value: 1 },
                      { label: 'USD', value: 2 },
                      { label: 'EUR', value: 3 }
                    ],
                    isSearchable: true,
                    isMulti: true,
                    defaultValue: [1],
                    disabled: true
                  }
                },
                {
                  type: 'input',
                  name: 'status',
                  props: {
                    label: 'Status',
                    defaultValue: 'Active',
                    disabled: true
                  }
                },
                {
                  type: 'input',
                  name: 'segments',
                  props: {
                    label: 'Segments',
                    defaultValue: 'Forever'
                  }
                },
                {
                  type: 'input',
                  name: 'btag',
                  props: {
                    label: 'Btag',
                    defaultValue: '111.123.56.85',
                    disabled: true
                  }
                },
                {
                  type: 'input',
                  name: 'regSRC',
                  props: {
                    label: 'Registration Source',
                    defaultValue: 'Forever',
                    disabled: true
                  }
                },
                {
                  type: 'input',
                  name: 'created',
                  props: {
                    label: 'Created By',
                    defaultValue: 'Inesa Khachatryan',
                    disabled: true
                  }
                },
                {
                  type: 'input',
                  name: 'form',
                  props: {
                    label: 'Registration Form IP',
                    defaultValue: 'No',
                    disabled: true
                  }
                }
              ]
            }}
            editedFormProps={{
              options: [
                { title: 'Owner', variant: 'label' },
                { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                {
                  title: 'Username',
                  value: 'Eva123456',
                  variant: 'default'
                },
                {
                  title: 'Currency',
                  value: 'USD',
                  variant: 'bold'
                },

                {
                  title: 'Created By',
                  value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                  variant: 'tag'
                },
                {
                  title: 'Status',
                  value: 'Active',
                  variant: 'default'
                },
                {
                  title: 'Segment',
                  value: 'Vip Players',
                  variant: 'default'
                },
                {
                  title: 'Btag',
                  value: '111.123.56.85',
                  variant: 'default'
                },
                {
                  title: 'Registration Source',
                  value: '09/05/2021 12:00:00',
                  variant: 'default'
                },
                {
                  title: 'Created By',
                  value: 'Inesa Khachatryan',
                  variant: 'default'
                }
              ],
              title: 'Account Information'
            }}
          />
        </>
      }
      organizationDataProviderInformation={<></>}
    />
  );
};
