System.register(["react/jsx-runtime", "@/atom-design-system", "@/icons", "@my-ui/core", "./UserProjects.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, icons_1, core_1, UserProjects_module_scss_1, UserProjects;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserProjects_module_scss_1_1) {
                UserProjects_module_scss_1 = UserProjects_module_scss_1_1;
            }
        ],
        execute: function () {
            UserProjects = () => {
                return (_jsxs(_Fragment, { children: [_jsxs("div", { className: UserProjects_module_scss_1.default.UserProjectsWrapper, children: [_jsx("div", { className: UserProjects_module_scss_1.default.AddButtonWrapper, children: _jsx(atom_design_system_1.Icons.PlusCircleLarge, { className: UserProjects_module_scss_1.default.AddButton }) }), _jsx(core_1.Typography, { component: 'h4', variant: 'h6', className: UserProjects_module_scss_1.default.TitleUserProjects, children: "Add Partner & Projects" }), _jsxs(core_1.Typography, { component: 'span', variant: 'p4', className: UserProjects_module_scss_1.default.UserProjectsText, children: [_jsx("a", { href: '', children: "Click here" }), " to add partner and projects"] })] }), _jsxs("div", { className: UserProjects_module_scss_1.default.NoDataWrapper, style: { display: 'none' }, children: [_jsx(icons_1.NoDataIcon, {}), _jsx(core_1.Typography, { component: 'h4', variant: 'h6', className: UserProjects_module_scss_1.default.TitleUserProjects, children: "Add Partner & Projects" }), _jsxs(core_1.Typography, { component: 'span', variant: 'p4', className: UserProjects_module_scss_1.default.UserProjectsText, children: [_jsx("a", { href: '', children: "Click here" }), " to add partner and projects"] })] })] }));
            };
            exports_1("default", UserProjects);
        }
    };
});
