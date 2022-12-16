import { Icons } from '@/atom-design-system';
import { Tooltip } from '@my-ui/core';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mdn-like.css';
import { FC } from 'react';
import styles from './CodeEditor.module.scss';

export interface ThemeSelectorProps {
  setTheme?: (value) => void;
  themeTooltipText?: string;
}

const themes = ['dracula', 'material', 'mdn-like'];

const ThemeSelector: FC<ThemeSelectorProps> = ({ setTheme, themeTooltipText }) => {
  const selectTheme = ({ target: { value } }) => {
    setTheme(value);
  };

  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} id='theme' name='theme' onChange={selectTheme}>
        {themes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <label htmlFor='theme'>
        <Tooltip text={themeTooltipText} showEvent='hover'>
          <div className={styles.tooltipIcon}>
            <Icons.InfoTooltipIcon />
          </div>
        </Tooltip>
      </label>
    </div>
  );
};

export default ThemeSelector;
