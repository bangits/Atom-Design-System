System.register(["react/jsx-runtime", "@storybook/addon-knobs", "../clickable-tag", "./ElementsGroup"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, clickable_tag_1, ElementsGroup_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (clickable_tag_1_1) {
                clickable_tag_1 = clickable_tag_1_1;
            },
            function (ElementsGroup_1_1) {
                ElementsGroup_1 = ElementsGroup_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: ElementsGroup_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/ElementsGroup'
            });
            exports_1("Default", Default = () => {
                return (_jsx(ElementsGroup_1.default, { children: new Array(30).fill(null).map((_, index) => (_jsx(clickable_tag_1.ClickableTag, { title: 'ClickableTag', component: (props) => _jsx("a", { href: '#', ...props }) }, index))) }));
            });
        }
    };
});
