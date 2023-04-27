System.register(["react/jsx-runtime", "@/components", "./ProjectLanguages.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, ProjectLanguages_module_scss_1, ProjectLanguages;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (ProjectLanguages_module_scss_1_1) {
                ProjectLanguages_module_scss_1 = ProjectLanguages_module_scss_1_1;
            }
        ],
        execute: function () {
            ProjectLanguages = ({ languages, tableLoadingRowIds, shouldShowAddWalletButton, renderLanguagesSelect, translations }) => {
                return (_jsx(_Fragment, { children: _jsxs("div", { className: ProjectLanguages_module_scss_1.default.ProjectLanguagesTableContent, children: [_jsx(components_1.Table, { isWithSelection: false, checkIsRowActive: (row) => row.isDefault, columns: [
                                    {
                                        Header: translations.tableHeaders.languageTag,
                                        accessor: 'languageTag',
                                        disableSortBy: true,
                                    },
                                    {
                                        Header: translations.tableHeaders.language,
                                        accessor: 'language',
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
                                ], data: languages, className: ProjectLanguages_module_scss_1.default.ProjectLanguagesTable, loadingRowsIds: tableLoadingRowIds, loadingRowColumnProperty: 'languageTag', rowUniqueKey: 'languageTag' }), _jsx("div", { className: ProjectLanguages_module_scss_1.default.LanguagesActionsContainer, children: shouldShowAddWalletButton && (_jsx(components_1.HidableSelect, { renderCustomSelect: renderLanguagesSelect, buttonTitle: translations.add })) })] }) }));
            };
            exports_1("default", ProjectLanguages);
        }
    };
});
