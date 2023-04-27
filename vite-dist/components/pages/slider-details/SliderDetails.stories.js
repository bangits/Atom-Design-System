System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./SliderDetails"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, SliderDetails_1, Default;
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
            function (SliderDetails_1_1) {
                SliderDetails_1 = SliderDetails_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/pages/Slider Details',
                component: SliderDetails_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(SliderDetails_1.default, { breadCrumb: [
                        {
                            label: 'Projects',
                            isRedirect: true
                        },
                        {
                            label: 'Irbet Project'
                        }
                    ], sliderName: addon_knobs_1.text('sliderName', 'Ainsworth'), domain: addon_knobs_1.text('domain', 'domain.atomconstruct.com'), backgroundImgUrl: addon_knobs_1.text('backgroundImgUrl', null), onBackgroundImgClick: addon_actions_1.action('onBackgroundImgClick'), additionalProps: {
                        createdDate: '15/07/2022',
                        createdBy: 'Admin',
                        lastUpdateDate: '15/07/2022',
                        lastUpdatedBy: 'Operator-1'
                    }, statusInfo: addon_knobs_1.object('statusInfo', {
                        statusLabel: 'Validated',
                        label: '',
                        variant: 'active',
                        actions: [
                            {
                                buttonVariant: 'dark',
                                iconName: 'BlockButtonIcon',
                                tooltipText: 'Block',
                                onClick: () => { }
                            }
                        ]
                    }), footerContent: _jsx(_Fragment, { children: "Footer" }), headerContent: _jsx(_Fragment, { children: "HeaderContent" }), settingsContent: _jsx(_Fragment, { children: "Settings" }), socialMediaContent: _jsx(_Fragment, { children: "Social Media" }), 
                    //Translations
                    translations: {
                        lastUpdateDate: 'last Update Date',
                        lastUpdatedBy: 'last Updated By',
                        createdBy: 'Created By',
                        creationDate: 'Creation Date',
                        generalInformation: 'Settings',
                        projectIndustry: 'Project Industry',
                        projectType: 'Project Type',
                        status: 'Status',
                        footer: 'Footer',
                        header: 'Header',
                        socialMedia: 'Social Media'
                    } }));
            });
        }
    };
});
