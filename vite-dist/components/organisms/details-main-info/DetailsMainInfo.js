System.register(["react/jsx-runtime", "@my-ui/core", "./DetailsMainInfo.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, DetailsMainInfo_module_scss_1, DetailsMainInfo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DetailsMainInfo_module_scss_1_1) {
                DetailsMainInfo_module_scss_1 = DetailsMainInfo_module_scss_1_1;
            }
        ],
        execute: function () {
            DetailsMainInfo = ({ label, id, src, noDataText }) => {
                return (_jsxs(core_1.Card, { className: DetailsMainInfo_module_scss_1.default.DetailsMainInfoWrapper, borderRadius: 1.6, children: [_jsx("div", { className: DetailsMainInfo_module_scss_1.default.MainLogoContent, children: _jsx("img", { src: src, alt: 'logo' }) }), _jsx(core_1.Typography, { variant: 'h6', component: 'h6', className: DetailsMainInfo_module_scss_1.default.BrandTitle, children: label || noDataText }), _jsx(core_1.Typography, { variant: 'p5', component: 'p', className: DetailsMainInfo_module_scss_1.default.IdNumbers, children: id || noDataText })] }));
            };
            exports_1("default", DetailsMainInfo);
        }
    };
});
