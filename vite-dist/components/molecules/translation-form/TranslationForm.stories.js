System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-knobs", "./TranslationForm"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_knobs_1, TranslationForm_1, Default;
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
            function (TranslationForm_1_1) {
                TranslationForm_1 = TranslationForm_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: TranslationForm_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/TranslationForm'
            });
            exports_1("Default", Default = () => {
                return _jsx(TranslationForm_1.default, { LanguageSelect: core_1.Select, formContent: 'formContent' });
            });
        }
    };
});
