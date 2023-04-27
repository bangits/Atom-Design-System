System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./ProviderDetails", "./ProviderGames"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, ProviderDetails_1, ProviderGames_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ProviderDetails_1_1) {
                ProviderDetails_1 = ProviderDetails_1_1;
            },
            function (ProviderGames_1_1) {
                ProviderGames_1 = ProviderGames_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/pages/Provider Details',
                component: ProviderDetails_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(ProviderDetails_1.default, { isCmsUser: true, lastUpdatedBy: '', lastUpdatedDate: '', totalGameCount: addon_knobs_1.text('totalGameCount', '1024'), creationDate: addon_knobs_1.text('creationDate', '09/05/2021 12:00:00'), createdBy: addon_knobs_1.text('createdBy', 'email@gmail.com'), integrationType: 'Integration Type', partnerName: 'Partner Name', generalInformationContext: _jsx(_Fragment, {}), translations: {
                        integrationType: 'Integration Type',
                        partnerName: 'Partner Name',
                        totalGameCount: 'Total Game Count',
                        status: 'Status',
                        creationDate: 'Created Date',
                        createdBy: 'Created By',
                        generalInformation: 'General Information',
                        editButton: 'Edit',
                        games: 'Games',
                        lastUpdatedBy: 'Last Updated By',
                        lastUpdatedDate: 'Last Updated Date'
                    }, backgroundImgUrl: 'https://novomatic.com/sites/default/files/2017-05/Logo_N-Shortbrand.png', providerId: 'ID1234567', providerName: 'Novomatic', onBackgroundImgClick: console.log, statusInfo: {
                        label: '',
                        statusLabel: 'Active',
                        actions: [
                            {
                                iconName: 'LogOutIcon',
                                /* @eslint-ignore */
                                onClick: () => { },
                                tooltipText: 'Terminate'
                            }
                        ]
                    }, breadCrumb: addon_knobs_1.object('breadCrumbs', [
                        {
                            label: 'Provider Management',
                            isRedirect: true
                        },
                        {
                            label: 'Novomatic details'
                        }
                    ]), gamesTabContent: _jsx(ProviderGames_1.ProviderGames, { isLoadingGames: true, searchInputMaxLength: 30, translations: {
                            addGame: 'Add Game',
                            noGames: 'No Games',
                            search: 'Search',
                            playDemo: 'Play Demo'
                        }, gameTypes: [
                            {
                                id: 1,
                                name: 'Main Category',
                                gameCount: 9
                            },
                            {
                                id: 2,
                                name: 'Category',
                                gameCount: 29
                            }
                        ], games: [
                            {
                                id: 25,
                                name: 'EGT',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 26,
                                name: 'EGT',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 27,
                                name: 'EGT',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 28,
                                name: 'EGT',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 29,
                                name: 'EGT',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 30,
                                name: 'քոեռտըւ',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 31,
                                name: 'ԱԱԱՍՍՍԲԲԲԲԲ',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 32,
                                name: '                                                 1',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 33,
                                name: 'սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ  ',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 34,
                                name: 'սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ սլօտ %  ',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 35,
                                name: '!@#$%^&&^%$#@#$F%^%$#',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 36,
                                name: '!@#$%^&&^%$#@#$F%^%$#',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 37,
                                name: '!@#$%^&&^%$#@#$F%^%$#',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 38,
                                name: '!@#$%^&&^%$#@#$F%^%$#',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 39,
                                name: '!@#$%^&&^%$#@#$F%^%$#',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 40,
                                name: '!@#$%^&&^%$#@#$F%^%$#',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 41,
                                name: 'stringfg',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 42,
                                name: 'string',
                                icon: null,
                                hasDemo: true
                            },
                            {
                                id: 43,
                                name: 'string',
                                icon: null,
                                hasDemo: true
                            }
                        ], onChange: console.log, onGameClick: console.log, onAddGameClick: console.log, onGameDetailsClick: console.log, isAllGamesLoaded: false, isTabLoading: false, hasGames: true }) }));
            });
        }
    };
});
