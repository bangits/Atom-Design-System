System.register(["react/jsx-runtime", "../../atoms/loader", "./LoadingPage.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, loader_1, LoadingPage_module_scss_1, LoadingPage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (LoadingPage_module_scss_1_1) {
                LoadingPage_module_scss_1 = LoadingPage_module_scss_1_1;
            }
        ],
        execute: function () {
            LoadingPage = () => {
                return (_jsx("div", { className: LoadingPage_module_scss_1.default.LoadingPageWrapper, children: _jsx(loader_1.Loader, {}) }));
            };
            exports_1("default", LoadingPage);
        }
    };
});
