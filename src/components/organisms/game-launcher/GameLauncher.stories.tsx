import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { GameLauncher } from './GameLauncher';
export default {
  component: GameLauncher,
  decorators: [withKnobs],
  title: 'components/organisms/Game Launcher'
};

export const Default = () => {
  return <GameLauncher></GameLauncher>;
};
