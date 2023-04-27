System.register(["react/jsx-runtime", "@/components", "@/helpers", "@my-ui/core", "classnames", "./GameDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, helpers_1, core_1, classnames_1, GameDetails_module_scss_1, GameDetails;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (GameDetails_module_scss_1_1) {
                GameDetails_module_scss_1 = GameDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            GameDetails = ({ breadCrumbs, buttons, generalInformationContext, statusInfo, translations, creationDate, createdBy, lastUpdateBy, lastUpdateDate, noDataText, gameId, gameName, backgroundImgUrl, mainImgUrl, onMainImgClick, onBackgroundImgClick, isLoadingImage, isShowEditIcons = true, rgsInfo = true }) => {
                return (_jsxs("div", { className: classnames_1.default(GameDetails_module_scss_1.default.GameDetailsBase), children: [_jsx("div", { className: classnames_1.default(GameDetails_module_scss_1.default['BreadCrumbWrapper']), children: _jsx(core_1.Breadcrumb, { links: breadCrumbs }) }), _jsxs("div", { className: classnames_1.default(GameDetails_module_scss_1.default['MainCarcass'], 'MainCarcass'), children: [_jsxs("div", { className: classnames_1.default(GameDetails_module_scss_1.default['MainCarcass__Sidebar'], 'MainCarcass__Sidebar'), children: [_jsx(components_1.ProfileBlock, { isLoadingImage: isLoadingImage, backgroundImgUrl: backgroundImgUrl, itemId: gameId, itemName: gameName, mainImgUrl: mainImgUrl, onBackgroundImgClick: onBackgroundImgClick, onMainImgClick: onMainImgClick }), _jsx("div", { className: GameDetails_module_scss_1.default['GameDetails__Sidebar-Widget'], children: _jsx(components_1.StatusView, { ...statusInfo, label: translations.status }) }), rgsInfo && (_jsx("div", { className: classnames_1.default(GameDetails_module_scss_1.default['CardWrapper'], GameDetails_module_scss_1.default['CardWrapper--Change-Update'], 'CardWrapper', 'CardWrapper--Change-Update'), children: _jsx(components_1.NameDescription, { data: [
                                                    {
                                                        name: translations.creationDate,
                                                        description: creationDate
                                                    },
                                                    {
                                                        name: translations.createdBy,
                                                        description: createdBy
                                                    },
                                                    {
                                                        name: translations.lastUpdateDate,
                                                        description: lastUpdateDate
                                                    },
                                                    {
                                                        name: translations.lastUpdateBy,
                                                        description: lastUpdateBy
                                                    }
                                                ], noDataText: noDataText }) })), _jsxs("div", { className: classnames_1.default(GameDetails_module_scss_1.default['EmptyWrapper'], GameDetails_module_scss_1.default['EmptyWrapper--Two-Cols'], 'EmptyWrapper', 'EmptyWrapper--Two-Cols'), children: [_jsx(core_1.Button, { ...buttons.playDemoButtonProps, variant: 'ghost', children: translations.playDemoButton }), _jsx(core_1.Button, { ...buttons.playButtonProps, children: translations.playButton })] })] }), _jsx("div", { className: classnames_1.default(GameDetails_module_scss_1.default['MainCarcass__Content'], 'MainCarcass__Content'), children: _jsx(components_1.ItemDetails, { tabs: [
                                            {
                                                title: translations.generalInformation,
                                                value: 1,
                                                content: generalInformationContext
                                            },
                                            {
                                                title: translations.assets,
                                                value: 2
                                            }
                                        ], defaultTabValue: 1 }) })] })] }));
            };
            exports_1("default", helpers_1.typedMemo(GameDetails));
        }
    };
});
