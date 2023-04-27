System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./LoadingPage"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, LoadingPage_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (LoadingPage_1_1) {
                LoadingPage_1 = LoadingPage_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/pages/Loading Page',
                component: LoadingPage_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return _jsx(LoadingPage_1.default, {});
            });
        }
    };
});
