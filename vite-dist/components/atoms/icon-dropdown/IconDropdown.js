System.register(["react/jsx-runtime", "./IconDropdown.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, IconDropdown_module_scss_1, IconDropdown;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (IconDropdown_module_scss_1_1) {
                IconDropdown_module_scss_1 = IconDropdown_module_scss_1_1;
            }
        ],
        execute: function () {
            IconDropdown = ({ children }) => {
                return _jsx("div", { className: IconDropdown_module_scss_1.default.IconDropdown, children: children });
            };
            exports_1("default", IconDropdown);
        }
    };
});
