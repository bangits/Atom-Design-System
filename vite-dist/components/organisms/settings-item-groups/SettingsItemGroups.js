System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "react", "./SettingsItemGroup", "./SettingsItemGroups.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, react_1, SettingsItemGroup_1, SettingsItemGroups_module_scss_1, SettingsItemGroups;
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (SettingsItemGroup_1_1) {
                SettingsItemGroup_1 = SettingsItemGroup_1_1;
            },
            function (SettingsItemGroups_module_scss_1_1) {
                SettingsItemGroups_module_scss_1 = SettingsItemGroups_module_scss_1_1;
            }
        ],
        execute: function () {
            SettingsItemGroups = ({ addButtonProps, groups: groupsProp, onSortEnd, translations, showCard = true }) => {
                const [groups, setGroups] = react_1.useState(groupsProp);
                const content = (_jsx(atom_design_system_1.SortableList, { onSortEnd: (sortInfo, event) => {
                        const { oldIndex, newIndex } = sortInfo;
                        setGroups((prevItems) => [...atom_design_system_1.arrayMoveMutable(prevItems, oldIndex, newIndex)]);
                        onSortEnd(sortInfo, event);
                    }, children: groups.map((g, index) => (_jsx(SettingsItemGroup_1.default, { index: index, translations: translations, ...g }))) }));
                react_1.useEffect(() => {
                    setGroups(groupsProp);
                }, [groupsProp]);
                return (_jsxs("div", { className: SettingsItemGroups_module_scss_1.default.SettingsItemGroups, children: [addButtonProps && (_jsx(core_1.Button, { variant: 'link', startIcon: _jsx(atom_design_system_1.Icons.PlusCircleLarge, {}), ...addButtonProps, className: classnames_1.default(addButtonProps.className, SettingsItemGroups_module_scss_1.default['SettingsItemGroups__Button']) })), showCard ? _jsx(core_1.Card, { className: SettingsItemGroups_module_scss_1.default['SettingsItemGroups__Card'], children: content }) : content] }));
            };
            exports_1("default", SettingsItemGroups);
        }
    };
});
