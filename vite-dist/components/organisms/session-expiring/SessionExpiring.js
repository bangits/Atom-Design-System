System.register(["react/jsx-runtime", "@/icons", "@my-ui/core", "./SessionExpiring.module.scss", "./Timer"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, core_1, SessionExpiring_module_scss_1, Timer_1, ChangePassword;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SessionExpiring_module_scss_1_1) {
                SessionExpiring_module_scss_1 = SessionExpiring_module_scss_1_1;
            },
            function (Timer_1_1) {
                Timer_1 = Timer_1_1;
            }
        ],
        execute: function () {
            ChangePassword = ({ title, subTitle, logOutButton, extend, buttonProps, timeRemaining }) => {
                return (_jsx("div", { className: SessionExpiring_module_scss_1.default.SessionExpiringWrapper, children: _jsx(core_1.Card, { className: SessionExpiring_module_scss_1.default.CardWrapper, children: _jsxs("div", { className: SessionExpiring_module_scss_1.default.ChangeContent, children: [_jsx(icons_1.WarningIcon, { className: SessionExpiring_module_scss_1.default.Icon }), _jsx(core_1.Typography, { variant: 'h2', component: 'h2', children: title }), _jsx(core_1.Typography, { variant: 'p3', component: 'p', children: subTitle }), _jsx("div", { className: SessionExpiring_module_scss_1.default.TimeLabel, children: _jsx("span", { children: timeRemaining }) }), _jsx("div", { className: SessionExpiring_module_scss_1.default.InputsGroup, children: _jsx("div", { className: SessionExpiring_module_scss_1.default.Timer, children: _jsx(Timer_1.default, {}) }) }), _jsxs("div", { className: SessionExpiring_module_scss_1.default.BtnGroup, children: [_jsx(core_1.Button, { variant: 'ghost', children: extend }), _jsx(core_1.Button, { type: 'submit', ...buttonProps, children: logOutButton })] })] }) }) }));
            };
            exports_1("default", ChangePassword);
        }
    };
});
