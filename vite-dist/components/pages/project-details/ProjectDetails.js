System.register(["react/jsx-runtime", "@/components", "@my-ui/core", "classnames", "./ProjectDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, classnames_1, ProjectDetails_module_scss_1, ProjectDetails;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (ProjectDetails_module_scss_1_1) {
                ProjectDetails_module_scss_1 = ProjectDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            ProjectDetails = ({ noDataText, breadCrumb, backgroundImgUrl, projectId, projectName, onBackgroundImgClick, statusInfo, translations, partnerInfo, projectInfo, creationInfo, generalInformationContent, licensesContent, languagesContent, currenciesContent }) => {
                return (_jsxs("div", { className: ProjectDetails_module_scss_1.default.ProjectDetailsBase, children: [_jsx(core_1.Breadcrumb, { links: breadCrumb }), _jsxs("div", { className: ProjectDetails_module_scss_1.default['ProjectDetailsBase--container'], children: [_jsxs("div", { className: ProjectDetails_module_scss_1.default['ProjectDetailsBase--leftBlock'], children: [_jsx(components_1.ProfileBlock, { backgroundImgUrl: backgroundImgUrl, itemId: projectId, itemName: projectName, onBackgroundImgClick: onBackgroundImgClick }), _jsx("div", { className: ProjectDetails_module_scss_1.default.StatusContent, children: _jsx(components_1.StatusView, { ...statusInfo, label: translations.status, noDataText: noDataText }) }), _jsx("div", { className: ProjectDetails_module_scss_1.default.InfoContent, children: _jsx(components_1.NameDescription, { noDataText: noDataText, data: [
                                                    {
                                                        name: translations.partner,
                                                        description: partnerInfo.partnerName
                                                    },
                                                    {
                                                        name: translations.partnerId,
                                                        description: partnerInfo.partnerId
                                                    }
                                                ] }) }), _jsx("div", { className: ProjectDetails_module_scss_1.default.InfoContent, children: _jsx(components_1.NameDescription, { noDataText: noDataText, data: [
                                                    {
                                                        name: translations.projectIndustry,
                                                        description: projectInfo.projectIndustry
                                                    },
                                                    {
                                                        name: translations.projectType,
                                                        description: projectInfo.projectType
                                                    }
                                                ] }) }), _jsx("div", { className: ProjectDetails_module_scss_1.default.InfoContent, children: _jsx(components_1.NameDescription, { noDataText: noDataText, data: [
                                                    {
                                                        name: translations.createdBy,
                                                        description: creationInfo.createdBy
                                                    },
                                                    {
                                                        name: translations.creationDate,
                                                        description: creationInfo.creationDate
                                                    }
                                                ] }) })] }), _jsx("div", { className: classnames_1.default(ProjectDetails_module_scss_1.default['ProjectDetails__Bottom-Fading-Cell']), children: _jsx(components_1.ItemDetails, { tabs: [
                                            {
                                                title: translations.generalInformation,
                                                value: 1,
                                                content: generalInformationContent
                                            },
                                            {
                                                title: translations.licenses,
                                                value: 2,
                                                content: licensesContent
                                            },
                                            {
                                                title: translations.settings,
                                                value: 3,
                                                subTabs: [
                                                    {
                                                        title: translations.languages,
                                                        value: 1,
                                                        content: languagesContent
                                                    },
                                                    {
                                                        title: translations.currencies,
                                                        value: 2,
                                                        content: currenciesContent
                                                    }
                                                ]
                                            }
                                        ], defaultSubTabValue: 1, defaultTabValue: 1 }) })] })] }));
            };
            exports_1("default", ProjectDetails);
        }
    };
});
