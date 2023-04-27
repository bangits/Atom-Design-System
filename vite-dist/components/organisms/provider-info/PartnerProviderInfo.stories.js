System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./PartnerProviderInfo"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, PartnerProviderInfo_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (PartnerProviderInfo_1_1) {
                PartnerProviderInfo_1 = PartnerProviderInfo_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Provider Info',
                component: PartnerProviderInfo_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(PartnerProviderInfo_1.default, { targetMarkets: {
                        title: 'Target Markets',
                        markets: [
                            {
                                tagName: 'Armenia',
                                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                            }
                        ]
                    }, totalGameCount: {
                        count: '1024',
                        title: 'Total Game Count'
                    }, certifiedCountries: {
                        title: 'Certified Countries',
                        countries: [
                            {
                                tagName: 'Armenia',
                                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                            }
                        ]
                    }, restrictedCountries: {
                        title: 'Restricted Countries',
                        countries: [
                            {
                                tagName: 'Armenia',
                                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                            }
                        ]
                    }, currencies: {
                        title: 'Currencies',
                        currencies: [
                            {
                                title: 'Yen'
                            },
                            {
                                title: 'RUB'
                            }
                        ]
                    }, gameTypes: {
                        title: 'Game Types',
                        types: [
                            {
                                title: 'Slot'
                            },
                            {
                                title: 'Casino'
                            },
                            {
                                title: 'Live Games'
                            }
                        ]
                    } }));
            });
        }
    };
});
