System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./SliderBanners"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, SliderBanners_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (SliderBanners_1_1) {
                SliderBanners_1 = SliderBanners_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: SliderBanners_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/SliderBanners'
            });
            exports_1("Default", Default = () => {
                return (_jsx(SliderBanners_1.default, { banners: [
                        {
                            id: 1,
                            img: 'https://storageaccountatom.blob.core.windows.net/storage/iconimages/banners/8e79f0ea-3afe-452e-91bc-bbbd8e4a2012_Bull.png',
                            name: 'Blazing Bull'
                        }
                    ] }));
            });
        }
    };
});
