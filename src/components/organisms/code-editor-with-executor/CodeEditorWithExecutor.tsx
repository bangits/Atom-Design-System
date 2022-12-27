import { ButtonProps } from '@my-ui/core';
import { FC, useCallback, useState } from 'react';
import CodeEditor from '../code-editor/CodeEditor';
import { CodeExecutor } from '../code-executor';

export interface CodeEditorWithExecutorProps {
  runCode?: () => void;
  buttonProps?: ButtonProps;
  htmlText?: string;
  setValue?: any;
  variables?: string[];
  title?: string;
}

const CodeEditorWithExecutor: FC<CodeEditorWithExecutorProps> = ({
  title,
  variables,
  buttonProps,
  htmlText,
  setValue
}) => {
  const [srcDoc, setSrcDoc] = useState(htmlText);

  const runCode = useCallback(() => {
    setSrcDoc(htmlText);
  }, [htmlText]);

  return (
    <div style={{ width: '97%' }}>
      <CodeEditor
        value={htmlText}
        showUploadButton
        variables={variables}
        title={title}
        mode='xml'
        runCode={runCode}
        setValue={setValue}
        buttonProps={buttonProps}
      />
      <CodeExecutor srcDoc={srcDoc} />
    </div>
  );
};

export default CodeEditorWithExecutor;
