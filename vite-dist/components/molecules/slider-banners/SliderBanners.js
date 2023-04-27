System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./SliderBanners.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, SliderBanners_module_scss_1, SliderBanners;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (SliderBanners_module_scss_1_1) {
                SliderBanners_module_scss_1 = SliderBanners_module_scss_1_1;
            }
        ],
        execute: function () {
            SliderBanners = ({ banners }) => {
                return (_jsx("ul", { className: SliderBanners_module_scss_1.default.SliderBanners, children: banners.map((b, index) => (_jsxs("li", { className: classnames_1.default(SliderBanners_module_scss_1.default['SliderBanners__item'], SliderBanners_module_scss_1.default['SliderBannersItem']), children: [_jsxs(core_1.TextWithTooltip, { className: SliderBanners_module_scss_1.default['SliderBannersItem__name'], children: [index + 1, ". ", b.name] }), _jsx("img", { className: SliderBanners_module_scss_1.default['SliderBannersItem__img'], alt: b.name, src: b.img })] }, b.id))) }));
            };
            exports_1("default", SliderBanners);
        }
    };
});
