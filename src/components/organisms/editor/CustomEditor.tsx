import { typedMemo, Variables } from '@/atom-design-system';
import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './CustomEditor.module.scss';

export interface CustomEditorProps {
  variables: string[];
  title?: string;
  variant?: 'default' | 'onlyVariable';
}

const CustomEditor: FC<CustomEditorProps> = ({ title, variant = 'default', variables }) => {
  const [editorState, setEditorState] = useState('');
  const [openDropdown, setDropdown] = useState(false);

  const onEditorStateChange = (editorState) => {
    return setEditorState(editorState);
  };

  return (
    <div className={classNames(styles.container)}>
      <Editor
        toolbar={{
          options:
            variant === 'default'
              ? ['inline', 'fontFamily', 'fontSize', 'blockType', 'textAlign', 'list', 'emoji', 'history']
              : [],

          list: {
            options: ['unordered', 'ordered']
          },
          inline: {
            inDropdown: openDropdown,
            options: ['bold', 'italic', 'underline', 'strikethrough']
          },
          fontFamily: {
            options: ['Roboto', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana']
          },
          embedded: {
            popUpClassName: classNames(styles.popUpClassName)
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
        toolbarClassName={classNames(styles.toolbar)}
        wrapperClassName={classNames(styles.wrapper)}
        editorClassName={classNames(styles.editor)}
        onEditorStateChange={onEditorStateChange}
        toolbarCustomButtons={[<Variables variables={variables} />]}
      />
      {title && (
        <Typography variant='p4' color='primary' className={classNames(styles.typography)}>
          {title}
        </Typography>
      )}
    </div>
  );
};

export default typedMemo(CustomEditor);
