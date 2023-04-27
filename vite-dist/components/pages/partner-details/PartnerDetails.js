System.register(["react/jsx-runtime", "@/components", "@my-ui/core", "classnames", "./PartnerDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, classnames_1, PartnerDetails_module_scss_1, PartnerDetails;
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
            function (PartnerDetails_module_scss_1_1) {
                PartnerDetails_module_scss_1 = PartnerDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            PartnerDetails = ({ breadCrumbs, docInfo, noDataText = 'N/A', parentCompanyId, parentCompany, translations, statusInfo, organizationDataMainInformationForms, organizationDataProviderInformation, showProviderInformation = true, backgroundImgUrl, onBackgroundImgClick, partnerId, partnerName, projectInformation }) => {
                return (_jsxs("div", { className: PartnerDetails_module_scss_1.default.PartnerDetailsBase, children: [_jsx("div", { className: PartnerDetails_module_scss_1.default['PartnerDetailsBase--breadCrumb'], children: _jsx(core_1.Breadcrumb, { links: breadCrumbs }) }), _jsxs("div", { className: PartnerDetails_module_scss_1.default['PartnerDetailsBase--container'], children: [_jsx("div", { className: PartnerDetails_module_scss_1.default['PartnerDetailsBase--leftBlock'], children: _jsxs("div", { className: PartnerDetails_module_scss_1.default['PartnerDetailsBase__Sidebar'], children: [_jsx(components_1.ProfileBlock, { backgroundImgUrl: backgroundImgUrl, itemId: partnerId, itemName: partnerName, onBackgroundImgClick: onBackgroundImgClick }), _jsx("div", { className: PartnerDetails_module_scss_1.default['PartnerDetailsBase__Sidebar-Widget'], children: _jsx(components_1.NameDescription, { data: [
                                                        {
                                                            name: translations.parentCompany,
                                                            description: parentCompany
                                                        },
                                                        {
                                                            name: translations.parentCompanyId,
                                                            description: parentCompanyId
                                                        }
                                                    ], noDataText: noDataText }) }), _jsx("div", { className: PartnerDetails_module_scss_1.default['PartnerDetailsBase__Sidebar-Widget'], children: _jsx(components_1.StatusView, { ...statusInfo, label: translations.status }) }), _jsx("div", { className: PartnerDetails_module_scss_1.default['PartnerDetailsBase__Sidebar-Widget'], children: docInfo && (_jsxs(components_1.NameDescription, { data: [
                                                        {
                                                            name: translations.documentID,
                                                            description: docInfo.documentID
                                                        },
                                                        {
                                                            name: translations.type,
                                                            description: docInfo.type
                                                        },
                                                        {
                                                            name: translations.expirationDate,
                                                            description: docInfo.expirationDate
                                                        }
                                                    ], noDataText: noDataText, children: [_jsx("span", { children: translations.status }), _jsx(core_1.Status, { variant: docInfo.statusVariant, children: docInfo.statusLabel })] })) })] }) }), _jsx("div", { className: PartnerDetails_module_scss_1.default['PartnerDetailsBase__Main-Content'], children: _jsx(components_1.ItemDetails, { tabs: [
                                            {
                                                title: translations.organizationData,
                                                value: 1,
                                                subTabs: [
                                                    {
                                                        title: translations.mainInformation,
                                                        value: 1,
                                                        content: (_jsx("div", { className: classnames_1.default(PartnerDetails_module_scss_1.default['QuadCell'], 'QuadCell'), children: organizationDataMainInformationForms }))
                                                    },
                                                    ...(showProviderInformation
                                                        ? [
                                                            {
                                                                title: translations.providerInformation,
                                                                value: 2,
                                                                content: _jsx(_Fragment, { children: organizationDataProviderInformation })
                                                            }
                                                        ]
                                                        : [])
                                                ]
                                            }
                                            // {
                                            //   title: 'Projects',
                                            //   value: 2,
                                            //   content: projectInformation
                                            // }
                                        ], defaultTabValue: 1, defaultSubTabValue: 1 }) })] })] }));
            };
            exports_1("default", PartnerDetails);
        }
    };
});
