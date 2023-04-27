System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./Dashboard"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, Dashboard_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (Dashboard_1_1) {
                Dashboard_1 = Dashboard_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: Dashboard_1.Dashboard,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/pages/Dashboard'
            });
            exports_1("Default", Default = () => {
                return _jsx(Dashboard_1.Dashboard, { username: 'Armen' });
            });
        }
    };
});
