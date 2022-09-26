import { Button, TextInput, Typography, useOutsideClickEvent } from '@my-ui/core';
import classNames from 'classnames';
import { FC, useEffect } from 'react';
import styles from './EditorLinkForm.module.scss';

export interface EditorLinkFormProps {
  onClick?: () => void;
  a?: string;
  outsideClickClassName?: string;
  onOutsideClick?(): void;
}

const EditorLinkForm: FC<EditorLinkFormProps> = ({ outsideClickClassName, onClick, onOutsideClick }) => {
  const { subscribe, unsubscribe } = useOutsideClickEvent(outsideClickClassName || `.${styles.OptionsBase}`);

  useEffect(() => {
    subscribe(() => onOutsideClick?.());

    return unsubscribe;
  }, [onOutsideClick]);

  return (
    <div
      style={{
        width: '312px',
        height: '208px',
        border: '1px solid #E8EDF3',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '16px',
        paddingBottom: '16px'
      }}>
      <div style={{ width: '280px' }}>
        <Typography variant='p3'>Link</Typography>
        <TextInput
          containerClassName={styles['input-container']}
          style={{ height: '38px' }}
          placeholder='Link Address'
        />
        <TextInput
          containerClassName={classNames(styles['input-container'], styles['link-input'])}
          placeholder='Link Text'
        />
        <div className={styles['button-container']}>
          <Button onClick={onClick}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default EditorLinkForm;
