System.register(["react/jsx-runtime", "@/helpers", "@/icons", "@my-ui/core", "react", "./Balance.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, icons_1, core_1, react_1, Balance_module_scss_1, Balance;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (Balance_module_scss_1_1) {
                Balance_module_scss_1 = Balance_module_scss_1_1;
            }
        ],
        execute: function () {
            Balance = ({ money, currency, maximumFractionDigits = 2, minimumFractionDigits = 0, dotsValue = '.', locale = 'fr-FR' }) => {
                const currencyOptions = react_1.useMemo(() => ({
                    minimumFractionDigits,
                    maximumFractionDigits
                }), [maximumFractionDigits, minimumFractionDigits]);
                const transformedMoney = react_1.useMemo(() => money?.toLocaleString(locale, currencyOptions)?.replaceAll(',', dotsValue), [money, dotsValue, currencyOptions]);
                return (_jsxs("div", { className: Balance_module_scss_1.default.BalanceContainer, children: [_jsx(icons_1.BalanceIcon, { width: '1.8rem', fill: 'currentColor' }), _jsxs(core_1.Typography, { variant: 'p4', component: 'span', className: Balance_module_scss_1.default.BalanceQuantity, children: [transformedMoney || 0, " ", currency] })] }));
            };
            exports_1("default", helpers_1.typedMemo(Balance));
        }
    };
});
