System.register(["react/jsx-runtime", "@my-ui/core", "./LabelEndMark.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, LabelEndMark_module_scss_1, LabelEndMark;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LabelEndMark_module_scss_1_1) {
                LabelEndMark_module_scss_1 = LabelEndMark_module_scss_1_1;
            }
        ],
        execute: function () {
            LabelEndMark = ({ label, text, noDataText = 'N/A' }) => {
                return (_jsxs("div", { className: LabelEndMark_module_scss_1.default.LabelEndMarkBase, children: [_jsxs(core_1.Typography, { variant: 'p4', color: 'primary', children: [label, ":", ' '] }), _jsx(core_1.Typography, { variant: 'p4', className: LabelEndMark_module_scss_1.default['LabelEndMarkBase--description'], children: text || noDataText })] }));
            };
            exports_1("default", LabelEndMark);
        }
    };
});
