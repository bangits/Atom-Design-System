System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./LabelEndMark"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, LabelEndMark_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (LabelEndMark_1_1) {
                LabelEndMark_1 = LabelEndMark_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/molecules/LabelEndMark',
                decorators: [addon_knobs_1.withKnobs],
                component: LabelEndMark_1.default
            });
            exports_1("Default", Default = () => {
                return _jsx(LabelEndMark_1.default, { label: 'Local Time', text: '12/27/2021/6:52' });
            });
        }
    };
});
