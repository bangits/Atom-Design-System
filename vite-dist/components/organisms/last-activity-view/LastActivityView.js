System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./LastActivityView.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, LastActivityView_module_scss_1, LastActivityView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (LastActivityView_module_scss_1_1) {
                LastActivityView_module_scss_1 = LastActivityView_module_scss_1_1;
            }
        ],
        execute: function () {
            LastActivityView = ({ lastActivity }) => {
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(LastActivityView_module_scss_1.default.LastActivityView), children: [_jsx("span", { children: lastActivity.title }), _jsx("div", { className: classnames_1.default(LastActivityView_module_scss_1.default['LastActivityView--container']), children: lastActivity.info.map((i) => (_jsxs("div", { children: [_jsx("span", { className: classnames_1.default(LastActivityView_module_scss_1.default['LastActivityView--label']), children: i.label }), _jsx("span", { className: classnames_1.default(LastActivityView_module_scss_1.default['LastActivityView--date']), children: i.date })] }, i.label))) })] }));
            };
            exports_1("default", LastActivityView);
        }
    };
});
