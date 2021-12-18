import { CheckboxGroup } from '@/components';
import React, { FC, useEffect, useState } from 'react';
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
  const [mobile, setMobile] = useState<(number | string)[]>(mobileInitialValues ?? []);
  const [tablet, setTablet] = useState<(number | string)[]>(tabletInitialValues ?? []);

  useEffect(() => {
    onPlatformChange?.(platform);
    onMobileModeChange?.(mobile);
    onTabletModeChange?.(tablet);
  }, [platform, mobile, tablet]);

  return (
    <div className={styles.CompatibilityCheckboxesGroup}>
      <CheckboxGroup
        label={translations.platform}
        onChange={(selectedValues) => setPlatform(selectedValues as string[] | number[])}
        defaultValue={platform}
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
        onChange={(selectedValues) => setMobile(selectedValues as string[] | number[])}
        defaultValue={mobile}
        checkboxes={[
          {
            label: translations.portrait,
            disabled: !platform.includes(platformCheckboxesValues.mobile),
            value: mobileCheckboxesValues.portrait
          },
          {
            label: translations.landscape,
            value: mobileCheckboxesValues.landscape,
            disabled: !platform.includes(platformCheckboxesValues.mobile)
          }
        ]}
      />
      <CheckboxGroup
        label={translations.tabletScreenMode}
        defaultValue={tablet}
        onChange={(selectedValues) => setTablet(selectedValues as string[] | number[])}
        checkboxes={[
          {
            label: translations.portrait,
            value: tabletCheckboxesValues.portrait,
            disabled: !platform.includes(platformCheckboxesValues.tablet)
          },
          {
            label: translations.landscape,
            value: mobileCheckboxesValues.landscape,
            disabled: !platform.includes(platformCheckboxesValues.tablet)
          }
        ]}
      />
    </div>
  );
};

export default CompatibilityCheckboxesGroup;
