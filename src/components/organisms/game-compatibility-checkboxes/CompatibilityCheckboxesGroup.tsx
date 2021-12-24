import { CheckboxGroup } from '@/components';
import React, { FC, useState } from 'react';
import styles from './CompatibilityCheckboxesGroup.module.scss';

export interface CompatibilityCheckboxesGroupProps {
  onPlatformChange?: (values: (number | string)[]) => void;
  onMobileModeChange?: (values: (number | string)[]) => void;
  onTabletModeChange?: (values: (number | string)[]) => void;

  platformInitialValues?: (number | string)[];
  mobileInitialValues?: (number | string)[];
  tabletInitialValues?: (number | string)[];

  platformCheckboxesValues: {
    mobile: number | string;
    desktop: number | string;
    tablet: number | string;
  };
  mobileCheckboxesValues: {
    portrait: number | string;
    landscape: number | string;
  };
  tabletCheckboxesValues: {
    portrait: number | string;
    landscape: number | string;
  };

  translations: {
    platform: string;
    mobile: string;
    desktop: string;
    tablet: string;
    mobileScreenMode: string;
    tabletScreenMode: string;
    portrait: string;
    landscape: string;
  };
}

const CompatibilityCheckboxesGroup: FC<CompatibilityCheckboxesGroupProps> = ({
  platformCheckboxesValues,
  mobileCheckboxesValues,
  tabletCheckboxesValues,
  platformInitialValues,
  mobileInitialValues,
  tabletInitialValues,
  onPlatformChange,
  onMobileModeChange,
  onTabletModeChange,
  translations
}) => {
  const [platform, setPlatform] = useState<(number | string)[]>(platformInitialValues ?? []);

  return (
    <div className={styles.CompatibilityCheckboxesGroup}>
      <CheckboxGroup
        label={translations.platform}
        onChange={(selectedValues) => {
          setPlatform(selectedValues as string[] | number[]);
          onPlatformChange?.(selectedValues as string[] | number[]);
        }}
        defaultValue={platformInitialValues}
        checkboxes={[
          {
            label: translations.mobile,
            name: 'mobile',
            value: platformCheckboxesValues.mobile
          },
          {
            label: translations.desktop,
            name: 'desktop',
            value: platformCheckboxesValues.desktop
          },
          {
            label: translations.tablet,
            name: 'tablet',
            value: platformCheckboxesValues.tablet
          }
        ]}
      />
      <CheckboxGroup
        label={translations.mobileScreenMode}
        onChange={(selectedValues) => {
          onMobileModeChange?.(selectedValues as string[] | number[]);
        }}
        defaultValue={mobileInitialValues || []}
        checkboxes={[
          {
            label: translations.portrait,
            disabled: !platform.includes(platformCheckboxesValues.mobile),
            value: mobileCheckboxesValues.portrait,
            name: 'portrait',
          },
          {
            label: translations.landscape,
            value: mobileCheckboxesValues.landscape,
            disabled: !platform.includes(platformCheckboxesValues.mobile),
            name: 'landscape',
          }
        ]}
      />
      <CheckboxGroup
        label={translations.tabletScreenMode}
        defaultValue={tabletInitialValues || []}
        onChange={(selectedValues) => {
          onTabletModeChange?.(selectedValues as string[] | number[]);
        }}
        checkboxes={[
          {
            label: translations.portrait,
            value: tabletCheckboxesValues.portrait,
            disabled: !platform.includes(platformCheckboxesValues.tablet),
            name: 'port',
          },
          {
            label: translations.landscape,
            value: mobileCheckboxesValues.landscape,
            disabled: !platform.includes(platformCheckboxesValues.tablet),
            name: 'land',
          }
        ]}
      />
    </div>
  );
};

export default CompatibilityCheckboxesGroup;
