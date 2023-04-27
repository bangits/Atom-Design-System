import { addQueryString, useQueryString } from '@/helpers';
import { Tab as MYUITab, TabProps as MYUITabProps, SubTabProps } from '@my-ui/core';
import { useEffect } from 'react';

export interface TabProps extends MYUITabProps {
  getTabInitialSub?(tabValue: MYUITabProps['value']): SubTabProps['value'];
  checkSubTab?(tabValue: MYUITabProps['value'], subTabValue: MYUITabProps['value']): boolean;
  setCurrentSubTab?(tabValue: MYUITabProps['value']): void;
}

export const Tab = ({ setCurrentSubTab, onChange, getTabInitialSub, checkSubTab, ...tabProps }: TabProps) => {
  const { options } = tabProps;

  const { tab: tabQSValue, subTab: subTabQSValue } = useQueryString<{ tab: string; subTab: string }>();

  useEffect(() => {
    const tab = options.find((tab) => tab?.value === +tabQSValue);
    const isSubTabValid = subTabQSValue && checkSubTab?.(+tabQSValue, +subTabQSValue);

    if (tab) onChange(+tabQSValue || null);

    if (isSubTabValid) setCurrentSubTab?.(+subTabQSValue || null);
  }, [tabQSValue, subTabQSValue]);

  return (
    <MYUITab
      {...tabProps}
      onChange={(value) => {
        onChange?.(value);

        const subTabValue = getTabInitialSub?.(value);

        addQueryString(`?tab=${value}${subTabValue ? `&subTab=${subTabValue}` : ''}`);
      }}
    />
  );
};
