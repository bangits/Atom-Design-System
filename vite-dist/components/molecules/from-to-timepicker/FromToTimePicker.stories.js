System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./FromToTimePicker"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, FromToTimePicker_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (FromToTimePicker_1_1) {
                FromToTimePicker_1 = FromToTimePicker_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: FromToTimePicker_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/From To TimePicker'
            });
            exports_1("Default", Default = () => {
                return _jsx(FromToTimePicker_1.default, { onChange: addon_actions_1.action('onChange') });
            });
        }
    };
});
