import { TextInputProps, typedMemo, Variables } from '@/atom-design-system';
import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useCallback, useRef, useState } from 'react';
import styles from './CodeArea.module.scss';

export interface CodeAreaProps {
  font?: 'text' | 'code';

  headline?: string;

  errorText?: string;

  size?: 'sm' | 'md';

  title?: string;

  variables?: string[];

  defaultValue?: string;

  value?: string;

  onChange(value: string): void;
}

const CodeArea: FC<CodeAreaProps> = ({
  title,
  errorText,
  font = 'code',
  headline,
  variables,
  onChange,
  value,
  size,
  defaultValue
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const addVariable = useCallback(
    (variable: string) => {
      const area = textareaRef.current;

      const pos = area.selectionStart;
      const val = area.value;
      const start = val.substring(0, pos);
      const end = val.substring(pos, val.length);
      area.value = start + variable + end;
      area.focus();

      onChange?.(area.value);
    },
    [textareaRef, onChange]
  );

  const [codeState, setCodeState] = useState<string>(defaultValue);

  const onCodeChange: TextInputProps['onChange'] = useCallback(
    (e) => {
      onChange?.(e.target.value);

      setCodeState((e.target as unknown as HTMLTextAreaElement).value);
    },
    [onChange]
  );

  return (
    <div
      className={classNames(styles.container, {
        [styles['container-without-headline']]: headline === ''
      })}>
      <div className={styles['email-variables']}>
        {headline && <Typography>{headline}</Typography>}
        {variables?.length > 0 && (
          <Variables onVariableClick={addVariable} variables={variables} emptyValue='there is no value' />
        )}
      </div>
      <fieldset
        className={classNames(styles.fieldset, {
          [styles[`filed--${size}`]]: size
        })}>
        <legend className={styles.legend}>{title}</legend>
        <textarea
          ref={textareaRef}
          onChange={onCodeChange}
          value={value !== undefined ? value : codeState}
          className={classNames(styles.textarea, { [styles['textarea-font--roboto']]: font === 'text' })}
        />
      </fieldset>
      {errorText && (
        <Typography color='danger' variant='p5'>
          {errorText}
        </Typography>
      )}
    </div>
  );
};

export default typedMemo(CodeArea);
