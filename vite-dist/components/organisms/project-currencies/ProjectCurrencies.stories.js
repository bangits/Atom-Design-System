System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-knobs", "./ProjectCurrencies"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_knobs_1, ProjectCurrencies_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ProjectCurrencies_1_1) {
                ProjectCurrencies_1 = ProjectCurrencies_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Project Currencies',
                component: ProjectCurrencies_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(ProjectCurrencies_1.default, { renderLanguagesSelect: (changeOpenedCustomSelect) => (_jsx(core_1.Select, { options: [
                            {
                                label: 'AMD',
                                value: 1
                            },
                            {
                                label: 'USD',
                                value: 2
                            },
                            {
                                label: 'RUB',
                                value: 3
                            }
                        ], onChange: () => changeOpenedCustomSelect(false) })), translations: {
                        add: 'Add',
                        default: 'Default',
                        supported: 'Supported',
                        tableHeaders: {
                            currencyCode: 'Currency Code',
                            currencyName: 'Currency Name',
                            type: 'Type'
                        }
                    }, tableLoadingRowIds: ['RUB'], shouldShowAddWalletButton: true, currencies: [
                        {
                            currencyCode: 'AMD',
                            currencyName: 'Armenian Dram',
                            isDefault: true
                        },
                        {
                            currencyCode: 'USD',
                            currencyName: 'United States Dollar',
                            isDefault: false
                        },
                        {
                            currencyCode: 'RUB',
                            currencyName: 'Russian Ruble',
                            isDefault: false
                        }
                    ] }));
            });
        }
    };
});
