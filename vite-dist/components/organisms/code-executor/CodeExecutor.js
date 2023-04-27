System.register(["react/jsx-runtime", "./CodeExecutor.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, CodeExecutor_module_scss_1, CodeExecutor;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (CodeExecutor_module_scss_1_1) {
                CodeExecutor_module_scss_1 = CodeExecutor_module_scss_1_1;
            }
        ],
        execute: function () {
            CodeExecutor = ({ srcDoc }) => (_jsx("div", { className: CodeExecutor_module_scss_1.default.container, children: _jsx("iframe", { className: CodeExecutor_module_scss_1.default.iframe, srcDoc: srcDoc, title: 'iframe' }) }));
            exports_1("default", CodeExecutor);
        }
    };
});
