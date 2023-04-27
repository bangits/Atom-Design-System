System.register(["react/jsx-runtime", "@/components", "@/icons", "react", "./BrowsersCheckboxGroup.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, icons_1, react_1, BrowsersCheckboxGroup_module_scss_1, BrowsersCheckboxGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (BrowsersCheckboxGroup_module_scss_1_1) {
                BrowsersCheckboxGroup_module_scss_1 = BrowsersCheckboxGroup_module_scss_1_1;
            }
        ],
        execute: function () {
            BrowsersCheckboxGroup = ({ browsersEnum, onChange, values: valuesProp, initialValues, disabled }) => {
                const [stateValues, setValues] = react_1.useState(initialValues || []);
                const values = valuesProp !== undefined ? valuesProp : stateValues;
                const createBrowserCheckboxOnChange = react_1.useCallback((enumValue) => (value) => {
                    const updatedValues = !value ? [enumValue, ...values] : [...values.filter((value) => value !== enumValue)];
                    setValues(updatedValues);
                    onChange?.(updatedValues);
                }, [onChange, values]);
                return (_jsxs("div", { className: BrowsersCheckboxGroup_module_scss_1.default.BrowsersCheckboxGroupBase, children: [_jsx(components_1.BrowsersCheckbox, { browserIcon: _jsx(icons_1.ChromeIcon, {}), disabled: disabled, selected: !values.includes(browsersEnum.CHROME), onChange: createBrowserCheckboxOnChange(browsersEnum.CHROME) }), _jsx(components_1.BrowsersCheckbox, { browserIcon: _jsx(icons_1.EdgeIcon, {}), disabled: disabled, selected: !values.includes(browsersEnum.EDGE), onChange: createBrowserCheckboxOnChange(browsersEnum.EDGE) }), _jsx(components_1.BrowsersCheckbox, { browserIcon: _jsx(icons_1.FirefoxIcon, {}), disabled: disabled, selected: !values.includes(browsersEnum.FIREFOX), onChange: createBrowserCheckboxOnChange(browsersEnum.FIREFOX) }), _jsx(components_1.BrowsersCheckbox, { browserIcon: _jsx(icons_1.OperaIcon, {}), disabled: disabled, selected: !values.includes(browsersEnum.OPERA), onChange: createBrowserCheckboxOnChange(browsersEnum.OPERA) }), _jsx(components_1.BrowsersCheckbox, { browserIcon: _jsx(icons_1.SafariIcon, {}), disabled: disabled, selected: !values.includes(browsersEnum.SAFARI), onChange: createBrowserCheckboxOnChange(browsersEnum.SAFARI) })] }));
            };
            exports_1("default", BrowsersCheckboxGroup);
        }
    };
});
