System.register(["react/jsx-runtime", "@/components", "@storybook/addon-knobs", ".", "./GameDetails"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, addon_knobs_1, _1, GameDetails_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (_1_1) {
                _1 = _1_1;
            },
            function (GameDetails_1_1) {
                GameDetails_1 = GameDetails_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/pages/Game Details',
                component: GameDetails_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                let SupportedBrowsersEnum;
                (function (SupportedBrowsersEnum) {
                    SupportedBrowsersEnum[SupportedBrowsersEnum["SAFARI"] = 1] = "SAFARI";
                    SupportedBrowsersEnum[SupportedBrowsersEnum["CHROME"] = 2] = "CHROME";
                    SupportedBrowsersEnum[SupportedBrowsersEnum["FIREFOX"] = 3] = "FIREFOX";
                    SupportedBrowsersEnum[SupportedBrowsersEnum["EDGE"] = 4] = "EDGE";
                    SupportedBrowsersEnum[SupportedBrowsersEnum["OPERA"] = 5] = "OPERA";
                })(SupportedBrowsersEnum || (SupportedBrowsersEnum = {}));
                return (_jsx(GameDetails_1.default, { backgroundImgUrl: '', mainImgUrl: '', gameId: '', gameName: '', generalInformationContext: _jsx("form", { children: _jsx(components_1.FlexibleForm, { title: 'Compatibility', editFormProps: {
                                fields: [],
                                renderInputs: (Component) => _jsx(Component, {})
                            }, editedFormProps: {
                                options: [],
                                col: 6
                            }, editedModeChildren: _jsx(_Fragment, { children: _jsx(_1.GameCompatibility, { devices: [], mobilePortrait: true, certifiedCountries: [{ tagName: 'Armenia' }, { tagName: 'Armenia' }], currencies: [{ title: 'USD' }], uiLanguages: [{ title: 'Armenian' }], operatingLanguages: [], restrictedCountries: [], desktopLandscape: false, desktopPortrait: true, mobileLandscape: false, supportedBrowsers: {
                                        browsersEnum: SupportedBrowsersEnum,
                                        onChange: (values) => console.log(values)
                                    }, translations: {
                                        noDataText: 'Not Completed',
                                        certifiedCountries: 'Certified Countries',
                                        currencies: 'Currencies',
                                        desktop: 'Desktop',
                                        devices: 'Devices',
                                        landscape: 'Landscape',
                                        mobile: 'Mobile',
                                        mobileScreenMode: 'Mobile Screen Mode',
                                        operatingLanguages: 'Operating Languages',
                                        portrait: 'Portrait',
                                        restrictedCountries: 'RestrictedCountries',
                                        supportedBrowsers: 'Supported Browsers',
                                        tableScreenMode: 'Tablet Screen Mode',
                                        tablet: 'Tablet',
                                        uiLanguages: 'Ui Languages'
                                    } }) }) }) }), noDataText: 'N/A', buttons: {
                        playButtonProps: {
                            onClick: () => console.log('onClick')
                        },
                        playDemoButtonProps: {}
                    }, translations: addon_knobs_1.object('translations', {
                        gameName: 'Shining Crown',
                        gameId: 'ID123456',
                        creationDate: 'Creation Date',
                        createdBy: 'Created By',
                        lastUpdateDate: 'Last Updated Date',
                        lastUpdateBy: 'Last Update By',
                        status: 'Active',
                        generalInformation: 'General Information',
                        assets: 'Assets',
                        playButton: 'Play',
                        playDemoButton: 'Play Demo'
                    }), creationDate: '', createdBy: '', lastUpdateBy: '', lastUpdateDate: '', statusInfo: addon_knobs_1.object('statusInfo', {
                        label: 'Status',
                        variant: 'active',
                        statusLabel: 'Active'
                    }), breadCrumbs: [
                        {
                            label: 'Game Management',
                            isRedirect: true
                        },
                        {
                            label: '"Shining Crown" game details'
                        }
                    ] }));
            });
        }
    };
});
