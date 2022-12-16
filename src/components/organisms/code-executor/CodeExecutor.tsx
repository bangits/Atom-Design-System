import styles from './CodeExecutor.module.scss';

export interface CodeExecutorProps {
  srcDoc?: string;
  runCode?: () => void;
}

const CodeExecutor = ({ srcDoc, runCode }) => (
  <div className={styles.container}>
    <iframe className={styles.iframe} srcDoc={srcDoc} title='iframe' />
  </div>
);

export default CodeExecutor;
