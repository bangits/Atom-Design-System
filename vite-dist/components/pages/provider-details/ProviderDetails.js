System.register(["react/jsx-runtime", "@/components", "@/components/organisms/count-view/CountView", "@my-ui/core", "classnames", "./ProviderDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, CountView_1, core_1, classnames_1, ProviderDetails_module_scss_1, ProviderDetails;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (CountView_1_1) {
                CountView_1 = CountView_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (ProviderDetails_module_scss_1_1) {
                ProviderDetails_module_scss_1 = ProviderDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            ProviderDetails = ({ statusInfo, mainDetailsInfo, totalGameCount, breadCrumb, noDataText = 'N/A', translations, creationDate, createdBy, generalInformationContext, gamesTabContent, onBackgroundImgClick, providerName, partnerName, integrationType, providerId, backgroundImgUrl, lastUpdatedBy, lastUpdatedDate, isCmsUser = false }) => {
                return (_jsxs("div", { className: ProviderDetails_module_scss_1.default.ProviderDetailsBase, children: [_jsx(core_1.Breadcrumb, { links: breadCrumb }), _jsxs("div", { className: ProviderDetails_module_scss_1.default['ProviderDetailsBase--container'], children: [_jsxs("div", { className: ProviderDetails_module_scss_1.default['ProviderDetailsBase--leftBlock'], children: [_jsx(components_1.ProfileBlock, { backgroundImgUrl: backgroundImgUrl, itemId: providerId, itemName: providerName, onBackgroundImgClick: onBackgroundImgClick }), !isCmsUser && (_jsx(_Fragment, { children: partnerName ? (_jsx("div", { className: ProviderDetails_module_scss_1.default['ProviderDetailsBase--doubleBlock'], children: _jsx(components_1.NameDescription, { noDataText: noDataText, data: [
                                                        {
                                                            name: translations.integrationType,
                                                            description: integrationType
                                                        },
                                                        {
                                                            name: translations.partnerName,
                                                            description: partnerName
                                                        }
                                                    ] }) })) : (_jsx("div", { className: ProviderDetails_module_scss_1.default['ProviderDetailsBase--doubleBlock'], children: _jsx(components_1.NameDescription, { noDataText: noDataText, data: [
                                                        {
                                                            name: translations.integrationType,
                                                            description: integrationType
                                                        }
                                                    ] }) })) })), !isCmsUser && (_jsx(CountView_1.default, { noDataText: noDataText, title: translations.totalGameCount, count: totalGameCount })), isCmsUser && (_jsx("div", { className: ProviderDetails_module_scss_1.default.StatusContent, children: _jsx(components_1.StatusView, { ...statusInfo, label: translations.status, noDataText: noDataText }) })), !isCmsUser && (_jsx(components_1.NameDescription, { noDataText: noDataText, data: [
                                                {
                                                    name: translations.creationDate,
                                                    description: creationDate
                                                },
                                                {
                                                    name: translations.createdBy,
                                                    description: createdBy
                                                },
                                                {
                                                    name: translations.lastUpdatedDate,
                                                    description: lastUpdatedDate
                                                },
                                                {
                                                    name: translations.lastUpdatedBy,
                                                    description: lastUpdatedBy
                                                }
                                            ] }))] }), _jsx("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['ProviderDetails__Bottom-Fading-Cell'], 'ProviderDetails__Bottom-Fading-Cell'), children: _jsx(components_1.ItemDetails, { tabs: [
                                            {
                                                title: translations.generalInformation,
                                                value: 1,
                                                content: _jsx(_Fragment, { children: generalInformationContext })
                                            },
                                            {
                                                title: translations.games,
                                                value: 2,
                                                content: gamesTabContent,
                                                disableScroll: true
                                            }
                                        ], defaultTabValue: 1 }) })] })] }));
            };
            exports_1("default", ProviderDetails);
        }
    };
});
