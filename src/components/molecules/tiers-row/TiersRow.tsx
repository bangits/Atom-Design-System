import { FlexRow, IconButton, Icons } from '@/atom-design-system';
import { FlexRowProps } from '@/components/atoms/flex-row/FlexRow';
import { FC } from 'react';
import styles from './TiersRow.module.scss';

export interface TiersRowProps extends FlexRowProps {
  showCloseLayer?: boolean;

  onCloseBtnClick?(): void;
}

const TiersRow: FC<TiersRowProps> = ({ children, showCloseLayer, onCloseBtnClick, ...flexRowProps }) => {
  return (
    <div className={styles.TiersRow}>
      <div className={styles.TiersRow__Content}>
        <FlexRow {...flexRowProps}>{children}</FlexRow>

        {showCloseLayer && (
          <div className={styles.TiersRow__Close}>
            {onCloseBtnClick && <IconButton icon={<Icons.CloseIcon />} onClick={onCloseBtnClick} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default TiersRow;
