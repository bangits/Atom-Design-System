System.register(["react/jsx-runtime", "./Dashboard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, Dashboard_module_scss_1, Dashboard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (Dashboard_module_scss_1_1) {
                Dashboard_module_scss_1 = Dashboard_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("Dashboard", Dashboard = ({ username }) => {
                return (_jsxs("div", { className: Dashboard_module_scss_1.default.DashboardWrapper, children: [_jsx("div", { className: Dashboard_module_scss_1.default.DashboardIllustration, children: _jsx("img", { src: 'https://storageaccountatom.blob.core.windows.net/mfe/logo-black.svg', alt: 'Logo' }) }), _jsxs("h1", { className: Dashboard_module_scss_1.default.DashboardTitle, children: ["Welcome!", _jsxs("span", { children: ["Dear ", _jsxs("strong", { children: [username, ","] }), " we are happy to welcome you in backoffice.atomconstruct.com."] })] })] }));
            });
        }
    };
});
