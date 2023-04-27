System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./EditorLink"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, EditorLink_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (EditorLink_1_1) {
                EditorLink_1 = EditorLink_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: EditorLink_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/EditorLink'
            });
            exports_1("Default", Default = () => {
                return _jsx(EditorLink_1.default, {});
            });
        }
    };
});
