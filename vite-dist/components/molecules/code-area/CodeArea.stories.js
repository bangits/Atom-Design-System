System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./CodeArea"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, CodeArea_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (CodeArea_1_1) {
                CodeArea_1 = CodeArea_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: CodeArea_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/CodeArea'
            });
            exports_1("Default", Default = () => {
                const area = document.getElementById('textarea');
                return _jsx(CodeArea_1.default, { title: 'asd', onChange: (e) => console });
            });
        }
    };
});
