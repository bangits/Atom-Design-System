System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./SessionExpiring"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, SessionExpiring_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (SessionExpiring_1_1) {
                SessionExpiring_1 = SessionExpiring_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: SessionExpiring_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/SessionExpiring'
            });
            exports_1("Default", Default = () => {
                return (_jsx(_Fragment, { children: _jsx(SessionExpiring_1.default, { title: addon_knobs_1.text('title', 'Session Expire Warning'), subTitle: addon_knobs_1.text('subTitle', 'Your session will expire in 3 minutes. Do you want to extend the session?'), logOutButton: addon_knobs_1.text('logOutButton', 'Log out'), extend: addon_knobs_1.text('extend', 'Extend'), timeRemaining: addon_knobs_1.text('timeRemaining', 'Time remaining') }) }));
            });
        }
    };
});
