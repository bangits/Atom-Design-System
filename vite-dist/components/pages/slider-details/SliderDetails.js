System.register(["react/jsx-runtime", "@/components", "@my-ui/core", "classnames", "./SliderDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, classnames_1, SliderDetails_module_scss_1, SliderDetails;
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
            function (SliderDetails_module_scss_1_1) {
                SliderDetails_module_scss_1 = SliderDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            SliderDetails = ({ noDataText, breadCrumb, backgroundImgUrl, domain, sliderName, onBackgroundImgClick, statusInfo, translations, additionalProps, settingsContent, headerContent, footerContent, socialMediaContent }) => {
                return (_jsxs("div", { className: SliderDetails_module_scss_1.default.SliderDetailsBase, children: [_jsx(core_1.Breadcrumb, { links: breadCrumb }), _jsxs("div", { className: SliderDetails_module_scss_1.default['ProjectDetailsBase--container'], children: [_jsxs("div", { className: SliderDetails_module_scss_1.default['ProjectDetailsBase--leftBlock'], children: [_jsx(components_1.ProfileBlock, { backgroundImgUrl: backgroundImgUrl, itemId: domain, itemName: sliderName, onBackgroundImgClick: onBackgroundImgClick }), _jsx("div", { className: SliderDetails_module_scss_1.default.StatusContent, children: _jsx(components_1.StatusView, { ...statusInfo, label: translations.status, noDataText: noDataText }) }), _jsx("div", { className: SliderDetails_module_scss_1.default.InfoContent, children: _jsx(components_1.NameDescription, { noDataText: noDataText, data: [
                                                    {
                                                        name: translations.createdBy,
                                                        description: additionalProps.createdBy
                                                    },
                                                    {
                                                        name: translations.creationDate,
                                                        description: additionalProps.createdDate
                                                    },
                                                    {
                                                        name: translations.lastUpdatedBy,
                                                        description: additionalProps.lastUpdatedBy
                                                    },
                                                    {
                                                        name: translations.lastUpdateDate,
                                                        description: additionalProps.lastUpdateDate
                                                    }
                                                ] }) })] }), _jsx("div", { className: classnames_1.default(SliderDetails_module_scss_1.default['ProjectDetails__Bottom-Fading-Cell']), children: _jsx(components_1.ItemDetails, { tabs: [
                                            {
                                                title: translations.generalInformation,
                                                value: 1,
                                                content: settingsContent
                                            },
                                            {
                                                title: translations.header,
                                                value: 2,
                                                content: headerContent
                                            },
                                            {
                                                title: translations.footer,
                                                value: 3,
                                                content: footerContent
                                            },
                                            {
                                                title: translations.socialMedia,
                                                value: 4,
                                                content: socialMediaContent
                                            }
                                        ], defaultSubTabValue: 1, defaultTabValue: 1 }) })] })] }));
            };
            exports_1("default", SliderDetails);
        }
    };
});
