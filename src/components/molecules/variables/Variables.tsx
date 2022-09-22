import { Button, Icons, Options } from '@/atom-design-system';
import classNames from 'classnames';
import { EditorState, Modifier } from 'draft-js';
import { FC, useState } from 'react';
import styles from './Variables.module.scss';

export interface VariablesProps {
  variables?: string[];
  onChange?: (e) => void;
  editorState?: {
    getCurrentContent: () => void;
    getSelection: () => void;
    getCurrentInlineStyle: () => void;
  };
}

const Variables: FC<VariablesProps> = ({ variables, editorState, onChange }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const addVariable = () => {
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
    <div className={classNames(styles.container)}>
      <Button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={classNames(styles.button, {
          [styles['button-active']]: isOpenMenu
        })}
        variant='link'
        startIcon={<Icons.VariableIcon />}
      />
      <div style={{ transform: 'scale(1.2)', position: 'absolute', zIndex: 1000,  top: '70px' }}>
        {isOpenMenu && <Options click={addVariable} onOutsideClick={() => setIsOpenMenu(false)} data={variables} />}
      </div>
    </div>
  );
};

export default Variables;
