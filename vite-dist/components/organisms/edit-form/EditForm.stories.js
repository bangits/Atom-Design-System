System.register(["react/jsx-runtime", "@storybook/addon-knobs", "react", "./EditForm"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, react_1, EditForm_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (EditForm_1_1) {
                EditForm_1 = EditForm_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Edit Form',
                component: EditForm_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                const [dateRange, setDateRange] = react_1.useState([null, null]);
                const [date, setDate] = react_1.useState(null);
                return (_jsx(EditForm_1.default, { title: 'Account Information', col: 6, renderInputs: (Component, name) => {
                        return _jsx(Component, {});
                    }, fields: [
                        {
                            type: 'header',
                            label: 'Owner',
                            name: ''
                        },
                        {
                            type: 'input',
                            name: 'name',
                            props: {
                                label: 'Provider Name'
                            }
                        },
                        {
                            type: 'select',
                            name: 'targetMarkets',
                            props: {
                                inputLabel: 'Target market',
                                options: [
                                    { label: 'market 1', value: 1 },
                                    { label: 'market 2', value: 2 },
                                    { label: 'market 3', value: 3 }
                                ],
                                isSearchable: true,
                                isMulti: true
                            }
                        },
                        {
                            type: 'select',
                            name: 'certifiedCountries',
                            props: {
                                inputLabel: 'Certified countries',
                                options: [
                                    { label: 'Certified country 1', value: 1 },
                                    { label: 'Certified country 2', value: 2 },
                                    { label: 'Certified country 3', value: 3 }
                                ],
                                isSearchable: true,
                                isMulti: true
                            }
                        },
                        {
                            type: 'select',
                            name: 'certifiedCountries',
                            props: {
                                inputLabel: 'Restricted countries',
                                options: [
                                    { label: 'Restricted country 1', value: 1 },
                                    { label: 'Restricted country 2', value: 2 },
                                    { label: 'Restricted country 3', value: 3 }
                                ],
                                isSearchable: true,
                                isMulti: true
                            }
                        },
                        {
                            type: 'select',
                            name: 'providerCurrencies',
                            props: {
                                inputLabel: 'Currency',
                                options: [
                                    { label: 'Currency 1', value: 1 },
                                    { label: 'Currency 2', value: 2 },
                                    { label: 'Currency 3', value: 3 }
                                ],
                                isSearchable: true,
                                isMulti: true
                            }
                        },
                        {
                            type: 'select',
                            name: 'defaultCurrency',
                            props: {
                                inputLabel: 'Default currency',
                                options: [
                                    { label: 'Default currency 1', value: 1 },
                                    { label: 'Default currency 2', value: 2 },
                                    { label: 'Default currency 3', value: 3 }
                                ],
                                isSearchable: true
                            }
                        },
                        {
                            type: 'select',
                            name: 'certifiedCountries',
                            props: {
                                inputLabel: 'Restricted countries',
                                options: [
                                    { label: 'Restricted country 1', value: 1 },
                                    { label: 'Restricted country 2', value: 2 },
                                    { label: 'Restricted country 3', value: 3 }
                                ],
                                isSearchable: true,
                                isMulti: true
                            }
                        },
                        {
                            type: 'select',
                            name: 'providerCurrencies',
                            props: {
                                inputLabel: 'Currency',
                                options: [
                                    { label: 'Currency 1', value: 1 },
                                    { label: 'Currency 2', value: 2 },
                                    { label: 'Currency 3', value: 3 }
                                ],
                                isSearchable: true,
                                isMulti: true
                            }
                        },
                        {
                            type: 'select',
                            name: 'defaultCurrency',
                            props: {
                                inputLabel: 'Default currency',
                                options: [
                                    { label: 'Default currency 1', value: 1 },
                                    { label: 'Default currency 2', value: 2 },
                                    { label: 'Default currency 3', value: 3 }
                                ],
                                isSearchable: true
                            }
                        }
                    ] }));
            });
        }
    };
});
