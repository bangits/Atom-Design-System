System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./PlayerDetails"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, PlayerDetails_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (PlayerDetails_1_1) {
                PlayerDetails_1 = PlayerDetails_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/pages/Player Details',
                component: PlayerDetails_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(PlayerDetails_1.default, { bonusesContent: '', verifiedIcon: true, title: '', userInfo: addon_knobs_1.object('userInfo', {
                        title: 'Username Ines254',
                        id: 'ID 1234567',
                        userName: 'Inesa Khachatryan',
                        regInfo: 'Bet365'
                    }), walletInfo: addon_knobs_1.object('walletInfo', {
                        title: 'Wallet',
                        realBalance: {
                            label: 'Real Balance',
                            balance: '21 300',
                            currencyLabel: 'USD'
                        }
                    }), statusInfo: addon_knobs_1.object('statusInfo', {
                        label: 'Status',
                        variant: 'active',
                        statusLabel: 'Active'
                    }), lastActivity: addon_knobs_1.object('lastActivity', {
                        title: 'Last Activity',
                        info: [
                            {
                                label: 'Last login',
                                date: '12.09.2021 12:08:03'
                            },
                            {
                                label: 'Last game session',
                                date: '12.09.2021 12:08:03'
                            }
                        ]
                    }), breadCrumbs: [
                        {
                            label: 'Player Management',
                            isRedirect: true
                        },
                        {
                            label: 'Player Details'
                        }
                    ], translations: {
                        noDataText: 'N/A',
                        usedDeviceLabel: 'Used-Devices',
                        documents: '',
                        finances: '',
                        games: '',
                        general: '',
                        playerDetails: '',
                        playerKPI: '',
                        status: 'Status',
                        registeredFormIp: '',
                        generalInformation: '',
                        settings: '',
                        wallet: '',
                        projects: '',
                        passwordContext: '',
                        languagesContent: '',
                        real: '',
                        promotional: '',
                        bonuses: ''
                    }, userImgUrl: '', userName: '', userId: 0, usedDevices: [
                        {
                            icon: 'active'
                        },
                        {
                            icon: 'active'
                        }
                    ], playerDetails: '', playerKPI: '', documents: 'Documents', realWallet: '', promotionalWallet: '', selectContent: '' }));
            });
        }
    };
});
