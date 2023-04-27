System.register(["react/jsx-runtime", "@storybook/addon-knobs", "../clickable-tag", "../elements-group", "./PageCard"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, clickable_tag_1, elements_group_1, PageCard_1, Default;
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
            function (elements_group_1_1) {
                elements_group_1 = elements_group_1_1;
            },
            function (PageCard_1_1) {
                PageCard_1 = PageCard_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: PageCard_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/PageCard'
            });
            exports_1("Default", Default = () => {
                return (_jsx(PageCard_1.default, { children: _jsx(elements_group_1.ElementsGroup, { children: new Array(30).fill(null).map((_, index) => (_jsx(clickable_tag_1.ClickableTag, { title: 'ClickableTag', component: (props) => _jsx("a", { href: '#', ...props }) }, index))) }) }));
            });
        }
    };
});
