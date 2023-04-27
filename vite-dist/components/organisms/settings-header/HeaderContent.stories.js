System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./HeaderContent"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, HeaderContent_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (HeaderContent_1_1) {
                HeaderContent_1 = HeaderContent_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Header Content',
                component: HeaderContent_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(HeaderContent_1.default, { title: 'Navbar Pages', links: [
                        {
                            name: 'Page 1',
                            url: 'http://website.com'
                        },
                        {
                            name: 'Link 1',
                            url: 'http://website.com',
                            isLink: true
                        }
                    ] }));
            });
        }
    };
});
