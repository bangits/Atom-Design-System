System.register(["react/jsx-runtime", "classnames", "react", "./BrowsersCheckbox.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, classnames_1, react_1, BrowsersCheckbox_module_scss_1, BrowsersCheckbox;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (BrowsersCheckbox_module_scss_1_1) {
                BrowsersCheckbox_module_scss_1 = BrowsersCheckbox_module_scss_1_1;
            }
        ],
        execute: function () {
            BrowsersCheckbox = ({ browserIcon, disabled, selected: selectedProp, defaultSelected, onChange }) => {
                const [selected, setSelected] = react_1.useState(defaultSelected);
                const onClickHandler = react_1.useCallback(() => {
                    setSelected(!selected);
                    if (onChange)
                        onChange(!(selectedProp !== undefined ? selectedProp : selected));
                }, [selected, selectedProp, setSelected, onChange]);
                return (_jsx(_Fragment, { children: _jsx("div", { onClick: !disabled ? onClickHandler : null, className: classnames_1.default(BrowsersCheckbox_module_scss_1.default.BrowsersCheckboxBase, {
                            [BrowsersCheckbox_module_scss_1.default['BrowsersCheckboxBase--selected']]: selectedProp !== undefined ? selectedProp : selected
                        }), children: browserIcon }) }));
            };
            exports_1("default", BrowsersCheckbox);
        }
    };
});
