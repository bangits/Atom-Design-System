import { IconButton } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import EditForm from './EditForm';

export default {
  title: 'components/organisms/Edit Form',
  component: EditForm,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div style={{ width: 477 }}>
      <EditForm
        title='Account Information'
        applyButton={
          <IconButton
            icon={
              <svg id='done_black_24dp' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path id='Path_43198' data-name='Path 43198' d='M0,0H24V24H0Z' fill='none' />
                <path
                  id='Path_43199'
                  data-name='Path 43199'
                  d='M8.491,15.236,4.673,11.418,3.4,12.691l5.091,5.091L19.4,6.873,18.127,5.6Z'
                  transform='translate(1)'
                  fill='#00b21e'
                />
              </svg>
            }
          />
        }
        closeButton={
          <IconButton
            icon={
              <svg id='close_black_24dp' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path id='Path_43196' data-name='Path 43196' d='M0,0H24V24H0Z' fill='none' />
                <path
                  id='Path_43197'
                  data-name='Path 43197'
                  d='M17,6.209,15.791,5,11,9.791,6.209,5,5,6.209,9.791,11,5,15.791,6.209,17,11,12.209,15.791,17,17,15.791,12.209,11Z'
                  transform='translate(1 1)'
                  fill='#505d6e'
                />
              </svg>
            }
          />
        }
        renderInputs={(Component, name) => {
          return <Component />;
        }}
        fields={[
          {
            type: 'input',
            name: 'name',
            props: {
              label: 'Provider Name'
            }
          },
          {
            type: 'select',
            name: 'targetMarkets',
            props: {
              inputLabel: 'Target market',
              options: [
                { label: 'market 1', value: 1 },
                { label: 'market 2', value: 2 },
                { label: 'market 3', value: 3 }
              ],
              isSearchable: true,
              isMulti: true
            }
          },
          {
            type: 'select',
            name: 'certifiedCountries',
            props: {
              inputLabel: 'Certified countries',
              options: [
                { label: 'Certified country 1', value: 1 },
                { label: 'Certified country 2', value: 2 },
                { label: 'Certified country 3', value: 3 }
              ],
              isSearchable: true,
              isMulti: true
            }
          },
          {
            type: 'select',
            name: 'certifiedCountries',
            props: {
              inputLabel: 'Restricted countries',
              options: [
                { label: 'Restricted country 1', value: 1 },
                { label: 'Restricted country 2', value: 2 },
                { label: 'Restricted country 3', value: 3 }
              ],
              isSearchable: true,
              isMulti: true
            }
          },
          {
            type: 'select',
            name: 'providerCurrencies',
            props: {
              inputLabel: 'Currency',
              options: [
                { label: 'Currency 1', value: 1 },
                { label: 'Currency 2', value: 2 },
                { label: 'Currency 3', value: 3 }
              ],
              isSearchable: true,
              isMulti: true
            }
          },
          {
            type: 'select',
            name: 'defaultCurrency',
            props: {
              inputLabel: 'Default currency',
              options: [
                { label: 'Default currency 1', value: 1 },
                { label: 'Default currency 2', value: 2 },
                { label: 'Default currency 3', value: 3 }
              ],
              isSearchable: true
            }
          }
        ]}
      />
    </div>
  );
};
