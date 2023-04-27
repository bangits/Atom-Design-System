System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@my-ui/core", "..", "./UserLanguages.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, core_1, __1, UserLanguages_module_scss_1, UserLanguages;
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
            function (__1_1) {
                __1 = __1_1;
            },
            function (UserLanguages_module_scss_1_1) {
                UserLanguages_module_scss_1 = UserLanguages_module_scss_1_1;
            }
        ],
        execute: function () {
            UserLanguages = ({ languages, translations, tableLoadingRowIds, renderLanguagesSelect, onDefaultLanguageChange, shouldShowAddLanguageButton = true }) => {
                return (_jsx(_Fragment, { children: _jsxs("div", { className: UserLanguages_module_scss_1.default.UserDetailsTableContent, children: [_jsx(__1.Table, { isWithSelection: false, actions: [
                                    {
                                        component: (props) => (_jsx(core_1.Tooltip, { showEvent: 'hover', text: translations.isDefault, children: _jsx(core_1.IconButton, { icon: _jsx(atom_design_system_1.Icons.CheckButtonIcon, {}), ...props }) })),
                                        onClick: (column) => onDefaultLanguageChange(column.id),
                                        shouldShow: (column) => !column.isDefault,
                                        props: {}
                                    }
                                ], checkIsRowActive: (row) => row.isDefault, columns: [
                                    {
                                        Header: 'Language Tag',
                                        accessor: 'code',
                                        disableSortBy: true,
                                        renderColumn: (_, value) => value?.toUpperCase()
                                    },
                                    {
                                        Header: 'language',
                                        accessor: 'name',
                                        disableSortBy: true,
                                        renderColumn: (_, value) => value.toString()
                                    },
                                    {
                                        Header: 'type',
                                        accessor: 'isDefault',
                                        disableSortBy: true,
                                        renderColumn: (_, isDefault) => (isDefault ? translations.isDefault : translations.other),
                                        maxWidth: '11rem'
                                    }
                                ], data: languages, className: UserLanguages_module_scss_1.default.UserDetailsTable, loadingRowsIds: tableLoadingRowIds, loadingRowColumnProperty: 'id', rowUniqueKey: 'languageId', scrollProps: {
                                    showHorizontalScroll: false
                                } }), _jsx("div", { className: UserLanguages_module_scss_1.default.LanguageActionsContainer, children: shouldShowAddLanguageButton && (_jsx(components_1.HidableSelect, { renderCustomSelect: renderLanguagesSelect, buttonTitle: translations.add })) })] }) }));
            };
            exports_1("default", UserLanguages);
        }
    };
});
