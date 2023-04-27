System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./Balance"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, Balance_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (Balance_1_1) {
                Balance_1 = Balance_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: Balance_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/Balance'
            });
            exports_1("Default", Default = () => {
                return (_jsx(_Fragment, { children: _jsx(Balance_1.default, { money: addon_knobs_1.number('money', 1), currency: addon_knobs_1.text('currency', 'USD') }) }));
            });
        }
    };
});
