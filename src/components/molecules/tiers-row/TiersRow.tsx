import { FlexRow, IconButton, Icons } from '@/atom-design-system';
import { FlexRowProps } from '@/components/atoms/flex-row/FlexRow';
import { FC } from 'react';
import styles from './TiersRow.module.scss';

export interface TiersRowProps extends FlexRowProps {
  showCloseButton?: boolean;
}

const TiersRow: FC<TiersRowProps> = ({ children, showCloseButton, ...flexRowProps }) => {
  return (
    <div className={styles.TiersRow}>
      <div className={styles.TiersRow__Content}>
        <FlexRow {...flexRowProps}>{children}</FlexRow>

        {showCloseButton && (
          <div className={styles.TiersRow__Close}>
            <IconButton icon={<Icons.CloseIcon />} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TiersRow;
