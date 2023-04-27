System.register(["react/jsx-runtime", "@storybook/addon-knobs", "react", "./ChangePassword"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, react_1, ChangePassword_1, Default;
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
            function (ChangePassword_1_1) {
                ChangePassword_1 = ChangePassword_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: ChangePassword_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/Change Password'
            });
            exports_1("Default", Default = () => {
                return (_jsx(_Fragment, { children: _jsx(ChangePassword_1.default, { title: addon_knobs_1.text('title', 'Change Password'), skipOnSubmit: () => { }, subTitle: addon_knobs_1.text('subTitle', '  Please change your password below.'), skipButton: addon_knobs_1.text('skipButton', 'Skip'), changeButton: addon_knobs_1.text('changeButton', 'Change'), renderInputs: (InputComponent, name) => {
                            return (_jsx(react_1.default.Fragment, { children: _jsx(InputComponent, {}) }));
                        }, confirmPasswordInputName: addon_knobs_1.text('confirmPasswordInputName', 'confirmPasswordInputName'), newPasswordInputName: addon_knobs_1.text('newPasswordInputName', 'newPasswordInputName'), newPasswordInputLabel: 'newPassword', confirmPasswordInputLabel: 'confirmPassword' }) }));
            });
        }
    };
});
