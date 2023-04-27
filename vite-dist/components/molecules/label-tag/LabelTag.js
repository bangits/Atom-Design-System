System.register(["react/jsx-runtime", "@my-ui/core", "./LabelTag.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, LabelTag_module_scss_1, LabelTag;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LabelTag_module_scss_1_1) {
                LabelTag_module_scss_1 = LabelTag_module_scss_1_1;
            }
        ],
        execute: function () {
            LabelTag = ({ label, tag }) => {
                return (_jsxs("div", { className: LabelTag_module_scss_1.default.LabelTagBase, children: [_jsx(core_1.Typography, { variant: 'p4', className: LabelTag_module_scss_1.default['LabelTagBase--label'], children: label }), _jsx(core_1.Tag, { ...tag, className: LabelTag_module_scss_1.default['LabelTagBase--tag'] })] }));
            };
            exports_1("default", LabelTag);
        }
    };
});
