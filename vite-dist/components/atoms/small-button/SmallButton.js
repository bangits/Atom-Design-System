System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./SmallButton.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, SmallButton_module_scss_1, SmallButton;
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
            function (SmallButton_module_scss_1_1) {
                SmallButton_module_scss_1 = SmallButton_module_scss_1_1;
            }
        ],
        execute: function () {
            SmallButton = (buttonProps) => {
                return _jsx(core_1.Button, { ...buttonProps, className: classnames_1.default(SmallButton_module_scss_1.default.SmallButton, buttonProps.className), variant: 'link' });
            };
            exports_1("default", SmallButton);
        }
    };
});
