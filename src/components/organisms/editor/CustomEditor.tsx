import { typedMemo, Variables } from '@/atom-design-system';
import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { FC, useCallback, useMemo, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './CustomEditor.module.scss';

export interface CustomEditorProps {
  errorText?: string;
  size?: 'sm' | 'lg';
  variables?: string[];
  isVariableShow?: boolean;
  title?: string;
  variant?: 'default' | 'onlyVariable' | 'all';
  htmlValue?: string;
  attachImage?: boolean;
  optionRight?: boolean;
  disabled?: boolean;
  onChange?(htmlValue: string): void;
}

const CustomEditor: FC<CustomEditorProps> = ({
  title,
  onChange,
  variant = 'default',
  variables,
  size,
  htmlValue,
  errorText,
  attachImage = false,
  isVariableShow = true,
  optionRight,
  disabled,
  ...props
}) => {
  const initialEditorState = useMemo(() => {
    if (!htmlValue) return EditorState.createEmpty();

    const contentBlock = htmlToDraft(htmlValue);

    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

    return EditorState.createWithContent(contentState);
  }, [htmlValue]);

  const [editorState, setEditorState] = useState(initialEditorState);
  const [openDropdown, setDropdown] = useState(false);

  const onEditorStateChange = useCallback(
    (editorState) => {
      if (disabled) return;

      const htmlValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));

      onChange(htmlValue);
      setEditorState(editorState);
    },
    [editorState, disabled]
  );

  return (
    <div
      className={classNames(styles.container, {
        [styles['container--disabled']]: disabled
      })}>
      <Editor
        {...props}
        toolbar={{
          options:
            variant === 'default'
              ? ['link', 'history']
              : variant === 'all'
              ? [
                  'list',
                  'colorPicker',
                  'emoji',
                  'link',
                  'textAlign',
                  'inline',
                  'fontFamily',
                  'fontSize',
                  'history'
                  // attachImage && 'embedded'
                ]
              : [],

          list: {
            options: ['unordered', 'ordered']
          },
          // link: {
          //   // component: () => <div
          //   // style={{ width: '50px', height: '50px', background: 'red' }}></div>
          // },
          textAlign: {
            right: {
              className: styles['text-right']
            }
          },
          inline: {
            inDropdown: openDropdown,
            options: ['bold', 'italic', 'underline', 'strikethrough']
          },
          fontFamily: {
            options: ['Roboto', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana']
          },
          embedded: {
            popUpClassName: styles.popUpClassName
          },
          history: {
            undo: {
              icon: 'https://storageaccountatom.blob.core.windows.net/staging-storage/866c5057-6c6a-40f9-b862-ef94edfe3fdf_undo.react.svg'
            },
            redo: {
              icon: 'https://storageaccountatom.blob.core.windows.net/staging-storage/42ef97de-f11d-4218-8d54-7e793b928689_redo.svg'
            }
          }
        }}
        editorState={editorState}
        onFocus={() => {
          setDropdown(true);
        }}
        toolbarClassName={styles.toolbar}
        wrapperClassName={styles.wrapper}
        editorClassName={classNames(styles.editor, {
          [styles[`editor-${size}`]]: size
        })}
        onEditorStateChange={onEditorStateChange}
        toolbarCustomButtons={
          isVariableShow && [
            <Variables optionRight={optionRight} key='variables' variables={variables} emptyValue='there is no value' />
          ]
        }
      />
      {title && (
        <Typography variant='p4' color='primary' className={styles.typography}>
          {title}
        </Typography>
      )}

      <Typography variant='p5' color='danger'>
        {errorText}
      </Typography>
    </div>
  );
};

export default typedMemo(CustomEditor);
