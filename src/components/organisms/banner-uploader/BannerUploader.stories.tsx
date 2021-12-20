import { Button } from '@my-ui/core';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { BannerUploader } from './BannerUploader';

export default {
  title: 'components/organisms/BannerUploader',
  component: BannerUploader,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <BannerUploader
      translations={{
        upload: 'Upload',
        edit: 'Edit',
        pleaseUploadThePhoto: 'Please upload the photo for editing',
        title: 'Game banner',
        save: 'Save',
        rotate: 'Rotate',
        remove: 'Remove',
        cancel: 'Cancel'
      }}
      onSave={action('onSave')}>
      {(openFn) => <Button onClick={openFn}>Open the uploader</Button>}
    </BannerUploader>
  );
};
