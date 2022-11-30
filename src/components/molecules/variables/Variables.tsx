import { Button, Icons, Options } from '@/atom-design-system';
import classNames from 'classnames';
import { EditorState, Modifier } from 'draft-js';
import { FC, useState } from 'react';
import styles from './Variables.module.scss';

export interface VariablesProps {
  variables?: string[];
  editorState?: {
    getCurrentContent: () => void;
    getSelection: () => void;
    getCurrentInlineStyle: () => void;
  };
  emptyValue?: string;

  onVariableClick?(variable: string): void;
  onChange?(e): void;
}

const Variables: FC<VariablesProps> = ({
  variables,
  emptyValue,
  editorState,
  onVariableClick,
  onChange,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const addVariable =
    onVariableClick ||
    ((variable: string) => {
      const contentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        `${variable}`,
        editorState.getCurrentInlineStyle()
      );
      onChange(EditorState.push(editorState, contentState, 'variables'));
    });

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
      <div style={{ transform: 'scale(1.2)', position: 'absolute', zIndex: 1000, top: '48px' }}>
        {isOpenMenu && (
          <Options
            opacity={false}
            fitContent={true}
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
