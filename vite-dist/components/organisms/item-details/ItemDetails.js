System.register(["react/jsx-runtime", "@/atom-design-system", "@/helpers", "@my-ui/core", "react", "./ItemDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, helpers_1, core_1, react_1, ItemDetails_module_scss_1, ItemDetails;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (ItemDetails_module_scss_1_1) {
                ItemDetails_module_scss_1 = ItemDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            ItemDetails = ({ tabs, defaultTabValue = null, defaultSubTabValue = null, tabValue, subTabValue, onTabChange }) => {
                tabs = tabs.filter(Boolean);
                let [currentTab, setCurrentTab] = react_1.useState(defaultTabValue);
                let [currentSubTab, setCurrentSubTab] = react_1.useState(defaultSubTabValue);
                currentTab = tabValue ?? currentTab;
                currentSubTab = subTabValue ?? currentSubTab;
                const getTab = react_1.useCallback((tabValue) => tabs.find((tab) => tab?.value === tabValue), [tabs]);
                const checkSubTab = react_1.useCallback((tabValue, subTabValue) => {
                    const tab = getTab(tabValue);
                    if (!tab)
                        return false;
                    return !!tab?.subTabs?.find((sub) => sub?.value === subTabValue);
                }, [getTab]);
                const getTabInitialSub = react_1.useCallback((tabValue) => {
                    const currentTab = getTab(tabValue);
                    return currentTab?.subTabs ? currentTab?.subTabs[0]?.value : null;
                }, [getTab]);
                const currentTabInfo = react_1.useMemo(() => getTab(currentTab), [getTab, currentTab]);
                const currentSubTabInfo = react_1.useMemo(() => currentTabInfo?.subTabs?.find((sub) => sub?.value === currentSubTab), [currentTabInfo, currentSubTab]);
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: ItemDetails_module_scss_1.default.ItemDetailsBase, children: [_jsx(atom_design_system_1.Tab, { options: tabs, setCurrentSubTab: setCurrentSubTab, checkSubTab: checkSubTab, getTabInitialSub: getTabInitialSub, onChange: (value) => {
                                const currentTab = tabs.find((tab) => tab?.value === value);
                                if (onTabChange)
                                    onTabChange(value, currentTab.defaultValue || null);
                                const subTabValue = currentTab?.subTabs ? currentTab?.subTabs[0]?.value : null;
                                setCurrentTab(value);
                                setCurrentSubTab(subTabValue);
                            }, value: currentTab }), _jsx("div", { className: ItemDetails_module_scss_1.default['ItemDetailsBase--sub-tabs'], children: currentTabInfo?.subTabs && (_jsx(core_1.SubTab, { options: currentTabInfo.subTabs, value: currentSubTab, onChange: (value) => {
                                    if (onTabChange)
                                        onTabChange(currentTab, value);
                                    setCurrentSubTab(value);
                                    helpers_1.addQueryString(`?tab=${currentTab}${value ? `&subTab=${value}` : ''}`);
                                } })) }), (currentSubTabInfo ? currentSubTabInfo.disableScroll || false : currentTabInfo?.disableScroll || false) ? (_jsx("div", { className: ItemDetails_module_scss_1.default['ItemDetailsBase--forms'], children: currentSubTabInfo?.content || currentTabInfo?.content })) : (_jsx(core_1.Scroll, { height: '54.4rem', autoHide: true, autoHeightMin: '54.4rem', children: _jsx("div", { className: ItemDetails_module_scss_1.default['ItemDetailsBase--forms'], children: currentSubTabInfo?.content || currentTabInfo?.content }) }))] }));
            };
            exports_1("default", ItemDetails);
        }
    };
});
