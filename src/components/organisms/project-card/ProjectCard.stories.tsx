import { ProductsIcon } from '@/icons';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import ProjectCard from './ProjectCard';

export default {
  component: ProjectCard,
  decorators: [withKnobs],
  title: 'components/organisms/ProjectCard'
};

export const Default = () => {
  return (
    <ProjectCard
      col={6}
      color='purple'
      mode='small'
      title='Products'
      onArrowClick={action('onArrowClick')}
      logo={<ProductsIcon />}
      maxCount={100}
      viewLessLabel='View Less'
      viewMoreLabel='View More'
      items={[
        {
          title: 'Game',
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          title: 'Game',
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          title: 'Game',
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          title: 'Game',
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          title: 'Game',
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          title: 'Game',
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
      ]}
    />
  );
};
export const Large = () => {
  return (
    <ProjectCard
      col={6}
      color='purple'
      mode='large'
      title='Products'
      onArrowClick={action('onArrowClick')}
      logo={<ProductsIcon />}
      maxCount={100}
      viewLessLabel='View Less'
      viewMoreLabel='View More'
      items={[
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        },
        {
          imgSrc:
            'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
        }
      ]}
    />
  );
};
