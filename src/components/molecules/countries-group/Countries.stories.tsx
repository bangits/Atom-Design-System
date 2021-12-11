import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Countries from './Countries';

export default {
  component: Countries,
  decorators: [withKnobs],
  title: 'components/molecules/Countries'
};

export const Default = () => {
  return (
    <Countries
      tagCountries={[
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        },
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        },
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        },
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        },
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        },
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        },
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        },
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        },
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        },
        {
          tagName: 'Armenia',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
        }
      ]}
    />
  );
};
