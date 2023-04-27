System.register(["react/jsx-runtime", "react", "@my-ui/core", "./Currency.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, react_1, core_1, Currency_module_scss_1, CurrencyGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Currency_module_scss_1_1) {
                Currency_module_scss_1 = Currency_module_scss_1_1;
            }
        ],
        execute: function () {
            CurrencyGroup = ({ currencies }) => {
                return (_jsx("div", { className: Currency_module_scss_1.default.CurrencyGroupWrapper, children: currencies &&
                        currencies.map((currency, idx) => (_jsx("div", { style: { display: 'flex' }, children: _createElement(core_1.Tag, { ...currency, endIcon: currency.endIcon, inactive: true, key: idx, className: Currency_module_scss_1.default.Currency }) }))) }));
            };
            exports_1("default", CurrencyGroup);
        }
    };
});
