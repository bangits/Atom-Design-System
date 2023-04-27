System.register(["react/jsx-runtime", "@/components", "@my-ui/core", "classnames", "./WebSite.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, classnames_1, WebSite_module_scss_1, WebSite;
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
            function (WebSite_module_scss_1_1) {
                WebSite_module_scss_1 = WebSite_module_scss_1_1;
            }
        ],
        execute: function () {
            WebSite = ({ noDataText, breadCrumb, backgroundImgUrl, domain, sliderName, onBackgroundImgClick, statusInfo, translations, additionalProps, settingsContent, mediaContent, footerContentDesktop, footerContentTablet, footerContentMobile, headerContentDesktop, headerContentTablet, headerContentMobile }) => {
                return (_jsxs("div", { className: WebSite_module_scss_1.default.WebSiteBase, children: [_jsx(core_1.Breadcrumb, { links: breadCrumb }), _jsxs("div", { className: WebSite_module_scss_1.default['WebSiteDetailsBase--container'], children: [_jsxs("div", { className: WebSite_module_scss_1.default['WebSiteDetailsBase--leftBlock'], children: [_jsx(components_1.ProfileBlock, { viewMode: true, backgroundImgUrl: backgroundImgUrl, itemId: _jsx(core_1.Button, { variant: 'link', onClick: () => window.open(domain, '_blank'), children: domain }), itemName: sliderName }), _jsx("div", { className: WebSite_module_scss_1.default.StatusContent, children: _jsx(components_1.StatusView, { ...statusInfo, label: translations.status, noDataText: noDataText }) }), _jsx("div", { className: WebSite_module_scss_1.default.InfoContent, children: _jsx(components_1.NameDescription, { noDataText: noDataText, data: [
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
                                                ] }) })] }), _jsx("div", { className: classnames_1.default(WebSite_module_scss_1.default['WebSiteDetails__Bottom-Fading-Cell']), children: _jsx(components_1.ItemDetails, { tabs: [
                                            {
                                                title: translations.generalInformation,
                                                value: 1,
                                                content: settingsContent
                                            },
                                            {
                                                title: translations.header,
                                                value: 2,
                                                disableScroll: true,
                                                subTabs: [
                                                    {
                                                        title: translations.desktop,
                                                        value: 1,
                                                        content: headerContentDesktop
                                                    },
                                                    {
                                                        title: translations.tablet,
                                                        value: 2,
                                                        content: headerContentTablet
                                                    },
                                                    {
                                                        title: translations.mobile,
                                                        value: 3,
                                                        content: headerContentMobile
                                                    }
                                                ]
                                            },
                                            {
                                                title: translations.footer,
                                                value: 3,
                                                disableScroll: true,
                                                subTabs: [
                                                    {
                                                        title: translations.desktop,
                                                        value: 1,
                                                        content: footerContentDesktop
                                                    },
                                                    {
                                                        title: translations.tablet,
                                                        value: 2,
                                                        content: footerContentTablet
                                                    },
                                                    {
                                                        title: translations.mobile,
                                                        value: 3,
                                                        content: footerContentMobile
                                                    }
                                                ]
                                            },
                                            {
                                                title: translations.media,
                                                value: 4,
                                                content: mediaContent
                                            }
                                        ], defaultSubTabValue: 1, defaultTabValue: 1 }) })] })] }));
            };
            exports_1("default", WebSite);
        }
    };
});
