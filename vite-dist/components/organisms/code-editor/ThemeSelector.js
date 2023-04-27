System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "codemirror/theme/dracula.css", "codemirror/theme/material.css", "codemirror/theme/mdn-like.css", "./CodeEditor.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, CodeEditor_module_scss_1, themes, ThemeSelector;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (CodeEditor_module_scss_1_1) {
                CodeEditor_module_scss_1 = CodeEditor_module_scss_1_1;
            }
        ],
        execute: function () {
            themes = ['mdn-like', 'material', 'dracula'];
            ThemeSelector = ({ setTheme, themeTooltipText }) => {
                const selectTheme = ({ target: { value } }) => {
                    setTheme(value);
                };
                return (_jsxs("div", { className: CodeEditor_module_scss_1.default.selectContainer, children: [_jsx("select", { className: CodeEditor_module_scss_1.default.select, id: 'theme', name: 'theme', onChange: selectTheme, children: themes.map((t) => (_jsx("option", { value: t, children: t }, t))) }), _jsx("label", { htmlFor: 'theme', children: _jsx(core_1.Tooltip, { text: themeTooltipText, showEvent: 'hover', children: _jsx("div", { className: CodeEditor_module_scss_1.default.tooltipIcon, children: _jsx(atom_design_system_1.Icons.InfoTooltipIcon, {}) }) }) })] }));
            };
            exports_1("default", ThemeSelector);
        }
    };
});
