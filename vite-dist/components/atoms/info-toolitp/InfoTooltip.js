System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "./InfoTooltip.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, InfoTooltip_module_scss_1, InfoTooltip;
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
            function (InfoTooltip_module_scss_1_1) {
                InfoTooltip_module_scss_1 = InfoTooltip_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("InfoTooltip", InfoTooltip = ({ infoTooltipText, isQuestion }) => {
                return (_jsx(core_1.Tooltip, { showEvent: 'hover', text: infoTooltipText, disabled: !infoTooltipText, children: _jsx("div", { className: InfoTooltip_module_scss_1.default.InfoIcon, children: isQuestion ? _jsx(atom_design_system_1.Icons.QuestionIcon, {}) : _jsx(atom_design_system_1.Icons.InfoTooltipIcon, {}) }) }));
            });
        }
    };
});
