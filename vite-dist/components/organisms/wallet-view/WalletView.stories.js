System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./WalletView"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, WalletView_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (WalletView_1_1) {
                WalletView_1 = WalletView_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Wallet View',
                component: WalletView_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(WalletView_1.default, { walletInfo: addon_knobs_1.object('walletInfo', {
                        title: 'Wallet',
                        realBalance: {
                            label: 'Real Balance',
                            balance: '21 300',
                            currencyLabel: 'USD'
                        }
                    }) }));
            });
        }
    };
});
