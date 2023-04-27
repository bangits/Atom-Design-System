System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./EditedForm"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, EditedForm_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (EditedForm_1_1) {
                EditedForm_1 = EditedForm_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/EditedForm',
                component: EditedForm_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(EditedForm_1.default, { col: 6, viewMoreLabel: 'View More', viewLessLabel: 'View Less', noDataText: 'No Data', options: [
                        { title: 'Owner', variant: 'label' },
                        { title: 'Email', value: 'antonian.evgenia@gmail.com', variant: 'default' },
                        {
                            title: 'Username',
                            value: '',
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
                            title: 'Currency',
                            value: 'USD',
                            variant: 'bold'
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
                    ], title: 'Account Information' }));
            });
        }
    };
});
