System.register(["react/jsx-runtime", "./ElementsGroup.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, ElementsGroup_module_scss_1, ElementsGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (ElementsGroup_module_scss_1_1) {
                ElementsGroup_module_scss_1 = ElementsGroup_module_scss_1_1;
            }
        ],
        execute: function () {
            ElementsGroup = ({ children }) => {
                return _jsx("div", { className: ElementsGroup_module_scss_1.default.ElementsGroup, children: children });
            };
            exports_1("default", ElementsGroup);
        }
    };
});
