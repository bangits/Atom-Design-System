System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./NameDescription"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, NameDescription_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (NameDescription_1_1) {
                NameDescription_1 = NameDescription_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/molecules/Name And Description',
                component: NameDescription_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(NameDescription_1.default, { title: 'Wallet', noDataText: 'N/A', data: [
                        {
                            name: 'Lorem',
                            description: '',
                            subNameDescription: [
                                {
                                    name: 'Casino',
                                    description: ''
                                },
                                {
                                    name: 'Sport',
                                    description: '10 300'
                                }
                            ]
                        },
                        {
                            name: 'Lorem',
                            description: '2000'
                        },
                        {
                            name: 'Lorem',
                            description: '3000'
                        },
                        {
                            name: 'Lorem',
                            description: '4000',
                            subNameDescription: [
                                {
                                    name: 'Casino',
                                    description: '8000'
                                }
                            ]
                        }
                    ] }));
            });
        }
    };
});
