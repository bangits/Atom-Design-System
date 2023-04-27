System.register(["react/jsx-runtime", "@/components", "@my-ui/core", "./WebSiteGeneralInfo.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, WebSiteGeneralInfo_module_scss_1, WebSiteGeneralInfo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (WebSiteGeneralInfo_module_scss_1_1) {
                WebSiteGeneralInfo_module_scss_1 = WebSiteGeneralInfo_module_scss_1_1;
            }
        ],
        execute: function () {
            WebSiteGeneralInfo = ({ supportedLanguages, supportedCountries, restrictedCountries, supportedCurrencies, noDataText }) => {
                return (_jsxs("div", { className: WebSiteGeneralInfo_module_scss_1.default['WebSiteGeneralInfo--items'], children: [_jsx(components_1.LabelGroup, { title: supportedLanguages.title, totalLabel: supportedLanguages.languages?.length > 0 ? supportedLanguages.total : '', children: supportedLanguages.languages?.length > 0 ? (_jsx(components_1.CurrencyGroup, { currencies: supportedLanguages?.languages })) : (_jsx(core_1.Typography, { variant: 'p4', className: WebSiteGeneralInfo_module_scss_1.default['WebSiteGeneralInfo--notCompleted'], children: noDataText })) }), _jsx(components_1.LabelGroup, { title: supportedCountries?.title, totalLabel: supportedCountries?.countries?.length > 0 ? supportedCountries?.total : '', children: supportedCountries?.countries?.length > 0 ? (_jsx(components_1.Countries, { tagCountries: supportedCountries?.countries })) : (_jsx(core_1.Typography, { variant: 'p4', className: WebSiteGeneralInfo_module_scss_1.default['WebSiteGeneralInfo--notCompleted'], children: noDataText })) }), _jsx(components_1.LabelGroup, { title: restrictedCountries.title, totalLabel: restrictedCountries?.countries?.length > 0 ? restrictedCountries?.total : '', children: restrictedCountries?.countries?.length > 0 ? (_jsx(components_1.Countries, { tagCountries: restrictedCountries?.countries })) : (_jsx(core_1.Typography, { variant: 'p4', className: WebSiteGeneralInfo_module_scss_1.default['WebSiteGeneralInfo--notCompleted'], children: noDataText })) }), _jsx(components_1.LabelGroup, { title: supportedCurrencies?.title, totalLabel: supportedCurrencies?.currencies?.length > 0 ? supportedCurrencies?.total : '', children: supportedCurrencies?.currencies?.length > 0 ? (_jsx(components_1.CurrencyGroup, { currencies: supportedCurrencies?.currencies })) : (_jsx(core_1.Typography, { variant: 'p4', className: WebSiteGeneralInfo_module_scss_1.default['WebSiteGeneralInfo--notCompleted'], children: noDataText })) })] }));
            };
            exports_1("default", WebSiteGeneralInfo);
        }
    };
});
