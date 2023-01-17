import { ComponentType } from '@my-ui/core/dist/types';
import { FC } from 'react';
import styles from './Chip.module.scss';

export interface ChipProps {
  component?: ComponentType;
}

const Chip: FC<ChipProps> = ({ children, component: Component = 'div' }) => {
  return <Component className={styles.Chip}>{children}</Component>;
};

export default Chip;
