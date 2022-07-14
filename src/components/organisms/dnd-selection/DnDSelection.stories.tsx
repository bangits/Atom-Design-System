import { withKnobs } from '@storybook/addon-knobs';
import DnDSelection from './DnDSelection';

export default {
  title: 'components/organisms/DnDSelection',
  component: DnDSelection,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <DnDSelection
      draggableItems={[
        {
          imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
          indexValue: 2,
          children: 'DndDnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2 Item 2'
        },
        {
          imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
          indexValue: 3,
          children: 'Dnd Item 3'
        },
        {
          imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
          indexValue: 4,
          children: 'Dnd Item 4'
        },
        {
          imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
          indexValue: 5,
          children: 'Dnd Item 5'
        },
        {
          imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
          indexValue: 6,
          children: 'Dnd Item 6'
        },
        {
          imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
          indexValue: 7,
          children: 'Dnd Item 7'
        },
        {
          imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
          indexValue: 8,
          children: 'Dnd Item 8'
        }
      ]}
      initialSortableItems={
        [
          {
            imgSrc:
              'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
            indexValue: 1,
            children: 'Dnd Item 1'
          }
        ]
        // [
        //   // {
        //   //   imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
        //   //   indexValue: 1,
        //   //   children: 'Dnd Item 1'
        //   // }
        // ]
      }
    />
  );
};
