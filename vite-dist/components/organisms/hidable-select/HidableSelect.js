System.register(["react/jsx-runtime", "@my-ui/core", "react", "./HidableSelect.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, react_1, HidableSelect_module_scss_1, HidableSelect;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (HidableSelect_module_scss_1_1) {
                HidableSelect_module_scss_1 = HidableSelect_module_scss_1_1;
            }
        ],
        execute: function () {
            HidableSelect = ({ renderCustomSelect, buttonTitle }) => {
                const [isOpenedCurrenciesSelect, setOpenedCurrenciesSelect] = react_1.useState(false);
                return (_jsx("div", { children: isOpenedCurrenciesSelect ? (_jsxs("div", { className: HidableSelect_module_scss_1.default.SelectContent, children: [renderCustomSelect(setOpenedCurrenciesSelect), _jsx(core_1.IconButton, { onClick: () => setOpenedCurrenciesSelect(false), icon: _jsx("span", { className: HidableSelect_module_scss_1.default.CloseIcon, children: _jsx(core_1.Icons.CloseIcon, {}) }) })] })) : (_jsx(core_1.Button, { onClick: () => setOpenedCurrenciesSelect(true), variant: 'link', startIcon: _jsx(core_1.Icons.PlusCircleLarge, {}), className: HidableSelect_module_scss_1.default.AddButton, children: buttonTitle })) }));
            };
            exports_1("default", HidableSelect);
        }
    };
});
