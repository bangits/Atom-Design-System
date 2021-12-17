import { withKnobs } from '@storybook/addon-knobs';
import { GameLauncher } from './GameLauncher';
export default {
  component: GameLauncher,
  decorators: [withKnobs],
  title: 'components/organisms/Game Launcher'
};

export const Default = () => {
  return (
    <GameLauncher
      gameBackgroundUrl={null}
      iframeUrl='https://partnerapi.sportdigi.com/GamesLaunch/Launch?gameid=5935&playMode=demo&deviceType=1&lang=EN&operatorId=DB6D2EB9&mainDomain=totogaming697.ru'
    />
  );
};
