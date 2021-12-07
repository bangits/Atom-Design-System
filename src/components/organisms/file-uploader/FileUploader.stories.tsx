import { withKnobs } from '@storybook/addon-knobs';
import { FileUploader } from './FileUploader';

export default {
  title: 'components/organisms/FileUploader',
  component: FileUploader,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <FileUploader
      labelProps={{
        optional: true,
        optionalText: '(optional)',
        text: 'Company logotype'
      }}
      tooltipProps={{
        tooltipText: 'How to upload file?'
      }}
    />
  );
};
