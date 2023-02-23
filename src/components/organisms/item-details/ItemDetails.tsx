/* eslint-disable prefer-const */
import { Card, Scroll, SubTab, Tab } from '@my-ui/core';
import { FC, ReactNode, useMemo, useState } from 'react';
import styles from './ItemDetails.module.scss';

export interface ItemDetailsProps {
  tabs: {
    title: string;
    value: number;
    content?: ReactNode;
    defaultValue?: number;
    disableScroll?: boolean;
    disabled?: boolean;
    toolTipText?: string;
    subTabs?: {
      title: string;
      value: number;
      badgeCount?: number;
      content: ReactNode;
      disableScroll?: boolean;
    }[];
  }[];
  defaultTabValue?: number;
  defaultSubTabValue?: number;
  tabValue?: number;
  subTabValue?: number;
  onTabChange?: (tabValue: number, subTabValue: number | string) => void;
}

const ItemDetails: FC<ItemDetailsProps> = ({
  tabs,
  defaultTabValue = null,
  defaultSubTabValue = null,
  tabValue,
  subTabValue,
  onTabChange
}) => {
  tabs = tabs.filter(Boolean);

  let [currentTab, setCurrentTab] = useState<number>(defaultTabValue);

  let [currentSubTab, setCurrentSubTab] = useState<number>(defaultSubTabValue);

  currentTab = tabValue ?? currentTab;
  currentSubTab = subTabValue ?? currentSubTab;

  const currentTabInfo = useMemo(() => tabs.find((tab) => tab?.value === currentTab), [tabs, currentTab]);
  const currentSubTabInfo = useMemo(
    () => currentTabInfo?.subTabs?.find((sub) => sub?.value === currentSubTab),
    [currentTabInfo, currentSubTab]
  );

  return (
    <Card borderRadius={1.6} className={styles.ItemDetailsBase}>
      <Tab
        options={tabs}
        onChange={(value) => {
          const currentTab = tabs.find((tab) => tab?.value === value);

          if (onTabChange) onTabChange(value, currentTab.defaultValue || null);

          setCurrentSubTab(currentTab?.subTabs ? currentTab?.subTabs[0]?.value : null);
          setCurrentTab(value);
        }}
        defaultValue={currentTab}
        value={tabValue}
      />
      <div className={styles['ItemDetailsBase--sub-tabs']}>
        {currentTabInfo?.subTabs && (
          <SubTab
            options={currentTabInfo.subTabs}
            value={currentSubTab}
            onChange={(value) => {
              if (onTabChange) onTabChange(currentTab, value);
              setCurrentSubTab(value);
            }}
          />
        )}
      </div>
      {(currentSubTabInfo ? currentSubTabInfo.disableScroll || false : currentTabInfo?.disableScroll || false) ? (
        <div className={styles['ItemDetailsBase--forms']}>{currentSubTabInfo?.content || currentTabInfo?.content}</div>
      ) : (
        <Scroll height='54.4rem' autoHide autoHeightMin='54.4rem'>
          <div className={styles['ItemDetailsBase--forms']}>
            {currentSubTabInfo?.content || currentTabInfo?.content}
          </div>
        </Scroll>
      )}
    </Card>
  );
};

export default ItemDetails;
