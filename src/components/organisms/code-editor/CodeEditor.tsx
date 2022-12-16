import { ButtonProps, IconButton, Icons, Tooltip, typedMemo, Variables } from '@/atom-design-system';
import { FC, InputHTMLAttributes, useRef, useState } from 'react';
import { Controlled } from 'react-codemirror2';
import styles from './CodeEditor.module.scss';
import ThemeSelector from './ThemeSelector';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mdn-like.css';

import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';

export interface CodeEditorProps {
  mode?: string;
  value?: string;
  title?: string;
  themeTooltipText?: string;
  variableIconTooltipText?: string;
  uploadIconTooltipText?: string;
  variables?: string[];
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  showUploadButton?: boolean;
  uploadButtonProps?: ButtonProps;
  setValue?: any;
  onChange?(htmlValue: string): void;
}

const CodeEditor: FC<CodeEditorProps> = ({
  onChange,
  showUploadButton,
  setValue,
  uploadButtonProps,
  value,
  mode,
  title,
  variables,
  uploadIconTooltipText,
  variableIconTooltipText,
  themeTooltipText,
  inputProps,
  ...props
}) => {
  const editorCursorRef = useRef<{ line: number; ch: number }>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [theme, setTheme] = useState('dracula');

  const isFileValid = (file) => (mode === 'xml' && file.type === 'text/html') || file.type.includes(mode);

  const readFile = (file) => {
    if (!isFileValid(file)) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setValue(reader.result);
    };

    reader.readAsText(file);
  };

  const loadFile = (e) => {
    const file = e.target.files[0];

    readFile(file);
  };

  const onDrop = (editor, e) => {
    e.preventDefault();

    const file = e.dataTransfer.items[0].getAsFile();

    readFile(file);
  };

  const changeCode = (editor, data, value) => {
    setValue(value);
  };

  const addVariable = (variable) => {
    const codeToArrayOfRows = value.split('\n');

    const line = editorCursorRef.current?.line || codeToArrayOfRows.length - 1;

    const insertStringAtIndex = (string: string, value: string, index: number) => {
      return `${string.slice(0, index)}${value}${string.slice(index)}`;
    };

    const updatedCodeArray = [
      ...codeToArrayOfRows.slice(0, line),
      insertStringAtIndex(codeToArrayOfRows[line], variable, editorCursorRef.current?.ch || 0),
      ...codeToArrayOfRows.slice(line + 1)
    ];

    setValue(updatedCodeArray.join('\n'));
  };

  return (
    <div className={styles.container}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{title}</legend>
        <div className={styles.toolbar}>
          {showUploadButton && (
            <Tooltip text={uploadIconTooltipText} showEvent='hover'>
              <IconButton onClick={() => fileInputRef.current.click()} icon={<Icons.UploadIcon />} />
            </Tooltip>
          )}
          <Tooltip text={variableIconTooltipText} showEvent='hover'>
            <Variables
              variables={variables}
              onVariableClick={(variable) => {
                addVariable(variable);
              }}
            />
          </Tooltip>
          <ThemeSelector themeTooltipText={themeTooltipText} setTheme={setTheme} />
        </div>

        <input
          type='file'
          aria-label='Load'
          aria-hidden='true'
          className={styles.input}
          accept='text/html'
          ref={fileInputRef}
          onChange={loadFile}
          {...inputProps}
        />

        <Controlled
          value={value}
          onBeforeChange={changeCode}
          onDrop={onDrop}
          options={{
            mode,
            theme,
            lint: true,
            lineNumbers: true,
            lineWrapping: true,
            spellcheck: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            matchTags: true,
            matchBrackets: true
          }}
          className={styles.controlled}
          autoScroll
          onCursor={(_, cursorMirror) => {
            editorCursorRef.current = {
              ch: cursorMirror.ch,
              line: cursorMirror.line
            };
          }}
          {...props}
        />
      </fieldset>
    </div>
  );
};

export default typedMemo(CodeEditor);
