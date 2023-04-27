System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-actions", "@storybook/addon-knobs", "./PlayerWallets"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_actions_1, addon_knobs_1, PlayerWallets_1, Default;
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
            function (PlayerWallets_1_1) {
                PlayerWallets_1 = PlayerWallets_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Player Wallets',
                component: PlayerWallets_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(PlayerWallets_1.default, { title: 'Correction History', onDefaultWalletChange: addon_actions_1.action('onDefaultWalletChange'), onDefaultBallanceChange: addon_actions_1.action('onDefaultBallanceChange'), tableLoadingRowIds: [2], translations: {
                        account: 'Account',
                        amount: 'Amount',
                        balanceAfter: 'Balance After',
                        balanceBefore: 'Balance Before',
                        correctedBy: 'Corrected By',
                        date: 'Date',
                        type: 'Type',
                        add: 'Add',
                        default: 'Default',
                        id: 'ID',
                        other: 'Other',
                        makeDefault: 'Make default',
                        balance: 'Balance',
                        correctDefaultBalance: 'Correct Default Balance'
                    }, wallets: [
                        {
                            account: '(Casino) ID:3548615646',
                            correctedBy: 'r@abelyan@gmail.com',
                            type: 'Deposit',
                            date: '10/11/2021',
                            balanceBefore: '$ 100',
                            amount: '$ 10',
                            balanceAfter: '$ 50'
                        },
                        {
                            account: '(Casino) ID:3548615646',
                            correctedBy: 'r@abelyan@gmail.com',
                            type: 'Deposit',
                            date: '10/11/2021',
                            balanceBefore: '$ 100',
                            amount: '$ 10',
                            balanceAfter: '$ 50'
                        },
                        {
                            account: '(Casino) ID:3548615646',
                            correctedBy: 'r@abelyan@gmail.com',
                            type: 'Deposit',
                            date: '10/11/2021',
                            balanceBefore: '$ 100',
                            amount: '$ 10',
                            balanceAfter: '$ 50'
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
                        ], onChange: () => changeOpenedCurrenciesSelect(false) })), cardProps: [{
                            col: 4,
                            noDataText: 'N/A',
                            walletType: 'Casino',
                            balance: {
                                label: 'EUR',
                                value: '5600.0'
                            },
                            account: {
                                label: 'Account ID',
                                id: '654989985'
                            }
                        }], onPaginationChange: () => console.log('onPaginationChange'), page: 0, paginationProps: {
                        pageSizeSelect: {
                            dropdownLabel: 'Row per page: ',
                            options: [
                                {
                                    value: 20,
                                    label: '20'
                                }
                            ],
                            defaultValue: 20
                        },
                        jumpToPage: {
                            inputTitle: 'Jump to page'
                        },
                        getTotalCountInfo: () => '1-20 of 365'
                    }, totalPagesCount: 5, totalCountInfo: '2000', onPaginationSizeChange: () => console.log('onPaginationSizeChange') }));
            });
        }
    };
});
