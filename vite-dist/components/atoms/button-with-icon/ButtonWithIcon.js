System.register(["react/jsx-runtime", "@/atom-design-system", "classnames", "./ButtonWithIcon.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, classnames_1, ButtonWithIcon_module_scss_1, ButtonWithIcon;
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
            function (ButtonWithIcon_module_scss_1_1) {
                ButtonWithIcon_module_scss_1 = ButtonWithIcon_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("ButtonWithIcon", ButtonWithIcon = ({ children, icon, iconProps = {}, ...buttonProps }) => {
                const IconComponent = atom_design_system_1.Icons[icon];
                return (_jsx(_Fragment, { children: _jsxs("button", { type: 'button', ...buttonProps, className: classnames_1.default(ButtonWithIcon_module_scss_1.default.ButtonWithIcon, buttonProps.className), children: [_jsx("div", { className: ButtonWithIcon_module_scss_1.default.ButtonIconWrapper, children: _jsx(IconComponent, { ...iconProps }) }), children] }) }));
            });
        }
    };
});
