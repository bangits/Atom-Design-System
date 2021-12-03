import { Card, SubTab, Tab } from '@my-ui/core';
import React, { FC, ReactNode, useMemo, useState } from 'react';
import styles from './ItemDetails.module.scss';

export interface ItemDetailsProps {
  tabs: {
    title: string;
    value: number;
    content?: ReactNode;
    defaultValue?: number;
    subTabs?: {
      title: string;
      value: number;
      badgeCount: number;
      content: ReactNode;
    }[];
  }[];
  defaultTabValue?: number;
  defaultSubTabValue?: number;
  onTabChange?: (tabValue: number, subTabValue: number | string) => void;
}

const ItemDetails: FC<ItemDetailsProps> = ({
  tabs,
  defaultTabValue = null,
  defaultSubTabValue = null,
  onTabChange
}) => {
  const [currentTab, setCurrentTab] = useState<number>(defaultTabValue);

  const [currentSubTab, setCurrentSubTab] = useState<number>(defaultSubTabValue);

  const currentTabInfo = useMemo(() => tabs.find((tab) => tab.value === currentTab), [tabs, currentTab]);
  const currentSubTabInfo = useMemo(
    () => currentTabInfo?.subTabs?.find((sub) => sub.value === currentSubTab),
    [currentTabInfo, currentSubTab]
  );

  return (
    <Card borderRadius={1.6} className={styles.ItemDetailsBase}>
      <Tab
        options={tabs}
        onChange={(value) => {
          if (onTabChange) onTabChange(value, currentSubTab);
          setCurrentTab(value);

          /* setCurrentSubTab() */
        }}
        defaultValue={currentTab}
      />
      <div className={styles['ItemDetailsBase--sub-tabs']}>
        {currentTabInfo?.subTabs && (
          <SubTab
            options={currentTabInfo.subTabs}
            defaultValue={currentSubTab}
            onChange={(value) => {
              if (onTabChange) onTabChange(currentTab, value);
              setCurrentSubTab(value);
            }}
          />
        )}
      </div>
      <div className={styles['ItemDetailsBase--forms']}>{currentSubTabInfo?.content || currentTabInfo?.content}</div>
    </Card>
  );
};

export default ItemDetails;
