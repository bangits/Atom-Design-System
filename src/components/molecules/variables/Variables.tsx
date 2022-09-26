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
  emptyValue?: string;
}

const Variables: FC<VariablesProps> = ({ variables, emptyValue, editorState, onChange }) => {
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

  // useEffect(() => {}, [isOpenMenu]);
  return (
    <div className={classNames(styles.container)}>
      <Button
        type='button'
        onClick={() => setIsOpenMenu((prev) => !prev)}
        className={classNames(styles.button, {
          [styles['button-active']]: isOpenMenu
        })}
        variant='link'>
        <Icons.VariableIcon />
      </Button>
      <div style={{ transform: 'scale(1.2)', position: 'absolute', zIndex: 1000, top: '42px' }}>
        {isOpenMenu && (
          <Options
            opacity={false}
            outsideClickClassName={`.${styles.container}`}
            click={addVariable}
            onOutsideClick={() => setIsOpenMenu(false)}
            data={variables}
            emptyValue={emptyValue}
          />
        )}
      </div>
    </div>
  );
};

export default Variables;
