import { Icons } from '@/atom-design-system';
import { withKnobs } from '@storybook/addon-knobs';
import IconDropdown from './IconDropdown';

export default {
  component: IconDropdown,
  decorators: [withKnobs],
  title: 'components/atoms/IconDropdown'
};

export const Default = () => {
  return (
    <IconDropdown>
      <Icons.AssignToIcon />
    </IconDropdown>
  );
};
