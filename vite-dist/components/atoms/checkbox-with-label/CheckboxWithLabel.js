System.register(["react/jsx-runtime", "@/helpers", "@/icons", "@my-ui/core", "classnames", "./CheckboxWithLabel.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, icons_1, core_1, classnames_1, CheckboxWithLabel_module_scss_1, CheckboxWithLabel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (CheckboxWithLabel_module_scss_1_1) {
                CheckboxWithLabel_module_scss_1 = CheckboxWithLabel_module_scss_1_1;
            }
        ],
        execute: function () {
            CheckboxWithLabel = ({ label, className, variant = 'checkbox', tooltipText, ...checkboxProps }) => {
                const { disabled } = checkboxProps;
                return (_jsxs("label", { className: classnames_1.default(CheckboxWithLabel_module_scss_1.default.Checkbox, CheckboxWithLabel_module_scss_1.default[`Checkbox--${variant}`], {
                        [CheckboxWithLabel_module_scss_1.default['Checkbox--disabled']]: disabled
                    }, className), children: [_jsx("span", { children: tooltipText && (_jsx(core_1.Tooltip, { text: tooltipText, children: _jsx(icons_1.InfoTooltipIcon, { className: CheckboxWithLabel_module_scss_1.default['Checkbox-tooltip'], width: '1.5rem', height: '1.5rem' }) })) }), _jsx("span", { className: CheckboxWithLabel_module_scss_1.default.CheckboxLabel, children: label }), _jsx("span", { className: CheckboxWithLabel_module_scss_1.default.CheckboxContainer, children: _jsx(core_1.Checkbox, { ...checkboxProps, variant: variant }) })] }));
            };
            exports_1("default", helpers_1.typedMemo(CheckboxWithLabel));
        }
    };
});
