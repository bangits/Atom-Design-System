import { EditorLinkForm } from '@/atom-design-system';
import { Button, Icons } from '@my-ui/core';
import { EditorState, Modifier } from 'draft-js';
import { FC, useState } from 'react';

export interface EditorLinkProps {
  a?: string;
  editorState?: {
    getCurrentContent: () => void;
    getSelection: () => void;
    getCurrentInlineStyle: () => void;
  };
  onChange?: (e) => void;
}

const EditorLink: FC<EditorLinkProps> = ({ editorState, onChange }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const addLink = () => {
    const span = event.target as HTMLElement;
    const value = span.textContent;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      `${value}`,
      editorState.getCurrentInlineStyle()
    );
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  return (
    <div>
      <Button
        variant='link'
        onClick={() => {
          setIsOpenMenu((prev) => !prev);
        }}
        startIcon={<Icons.ArrowNext />}
      />
      {isOpenMenu && <EditorLinkForm onOutsideClick={() => setIsOpenMenu(false)} />}
    </div>
  );
};

export default EditorLink;
