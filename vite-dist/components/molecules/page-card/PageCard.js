System.register(["react/jsx-runtime", "@my-ui/core", "./PageCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, PageCard_module_scss_1, PageCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (PageCard_module_scss_1_1) {
                PageCard_module_scss_1 = PageCard_module_scss_1_1;
            }
        ],
        execute: function () {
            PageCard = ({ children, breadcrumbProps }) => {
                const cardElement = _jsx(core_1.Card, { className: PageCard_module_scss_1.default.PageCard, children: children });
                return breadcrumbProps ? (_jsxs("div", { className: PageCard_module_scss_1.default.PageCardWrapper, children: [_jsx("div", { className: PageCard_module_scss_1.default['PageCardWrapper__breadcrumb'], children: _jsx(core_1.Breadcrumb, { ...breadcrumbProps }) }), cardElement] })) : (cardElement);
            };
            exports_1("default", PageCard);
        }
    };
});
