System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./Label.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, Label_module_scss_1, Label;
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
            function (Label_module_scss_1_1) {
                Label_module_scss_1 = Label_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("Label", Label = ({ text, optional = false, isForInput = false, optionalText }) => {
                return (_jsxs(core_1.Typography, { variant: isForInput ? 'p4' : 'p5', className: classnames_1.default(Label_module_scss_1.default.Label, {
                        [Label_module_scss_1.default['Label--for-input']]: isForInput
                    }), children: [text, optional && _jsx("span", { className: Label_module_scss_1.default.LabelOptional, children: optionalText })] }));
            });
        }
    };
});
