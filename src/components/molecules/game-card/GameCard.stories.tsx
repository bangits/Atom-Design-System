import { withKnobs } from '@storybook/addon-knobs';
import GameCard from './GameCard';

export default {
  component: GameCard,
  decorators: [withKnobs],
  title: 'components/molecules/GameCard'
};

export const Default = () => {
  return (
    <div style={{ width: 164, height: 100 }}>
      <GameCard
        showCheckbox
        id={1}
        name='Double Joker'
        icon='https://storageaccountatom.blob.core.windows.net/dev-storage/8c904504-3827-49f6-92de-42694ab77305_file'
      />
    </div>
  );
};
