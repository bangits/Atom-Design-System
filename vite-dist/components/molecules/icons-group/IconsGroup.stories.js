System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./IconsGroup"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, IconsGroup_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (IconsGroup_1_1) {
                IconsGroup_1 = IconsGroup_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/molecules/Icons Group',
                component: IconsGroup_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(IconsGroup_1.default, { icons: [
                        {
                            icon: (_jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '1.2rem', viewBox: '0 0 24 24', children: _jsx("path", { fill: 'currentColor', d: 'M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z' }) }))
                        },
                        {
                            icon: (_jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '1.2rem', viewBox: '0 0 24 24', children: _jsx("path", { fill: 'currentColor', d: 'M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z' }) })),
                            isActive: true
                        },
                        {
                            icon: (_jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '1.2rem', viewBox: '0 0 24 24', children: _jsx("path", { fill: 'currentColor', d: 'M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z' }) }))
                        }
                    ] }));
            });
        }
    };
});
