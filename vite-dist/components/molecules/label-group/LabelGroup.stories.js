System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./LabelGroup"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, LabelGroup_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (LabelGroup_1_1) {
                LabelGroup_1 = LabelGroup_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: LabelGroup_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/LabelGroup'
            });
            exports_1("Default", Default = () => {
                return _jsx(LabelGroup_1.default, { title: 'Total Market', totalLabel: '19 Countries' });
            });
        }
    };
});
