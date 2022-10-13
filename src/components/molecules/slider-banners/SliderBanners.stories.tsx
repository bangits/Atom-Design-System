import { withKnobs } from '@storybook/addon-knobs';
import SliderBanners from './SliderBanners';

export default {
  component: SliderBanners,
  decorators: [withKnobs],
  title: 'components/molecules/SliderBanners'
};

export const Default = () => {
  return (
    <SliderBanners
      banners={[
        {
          id: 1,
          img: 'https://storageaccountatom.blob.core.windows.net/storage/iconimages/banners/8e79f0ea-3afe-452e-91bc-bbbd8e4a2012_Bull.png',
          name: 'Blazing Bull'
        }
      ]}
    />
  );
};
