System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./Form"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, Form_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (Form_1_1) {
                Form_1 = Form_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: Form_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/Form'
            });
            exports_1("Default", Default = () => {
                return (_jsx(Form_1.default, { title: 'Add Player', showBackButton: addon_knobs_1.boolean('showBackButton', true), onBackButtonClick: addon_actions_1.action('onClick'), firstButtonProps: {
                        children: 'Close'
                    }, secondButtonProps: {
                        children: 'Save'
                    }, renderInputs: (Component, name) => {
                        return _jsx(Component, {});
                    }, fields: addon_knobs_1.object('fields', [
                        {
                            type: 'input',
                            name: 'firstName',
                            label: 'First Name',
                            col: 4
                        },
                        {
                            type: 'input',
                            name: 'lastName',
                            label: 'Last Name',
                            col: 4
                        },
                        {
                            type: 'input',
                            name: 'middleName',
                            label: 'Middle Name',
                            col: 4
                        },
                        {
                            type: 'datepicker',
                            label: 'Date of Birth',
                            name: 'dateOfBirth',
                            col: 6,
                            props: {}
                        },
                        {
                            type: 'select',
                            name: 'gender',
                            col: 6,
                            props: {
                                inputLabel: 'Gender',
                                options: [
                                    {
                                        label: 'Male',
                                        value: 1
                                    },
                                    {
                                        label: 'Female',
                                        value: 2
                                    },
                                    {
                                        label: 'Other...',
                                        value: 3
                                    }
                                ]
                            }
                        },
                        {
                            type: 'select',
                            name: 'country',
                            col: 6,
                            props: {
                                inputLabel: 'Country',
                                options: [
                                    {
                                        label: 'Armenia',
                                        value: 1
                                    },
                                    {
                                        label: 'Russia',
                                        value: 2
                                    },
                                    {
                                        label: 'Italy',
                                        value: 3
                                    }
                                ]
                            }
                        },
                        {
                            type: 'select',
                            name: 'region',
                            col: 6,
                            props: {
                                inputLabel: 'Region',
                                options: [
                                    {
                                        label: 'Region 1',
                                        value: 1
                                    },
                                    {
                                        label: 'Region 2',
                                        value: 2
                                    },
                                    {
                                        label: 'Region 3',
                                        value: 3
                                    }
                                ]
                            }
                        },
                        {
                            type: 'select',
                            name: 'city',
                            col: 6,
                            props: {
                                inputLabel: 'City',
                                options: [
                                    {
                                        label: 'City 1',
                                        value: 1
                                    },
                                    {
                                        label: 'City 2',
                                        value: 2
                                    },
                                    {
                                        label: 'City 3',
                                        value: 3
                                    }
                                ]
                            }
                        },
                        {
                            type: 'input',
                            name: 'address',
                            label: 'Address',
                            col: 6
                        },
                        {
                            type: 'input',
                            name: 'zipCode',
                            label: 'Zip code',
                            col: 6
                        },
                        {
                            type: 'input',
                            name: 'contactNumber',
                            label: 'Contact Number',
                            col: 6
                        },
                        {
                            type: 'select',
                            name: 'documentType',
                            col: 6,
                            props: {
                                inputLabel: 'Document type',
                                options: [
                                    {
                                        label: 'Document type 1',
                                        value: 1
                                    },
                                    {
                                        label: 'Document type 2',
                                        value: 2
                                    },
                                    {
                                        label: 'Document type 3',
                                        value: 3
                                    }
                                ]
                            }
                        },
                        {
                            type: 'input',
                            name: 'passportId',
                            label: 'Passport/ID',
                            col: 6
                        },
                        {
                            type: 'checkbox',
                            name: 'checkbox',
                            label: 'checkbox',
                            col: 6,
                            props: {
                                checkboxes: [
                                    {
                                        label: 'Mobile',
                                        name: 'mobile',
                                        value: 1
                                    },
                                    {
                                        label: 'Tablet',
                                        name: 'tablet',
                                        value: 2
                                    }
                                ]
                            }
                        },
                        {
                            type: 'radio',
                            name: 'radio-group',
                            label: 'Radio Group',
                            col: 6,
                            props: {
                                radios: [
                                    {
                                        label: 'Desktop',
                                        value: 1
                                    },
                                    {
                                        label: 'Tablet',
                                        value: 2
                                    }
                                ]
                            }
                        },
                        {
                            type: 'from-to-input',
                            name: 'firstName',
                            label: 'First Name',
                            col: 12
                        }
                    ]) }));
            });
        }
    };
});
