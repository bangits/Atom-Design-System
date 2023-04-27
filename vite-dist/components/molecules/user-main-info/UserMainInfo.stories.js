System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./UserMainInfo"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, UserMainInfo_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (UserMainInfo_1_1) {
                UserMainInfo_1 = UserMainInfo_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/molecules/User Main Info',
                component: UserMainInfo_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return _jsx(UserMainInfo_1.default, { className: '' });
            });
        }
    };
});
