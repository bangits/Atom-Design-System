import { withKnobs } from '@storybook/addon-knobs';
import { ImagePreview } from './ImagePreview';

export default {
  title: 'components/organisms/ImagePreview',
  component: ImagePreview,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <ImagePreview
      onClose={() => {}}
      opened={false}
      uploadedFiles={[
        {
          url: 'https://s3-alpha-sig.figma.com/img/0899/32e1/fe747cc7b92ccaf3c39602ebda167498?Expires=1678060800&Signature=I04VeoDDDrQSV0g-EpBJpDmyuXSA8dV0UB0IsfN0jsqAuxOPA3jrhLucTOhaHQ-hXn-xqx1m2LKTf6w3tj4vBjeftPmQs4h1Je7fSUrVnjwZZBLPNyS1y5nhAok0wu-9j1OuMMVAh8ygw8-MP7XdjU2d-6L6HHMWeIE8qkwZ9cBO4DkJzYhEdprKLoJNzHvXLna9ukPPGygO2WHp-7qOqvo2DN~xDRVZjbL1etyXE1BrcjP~is3ONlGjt91NZWHSXbXanKNfeaQpmYsuW4buIh3xB0thn6XPAPFTdLuSkbG5dwvd74gzBuLLC-f4RKj01ow29x1g264OKPqTgF0IhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          id: 1
        }
      ]}
      onDownloadClick={() => {}}
      translations={{
        download: 'Download',
        cancel: 'Cancel'
      }}></ImagePreview>
  );
};
