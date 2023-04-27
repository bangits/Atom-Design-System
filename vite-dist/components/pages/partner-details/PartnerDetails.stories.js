System.register(["react/jsx-runtime", "@/components", "@storybook/addon-actions", "@storybook/addon-knobs", "./PartnerDetails"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, addon_actions_1, addon_knobs_1, PartnerDetails_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (PartnerDetails_1_1) {
                PartnerDetails_1 = PartnerDetails_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/pages/Partner Details',
                component: PartnerDetails_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(PartnerDetails_1.default, { backgroundImgUrl: addon_knobs_1.text('backgroundImgUrl', null), onBackgroundImgClick: addon_actions_1.action('onBackgroundImgClick'), partnerId: addon_knobs_1.text('partnerId', null), partnerName: addon_knobs_1.text('partnerName', null), breadCrumbs: addon_knobs_1.object('breadCrumbProps', []), parentCompany: addon_knobs_1.text('parentCompany', null), parentCompanyId: addon_knobs_1.number('parentCompanyId', null), translations: addon_knobs_1.object('translations', {
                        parentCompany: 'Parent Company',
                        parentCompanyId: 'Parent Company ID',
                        status: 'Status',
                        documentID: 'Document ID',
                        expirationDate: 'Expiration Date',
                        type: 'Type',
                        mainInformation: 'Main Information',
                        organizationData: 'Organization Data',
                        providerInformation: 'Provider Information',
                        bankInformation: 'Bank Information',
                        contanctInformation: 'Contact Information',
                        managersContactInformation: 'Managers Contact Information',
                        organizationDetails: 'Organization details'
                    }), statusInfo: addon_knobs_1.object('statusInfo', {
                        statusLabel: 'Validated',
                        variant: 'active',
                        actions: [
                            {
                                buttonVariant: 'dark',
                                iconName: 'BlockButtonIcon',
                                tooltipText: 'Block',
                                onClick: () => { }
                            }
                        ]
                    }), projectInformation: 'project', docInfo: addon_knobs_1.object('docInfo', {
                        documentID: 5461213584,
                        type: 'Partnership Agreement',
                        expirationDate: '12/08/2021',
                        statusLabel: 'Signed',
                        statusVariant: 'active'
                    }), organizationDataMainInformationForms: _jsxs(_Fragment, { children: [_jsx(components_1.FlexibleForm, { title: 'Account Information', editFormProps: {
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
                                } }), ' ', _jsx(components_1.FlexibleForm, { title: 'Account Information', editFormProps: {
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
                                } }), ' ', _jsx(components_1.FlexibleForm, { title: 'Account Information', editFormProps: {
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
                                } }), ' ', _jsx(components_1.FlexibleForm, { title: 'Account Information', editFormProps: {
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
                                } }), ' ', _jsx(components_1.FlexibleForm, { title: 'Account Information', editFormProps: {
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
                                } })] }), organizationDataProviderInformation: _jsx(_Fragment, {}) }));
            });
        }
    };
});
