System.register(["react/jsx-runtime", "@/components", "@my-ui/core", "./ProvidersGeneralInfo.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, ProvidersGeneralInfo_module_scss_1, ProvidersGeneralInfo;
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
            function (ProvidersGeneralInfo_module_scss_1_1) {
                ProvidersGeneralInfo_module_scss_1 = ProvidersGeneralInfo_module_scss_1_1;
            }
        ],
        execute: function () {
            ProvidersGeneralInfo = ({ totalMarket, certifiedCountries, restrictedCountries, supportedCurrencies, licenses, realURL, demoURL, noDataText, isCmsUser = false }) => {
                return (_jsxs("div", { className: ProvidersGeneralInfo_module_scss_1.default['ProviderGeneralInfo--items'], children: [_jsx(components_1.LabelGroup, { title: totalMarket.title, totalLabel: totalMarket.countries.length > 0 ? totalMarket.total : '', children: totalMarket.countries.length > 0 ? (_jsx(components_1.Countries, { tagCountries: totalMarket.countries })) : (_jsx(core_1.Typography, { variant: 'p4', className: ProvidersGeneralInfo_module_scss_1.default['ProviderGeneralInfo--notCompleted'], children: noDataText })) }), _jsx(components_1.LabelGroup, { title: certifiedCountries.title, totalLabel: certifiedCountries.countries.length > 0 ? certifiedCountries.total : '', children: certifiedCountries.countries.length > 0 ? (_jsx(components_1.Countries, { tagCountries: certifiedCountries.countries })) : (_jsx(core_1.Typography, { variant: 'p4', className: ProvidersGeneralInfo_module_scss_1.default['ProviderGeneralInfo--notCompleted'], children: noDataText })) }), _jsx(components_1.LabelGroup, { title: restrictedCountries.title, totalLabel: restrictedCountries.countries.length > 0 ? restrictedCountries.total : '', children: restrictedCountries.countries.length > 0 ? (_jsx(components_1.Countries, { tagCountries: restrictedCountries.countries })) : (_jsx(core_1.Typography, { variant: 'p4', className: ProvidersGeneralInfo_module_scss_1.default['ProviderGeneralInfo--notCompleted'], children: noDataText })) }), _jsx(components_1.LabelGroup, { title: supportedCurrencies.title, totalLabel: supportedCurrencies.currencies.length > 0 ? supportedCurrencies.total : '', children: supportedCurrencies.currencies.length > 0 ? (_jsx(components_1.CurrencyGroup, { currencies: supportedCurrencies.currencies })) : (_jsx(core_1.Typography, { variant: 'p4', className: ProvidersGeneralInfo_module_scss_1.default['ProviderGeneralInfo--notCompleted'], children: noDataText })) }), _jsx(components_1.LabelGroup, { title: licenses.title, totalLabel: licenses.licenses.length > 0 ? licenses.total : '', children: licenses.licenses.length > 0 ? (_jsx(components_1.LicenseGroup, { tags: licenses.licenses })) : (_jsx(core_1.Typography, { variant: 'p4', className: ProvidersGeneralInfo_module_scss_1.default['ProviderGeneralInfo--notCompleted'], children: noDataText })) }), realURL && (_jsx(components_1.LabelGroup, { title: realURL.title, children: realURL.URL ? (_jsx(core_1.CopyField, { label: realURL.URL, tooltip: realURL.tooltip, onClick: realURL.onClick })) : (_jsx(core_1.Typography, { variant: 'p4', className: ProvidersGeneralInfo_module_scss_1.default['ProviderGeneralInfo--notCompleted'], children: noDataText })) })), demoURL && (_jsx(components_1.LabelGroup, { title: demoURL.title, children: demoURL.URL ? (_jsx(core_1.CopyField, { label: demoURL.URL, tooltip: demoURL.tooltip, onClick: demoURL.onClick })) : (_jsx(core_1.Typography, { variant: 'p4', className: ProvidersGeneralInfo_module_scss_1.default['ProviderGeneralInfo--notCompleted'], children: noDataText })) }))] }));
            };
            exports_1("default", ProvidersGeneralInfo);
        }
    };
});
