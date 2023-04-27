System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./ClickableTag"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, ClickableTag_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ClickableTag_1_1) {
                ClickableTag_1 = ClickableTag_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: ClickableTag_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/ClickableTag'
            });
            exports_1("Default", Default = () => {
                return _jsx(ClickableTag_1.default, { title: 'ClickableTag', component: (props) => _jsx("a", { href: '#', ...props }) });
            });
        }
    };
});
