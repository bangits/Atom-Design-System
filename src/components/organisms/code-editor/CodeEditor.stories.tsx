import { withKnobs } from '@storybook/addon-knobs';
import { useEffect, useState } from 'react';
import CodeEditor from './CodeEditor';

export default {
  title: 'components/organisms/CodeEditor',
  component: CodeEditor,
  decorators: [withKnobs]
};

export const Default = () => {
  const [html, setHtml] = useState('<h1>asfddfsdf</h1>');

  const propsByMode = {
    html: {
      mode: 'xml',
      value: html,
      setValue: setHtml
    }
  };
  const [srcDoc, setSrcDoc] = useState('');

  const runCode = () => {
    setSrcDoc(html);
  };

  useEffect(() => {
    runCode();
  }, [html]);

  return (
    <>
      <CodeEditor
        value={html}
        showUploadButton={true}
        title='Code Editor'
        uploadIconTooltipText='Upload HTML file'
        variableIconTooltipText='Variables'
        themeTooltipText='Choose theme'
        variables={['{@var1}', '{@var2}', '{@var3}']}
        uploadButtonProps={{ children: 'Upload File' }}
        {...propsByMode['html']}
      />
    </>
  );
};
