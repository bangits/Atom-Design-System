System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./Divider"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, Divider_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (Divider_1_1) {
                Divider_1 = Divider_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: Divider_1.Divider,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/atoms/Divider'
            });
            exports_1("Default", Default = () => {
                return _jsx(Divider_1.Divider, { children: "Divider" });
            });
        }
    };
});
