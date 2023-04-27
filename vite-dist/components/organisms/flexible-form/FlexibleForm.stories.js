System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./FlexibleForm"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, FlexibleForm_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (FlexibleForm_1_1) {
                FlexibleForm_1 = FlexibleForm_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Flexible Form',
                component: FlexibleForm_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(FlexibleForm_1.default, { col: 6, title: 'Account Information', isEdit: true, onSubmit: (closeForm) => {
                        closeForm();
                    }, editFormProps: {
                        title: 'Account Information',
                        applyButtonTooltipText: 'Submit Form',
                        closeButtonTooltipText: 'Close Form',
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
                        noDataText: 'N/A',
                        showDeleteButton: true,
                        onDelete: () => {
                            alert('The item was deleted...');
                        },
                        editButtonTooltipText: 'Edit form',
                        viewLessLabel: 'View Less Info',
                        options: [
                            { title: 'Owner', variant: 'label' },
                            { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                            {
                                title: 'Username',
                                value: '',
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
                    } }));
            });
        }
    };
});
