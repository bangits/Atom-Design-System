System.register(["react/jsx-runtime", "@/helpers", "@my-ui/core", "react"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, core_1, react_1, Tab;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            exports_1("Tab", Tab = ({ setCurrentSubTab, onChange, getTabInitialSub, checkSubTab, ...tabProps }) => {
                const { options } = tabProps;
                const { tab: tabQSValue, subTab: subTabQSValue } = helpers_1.useQueryString();
                react_1.useEffect(() => {
                    const tab = options.find((tab) => tab?.value === +tabQSValue);
                    const isSubTabValid = subTabQSValue && checkSubTab?.(+tabQSValue, +subTabQSValue);
                    if (tab)
                        onChange(+tabQSValue || null);
                    if (isSubTabValid)
                        setCurrentSubTab?.(+subTabQSValue || null);
                }, [tabQSValue, subTabQSValue]);
                return (_jsx(core_1.Tab, { ...tabProps, onChange: (value) => {
                        onChange?.(value);
                        const subTabValue = getTabInitialSub?.(value);
                        helpers_1.addQueryString(`?tab=${value}${subTabValue ? `&subTab=${subTabValue}` : ''}`);
                    } }));
            });
        }
    };
});
