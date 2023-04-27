System.register(["react/jsx-runtime", "@my-ui/core", "./DetailsPage.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, DetailsPage_module_scss_1, DetailsPage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DetailsPage_module_scss_1_1) {
                DetailsPage_module_scss_1 = DetailsPage_module_scss_1_1;
            }
        ],
        execute: function () {
            DetailsPage = ({ breadCrumbLinks, sidebarContent, children }) => {
                return (_jsxs("div", { className: DetailsPage_module_scss_1.default.DetailsPage, children: [breadCrumbLinks && (_jsx("div", { className: DetailsPage_module_scss_1.default['DetailsPage__breadCrumb'], children: _jsx(core_1.Breadcrumb, { links: breadCrumbLinks }) })), _jsxs("div", { className: DetailsPage_module_scss_1.default['DetailsPage__content-wrapper'], children: [sidebarContent && _jsx("div", { children: sidebarContent }), _jsx("div", { className: DetailsPage_module_scss_1.default['DetailsPage__content'], children: children })] })] }));
            };
            exports_1("default", DetailsPage);
        }
    };
});
