System.register(["react/jsx-runtime", "./WalletCard", "@my-ui/core"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, WalletCard_1, core_1, Template, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (WalletCard_1_1) {
                WalletCard_1 = WalletCard_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/WalletCard',
                component: WalletCard_1.default
            });
            Template = (args) => _jsx(WalletCard_1.default, { ...args });
            exports_1("Default", Default = Template.bind({}));
            Default.args = {
                cards: [
                    {
                        col: 4,
                        noDataText: 'aaa',
                        walletType: 'aaaa',
                        balance: {
                            label: 'aaaa',
                            value: 'aaaa'
                        },
                        account: {
                            label: 'aaa',
                            id: 'aaa'
                        },
                        action: {
                            icon: core_1.Icons.SettingIcon,
                            label: 'Correct 2',
                            onAction: (card) => {
                                console.log(card);
                            }
                        }
                    }
                ]
            };
        }
    };
});
