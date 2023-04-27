System.register(["react/jsx-runtime", "@/components", "@/components/molecules/name-and-id", "@/icons", "@my-ui/core", "./UserDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, name_and_id_1, icons_1, core_1, UserDetails_module_scss_1, UserDetails;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (name_and_id_1_1) {
                name_and_id_1 = name_and_id_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserDetails_module_scss_1_1) {
                UserDetails_module_scss_1 = UserDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            UserDetails = ({ breadCrumbs, statusInfo, lastLoginDate, lastLoginIp, registeredFormIp, userName, creationDate, userId, userImgUrl, translations, createdBy, lastUpdatedBy, generalInformationContext, userWalletsContent, languagesContent, commissionPlansContent, linksContext, rolesContent, permissionsContent }) => {
                return (_jsxs(_Fragment, { children: [_jsx(core_1.Breadcrumb, { links: breadCrumbs }), _jsxs("div", { className: UserDetails_module_scss_1.default.UserDetailsWrapper, children: [_jsxs("div", { className: UserDetails_module_scss_1.default.AsideLeftContent, children: [_jsxs(core_1.Card, { borderRadius: 1.6, className: UserDetails_module_scss_1.default.CardName, children: [userImgUrl ? (_jsx(core_1.AvatarCard, { avatarImg: userImgUrl, variant: 'default', imageSize: 'md' })) : (_jsx("div", { className: UserDetails_module_scss_1.default['CardName--avatar'], children: _jsx(icons_1.UserMainIcon, {}) })), _jsx(name_and_id_1.NameAndId, { name: userName, id: userId })] }), _jsx("div", { className: UserDetails_module_scss_1.default.StatusViewContainer, children: _jsx(components_1.StatusView, { ...statusInfo, label: translations.status }) }), _jsx(core_1.Card, { className: UserDetails_module_scss_1.default.CardDateContent, children: _jsxs("div", { className: UserDetails_module_scss_1.default.NameDescriptionsBlock, children: [_jsx(components_1.NameDescription, { data: [
                                                            {
                                                                name: translations.lastLoginDate,
                                                                description: lastLoginDate
                                                            },
                                                            {
                                                                name: translations.lastLoginIp,
                                                                description: lastLoginIp
                                                            },
                                                            {
                                                                name: translations.registeredFormIp,
                                                                description: registeredFormIp
                                                            }
                                                        ] }), _jsx(components_1.NameDescription, { data: [
                                                            {
                                                                name: translations.creationDate,
                                                                description: creationDate
                                                            },
                                                            {
                                                                name: translations.createdBy,
                                                                description: createdBy
                                                            },
                                                            {
                                                                name: translations.lastUpdatedBy,
                                                                description: lastUpdatedBy
                                                            }
                                                        ] })] }) })] }), _jsx("div", { className: UserDetails_module_scss_1.default.AsideRightContent, children: _jsx(components_1.ItemDetails, { tabs: [
                                            {
                                                title: translations.generalInformation,
                                                value: 1,
                                                content: generalInformationContext
                                            },
                                            {
                                                title: translations.roleAndPermission,
                                                value: 2,
                                                subTabs: [
                                                    {
                                                        title: translations.roles,
                                                        value: 1,
                                                        content: rolesContent
                                                    },
                                                    {
                                                        title: translations.permissions,
                                                        value: 2,
                                                        content: permissionsContent
                                                    }
                                                ]
                                            },
                                            {
                                                title: translations.wallet,
                                                value: 3,
                                                content: userWalletsContent
                                            },
                                            commissionPlansContent && {
                                                title: translations.commissionPlan,
                                                value: 4,
                                                content: commissionPlansContent
                                            },
                                            linksContext && {
                                                title: translations.link,
                                                value: 5,
                                                content: linksContext
                                            },
                                            {
                                                title: translations.settings,
                                                value: 6,
                                                subTabs: [
                                                    {
                                                        title: translations.languagesContent,
                                                        value: 1,
                                                        content: languagesContent
                                                    }
                                                    // {
                                                    //   title: translations.passwordContext,
                                                    //   value: 3,
                                                    //   content: passwordContext
                                                    // },
                                                ]
                                            }
                                            // {
                                            //   title: 'Projects',
                                            //   value: 3,
                                            //   content: <UserProjects />
                                            // },
                                        ], defaultTabValue: 1, defaultSubTabValue: 1 }) })] })] }));
            };
            exports_1("default", UserDetails);
        }
    };
});
