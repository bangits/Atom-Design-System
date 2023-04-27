System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@my-ui/core", "react", "..", "../wallet-card", "./PlayerWallets.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, core_1, react_1, __1, wallet_card_1, PlayerWallets_module_scss_1, PlayerWallets;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (__1_1) {
                __1 = __1_1;
            },
            function (wallet_card_1_1) {
                wallet_card_1 = wallet_card_1_1;
            },
            function (PlayerWallets_module_scss_1_1) {
                PlayerWallets_module_scss_1 = PlayerWallets_module_scss_1_1;
            }
        ],
        execute: function () {
            PlayerWallets = ({ onPaginationChange, paginationProps, totalPagesCount, totalCountInfo, page, onPaginationSizeChange, wallets, translations, tableLoadingRowIds, renderCurrenciesSelect, onDefaultWalletChange, onDefaultBallanceChange, balanceMaxLength = 10, title, cardProps }) => {
                const [isOpenedDefaultBalanceChangeSelect, setOpenedDefaultBalanceChangeSelect] = react_1.useState(false);
                const [balance, setBalance] = react_1.useState(null);
                // const paginationProps = {
                //   pageSizeSelect: {
                //     dropdownLabel: 'Row per page: ',
                //     options: [
                //       {
                //         value: 20,
                //         label: '20'
                //       }
                //     ],
                //     defaultValue: 20
                //   },
                //   jumpToPage: {
                //     inputTitle: 'Jump to page'
                //   },
                //   getTotalCountInfo: () => '1-20 of 365'
                // };
                return (_jsx(_Fragment, { children: _jsxs("div", { className: PlayerWallets_module_scss_1.default.PlayerDetailsTableContent, children: [_jsx("div", { children: _jsx(wallet_card_1.WalletCard, { cards: cardProps }) }), _jsx("div", { className: PlayerWallets_module_scss_1.default.WalletActionsContainer, children: isOpenedDefaultBalanceChangeSelect ? (_jsxs("div", { className: PlayerWallets_module_scss_1.default.SelectContent, children: [_jsx(components_1.TextInput, { type: 'number', label: translations.balance, value: balance?.toString(), onChange: (e) => setBalance(e.target.value && +e.target.value), isDecimal: true, maxLength: balanceMaxLength, fullWidth: true, containerClassName: PlayerWallets_module_scss_1.default.BalanceInput }), _jsx(core_1.IconButton, { onClick: () => setOpenedDefaultBalanceChangeSelect(false), icon: _jsx("span", { className: PlayerWallets_module_scss_1.default.CloseIcon, children: _jsx(atom_design_system_1.Icons.CloseIcon, {}) }) }), balance ? (_jsx(core_1.IconButton, { onClick: () => {
                                                setOpenedDefaultBalanceChangeSelect(false);
                                                onDefaultBallanceChange(balance);
                                                setBalance(null);
                                            }, icon: _jsx("span", { className: PlayerWallets_module_scss_1.default.SaveIcon, children: _jsx(atom_design_system_1.Icons.CheckIcon, {}) }) })) : null] })) : (_jsx(core_1.Button, { onClick: () => setOpenedDefaultBalanceChangeSelect(true), variant: 'link', startIcon: _jsx(atom_design_system_1.Icons.MoneyIcon, {}), className: PlayerWallets_module_scss_1.default.AddButton, children: translations.correctDefaultBalance })) }), _jsx("div", { className: PlayerWallets_module_scss_1.default['PlayerDetailsTableContent--title'], children: title }), _jsx(core_1.Pagination, { style: { justifyContent: 'end' }, onChange: onPaginationChange, page: page, ...paginationProps, totalPagesCount: totalPagesCount, pageSizeSelect: {
                                    ...paginationProps?.pageSizeSelect,
                                    onChange: onPaginationSizeChange
                                }, totalCountInfo: totalCountInfo }), _jsx(__1.Table, { isWithSelection: false, actions: [
                                    {
                                        component: (props) => (_jsx(core_1.Tooltip, { showEvent: 'hover', text: translations.makeDefault, children: _jsx(core_1.IconButton, { icon: _jsx(atom_design_system_1.Icons.CheckButtonIcon, {}), ...props }) })),
                                        onClick: () => { },
                                        shouldShow: () => null,
                                        props: {}
                                    }
                                ], columns: [
                                    {
                                        Header: translations.account,
                                        accessor: 'account',
                                        disableSortBy: true
                                    },
                                    {
                                        Header: translations.correctedBy,
                                        accessor: 'correctedBy',
                                        disableSortBy: true
                                    },
                                    {
                                        Header: translations.type,
                                        accessor: 'type',
                                        disableSortBy: true
                                    },
                                    {
                                        Header: translations.date,
                                        accessor: 'date',
                                        disableSortBy: true
                                    },
                                    {
                                        Header: translations.balanceBefore,
                                        accessor: 'balanceBefore',
                                        disableSortBy: true
                                    },
                                    {
                                        Header: translations.amount,
                                        accessor: 'amount',
                                        disableSortBy: true
                                    },
                                    {
                                        Header: translations.balanceAfter,
                                        accessor: 'balanceAfter',
                                        disableSortBy: true
                                    }
                                ], data: wallets || [], className: PlayerWallets_module_scss_1.default.UserDetailsTable, loadingRowsIds: tableLoadingRowIds, rowUniqueKey: 'currencyId' })] }) }));
            };
            exports_1("default", PlayerWallets);
        }
    };
});
