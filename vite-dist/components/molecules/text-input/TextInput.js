System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@my-ui/core", "classnames", "./TextInput.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, core_1, classnames_1, TextInput_module_scss_1, TextInput;
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
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (TextInput_module_scss_1_1) {
                TextInput_module_scss_1 = TextInput_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("TextInput", TextInput = ({ tooltipProps, showLengthQuantity, containerClassName, ...props }) => {
                const TooltipIcon = tooltipProps && atom_design_system_1.Icons[tooltipProps.icon || 'InfoTooltipIcon'];
                return (_jsxs(_Fragment, { children: [_jsxs("div", { className: classnames_1.default(TextInput_module_scss_1.default.TextInputContainer, containerClassName), children: [tooltipProps && (_jsx(core_1.Tooltip, { showEvent: 'hover', text: tooltipProps.tooltipText, placement: 'top', children: _jsx("div", { className: TextInput_module_scss_1.default.TextInputContainer__Tooltip, children: _jsx(TooltipIcon, {}) }) })), _jsx(core_1.TextInput, { className: props.textarea && TextInput_module_scss_1.default.TextArea, ...props, label: props.label && (_jsx(components_1.Label, { isForInput: true, text: props.label, optional: !!props.optionalText, optionalText: `(${props.optionalText})` })) })] }), showLengthQuantity && (_jsxs("div", { className: TextInput_module_scss_1.default.TextQuantityContainer, children: [props?.value?.toString().length, props?.maxLength && '/' + props?.maxLength] }))] }));
            });
        }
    };
});
