import { withKnobs } from '@storybook/addon-knobs';
import { useEffect, useState } from 'react';
import { CodeExecutor } from '../code-executor';
import CodeEditor from './CodeEditor';

export default {
  title: 'components/organisms/CodeEditor',
  component: CodeEditor,
  decorators: [withKnobs]
};

export const Default = () => {
  const [state, setState] = useState('<h1>Hello</h1>');
  const [srcDoc, setSrcDoc] = useState('');

  const runCode = () => {
    setSrcDoc(state);
  };

  useEffect(() => {
    runCode();
  }, [state]);

  return (
    <>
      <CodeEditor
        value={state}
        showUploadButton={true}
        title='Code Editor'
        uploadIconTooltipText='Upload HTML file'
        variableIconTooltipText='Variables'
        themeTooltipText='Choose theme'
        variables={['{@var1}', '{@var2}', '{@var3}']}
        uploadButtonProps={{ children: 'Upload File' }}
        runCode={runCode}
        buttonProps={{ children: 'Run Code' }}
        setValue={setState}
        mode='xml'
      />
      <CodeExecutor srcDoc={srcDoc} />
    </>
  );
};
