import styles from './CodeExecutor.module.scss';

export interface CodeExecutorProps {
  srcDoc?: string;
}

const CodeExecutor = ({ srcDoc }) => (
  <div className={styles.container}>
    <iframe className={styles.iframe} srcDoc={srcDoc} title='iframe' />
  </div>
);

export default CodeExecutor;
