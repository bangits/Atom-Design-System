System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./LicensesCard"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, LicensesCard_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (LicensesCard_1_1) {
                LicensesCard_1 = LicensesCard_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: LicensesCard_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/License Card'
            });
            exports_1("Default", Default = () => {
                return (_jsx(LicensesCard_1.default, { onClick: addon_actions_1.action("onClick"), col: 6, addLicense: 'Add License', clickHere: 'Click here', toDoSomething: 'to add license' }));
            });
        }
    };
});
