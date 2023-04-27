System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./SpeedIndicator"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, SpeedIndicator_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (SpeedIndicator_1_1) {
                SpeedIndicator_1 = SpeedIndicator_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/atoms/Speed Indicator',
                decorators: [addon_knobs_1.withKnobs],
                component: SpeedIndicator_1.default
            });
            exports_1("Default", Default = () => {
                return _jsx(SpeedIndicator_1.default, { speed: 1 });
            });
        }
    };
});
