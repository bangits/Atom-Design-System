System.register(["react/jsx-runtime", "@/icons", "@storybook/addon-knobs", "./CustomItemCard"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, addon_knobs_1, CustomItemCard_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (CustomItemCard_1_1) {
                CustomItemCard_1 = CustomItemCard_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/CustomItemCard',
                component: CustomItemCard_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(CustomItemCard_1.default, { index: '1', actions: _jsxs(_Fragment, { children: [_jsx("div", { children: _jsx(icons_1.MoneyReduceIcon, {}) }), _jsx("div", { children: "Action 2" })] }), title: '2FA Verification', subtitle: 'ID12345678' }));
            });
        }
    };
});
