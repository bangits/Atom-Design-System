System.register(["react/jsx-runtime", "@/atom-design-system", "./FormWithInput", "./PopoverWithInput.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, FormWithInput_1, PopoverWithInput_module_scss_1, PopoverWithInput;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (FormWithInput_1_1) {
                FormWithInput_1 = FormWithInput_1_1;
            },
            function (PopoverWithInput_module_scss_1_1) {
                PopoverWithInput_module_scss_1 = PopoverWithInput_module_scss_1_1;
            }
        ],
        execute: function () {
            PopoverWithInput = ({ showPosition, component: Component = 'div', renderOpenElement, ...formWithInputProps }) => (_jsx(Component, { className: PopoverWithInput_module_scss_1.default['PopoverWithInput'], children: _jsx(atom_design_system_1.ButtonForm, { showPosition: showPosition, renderOpenElement: renderOpenElement, children: ({ close }) => _jsx(FormWithInput_1.default, { ...formWithInputProps, close: close }) }) }));
            exports_1("default", PopoverWithInput);
        }
    };
});
