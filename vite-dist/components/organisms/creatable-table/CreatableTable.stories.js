System.register(["react/jsx-runtime", "@my-ui/core", "./CreatableTable", "@storybook/addon-knobs", "./CreatableRow", "react"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, CreatableTable_1, addon_knobs_1, CreatableRow_1, react_1, tiers, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CreatableTable_1_1) {
                CreatableTable_1 = CreatableTable_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (CreatableRow_1_1) {
                CreatableRow_1 = CreatableRow_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Creatable Table',
                component: CreatableTable_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            tiers = [
                {
                    from: '1',
                    to: '100',
                    index: 0,
                    amount: '10',
                    remove: () => console.log(),
                    renderInputs: (Component) => {
                        return _jsx(Component, {});
                    },
                    fields: [
                        {
                            type: 'field',
                            name: 'from',
                            label: 'From',
                            col: 4,
                            props: {
                                disabled: true,
                                type: 'number',
                                defaultValue: '100',
                                placeholder: 'Min'
                            }
                        },
                        {
                            type: 'field',
                            name: 'to',
                            label: 'To',
                            col: 4,
                            props: {
                                backgroundColor: 'white',
                                placeholder: 'Max',
                                defaultValue: '1000'
                            }
                        },
                        {
                            type: 'field',
                            name: 'amount',
                            label: 'Amount',
                            col: 4,
                            props: {
                                type: 'number',
                                placeholder: 'Amount',
                                defaultValue: '20'
                            }
                        }
                    ]
                },
                {
                    from: '1',
                    to: '100',
                    index: 0,
                    amount: '10',
                    remove: () => console.log(),
                    renderInputs: (Component) => {
                        return _jsx(Component, {});
                    },
                    fields: [
                        {
                            type: 'field',
                            name: 'from',
                            label: 'From',
                            col: 4,
                            props: {
                                disabled: true,
                                type: 'number',
                                value: '1000',
                                placeholder: 'Min'
                            }
                        },
                        {
                            type: 'field',
                            name: 'to',
                            label: 'To',
                            col: 4,
                            props: {
                                backgroundColor: 'white',
                                placeholder: 'Max',
                                value: '10000'
                            }
                        },
                        {
                            type: 'field',
                            name: 'amount',
                            label: 'Amount',
                            col: 4,
                            props: {
                                type: 'number',
                                placeholder: 'Amount',
                                value: '20'
                            }
                        }
                    ]
                }
            ];
            exports_1("Default", Default = () => {
                const data = [
                    {
                        from: 10,
                        to: 100,
                        amount: 30
                    },
                    {
                        from: 100,
                        to: 1000,
                        amount: 25
                    },
                    {
                        from: 1000,
                        to: 1500,
                        amount: 15
                    }
                ];
                const [state, setState] = react_1.useState([...tiers]);
                return (_jsx(CreatableTable_1.default, { editMode: true, addTier: () => {
                        setState([
                            ...state,
                            {
                                from: '1',
                                to: '100',
                                index: 0,
                                amount: '10',
                                remove: () => console.log(),
                                renderInputs: (Component) => {
                                    return _jsx(Component, {});
                                },
                                fields: [
                                    {
                                        type: 'field',
                                        name: 'from',
                                        label: 'From',
                                        col: 4,
                                        props: {
                                            disabled: true,
                                            type: 'number',
                                            value: '1000',
                                            placeholder: 'Min'
                                        }
                                    },
                                    {
                                        type: 'field',
                                        name: 'to',
                                        label: 'To',
                                        col: 4,
                                        props: {
                                            backgroundColor: 'white',
                                            placeholder: 'Max',
                                            value: '10000'
                                        }
                                    },
                                    {
                                        type: 'field',
                                        name: 'amount',
                                        label: 'Amount',
                                        col: 4,
                                        props: {
                                            type: 'number',
                                            placeholder: 'Amount',
                                            value: '20'
                                        }
                                    }
                                ]
                            }
                        ]);
                    }, amountOrPercent: true, columns: [
                        { type: 'default', value: 'From' },
                        { type: 'default', value: 'To' },
                        {
                            type: 'custom',
                            value: _jsx(core_1.Checkbox, { variant: 'switch' }),
                            props: {
                                afterLabel: 'Amount',
                                beforeLabel: 'Percentage'
                            }
                        }
                    ], buttonName: 'Add Tier', children: state.map((row, index) => {
                        return (_jsx(CreatableRow_1.CreatableRow, { variant: 'writable', removeTier: () => { }, fields: row.fields, renderInputs: row.renderInputs }));
                    }) }));
            });
        }
    };
});
