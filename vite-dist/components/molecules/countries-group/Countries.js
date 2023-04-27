System.register(["react/jsx-runtime", "@my-ui/core", "./Countries.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, Countries_module_scss_1, Countries;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Countries_module_scss_1_1) {
                Countries_module_scss_1 = Countries_module_scss_1_1;
            }
        ],
        execute: function () {
            Countries = ({ tagCountries, isCmsUser = false }) => {
                return (_jsx("div", { className: Countries_module_scss_1.default.CountriesWrapper, children: tagCountries?.map((tagCountry, idx) => (_jsx(core_1.TagCountry, { imgSrc: tagCountry.imgSrc, tagName: tagCountry.tagName }, idx))) }));
            };
            exports_1("default", Countries);
        }
    };
});
