System.register(["react/jsx-runtime", "@/helpers", "@my-ui/core", "classnames", "./Form.module.scss", "./FormFields"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, core_1, classnames_1, Form_module_scss_1, FormFields_1, Form;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (Form_module_scss_1_1) {
                Form_module_scss_1 = Form_module_scss_1_1;
            },
            function (FormFields_1_1) {
                FormFields_1 = FormFields_1_1;
            }
        ],
        execute: function () {
            Form = ({ title, firstButtonProps, secondButtonProps, fields, showBackButton = false, bottomActions = false, description, renderInputs, onBackButtonClick }) => {
                return (_jsx(_Fragment, { children: _jsx("div", { className: Form_module_scss_1.default.ProviderWrapper, children: _jsxs(core_1.Card, { borderRadius: 1.6, className: Form_module_scss_1.default.ProviderCard, children: [_jsxs("div", { className: Form_module_scss_1.default.ProviderContainer, children: [_jsx(core_1.Typography, { variant: 'h3', color: 'primary', className: Form_module_scss_1.default.ProviderTitle, children: title }), _jsx(core_1.Typography, { variant: 'p3', className: Form_module_scss_1.default.ProviderDescription, children: description }), _jsx(FormFields_1.default, { fields: fields, renderInputs: renderInputs })] }), _jsxs("div", { className: classnames_1.default(Form_module_scss_1.default.ProviderButtonGroup, {
                                        [Form_module_scss_1.default['ProviderButtonGroup--bottomActions']]: bottomActions
                                    }), children: [showBackButton && (_jsx("button", { type: 'button', className: Form_module_scss_1.default.ProviderBackButton, onClick: onBackButtonClick, children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 8.1 8.1', fill: '#8EA6C1', children: _jsx("path", { d: 'M4 8.1s-.1 0-.2-.1L.1 4.3 0 4.2V4s0-.1.1-.1L3.8.2c.1-.2.4-.2.5-.1s.1.4 0 .5l-3 3.1h6.5c.2 0 .4.2.4.4s-.3.3-.5.3H1.3l3.1 3.1c.1.1.1.4 0 .5-.2.1-.3.1-.4.1z' }) }) })), _jsxs("div", { className: Form_module_scss_1.default.ProviderButtons, children: [_jsx(core_1.Button, { variant: 'ghost', ...firstButtonProps, className: classnames_1.default(Form_module_scss_1.default.ProviderCloseButton, firstButtonProps.className) }), _jsx(core_1.Button, { ...secondButtonProps, type: 'submit' })] })] })] }) }) }));
            };
            exports_1("default", helpers_1.typedMemo(Form));
        }
    };
});
