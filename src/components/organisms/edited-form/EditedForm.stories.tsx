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
    <div style={{ width: '600px' }}>
      <EditedForm
        options={[
          { title: 'Email', value: 'antonian.evgenia@gmail.com' },
          {
            title: 'Username',
            value: 'Eva123456'
          },
          {
            title: 'Currency',
            value: 'USD'
          },
          {
            title: 'Status',
            value: 'Active'
          },
          {
            title: 'Segment',
            value: 'Vip Players'
          },
          {
            title: 'Btag',
            value: '111.123.56.85'
          },
          {
            title: 'Registration Source',
            value: '09/05/2021 12:00:00'
          },
          {
            title: 'Created By',
            value: 'Inesa Khachatryan'
          }
        ]}
        title='Account information'
        editButton={
          <IconButton
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
    </div>
  );
};
