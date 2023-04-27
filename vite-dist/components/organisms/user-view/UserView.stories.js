System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./UserView"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, UserView_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (UserView_1_1) {
                UserView_1 = UserView_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/User View',
                component: UserView_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(UserView_1.default, { userInfo: addon_knobs_1.object('userInfo', {
                        title: 'Username Ines254',
                        id: 'ID 1234567',
                        userName: 'Inesa Khachatryan',
                        regInfo: 'Bet365'
                    }) }));
            });
        }
    };
});
