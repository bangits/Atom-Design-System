System.register(["react/jsx-runtime", "./AddConditionWrapper.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, AddConditionWrapper_module_scss_1, AddConditionWrapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (AddConditionWrapper_module_scss_1_1) {
                AddConditionWrapper_module_scss_1 = AddConditionWrapper_module_scss_1_1;
            }
        ],
        execute: function () {
            AddConditionWrapper = ({ children, bottomPart }) => {
                return (_jsxs("div", { className: AddConditionWrapper_module_scss_1.default.AddConditionWrapper, children: [children, bottomPart && _jsx("div", { className: AddConditionWrapper_module_scss_1.default.AddConditionWrapper__BottomPart, children: bottomPart })] }));
            };
            exports_1("default", AddConditionWrapper);
        }
    };
});
