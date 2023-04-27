System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./ProvidersGeneralInfo"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, ProvidersGeneralInfo_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ProvidersGeneralInfo_1_1) {
                ProvidersGeneralInfo_1 = ProvidersGeneralInfo_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Providers General Information',
                component: ProvidersGeneralInfo_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(ProvidersGeneralInfo_1.default, { noDataText: 'Not Completed', totalMarket: {
                        title: 'Total Market',
                        total: '1 Country',
                        countries: [
                            {
                                tagName: 'Armenia',
                                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                            }
                        ]
                    }, certifiedCountries: {
                        title: 'Total Market',
                        total: '1 Country',
                        countries: [
                            {
                                tagName: 'Armenia',
                                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                            }
                        ]
                    }, restrictedCountries: {
                        title: 'Total Market',
                        total: '1 Country',
                        countries: [
                            {
                                tagName: 'Armenia',
                                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                            }
                        ]
                    }, supportedCurrencies: {
                        title: 'Supported Currencies',
                        total: '2 Currency',
                        currencies: [
                            {
                                title: 'Yen'
                            }
                        ]
                    }, licenses: {
                        title: 'Licenses',
                        licenses: [
                            {
                                title: 'Malta License'
                            }
                        ]
                    }, realURL: {
                        title: 'Absolute Real URL',
                        URL: '',
                        tooltip: {
                            showEvent: 'click',
                            text: 'Copied!',
                            placement: 'top'
                        },
                        onClick: () => {
                            console.log('');
                        }
                    }, demoURL: {
                        title: 'Absolute Demo URL',
                        URL: 'www.google.com',
                        tooltip: {
                            showEvent: 'click',
                            text: 'Copied!',
                            placement: 'top'
                        },
                        onClick: () => {
                            console.log('');
                        }
                    } }));
            });
        }
    };
});
