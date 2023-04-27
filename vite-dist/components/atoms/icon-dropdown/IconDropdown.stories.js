System.register(["react/jsx-runtime", "@/atom-design-system", "@storybook/addon-knobs", "./IconDropdown"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, addon_knobs_1, IconDropdown_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (IconDropdown_1_1) {
                IconDropdown_1 = IconDropdown_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: IconDropdown_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/atoms/IconDropdown'
            });
            exports_1("Default", Default = () => {
                return (_jsx(IconDropdown_1.default, { children: _jsx(atom_design_system_1.Icons.AssignToIcon, {}) }));
            });
        }
    };
});
