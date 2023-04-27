System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./WalletView.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, WalletView_module_scss_1, WalletView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (WalletView_module_scss_1_1) {
                WalletView_module_scss_1 = WalletView_module_scss_1_1;
            }
        ],
        execute: function () {
            WalletView = ({ walletInfo }) => {
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(WalletView_module_scss_1.default.WalletView), children: [_jsx("div", { className: classnames_1.default(WalletView_module_scss_1.default['WalletView--title']), children: walletInfo.title }), _jsx("div", { className: classnames_1.default(WalletView_module_scss_1.default['WalletView--realBalance']), children: _jsxs("div", { children: [_jsx("span", { children: walletInfo.realBalance.label }), ' ', _jsxs("span", { children: [walletInfo.realBalance.balance, " ", walletInfo.realBalance.currencyLabel] }), ' '] }) })] }));
            };
            exports_1("default", WalletView);
        }
    };
});
