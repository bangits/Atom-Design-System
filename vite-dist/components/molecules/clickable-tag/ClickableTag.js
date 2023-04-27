System.register(["react/jsx-runtime", "@my-ui/core", "./ClickableTag.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, ClickableTag_module_scss_1, ClickableTag;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ClickableTag_module_scss_1_1) {
                ClickableTag_module_scss_1 = ClickableTag_module_scss_1_1;
            }
        ],
        execute: function () {
            ClickableTag = ({ component: Component = 'a', ...props }) => {
                return (_jsx(Component, { className: ClickableTag_module_scss_1.default.ClickableTag, children: _jsx(core_1.Tag, { ...props, className: ClickableTag_module_scss_1.default['ClickableTag__tag'] }) }));
            };
            exports_1("default", ClickableTag);
        }
    };
});
