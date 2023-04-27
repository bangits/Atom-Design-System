System.register(["react/jsx-runtime", "@/components", "@my-ui/core"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, PartnerProviderInfo;
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
            }
        ],
        execute: function () {
            PartnerProviderInfo = ({ noDataText = 'N/A', totalGameCount, gameTypes, currencies, targetMarkets, restrictedCountries, certifiedCountries }) => {
                return (_jsxs(_Fragment, { children: [_jsx(components_1.LabelTag, { label: totalGameCount.title, tag: {
                                title: totalGameCount.count || noDataText
                            } }), _jsx(components_1.LabelGroup, { title: gameTypes.title, totalLabel: gameTypes.total, children: gameTypes.types.length === 0 ? (_jsx(core_1.Typography, { variant: 'p4', children: noDataText })) : (_jsx(components_1.CurrencyGroup, { currencies: gameTypes.types })) }), _jsx(components_1.LabelGroup, { title: currencies.title, totalLabel: currencies.total, children: currencies.currencies.length === 0 ? (_jsx(core_1.Typography, { variant: 'p3', children: noDataText })) : (_jsx(components_1.CurrencyGroup, { currencies: currencies.currencies })) }), _jsx(components_1.LabelGroup, { title: targetMarkets.title, totalLabel: targetMarkets.total, children: targetMarkets.markets.length === 0 ? (_jsx(core_1.Typography, { variant: 'p3', children: noDataText })) : (_jsx(components_1.Countries, { tagCountries: targetMarkets.markets })) }), _jsx(components_1.LabelGroup, { title: certifiedCountries.title, totalLabel: certifiedCountries.total, children: certifiedCountries.countries.length === 0 ? (_jsx(core_1.Typography, { variant: 'p3', children: noDataText })) : (_jsx(components_1.Countries, { tagCountries: certifiedCountries.countries })) }), _jsx(components_1.LabelGroup, { title: restrictedCountries.title, totalLabel: restrictedCountries.total, children: restrictedCountries.countries.length === 0 ? (_jsx(core_1.Typography, { variant: 'p3', children: noDataText })) : (_jsx(components_1.Countries, { tagCountries: restrictedCountries.countries })) })] }));
            };
            exports_1("default", PartnerProviderInfo);
        }
    };
});
