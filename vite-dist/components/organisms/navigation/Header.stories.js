System.register(["react/jsx-runtime", "@/components", "@storybook/addon-actions", "@storybook/addon-knobs", "./Sidebar"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, addon_actions_1, addon_knobs_1, Sidebar_1, Default, DefaultSidebar;
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
            function (Sidebar_1_1) {
                Sidebar_1 = Sidebar_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: components_1.Header,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/Header'
            });
            exports_1("Default", Default = () => {
                return (_jsx(components_1.Header, { correctBalanceLabel: 'Correction Balance', isOffline: addon_knobs_1.boolean('isOffline', false), dateConverter: (date) => date.toLocaleString(), speed: 2, localTime: 'Local Time', money: addon_knobs_1.number('money', 100000), currency: addon_knobs_1.text('currency', 'USD'), avatarProps: {
                        dropdownLinks: [],
                        bottomButtonLabel: 'Log Out',
                        onBottomButtonClick: addon_actions_1.action('logOut'),
                        avatarLabel: 'user_bangits@gmail.com',
                        imageSource: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                    }, notificationProps: {
                        quantity: 0
                    } }));
            });
            exports_1("DefaultSidebar", DefaultSidebar = () => {
                return (_jsx(Sidebar_1.Sidebar, { menuItems: [
                        {
                            label: 'Dashboard',
                            isActive: true,
                            subItems: [
                                { label: 'Sub Menu Item', isActive: true },
                                { label: 'Sub Menu Item' },
                                { label: 'Sub Menu Item' },
                                { label: 'Sub Menu Item' }
                            ],
                            icon: _jsx(_Fragment, {})
                        }
                    ] }));
            });
        }
    };
});
