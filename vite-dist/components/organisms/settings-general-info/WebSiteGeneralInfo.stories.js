System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./WebSiteGeneralInfo"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, WebSiteGeneralInfo_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (WebSiteGeneralInfo_1_1) {
                WebSiteGeneralInfo_1 = WebSiteGeneralInfo_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/WebSiteSettings General Information',
                component: WebSiteGeneralInfo_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(WebSiteGeneralInfo_1.default, { noDataText: 'Not Completed', supportedCurrencies: {
                        title: '',
                        total: '',
                        currencies: []
                    }, supportedCountries: {
                        title: '',
                        total: '',
                        countries: []
                    }, supportedLanguages: {
                        title: '',
                        total: '',
                        languages: []
                    }, restrictedCountries: {
                        title: '',
                        total: '',
                        countries: []
                    } }));
            });
        }
    };
});
