System.register(["react/jsx-runtime", "@/components", "@my-ui/core", "./ProjectCurrencies.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, ProjectCurrencies_module_scss_1, ProjectCurrencies;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ProjectCurrencies_module_scss_1_1) {
                ProjectCurrencies_module_scss_1 = ProjectCurrencies_module_scss_1_1;
            }
        ],
        execute: function () {
            ProjectCurrencies = ({ currencies, tableLoadingRowIds, shouldShowAddWalletButton, renderLanguagesSelect, translations }) => {
                return (_jsx(_Fragment, { children: _jsxs("div", { className: ProjectCurrencies_module_scss_1.default.ProjectCurrenciesTableContent, children: [_jsx(core_1.Table, { isWithSelection: false, checkIsRowActive: (row) => row.isDefault, columns: [
                                    {
                                        Header: translations.tableHeaders.currencyCode,
                                        accessor: 'currencyCode',
                                        disableSortBy: true
                                    },
                                    {
                                        Header: translations.tableHeaders.currencyName,
                                        accessor: 'currencyName',
                                        disableSortBy: true,
                                        maxWidth: '20rem'
                                    },
                                    {
                                        Header: translations.tableHeaders.type,
                                        accessor: 'isDefault',
                                        disableSortBy: true,
                                        renderColumn: (_, isDefault) => (isDefault ? translations.default : translations.supported),
                                        maxWidth: '10rem'
                                    }
                                ], data: currencies, className: ProjectCurrencies_module_scss_1.default.ProjectCurrenciesTable, loadingRowsIds: tableLoadingRowIds, loadingRowColumnProperty: 'currencyCode', rowUniqueKey: 'currencyCode' }), _jsx("div", { className: ProjectCurrencies_module_scss_1.default.CurrenciesActionsContainer, children: shouldShowAddWalletButton && (_jsx(components_1.HidableSelect, { renderCustomSelect: renderLanguagesSelect, buttonTitle: translations.add })) })] }) }));
            };
            exports_1("default", ProjectCurrencies);
        }
    };
});
