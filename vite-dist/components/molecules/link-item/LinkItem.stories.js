System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./LinkItem"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, LinkItem_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (LinkItem_1_1) {
                LinkItem_1 = LinkItem_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: LinkItem_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/LinkItem'
            });
            exports_1("Default", Default = () => {
                return (_jsx(LinkItem_1.default, { imgSrc: 'https://i.ibb.co/y6GKtg0/linkedin-1-2.png', index: '1.', linkHref: 'https://www.linkedin.com/feed/' }));
            });
        }
    };
});
