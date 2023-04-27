System.register(["react/jsx-runtime", "@/icons", "@storybook/addon-actions", "@storybook/addon-knobs", "./../../organisms/project-card/ProjectCard", "./ProjectDetails"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, addon_actions_1, addon_knobs_1, ProjectCard_1, ProjectDetails_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ProjectCard_1_1) {
                ProjectCard_1 = ProjectCard_1_1;
            },
            function (ProjectDetails_1_1) {
                ProjectDetails_1 = ProjectDetails_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/pages/Project Details',
                component: ProjectDetails_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(ProjectDetails_1.default, { breadCrumb: [
                        {
                            label: 'Projects',
                            isRedirect: true
                        },
                        {
                            label: 'Irbet Project'
                        }
                    ], projectName: addon_knobs_1.text('projectName', 'Irbet'), projectId: addon_knobs_1.text('projectId', 'ID123456789'), backgroundImgUrl: addon_knobs_1.text('backgroundImgUrl', null), onBackgroundImgClick: addon_actions_1.action('onBackgroundImgClick'), partnerInfo: {
                        partnerName: 'Albatros',
                        partnerId: '412464654'
                    }, projectInfo: {
                        projectIndustry: 'Gambling & Casino',
                        projectType: 'Web Solution'
                    }, creationInfo: {
                        createdBy: 'email@gmail.com',
                        creationDate: '02/02/2022 12:00:00'
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
                    }), generalInformationContent: _jsx(_Fragment, { children: _jsx(ProjectCard_1.default, { col: 6, color: 'purple', mode: 'small', title: 'Products', onArrowClick: addon_actions_1.action('onArrowClick'), logo: _jsx(icons_1.ProductsIcon, {}), maxCount: 100, viewLessLabel: 'View Less', viewMoreLabel: 'View More', items: [
                                {
                                    title: 'Game',
                                    imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                                },
                                {
                                    title: 'Game',
                                    imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                                },
                                {
                                    title: 'Game',
                                    imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                                },
                                {
                                    title: 'Game',
                                    imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                                },
                                {
                                    title: 'Game',
                                    imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                                },
                                {
                                    title: 'Game',
                                    imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                                }
                            ] }) }), licensesContent: _jsx(_Fragment, { children: "Licenses" }), languagesContent: _jsx(_Fragment, { children: "Languages" }), currenciesContent: _jsx(_Fragment, { children: "Currencies" }), 
                    //Translations
                    translations: {
                        createdBy: 'Created By',
                        creationDate: 'Creation Date',
                        currencies: 'Currencies',
                        generalInformation: 'Information',
                        languages: 'Languages',
                        licenses: 'Licenses',
                        partner: 'Partner',
                        partnerId: 'Partner ID',
                        projectIndustry: 'Project Industry',
                        projectType: 'Project Type',
                        settings: 'Settings',
                        status: 'Status'
                    } }));
            });
        }
    };
});
