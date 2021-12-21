import { DashboardIllustration } from '@/icons';
import styles from './Dashboard.module.scss';

export interface DashboardProps {
  username: string;
  logoSrc: string;
}

export const Dashboard = ({ username, logoSrc }: DashboardProps) => {
  return (
    <div className={styles.DashboardWrapper}>
      <div className={styles.DashboardIllustration}>
        <DashboardIllustration />
      </div>

      <h1 className={styles.DashboardTitle}>
        Hello {username}, nice to see you!{' '}
        <span>
          Welcome to <img src={logoSrc} className={styles.DashboardLogo} />
          construct.com
        </span>
      </h1>
    </div>
  );
};
