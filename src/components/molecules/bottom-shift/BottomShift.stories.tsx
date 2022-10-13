import { Button } from '@my-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import { useState } from 'react';
import BottomShift from './BottomShift';

export default {
  component: BottomShift,
  decorators: [withKnobs],
  title: 'components/molecules/BottomShift'
};

export const Default = () => {
  const [openedBottomShift, setOpenedBottomShift] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenedBottomShift(!openedBottomShift)}>Open bottom shift</Button>

      <BottomShift opened={openedBottomShift} onClose={() => setOpenedBottomShift(false)}>
        Bottom Shift
      </BottomShift>
    </>
  );
};
