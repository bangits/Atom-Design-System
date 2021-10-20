import { withKnobs } from '@storybook/addon-knobs';
import DataTable from './DataTable';

export default {
  component: DataTable,
  decorators: [withKnobs],
  title: 'components/templates/DataTable'
};

export const Default = () => {
  return <div>adasd</div>;
};
