System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./BrowsersCheckboxGroup"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, BrowsersCheckboxGroup_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (BrowsersCheckboxGroup_1_1) {
                BrowsersCheckboxGroup_1 = BrowsersCheckboxGroup_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: BrowsersCheckboxGroup_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/BrowsersCheckboxGroup'
            });
            exports_1("Default", Default = () => {
                let SupportedBrowsersEnum;
                (function (SupportedBrowsersEnum) {
                    SupportedBrowsersEnum[SupportedBrowsersEnum["SAFARI"] = 1] = "SAFARI";
                    SupportedBrowsersEnum[SupportedBrowsersEnum["CHROME"] = 2] = "CHROME";
                    SupportedBrowsersEnum[SupportedBrowsersEnum["FIREFOX"] = 3] = "FIREFOX";
                    SupportedBrowsersEnum[SupportedBrowsersEnum["EDGE"] = 4] = "EDGE";
                    SupportedBrowsersEnum[SupportedBrowsersEnum["OPERA"] = 5] = "OPERA";
                })(SupportedBrowsersEnum || (SupportedBrowsersEnum = {}));
                return _jsx(BrowsersCheckboxGroup_1.default, { browsersEnum: SupportedBrowsersEnum });
            });
        }
    };
});
