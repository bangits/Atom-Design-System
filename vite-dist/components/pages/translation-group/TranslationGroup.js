System.register(["react/jsx-runtime", "@my-ui/core", "./TranslationGroup.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, TranslationGroup_module_scss_1, TranslationGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TranslationGroup_module_scss_1_1) {
                TranslationGroup_module_scss_1 = TranslationGroup_module_scss_1_1;
            }
        ],
        execute: function () {
            TranslationGroup = ({ rows, leftElements, rightElements }) => {
                return (_jsxs("div", { className: TranslationGroup_module_scss_1.default.TranslationGroup, children: [_jsxs("div", { className: TranslationGroup_module_scss_1.default['TranslationGroup__actions'], children: [_jsx("div", { className: TranslationGroup_module_scss_1.default['TranslationGroup__left-elements'], children: leftElements }), _jsx("div", { className: TranslationGroup_module_scss_1.default['TranslationGroup__right-elements'], children: rightElements })] }), _jsx(core_1.Scroll, { autoHide: false, showVerticalScroll: false, children: _jsx("div", { className: TranslationGroup_module_scss_1.default['TranslationGroup__rows'], children: rows.map((row) => (_jsxs("div", { className: TranslationGroup_module_scss_1.default['TranslationGroup__row'], children: [_jsxs("h3", { className: TranslationGroup_module_scss_1.default['TranslationGroup__row-title'], children: [row.icon && _jsx("span", { className: TranslationGroup_module_scss_1.default['TranslationGroup__row-icon'], children: row.icon }), " ", row.title] }), _jsx("div", { className: TranslationGroup_module_scss_1.default['TranslationGroup__row-content'], children: _jsx(core_1.Scroll, { autoHeightMin: 320, children: _jsx("div", { className: TranslationGroup_module_scss_1.default['TranslationGroup__row-content--after-scroll'], children: row.content }) }) })] }, row.title?.toString()))) }) })] }));
            };
            exports_1("default", TranslationGroup);
        }
    };
});
