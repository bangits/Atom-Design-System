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
        Welcome!
        <span>
          <strong>Dear {username},</strong> we are happy to welcome you in backoffice.atomconstruct.com.
        </span>
      </h1>
    </div>
  );
};
