System.register(["react/jsx-runtime", "@storybook/addon-knobs", "react", "./SignIn"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, react_1, SignIn_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (SignIn_1_1) {
                SignIn_1 = SignIn_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: SignIn_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/pages/Sign In'
            });
            exports_1("Default", Default = () => {
                return (_jsx(SignIn_1.default, { title: addon_knobs_1.text('title', 'Sign In'), subtitle: addon_knobs_1.text('subtitle', 'Login to manage your account'), buttonText: addon_knobs_1.text('buttonText', 'Login'), renderInputs: (InputComponent, name) => {
                        return (_jsx(react_1.default.Fragment, { children: _jsx(InputComponent, {}) }));
                    }, passwordInputLabel: 'password', usernameInputLabel: 'username', loginErrorMessage: 'loginErrorMessage' }));
            });
        }
    };
});
