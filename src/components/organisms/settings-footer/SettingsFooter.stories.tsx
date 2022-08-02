import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import SettingsFooter from './SettingsFooter';

export default {
  title: 'components/organisms/SettingsFooter',
  component: SettingsFooter,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <SettingsFooter
      addButtonProps={{
        children: 'Add Group'
      }}
      groups={[
        {
          groupTitle: 'Group 1',
          indexValue: 1,
          pages: ['Page 1', 'Page 2'],
          onEdit: action('onEdit')
        },
        {
          groupTitle: 'Group 2',
          indexValue: 2,
          pages: ['Page 1', 'Page 2'],
          onEdit: action('onEdit')
        }
      ]}
      translations={{
        groupTitle: 'Group Title',
        pages: 'Pages'
      }}
    />
  );
};
