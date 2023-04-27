System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@/components/atoms", "@my-ui/core", "react", "..", "./UserWallets.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, atoms_1, core_1, react_1, __1, UserWallets_module_scss_1, UserWallets;
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
            function (atoms_1_1) {
                atoms_1 = atoms_1_1;
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
            function (UserWallets_module_scss_1_1) {
                UserWallets_module_scss_1 = UserWallets_module_scss_1_1;
            }
        ],
        execute: function () {
            UserWallets = ({ wallets, translations, tableLoadingRowIds, renderCurrenciesSelect, onDefaultWalletChange, onDefaultBallanceChange, balanceMaxLength = 10, shouldShowAddWalletButton = true }) => {
                const [isOpenedDefaultBalanceChangeSelect, setOpenedDefaultBalanceChangeSelect] = react_1.useState(false);
                const [balance, setBalance] = react_1.useState(null);
                return (_jsx(_Fragment, { children: _jsxs("div", { className: UserWallets_module_scss_1.default.UserDetailsTableContent, children: [_jsx(__1.Table, { isWithSelection: false, actions: [
                                    {
                                        component: (props) => (_jsx(core_1.Tooltip, { showEvent: 'hover', text: translations.makeDefault, children: _jsx(core_1.IconButton, { icon: _jsx(atom_design_system_1.Icons.CheckButtonIcon, {}), ...props }) })),
                                        onClick: (column) => onDefaultWalletChange(column.currencyId),
                                        shouldShow: (column) => !column.isDefault,
                                        props: {}
                                    }
                                ], checkIsRowActive: (row) => row.isDefault, columns: [
                                    {
                                        Header: 'currency',
                                        accessor: 'currency',
                                        disableSortBy: true
                                    },
                                    {
                                        Header: 'balance',
                                        accessor: 'balance',
                                        disableSortBy: true,
                                        renderColumn: (_, value) => value.toString(),
                                        maxWidth: '20rem'
                                    },
                                    {
                                        Header: 'account Id',
                                        accessor: 'id',
                                        disableSortBy: true,
                                        renderColumn: (_, value) => value ? (_jsxs(_Fragment, { children: [translations.id, " ", value] })) : ('---')
                                    },
                                    {
                                        Header: 'type',
                                        accessor: 'isDefault',
                                        disableSortBy: true,
                                        renderColumn: (_, isDefault) => (isDefault ? translations.default : translations.other),
                                        maxWidth: '11rem'
                                    }
                                ], data: wallets, className: UserWallets_module_scss_1.default.UserDetailsTable, loadingRowsIds: tableLoadingRowIds, loadingRowColumnProperty: 'currencyId', rowUniqueKey: 'currencyId' }), _jsxs("div", { className: UserWallets_module_scss_1.default.WalletActionsContainer, children: [shouldShowAddWalletButton && (_jsx(components_1.HidableSelect, { renderCustomSelect: renderCurrenciesSelect, buttonTitle: translations.add })), _jsx(atoms_1.Divider, { showDivider: shouldShowAddWalletButton, children: isOpenedDefaultBalanceChangeSelect ? (_jsxs("div", { className: UserWallets_module_scss_1.default.SelectContent, children: [_jsx(components_1.TextInput, { type: 'number', label: translations.balance, value: balance?.toString(), onChange: (e) => setBalance(e.target.value && +e.target.value), isDecimal: true, maxLength: balanceMaxLength, fullWidth: true, containerClassName: UserWallets_module_scss_1.default.BalanceInput }), _jsx(core_1.IconButton, { onClick: () => setOpenedDefaultBalanceChangeSelect(false), icon: _jsx("span", { className: UserWallets_module_scss_1.default.CloseIcon, children: _jsx(atom_design_system_1.Icons.CloseIcon, {}) }) }), balance ? (_jsx(core_1.IconButton, { onClick: () => {
                                                        setOpenedDefaultBalanceChangeSelect(false);
                                                        onDefaultBallanceChange(balance);
                                                        setBalance(null);
                                                    }, icon: _jsx("span", { className: UserWallets_module_scss_1.default.SaveIcon, children: _jsx(atom_design_system_1.Icons.CheckIcon, {}) }) })) : null] })) : (_jsx(core_1.Button, { onClick: () => setOpenedDefaultBalanceChangeSelect(true), variant: 'link', startIcon: _jsx(atom_design_system_1.Icons.MoneyIcon, {}), className: UserWallets_module_scss_1.default.AddButton, children: translations.correctDefaultBalance })) })] })] }) }));
            };
            exports_1("default", UserWallets);
        }
    };
});
