System.register(["react/jsx-runtime", "@/atom-design-system", "classnames", "react", "./DividerList.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, classnames_1, react_1, DividerList_module_scss_1, DividerList;
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
            function (DividerList_module_scss_1_1) {
                DividerList_module_scss_1 = DividerList_module_scss_1_1;
            }
        ],
        execute: function () {
            DividerList = ({ children, className }) => {
                const childrenArray = react_1.useMemo(() => react_1.Children.toArray(children), [children]);
                return (_jsx("div", { className: classnames_1.default(DividerList_module_scss_1.default.DividerList, className), children: childrenArray.map((child, index) => react_1.isValidElement(child) && (_jsxs(react_1.Fragment, { children: [child, index !== childrenArray.length - 1 && _jsx(atom_design_system_1.Divider, {})] }, child.key))) }));
            };
            exports_1("default", DividerList);
        }
    };
});
