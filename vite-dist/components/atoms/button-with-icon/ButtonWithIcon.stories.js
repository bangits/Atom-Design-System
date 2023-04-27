System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./ButtonWithIcon"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, ButtonWithIcon_1, Default;
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
            function (ButtonWithIcon_1_1) {
                ButtonWithIcon_1 = ButtonWithIcon_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: ButtonWithIcon_1.ButtonWithIcon,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/atoms/ButtonWithIcon'
            });
            exports_1("Default", Default = () => {
                return (_jsx(ButtonWithIcon_1.ButtonWithIcon, { icon: 'RotateIcon', onClick: addon_actions_1.action('onClick'), children: "Refresh" }));
            });
        }
    };
});
