System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "react-sortable-hoc", "./SettingsItemGroups.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, react_sortable_hoc_1, SettingsItemGroups_module_scss_1, SettingsItemGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (react_sortable_hoc_1_1) {
                react_sortable_hoc_1 = react_sortable_hoc_1_1;
            },
            function (SettingsItemGroups_module_scss_1_1) {
                SettingsItemGroups_module_scss_1 = SettingsItemGroups_module_scss_1_1;
            }
        ],
        execute: function () {
            SettingsItemGroup = ({ indexValue, translations, groupTitle, elements, noDataText, onEdit, onRemove, hideSortIcon, customElements }) => {
                return (_jsxs("div", { className: SettingsItemGroups_module_scss_1.default.SettingsItemGroup, children: [_jsx("span", { className: SettingsItemGroups_module_scss_1.default['SettingsItemGroup__Index'], children: indexValue }), _jsx(atom_design_system_1.EditedFormOptions, { options: [
                                {
                                    title: translations.groupTitle,
                                    value: groupTitle,
                                    variant: 'default'
                                },
                                ...[
                                    customElements
                                        ? {
                                            title: translations.elements,
                                            value: elements,
                                            variant: 'custom',
                                        }
                                        : {
                                            title: translations.elements,
                                            value: elements.map((el) => el.toString()),
                                            variant: 'tag'
                                        }
                                ]
                            ], noDataText: noDataText || 'N/A' }), _jsxs("div", { className: SettingsItemGroups_module_scss_1.default['SettingsItemGroup__Actions'], children: [onRemove && (_jsx(core_1.IconButton, { onClick: onRemove, className: SettingsItemGroups_module_scss_1.default['SettingsItemGroup__Remove'], icon: _jsx(atom_design_system_1.Icons.CloseIcon, {}) })), onEdit && (_jsx(core_1.IconButton, { onClick: onEdit, className: SettingsItemGroups_module_scss_1.default['SettingsItemGroup__Edit'], icon: _jsx(atom_design_system_1.Icons.EditIcon, {}) })), !hideSortIcon && (_jsx(core_1.IconButton, { className: classnames_1.default(SettingsItemGroups_module_scss_1.default['SettingsItemGroup__Sort'], 'DnD-SortIcon'), icon: _jsx(atom_design_system_1.Icons.SortIcon, {}) }))] })] }));
            };
            exports_1("default", react_sortable_hoc_1.SortableElement(SettingsItemGroup));
        }
    };
});
