import { DashboardIllustration } from '@/icons';
import styles from './Dashboard.module.scss';

export interface DashboardProps {
  username: string;
}

export const Dashboard = ({ username }: DashboardProps) => {
  return (
    <div className={styles.DashboardWrapper}>
      <div className={styles.DashboardIllustration}>
        <DashboardIllustration />
      </div>

      <h1 className={styles.DashboardTitle}>
        Hello {username}, nice to see you!{' '}
        <span>
          Welcome to{' '}
          <img
            src='https://www.tattooforaweek.com/files/modules/products/5135/photos/full_the-atom-tattoonie-temporary-tattoo-s.jpg?v=0'
            className={styles.DashboardLogo}
          />
          construct.com
        </span>
      </h1>
    </div>
  );
};
