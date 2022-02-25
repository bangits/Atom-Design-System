import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import AddProviderNameId from './AddProviderNameId';

export default {
  title: 'components/organisms/Add Provider Name Id',
  component: AddProviderNameId,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <AddProviderNameId
      toolTipTitle='Add Provider'
      onChange={action('onChange')}
      fromToProps={{
        toInputProps: {
          explanation: 'Add Provider',
          color: 'danger',
          placeholder: 'Provider Id'
        },
        fromInputProps: {
          placeholder: 'Provider Name'
        }
      }}
    />
  );
};
