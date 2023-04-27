System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "@storybook/addon-knobs", "./ButtonForm"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, addon_knobs_1, ButtonForm_1, Default;
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
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ButtonForm_1_1) {
                ButtonForm_1 = ButtonForm_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/ButtonForm',
                component: ButtonForm_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(ButtonForm_1.default, { getContainerProps: ({ open, close }) => ({
                        onMouseOver: open,
                        onMouseLeave: close
                    }), renderOpenElement: () => (_jsx(core_1.Button, { variant: 'link', startIcon: _jsx(atom_design_system_1.Icons.PlusCircleLarge, {}), children: "Add Link" })), children: ({ close }) => (_jsxs("div", { children: [_jsx(atom_design_system_1.FormFields, { fields: [
                                    {
                                        name: 'input',
                                        type: 'input'
                                    }
                                ], removeMargin: true, renderInputs: (Component) => _jsx(Component, {}) }), _jsx(core_1.Button, { onClick: close, children: "Save" })] })) }));
            });
        }
    };
});
