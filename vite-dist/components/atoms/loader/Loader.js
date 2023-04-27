System.register(["react/jsx-runtime", "./Loader.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, Loader_module_scss_1, Loader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (Loader_module_scss_1_1) {
                Loader_module_scss_1 = Loader_module_scss_1_1;
            }
        ],
        execute: function () {
            Loader = () => {
                return _jsx("div", { className: Loader_module_scss_1.default.Loader, children: "Loading..." });
            };
            exports_1("default", Loader);
        }
    };
});
