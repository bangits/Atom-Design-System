import { Loader } from '../../atoms/loader';
import styles from './LoadingPage.module.scss';

const LoadingPage = () => {
  return (
    <div className={styles.LoadingPageWrapper}>
      <Loader />
    </div>
  );
};

export default LoadingPage;
