System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./Filters"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, Filters_1, Default;
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
            function (Filters_1_1) {
                Filters_1 = Filters_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                // component: Filters,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/Filters'
            });
            exports_1("Default", Default = () => {
                return (_jsx(Filters_1.default, { resultLabel: '1062 users found', defaultOpened: addon_knobs_1.boolean('defaultOpened', true), initialValues: addon_knobs_1.object('initialValues', {
                        'datepicker-selection': [],
                        select: '',
                        multiselect: [],
                        datepicker: null,
                        'from-to': {
                            from: null,
                            to: null
                        },
                        platform: [],
                        landscape: [],
                        portrait: [],
                        status: [],
                        'timepicker-from-to': [null, null],
                        timepicker: null
                    }), filters: addon_knobs_1.object('filters', [
                        {
                            type: 'select',
                            label: 'Select',
                            name: 'select',
                            props: {
                                options: [
                                    {
                                        label: 'SelectOption1',
                                        value: 1
                                    },
                                    {
                                        label: 'SelectOption2',
                                        value: 2
                                    },
                                    {
                                        label: 'SelectOption3',
                                        value: 3
                                    }
                                ]
                            }
                        },
                        {
                            type: 'select',
                            label: 'Multielect',
                            name: 'multiselect',
                            props: {
                                options: [
                                    {
                                        label: 'SelectOption1',
                                        value: 1
                                    },
                                    {
                                        label: 'SelectOption2',
                                        value: 2
                                    },
                                    {
                                        label: 'SelectOption3',
                                        value: 3
                                    }
                                ],
                                isMulti: true
                            }
                        },
                        {
                            type: 'datepicker',
                            label: 'Datepicker',
                            name: 'datepicker',
                            props: {}
                        },
                        {
                            type: 'datepicker',
                            label: 'Datepicker With Selection',
                            name: 'datepicker-selection',
                            props: {
                                withDropdowns: true,
                                selectsRange: true,
                                monthsShown: 2
                            }
                        },
                        {
                            type: 'timepicker',
                            label: 'Datetimepicker',
                            name: 'timepicker',
                            props: {}
                        },
                        {
                            type: 'timepicker-from-to',
                            label: 'Datetimepicker from to',
                            name: 'timepicker-from-to',
                            props: {},
                            fromTimePickerProps: {
                                placeholderText: 'Datetimepicker'
                            },
                            toTimePickerProps: {
                                placeholderText: 'Datetimepicker'
                            }
                        },
                        {
                            type: 'from-to',
                            label: 'From-to',
                            name: 'from-to',
                            fromInputProps: {
                                label: 'From'
                            },
                            toInputProps: {
                                label: 'To',
                                type: 'number'
                            }
                        }
                    ]), checkboxFilters: addon_knobs_1.object('checkboxFilters', [
                        {
                            name: 'platform',
                            label: 'Platform',
                            checkboxProps: [
                                {
                                    label: 'Desktop',
                                    name: 'desktop',
                                    value: 1
                                },
                                {
                                    label: 'Tablet',
                                    name: 'tablet',
                                    value: 2
                                },
                                {
                                    label: 'Mobile',
                                    name: 'mobile',
                                    value: 3
                                }
                            ]
                        },
                        {
                            name: 'landscape',
                            label: 'Mobile Screen Mode',
                            checkboxProps: [
                                {
                                    label: 'Landscape',
                                    name: 'landscape',
                                    value: 1
                                },
                                {
                                    label: 'Portrait',
                                    name: 'portrait',
                                    value: 2
                                }
                            ]
                        },
                        {
                            label: 'Tablet Screen Mode',
                            name: 'portrait',
                            checkboxProps: [
                                {
                                    label: 'Landscape',
                                    value: 1,
                                    name: 'secondLandscape'
                                },
                                {
                                    label: 'Portrait',
                                    value: 2,
                                    name: 'secondPortrait'
                                }
                            ]
                        },
                        {
                            label: 'Status',
                            name: 'status',
                            checkboxProps: [
                                {
                                    label: 'Active',
                                    value: 1,
                                    name: 'active'
                                },
                                {
                                    label: 'Inactive',
                                    value: 2,
                                    name: 'inactive'
                                }
                            ]
                        }
                    ]), applyLabel: addon_knobs_1.text('applyLabel', 'Apply'), clearLabel: addon_knobs_1.text('clearLabel', 'Clear'), onSubmit: addon_actions_1.action('onSubmit'), onClear: addon_actions_1.action('onClear') }));
            });
        }
    };
});
