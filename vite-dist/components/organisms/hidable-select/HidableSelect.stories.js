System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-knobs", "./HidableSelect"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_knobs_1, HidableSelect_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (HidableSelect_1_1) {
                HidableSelect_1 = HidableSelect_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Hidable Select',
                component: HidableSelect_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return _jsx(HidableSelect_1.default, { buttonTitle: "Add", renderCustomSelect: (changeOpenedCustomSelect) => (_jsx(core_1.Select, { options: [
                            {
                                label: 'USD',
                                value: 1
                            },
                            {
                                label: 'RUB',
                                value: 2
                            }
                        ], onChange: () => changeOpenedCustomSelect(false) })) });
            });
        }
    };
});
