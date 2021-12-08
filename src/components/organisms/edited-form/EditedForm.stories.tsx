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
    />
  );
};
