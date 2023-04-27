System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@/components/molecules", "@/helpers", "@/icons", "@my-ui/core", "react", "./SignIn.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, molecules_1, helpers_1, icons_1, core_1, react_1, SignIn_module_scss_1, SignIn;
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
            function (molecules_1_1) {
                molecules_1 = molecules_1_1;
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (SignIn_module_scss_1_1) {
                SignIn_module_scss_1 = SignIn_module_scss_1_1;
            }
        ],
        execute: function () {
            SignIn = ({ title, subtitle, buttonText, renderInputs, usernameInputLabel, passwordInputLabel, buttonProps, loginErrorMessage, usernameInputName = 'E-mail', passwordInputName = 'Password' }) => {
                const createEmailInputRenderer = react_1.useCallback((inputProps) => (props) => _jsx(components_1.TextInput, { id: 'email', containerClassName: SignIn_module_scss_1.default.LoginBottom, ...inputProps, ...props, fullWidth: true }), []);
                const createPasswordInputRenderer = react_1.useCallback((inputProps) => (props) => _jsx(molecules_1.PasswordInput, { id: 'password', containerClassName: SignIn_module_scss_1.default.LoginBottom, ...inputProps, ...props }), []);
                const emailInput = react_1.useMemo(() => renderInputs(createEmailInputRenderer({
                    label: usernameInputLabel,
                    type: 'text',
                    startIcon: _jsx(atom_design_system_1.Icons.UserIcon, {})
                }), usernameInputName), [renderInputs, usernameInputLabel, usernameInputName]);
                const passwordInput = react_1.useMemo(() => renderInputs(createPasswordInputRenderer({
                    label: passwordInputLabel,
                    type: 'password'
                }), passwordInputName), [renderInputs, passwordInputLabel, passwordInputName]);
                return (_jsxs("div", { className: SignIn_module_scss_1.default.LoginPageWrapper, children: [_jsx(icons_1.SignInImage, { className: SignIn_module_scss_1.default.SignInImage }), _jsx("div", { className: SignIn_module_scss_1.default.LoginContainer, children: _jsxs("div", { className: SignIn_module_scss_1.default.LoginComponentsContainer, children: [_jsx(core_1.Typography, { variant: 'h3', component: 'h2', className: SignIn_module_scss_1.default.LoginPageTitle, children: title }), _jsx(core_1.Typography, { variant: 'p4', component: 'p', className: SignIn_module_scss_1.default.LoginPageSubTitle, children: subtitle }), _jsxs("div", { className: SignIn_module_scss_1.default.FormWrapper, children: [emailInput, passwordInput, loginErrorMessage && (_jsx(core_1.Typography, { variant: 'p5', color: 'danger', className: SignIn_module_scss_1.default.ErrorMessage, children: loginErrorMessage }))] }), _jsx("div", { className: SignIn_module_scss_1.default.LoginButton, children: _jsx(core_1.Button, { type: 'submit', ...buttonProps, children: buttonText }) })] }) })] }));
            };
            exports_1("default", helpers_1.typedMemo(SignIn));
        }
    };
});
