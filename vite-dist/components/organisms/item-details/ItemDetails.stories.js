System.register(["react/jsx-runtime", "@/components", "@storybook/addon-knobs", "./ItemDetails"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, addon_knobs_1, ItemDetails_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ItemDetails_1_1) {
                ItemDetails_1 = ItemDetails_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Item Details',
                component: ItemDetails_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(ItemDetails_1.default, { defaultTabValue: 1, defaultSubTabValue: 1, tabs: [
                        {
                            title: 'Organization Data',
                            content: (_jsxs(_Fragment, { children: [_jsx(components_1.FlexibleForm, { title: 'Account Information', editFormProps: {
                                            title: 'Account Information',
                                            renderInputs: (Component, name) => {
                                                return _jsx(Component, {});
                                            },
                                            fields: [
                                                {
                                                    type: 'input',
                                                    name: 'email',
                                                    props: {
                                                        label: 'Email',
                                                        defaultValue: 'Antonian.evgenia@gmail.com'
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'username',
                                                    props: {
                                                        label: 'Username',
                                                        defaultValue: 'Eva12345'
                                                    }
                                                },
                                                {
                                                    type: 'select',
                                                    name: 'currency',
                                                    props: {
                                                        inputLabel: 'Currency',
                                                        options: [
                                                            { label: 'AMD', value: 1 },
                                                            { label: 'USD', value: 2 },
                                                            { label: 'EUR', value: 3 }
                                                        ],
                                                        isSearchable: true,
                                                        isMulti: true,
                                                        defaultValue: [1],
                                                        disabled: true
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'status',
                                                    props: {
                                                        label: 'Status',
                                                        defaultValue: 'Active',
                                                        disabled: true
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'segments',
                                                    props: {
                                                        label: 'Segments',
                                                        defaultValue: 'Forever'
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'btag',
                                                    props: {
                                                        label: 'Btag',
                                                        defaultValue: '111.123.56.85',
                                                        disabled: true
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'regSRC',
                                                    props: {
                                                        label: 'Registration Source',
                                                        defaultValue: 'Forever',
                                                        disabled: true
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'created',
                                                    props: {
                                                        label: 'Created By',
                                                        defaultValue: 'Inesa Khachatryan',
                                                        disabled: true
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'form',
                                                    props: {
                                                        label: 'Registration Form IP',
                                                        defaultValue: 'No',
                                                        disabled: true
                                                    }
                                                }
                                            ]
                                        }, editedFormProps: {
                                            options: [
                                                { title: 'Owner', variant: 'label' },
                                                { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                                                {
                                                    title: 'Username',
                                                    value: 'Eva123456',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Currency',
                                                    value: 'USD',
                                                    variant: 'bold'
                                                },
                                                {
                                                    title: 'Created By',
                                                    value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                                                    variant: 'tag'
                                                },
                                                {
                                                    title: 'Status',
                                                    value: 'Active',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Segment',
                                                    value: 'Vip Players',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Btag',
                                                    value: '111.123.56.85',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Registration Source',
                                                    value: '09/05/2021 12:00:00',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Created By',
                                                    value: 'Inesa Khachatryan',
                                                    variant: 'default'
                                                }
                                            ],
                                            title: 'Account Information'
                                        } }), _jsx(components_1.FlexibleForm, { title: 'Account Information', editedFormProps: {
                                            options: [
                                                { title: 'Owner', variant: 'label' },
                                                { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                                                {
                                                    title: 'Username',
                                                    value: 'Eva123456',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Currency',
                                                    value: 'USD',
                                                    variant: 'bold'
                                                },
                                                {
                                                    title: 'Created By',
                                                    value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                                                    variant: 'tag'
                                                },
                                                {
                                                    title: 'Status',
                                                    value: 'Active',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Segment',
                                                    value: 'Vip Players',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Btag',
                                                    value: '111.123.56.85',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Registration Source',
                                                    value: '09/05/2021 12:00:00',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Created By',
                                                    value: 'Inesa Khachatryan',
                                                    variant: 'default'
                                                }
                                            ],
                                            title: 'Personal Information'
                                        } }), _jsx(components_1.FlexibleForm, { title: 'Account Information', editedFormProps: {
                                            options: [
                                                { title: 'Owner', variant: 'label' },
                                                { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                                                {
                                                    title: 'Username',
                                                    value: 'Eva123456',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Currency',
                                                    value: 'USD',
                                                    variant: 'bold'
                                                },
                                                {
                                                    title: 'Created By',
                                                    value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                                                    variant: 'tag'
                                                },
                                                {
                                                    title: 'Status',
                                                    value: 'Active',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Segment',
                                                    value: 'Vip Players',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Btag',
                                                    value: '111.123.56.85',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Registration Source',
                                                    value: '09/05/2021 12:00:00',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Created By',
                                                    value: 'Inesa Khachatryan',
                                                    variant: 'default'
                                                }
                                            ],
                                            title: 'Contacts'
                                        } }), _jsx(components_1.FlexibleForm, { title: 'Account Information', editedFormProps: {
                                            options: [
                                                { title: 'Owner', variant: 'label' },
                                                { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                                                {
                                                    title: 'Username',
                                                    value: 'Eva123456',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Currency',
                                                    value: 'USD',
                                                    variant: 'bold'
                                                },
                                                {
                                                    title: 'Created By',
                                                    value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                                                    variant: 'tag'
                                                },
                                                {
                                                    title: 'Status',
                                                    value: 'Active',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Segment',
                                                    value: 'Vip Players',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Btag',
                                                    value: '111.123.56.85',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Registration Source',
                                                    value: '09/05/2021 12:00:00',
                                                    variant: 'default'
                                                },
                                                {
                                                    title: 'Created By',
                                                    value: 'Inesa Khachatryan',
                                                    variant: 'default'
                                                }
                                            ],
                                            title: 'Verifications'
                                        } })] })),
                            value: 1
                        },
                        {
                            title: 'Projects',
                            value: 2,
                            subTabs: [
                                {
                                    title: 'Main Information',
                                    badgeCount: 40,
                                    content: (_jsxs(_Fragment, { children: [_jsx(components_1.FlexibleForm, { title: 'Account Information', editFormProps: {
                                                    title: 'Account Information',
                                                    renderInputs: (Component, name) => {
                                                        return _jsx(Component, {});
                                                    },
                                                    fields: [
                                                        {
                                                            type: 'input',
                                                            name: 'email',
                                                            props: {
                                                                label: 'Email',
                                                                defaultValue: 'Antonian.evgenia@gmail.com'
                                                            }
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'username',
                                                            props: {
                                                                label: 'Username',
                                                                defaultValue: 'Eva12345'
                                                            }
                                                        },
                                                        {
                                                            type: 'select',
                                                            name: 'currency',
                                                            props: {
                                                                inputLabel: 'Currency',
                                                                options: [
                                                                    { label: 'AMD', value: 1 },
                                                                    { label: 'USD', value: 2 },
                                                                    { label: 'EUR', value: 3 }
                                                                ],
                                                                isSearchable: true,
                                                                isMulti: true,
                                                                defaultValue: [1],
                                                                disabled: true
                                                            }
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'status',
                                                            props: {
                                                                label: 'Status',
                                                                defaultValue: 'Active',
                                                                disabled: true
                                                            }
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'segments',
                                                            props: {
                                                                label: 'Segments',
                                                                defaultValue: 'Forever'
                                                            }
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'btag',
                                                            props: {
                                                                label: 'Btag',
                                                                defaultValue: '111.123.56.85',
                                                                disabled: true
                                                            }
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'regSRC',
                                                            props: {
                                                                label: 'Registration Source',
                                                                defaultValue: 'Forever',
                                                                disabled: true
                                                            }
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'created',
                                                            props: {
                                                                label: 'Created By',
                                                                defaultValue: 'Inesa Khachatryan',
                                                                disabled: true
                                                            }
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'form',
                                                            props: {
                                                                label: 'Registration Form IP',
                                                                defaultValue: 'No',
                                                                disabled: true
                                                            }
                                                        }
                                                    ]
                                                }, editedFormProps: {
                                                    options: [
                                                        { title: 'Owner', variant: 'label' },
                                                        { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                                                        {
                                                            title: 'Username',
                                                            value: 'Eva123456',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Currency',
                                                            value: 'USD',
                                                            variant: 'bold'
                                                        },
                                                        {
                                                            title: 'Created By',
                                                            value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                                                            variant: 'tag'
                                                        },
                                                        {
                                                            title: 'Status',
                                                            value: 'Active',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Segment',
                                                            value: 'Vip Players',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Btag',
                                                            value: '111.123.56.85',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Registration Source',
                                                            value: '09/05/2021 12:00:00',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Created By',
                                                            value: 'Inesa Khachatryan',
                                                            variant: 'default'
                                                        }
                                                    ],
                                                    title: 'Account Information'
                                                } }), _jsx(components_1.FlexibleForm, { title: 'Account Information', editedFormProps: {
                                                    options: [
                                                        { title: 'Owner', variant: 'label' },
                                                        { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                                                        {
                                                            title: 'Username',
                                                            value: 'Eva123456',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Currency',
                                                            value: 'USD',
                                                            variant: 'bold'
                                                        },
                                                        {
                                                            title: 'Created By',
                                                            value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                                                            variant: 'tag'
                                                        },
                                                        {
                                                            title: 'Status',
                                                            value: 'Active',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Segment',
                                                            value: 'Vip Players',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Btag',
                                                            value: '111.123.56.85',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Registration Source',
                                                            value: '09/05/2021 12:00:00',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Created By',
                                                            value: 'Inesa Khachatryan',
                                                            variant: 'default'
                                                        }
                                                    ],
                                                    title: 'Personal Information'
                                                } }), _jsx(components_1.FlexibleForm, { title: 'Account Information', editedFormProps: {
                                                    options: [
                                                        { title: 'Owner', variant: 'label' },
                                                        { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                                                        {
                                                            title: 'Username',
                                                            value: 'Eva123456',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Currency',
                                                            value: 'USD',
                                                            variant: 'bold'
                                                        },
                                                        {
                                                            title: 'Created By',
                                                            value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                                                            variant: 'tag'
                                                        },
                                                        {
                                                            title: 'Status',
                                                            value: 'Active',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Segment',
                                                            value: 'Vip Players',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Btag',
                                                            value: '111.123.56.85',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Registration Source',
                                                            value: '09/05/2021 12:00:00',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Created By',
                                                            value: 'Inesa Khachatryan',
                                                            variant: 'default'
                                                        }
                                                    ],
                                                    title: 'Contacts'
                                                } }), _jsx(components_1.FlexibleForm, { title: 'Account Information', editedFormProps: {
                                                    options: [
                                                        { title: 'Owner', variant: 'label' },
                                                        { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                                                        {
                                                            title: 'Username',
                                                            value: 'Eva123456',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Currency',
                                                            value: 'USD',
                                                            variant: 'bold'
                                                        },
                                                        {
                                                            title: 'Created By',
                                                            value: ['Jackpot Support', 'Jewels and Gems', 'Jewels'],
                                                            variant: 'tag'
                                                        },
                                                        {
                                                            title: 'Status',
                                                            value: 'Active',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Segment',
                                                            value: 'Vip Players',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Btag',
                                                            value: '111.123.56.85',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Registration Source',
                                                            value: '09/05/2021 12:00:00',
                                                            variant: 'default'
                                                        },
                                                        {
                                                            title: 'Created By',
                                                            value: 'Inesa Khachatryan',
                                                            variant: 'default'
                                                        }
                                                    ],
                                                    title: 'Verifications'
                                                } })] })),
                                    value: 1
                                },
                                {
                                    title: 'Game Details',
                                    badgeCount: 200,
                                    content: _jsx(_Fragment, { children: "Sub tab 2" }),
                                    value: 2
                                },
                                {
                                    title: 'Provider Details',
                                    badgeCount: 15,
                                    content: _jsx(_Fragment, { children: "Sub tab 3" }),
                                    value: 3
                                }
                            ]
                        },
                        {
                            title: 'Documents',
                            value: 3
                        },
                        {
                            title: 'Tab 4',
                            value: 4
                        },
                        {
                            title: 'Tab 5',
                            value: 5
                        },
                        {
                            title: 'Tab 6',
                            value: 6
                        },
                        {
                            title: 'Tab 7',
                            value: 7
                        }
                    ] }));
            });
        }
    };
});
