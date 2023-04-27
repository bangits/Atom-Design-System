System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@/components/molecules/name-and-id", "@/components/organisms/last-activity-view", "@/helpers", "@/icons", "@my-ui/core", "classnames", "./PlayerDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, name_and_id_1, last_activity_view_1, helpers_1, icons_1, core_1, classnames_1, PlayerDetails_module_scss_1, PlayerDetails;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (name_and_id_1_1) {
                name_and_id_1 = name_and_id_1_1;
            },
            function (last_activity_view_1_1) {
                last_activity_view_1 = last_activity_view_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (PlayerDetails_module_scss_1_1) {
                PlayerDetails_module_scss_1 = PlayerDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            PlayerDetails = ({ playerKPI, playerDetails, walletInfo, statusInfo, lastActivity, breadCrumbs, userImgUrl, tabs, userName, userId, usedDevices, translations, documents, realWallet, promotionalWallet, verifiedIcon, usedDeviceLabel, noDataText, selectContent, bonusesContent }) => {
                return (_jsxs("div", { className: classnames_1.default(PlayerDetails_module_scss_1.default.PlayerDetailsBase), children: [_jsx("div", { className: classnames_1.default(PlayerDetails_module_scss_1.default['PlayerDetailsBase--breadCrumb']), children: _jsx(core_1.Breadcrumb, { links: breadCrumbs }) }), _jsxs("div", { className: classnames_1.default(PlayerDetails_module_scss_1.default['PlayerDetailsBase--content']), children: [_jsxs("div", { className: classnames_1.default(PlayerDetails_module_scss_1.default['PlayerDetailsUserInfo--content-info']), children: [_jsxs(core_1.Card, { borderRadius: 1.6, className: PlayerDetails_module_scss_1.default.CardName, children: [userImgUrl ? (_jsx(core_1.AvatarCard, { avatarImg: userImgUrl, variant: 'default', imageSize: 'md' })) : (_jsx("div", { className: PlayerDetails_module_scss_1.default['CardName--avatar'], children: _jsx(icons_1.UserMainIcon, {}) })), _jsx(name_and_id_1.NameAndId, { name: userName, id: userId }), selectContent && selectContent, verifiedIcon && (_jsx("div", { className: PlayerDetails_module_scss_1.default['CardName--verified'], children: _jsx(atom_design_system_1.Icons.PlayerVerifiedIcon, {}) }))] }), _jsx(components_1.StatusView, { ...statusInfo }), _jsx(components_1.UsedDevice, { noDataText: noDataText, label: usedDeviceLabel, usedDevices: usedDevices }), _jsx("div", { className: PlayerDetails_module_scss_1.default.LastActivityViewWrapper, children: _jsx(last_activity_view_1.LastActivityView, { lastActivity: lastActivity }) })] }), _jsx(core_1.Card, { className: classnames_1.default(PlayerDetails_module_scss_1.default['PlayerDetailsBase--content-control']), borderRadius: 1.6, children: _jsx("div", { className: PlayerDetails_module_scss_1.default['PartnerDetailsBase__Main-Content'], children: _jsx(components_1.ItemDetails, { tabs: [
                                                {
                                                    title: translations.general,
                                                    value: 1,
                                                    subTabs: [
                                                        {
                                                            title: translations.playerDetails,
                                                            value: 1,
                                                            content: playerDetails
                                                        }
                                                    ]
                                                },
                                                {
                                                    title: translations.documents,
                                                    value: 2,
                                                    content: documents
                                                },
                                                {
                                                    title: translations.wallet,
                                                    value: 3,
                                                    subTabs: [
                                                        {
                                                            title: translations.real,
                                                            value: 1,
                                                            content: realWallet
                                                        },
                                                        {
                                                            title: translations.promotional,
                                                            value: 2,
                                                            content: promotionalWallet
                                                        }
                                                    ]
                                                },
                                                {
                                                    title: translations.bonuses,
                                                    value: 4,
                                                    content: bonusesContent
                                                }
                                            ], defaultTabValue: 1, defaultSubTabValue: 1 }) }) })] })] }));
            };
            exports_1("default", helpers_1.typedMemo(PlayerDetails));
        }
    };
});
