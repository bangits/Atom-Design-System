import styles from './LoadingPage.module.scss';

const LoadingPage = () => {
  return (
    <div className={styles.LoadingPageWrapper}>
      <div className={styles.LoadingPageLoader}>Loading...</div>
    </div>
  );
};

export default LoadingPage;
