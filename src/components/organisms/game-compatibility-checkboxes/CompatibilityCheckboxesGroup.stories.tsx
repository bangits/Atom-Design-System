import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CompatibilityCheckboxesGroup from './CompatibilityCheckboxesGroup';
export default {
  component: CompatibilityCheckboxesGroup,
  decorators: [withKnobs],
  title: 'components/organisms/Compatibility Checkboxes Group'
};

export const Default = () => {
  return (
    <CompatibilityCheckboxesGroup
      translations={{
        desktop: 'Desktop',
        landscape: 'Landscape',
        mobile: 'Mobile',
        mobileScreenMode: 'Mobile Screen Mode',
        platform: 'Platform',
        portrait: 'Portrait',
        tablet: 'Tablet',
        tabletScreenMode: 'Tablet Screen Mode'
      }}
      platformInitialValues={[1,3]}
      mobileInitialValues={{
        landscape: true,
        portrait: false,
      }}
      tabletInitialValues={{
        landscape: true,
        portrait: false
      }}
      onMobileModeChange={action('onMobileModeChange')}
      onPlatformChange={action('onPlatformModeChange')}
      onTabletModeChange={action('onTabletModeChange')}
      platformCheckboxesValues={{
        mobile: 1,
        desktop: 2,
        tablet: 3
      }}
      mobileCheckboxesValues={{
        portrait: 1,
        landscape: 2
      }}
      tabletCheckboxesValues={{
        portrait: 1,
        landscape: 2
      }}
    />
  );
};
