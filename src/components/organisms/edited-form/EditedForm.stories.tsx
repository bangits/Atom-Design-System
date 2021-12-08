import { IconButton } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import EditedForm from './EditedForm';

export default {
  title: 'components/organisms/EditedForm',
  component: EditedForm,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <EditedForm
      viewMoreLabel='View More'
      noDataText='No Data'
      options={[
        { title: 'Owner', variant: 'label' },
        { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
        {
          title: 'Username',
          value: '',
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
      ]}
      title='Account Information'
      editButton={
        <IconButton
          color='primary'
          icon={
            <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
              />
            </svg>
          }
          variant='dark'
        />
      }
    />
  );
};
