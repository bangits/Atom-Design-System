System.register(["react/jsx-runtime", "@my-ui/core", "./LabelGroup.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, LabelGroup_module_scss_1, LabelGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LabelGroup_module_scss_1_1) {
                LabelGroup_module_scss_1 = LabelGroup_module_scss_1_1;
            }
        ],
        execute: function () {
            LabelGroup = ({ children, title, totalLabel }) => {
                return (_jsxs("div", { className: LabelGroup_module_scss_1.default.LabelGroupWrapper, children: [_jsxs("div", { className: LabelGroup_module_scss_1.default.LabelGroupContainer, children: [_jsx(core_1.Typography, { component: 'span', variant: 'p4', className: LabelGroup_module_scss_1.default.FirstLabel, children: title }), _jsx(core_1.Typography, { component: 'span', variant: 'p4', className: LabelGroup_module_scss_1.default.CountriesLabel, children: totalLabel && _jsxs(_Fragment, { children: ["( ", totalLabel, " )"] }) })] }), children] }));
            };
            exports_1("default", LabelGroup);
        }
    };
});
