System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./CurrencyGroup"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, CurrencyGroup_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (CurrencyGroup_1_1) {
                CurrencyGroup_1 = CurrencyGroup_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: CurrencyGroup_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/CurrencyGroup'
            });
            exports_1("Default", Default = () => {
                return (_jsx(CurrencyGroup_1.default, { currencies: [
                        {
                            title: 'YEN',
                            inactive: true
                        },
                        {
                            title: 'YEN',
                            inactive: true
                        },
                        {
                            title: 'YEN',
                            inactive: true
                        },
                        {
                            title: 'YEN',
                            inactive: true
                        },
                        {
                            title: 'YEN',
                            inactive: true
                        },
                        {
                            title: 'YEN',
                            inactive: true
                        },
                        {
                            title: 'YEN',
                            inactive: true
                        }
                    ] }));
            });
        }
    };
});
