System.register(["react/jsx-runtime", "@/components", "@storybook/addon-actions", "@storybook/addon-knobs", "./UserDetails"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, addon_actions_1, addon_knobs_1, UserDetails_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (UserDetails_1_1) {
                UserDetails_1 = UserDetails_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/pages/User Details',
                component: UserDetails_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(UserDetails_1.default, { lastUpdatedBy: 'lastUpdatedBy', passwordContext: 'Password Policy', languagesContent: 'Languages', userWalletsContent: _jsx(components_1.UserWallets, { onDefaultWalletChange: addon_actions_1.action('onDefaultWalletChange'), onDefaultBallanceChange: addon_actions_1.action('onDefaultBallanceChange'), tableLoadingRowIds: [2], translations: {
                            add: 'Add',
                            default: 'Default',
                            id: 'ID',
                            other: 'Other',
                            makeDefault: 'Make default',
                            balance: 'Balance',
                            correctDefaultBalance: 'Correct Default Balance'
                        }, wallets: [
                            {
                                balance: '150.000.000',
                                currency: 'USD',
                                id: 1,
                                isDefault: true,
                                currencyId: 1
                            },
                            {
                                balance: '150.000.000',
                                currency: 'AMD',
                                id: 2,
                                isDefault: false,
                                currencyId: 2
                            },
                            {
                                balance: '150.000.000',
                                currency: 'RUB',
                                id: 3,
                                isDefault: false,
                                currencyId: 3
                            }
                        ], renderCurrenciesSelect: (changeOpenedCurrenciesSelect) => (_jsx(components_1.Select, { options: [
                                {
                                    label: 'USD',
                                    value: 1
                                },
                                {
                                    label: 'RUB',
                                    value: 2
                                }
                            ], onChange: () => changeOpenedCurrenciesSelect(false) })) }), createdBy: '11/11/1111', creationDate: '2017-11/11', breadCrumbs: [
                        {
                            label: 'User Managment',
                            isRedirect: true
                        },
                        {
                            label: 'User Details'
                        }
                    ], translations: {
                        permissions: 'permissions',
                        roleAndPermission: 'roleAndPermission',
                        roles: 'roles',
                        link: 'Links',
                        commissionPlan: 'Commission Plan',
                        settings: 'Settings',
                        passwordContext: 'Password Policy',
                        languagesContent: 'Languages',
                        generalInformation: 'General Information',
                        lastLoginDate: 'Last Login Date',
                        lastLoginIp: 'Last Login IP',
                        registeredFormIp: 'Registered Form IP',
                        status: 'Status',
                        wallet: 'Wallet',
                        projects: 'Projects',
                        createdBy: 'CreatedBy',
                        lastUpdatedBy: 'LastUpdatedBy',
                        creationDate: 'CreationDate'
                    }, userName: 'Inesa Khachatryan', userId: 'ID 1234567', userImgUrl: '', statusInfo: addon_knobs_1.object('statusInfo', {
                        label: 'Status',
                        variant: 'active',
                        statusLabel: 'Active'
                    }), lastLoginDate: '12/01/2021', registeredFormIp: '192.158.1.38', lastLoginIp: '192.158.1.38', generalInformationContext: _jsx(_Fragment, { children: "General Information" }) }));
            });
        }
    };
});
