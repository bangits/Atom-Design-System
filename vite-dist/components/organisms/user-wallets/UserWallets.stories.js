System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-actions", "@storybook/addon-knobs", "./UserWallets"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_actions_1, addon_knobs_1, UserWallets_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (UserWallets_1_1) {
                UserWallets_1 = UserWallets_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/User Wallets',
                component: UserWallets_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(UserWallets_1.default, { onDefaultWalletChange: addon_actions_1.action('onDefaultWalletChange'), onDefaultBallanceChange: addon_actions_1.action('onDefaultBallanceChange'), tableLoadingRowIds: [2], translations: {
                        add: 'Add',
                        default: 'Default',
                        id: 'ID',
                        other: 'Other',
                        makeDefault: 'Make default',
                        balance: 'Balance',
                        correctDefaultBalance: 'Correct Default Balance'
                    }, wallets: [
                        {
                            balance: '150.000.000',
                            currency: 'USD',
                            id: 1,
                            isDefault: true,
                            currencyId: 1
                        },
                        {
                            balance: '150.000.000',
                            currency: 'AMD',
                            id: 2,
                            isDefault: false,
                            currencyId: 2
                        },
                        {
                            balance: '150.000.000',
                            currency: 'RUB',
                            id: 3,
                            isDefault: false,
                            currencyId: 3
                        }
                    ], renderCurrenciesSelect: (changeOpenedCurrenciesSelect) => (_jsx(core_1.Select, { options: [
                            {
                                label: 'USD',
                                value: 1
                            },
                            {
                                label: 'RUB',
                                value: 2
                            }
                        ], onChange: () => changeOpenedCurrenciesSelect(false) })) }));
            });
        }
    };
});
