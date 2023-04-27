System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./WalletCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, WalletCard_module_scss_1, WalletCard;
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
            function (WalletCard_module_scss_1_1) {
                WalletCard_module_scss_1 = WalletCard_module_scss_1_1;
            }
        ],
        execute: function () {
            WalletCard = ({ cards }) => {
                return (_jsx("div", { className: 'd-flex gap-2', children: cards &&
                        cards.map((card) => {
                            return (_jsx("div", { className: classnames_1.default(WalletCard_module_scss_1.default.WalletCardWrapper, {
                                    [WalletCard_module_scss_1.default[`WalletCardWrapper--${card.col}`]]: card.col
                                }), children: _jsx("div", { className: WalletCard_module_scss_1.default.CardHeader, children: _jsxs("div", { className: WalletCard_module_scss_1.default.MainContent, children: [_jsxs("div", { className: WalletCard_module_scss_1.default.FirstRow, children: [_jsx(core_1.Typography, { className: WalletCard_module_scss_1.default.ContentType, variant: 'p4', children: card.walletType || card.noDataText }), card.action && (_jsxs("div", { onClick: () => card.action?.onAction(card), className: WalletCard_module_scss_1.default.Action, children: [card.action.icon && (_jsx(card.action.icon, { className: WalletCard_module_scss_1.default.ActionButton, width: '1.4em', height: '1.4em' })), card.action.label && (_jsx(core_1.Typography, { className: WalletCard_module_scss_1.default.ActionLabel, color: 'primary', variant: 'p4', children: card.action.label }))] }))] }), _jsxs(core_1.Typography, { className: WalletCard_module_scss_1.default.Label, variant: 'p4', children: [card.balance.label, ": ", _jsx("span", { children: card.balance.value || 0 })] }), _jsxs(core_1.Typography, { className: WalletCard_module_scss_1.default.Label, variant: 'p4', children: [card.account.label, ": ", _jsx("span", { children: card.account.id || card.noDataText })] })] }) }) }));
                        }) }));
            };
            exports_1("default", WalletCard);
        }
    };
});
