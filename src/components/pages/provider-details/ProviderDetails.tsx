import { ItemDetails, NameDescription, StatusView } from '@/components';
import Countries from '@/components/molecules/countries-group/Countries';
import Currency from '@/components/molecules/currency-group/CurrencyGroup';
import LabelGroup from '@/components/molecules/label-group/LabelGroup';
import CountView from '@/components/organisms/count-view/CountView';
import DetailsMainInfo from '@/components/organisms/details-main-info/DetailsMainInfo';
import { Breadcrumb, Button, CopyField, Tag } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './ProviderDetails.module.scss';

const ProviderDetails: FC = () => {
  return (
    <div className={styles.ProviderDetailsBase}>
      <Breadcrumb
        links={[
          {
            label: 'Provider Management',
            isRedirect: true
          },
          {
            label: 'Novomatic details'
          }
        ]}
      />
      <div className={styles['ProviderDetailsBase--container']}>
        <div className={styles['ProviderDetailsBase--leftBlock']}>
          <DetailsMainInfo />
          <CountView />
          <div className={styles.StatusContent}>
            <StatusView
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
            />
          </div>
          <NameDescription
            data={[
              {
                name: 'Created Date',
                description: '09/05/2021 12:00:00'
              },
              {
                name: 'Created By',
                description: 'email@gmail.com'
              }
            ]}
          />
        </div>
        <ItemDetails
          tabs={[
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
                    <Currency />
                  </LabelGroup>

                  <LabelGroup>
                    <Tag title='Malta License' className={styles.License} inactive />
                  </LabelGroup>

                  <LabelGroup>
                    <CopyField />
                  </LabelGroup>

                  <LabelGroup>
                    <CopyField />
                  </LabelGroup>

                  <div className={styles.ButtonContent}>
                    <Button
                      variant='ghost'
                      startIcon={
                        <svg data-name='Component 61 – 1' xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                          <path data-name='Rectangle 919' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
                          <g transform='translate(6.001 5.754)'>
                            <path
                              data-name='Path 1944'
                              style={{
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round'
                              }}
                              d='m7.41 82.473-6.6 6.6a.263.263 0 0 0-.069.121l-.734 2.94a.26.26 0 0 0 .252.323.258.258 0 0 0 .063-.008l2.937-.732a.26.26 0 0 0 .121-.069l6.6-6.6zm0 0'
                              transform='translate(0 -80.223)'
                            />
                            <path
                              data-name='Path 1945'
                              style={{
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round'
                              }}
                              d='m337.8 1.35-.735-.735a1.331 1.331 0 0 0-1.838 0l-.9.9 2.573 2.573.9-.9a1.3 1.3 0 0 0 0-1.838zm0 0'
                              transform='translate(-326.182)'
                            />
                          </g>
                        </svg>
                      }>
                      Edit
                    </Button>
                  </div>
                </div>
              )
            },
            {
              title: 'Games',
              value: 2,
              content: <div>Content</div>
            }
          ]}
          defaultTabValue={1}
        />
      </div>
    </div>
  );
};

export default ProviderDetails;
