System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./InfoTooltip"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, InfoTooltip_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (InfoTooltip_1_1) {
                InfoTooltip_1 = InfoTooltip_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: InfoTooltip_1.InfoTooltip,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/atoms/InfoTooltip'
            });
            exports_1("Default", Default = () => {
                return _jsx(InfoTooltip_1.InfoTooltip, { infoTooltipText: 'Info tooltip text' });
            });
        }
    };
});
