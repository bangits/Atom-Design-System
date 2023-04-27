System.register(["react/jsx-runtime", "@/components/molecules", "@/icons", "@my-ui/core", "react", "./ChangePassword.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, molecules_1, icons_1, core_1, react_1, ChangePassword_module_scss_1, ChangePassword;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (molecules_1_1) {
                molecules_1 = molecules_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (ChangePassword_module_scss_1_1) {
                ChangePassword_module_scss_1 = ChangePassword_module_scss_1_1;
            }
        ],
        execute: function () {
            ChangePassword = ({ title, subTitle, changeButton, skipButton, newPasswordInputName = 'New Password', confirmPasswordInputName = 'Confirm Password', buttonProps, renderInputs, changePasswordErrorMessageName, newPasswordInputLabel, confirmPasswordInputLabel, skipOnSubmit }) => {
                const createPasswordInputRenderer = react_1.useCallback((inputProps) => (props) => _jsx(molecules_1.PasswordInput, { ...inputProps, ...props }), []);
                const newPasswordInput = react_1.useMemo(() => renderInputs(createPasswordInputRenderer({
                    label: newPasswordInputLabel,
                    type: 'password'
                }), newPasswordInputName), [renderInputs, newPasswordInputLabel, newPasswordInputName]);
                const confirmPasswordInput = react_1.useMemo(() => renderInputs(createPasswordInputRenderer({
                    label: confirmPasswordInputLabel,
                    type: 'password'
                }), confirmPasswordInputName), [renderInputs, confirmPasswordInputLabel, confirmPasswordInputName]);
                return (_jsx("div", { className: ChangePassword_module_scss_1.default.ChangePasswordWrapper, children: _jsx(core_1.Card, { className: ChangePassword_module_scss_1.default.CardWrapper, children: _jsxs("div", { className: ChangePassword_module_scss_1.default.ChangeContent, children: [_jsx(icons_1.ChangePasswordIcon, { className: ChangePassword_module_scss_1.default.Icon }), _jsx(core_1.Typography, { variant: 'h2', component: 'h2', children: title }), _jsx(core_1.Typography, { variant: 'p3', component: 'p', children: subTitle }), _jsxs("div", { className: ChangePassword_module_scss_1.default.InputsGroup, children: [_jsx("div", { className: ChangePassword_module_scss_1.default.InputContent, children: newPasswordInput }), _jsxs("div", { className: ChangePassword_module_scss_1.default.InputContent, children: [confirmPasswordInput, changePasswordErrorMessageName && (_jsx(core_1.Typography, { variant: 'p5', color: 'danger', className: ChangePassword_module_scss_1.default.ErrorMessage, children: changePasswordErrorMessageName }))] })] }), _jsxs("div", { className: ChangePassword_module_scss_1.default.BtnGroup, children: [_jsx(core_1.Button, { type: 'button', variant: 'ghost', onClick: skipOnSubmit, children: skipButton }), _jsx(core_1.Button, { type: 'submit', ...buttonProps, children: changeButton })] })] }) }) }));
            };
            exports_1("default", ChangePassword);
        }
    };
});
