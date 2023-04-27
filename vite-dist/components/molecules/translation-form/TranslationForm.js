System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./TranslationForm.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, TranslationForm_module_scss_1, TranslationForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (TranslationForm_module_scss_1_1) {
                TranslationForm_module_scss_1 = TranslationForm_module_scss_1_1;
            }
        ],
        execute: function () {
            TranslationForm = ({ className, formContent, LanguageSelect, languageSelectProps = {} }) => {
                return (_jsxs(core_1.Card, { className: (classnames_1.default(TranslationForm_module_scss_1.default.TranslationFormCard), className), children: [_jsx(LanguageSelect, { ...languageSelectProps }), _jsx(core_1.Scroll, { children: _jsx("div", { className: TranslationForm_module_scss_1.default.TranslationFormContent, children: formContent }) })] }));
            };
            exports_1("default", TranslationForm);
        }
    };
});
