System.register(["react/jsx-runtime", "@/atom-design-system", "classnames", "react", "react-sortable-hoc", "./SortableItem.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, classnames_1, react_1, react_sortable_hoc_1, SortableItem_module_scss_1, SortableItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_sortable_hoc_1_1) {
                react_sortable_hoc_1 = react_sortable_hoc_1_1;
            },
            function (SortableItem_module_scss_1_1) {
                SortableItem_module_scss_1 = SortableItem_module_scss_1_1;
            }
        ],
        execute: function () {
            SortableItem = ({ children, startContent, onClose }) => {
                const arrayOfChildrens = react_1.Children.toArray(children);
                return (_jsxs("div", { className: SortableItem_module_scss_1.default.SortableItem, children: [startContent && _jsx("div", { className: SortableItem_module_scss_1.default['SortableItem__start-content'], children: startContent }), arrayOfChildrens.map((child, index) => (_jsx("div", { className: SortableItem_module_scss_1.default['SortableItem__item'], children: child }, index))), _jsx("button", { type: 'button', className: classnames_1.default(SortableItem_module_scss_1.default['SortableItem__sort'], 'DnD-SortIcon'), children: _jsx(atom_design_system_1.Icons.SortIcon, {}) }), onClose && (_jsx("button", { type: 'button', className: SortableItem_module_scss_1.default['SortableItem__remove'], onClick: onClose, children: _jsx(atom_design_system_1.Icons.CloseIcon, {}) }))] }));
            };
            exports_1("default", react_sortable_hoc_1.SortableElement(SortableItem));
        }
    };
});
