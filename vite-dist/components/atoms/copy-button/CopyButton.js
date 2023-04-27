System.register(["react/jsx-runtime", "@/atom-design-system", "@/helpers", "@my-ui/core", "./CopyButton.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, helpers_1, core_1, CopyButton_module_scss_1, CopyButton;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CopyButton_module_scss_1_1) {
                CopyButton_module_scss_1 = CopyButton_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("CopyButton", CopyButton = ({ copyText }) => {
                return (_jsx(core_1.Tooltip, { showEvent: 'click', text: 'Copied', children: _jsx("button", { type: 'button', className: CopyButton_module_scss_1.default.CopyButton, children: _jsx("span", { onClick: () => {
                                helpers_1.copyToClipboard(copyText.toString());
                            }, children: _jsx(atom_design_system_1.Icons.CopyIcon, {}) }) }) }));
            });
        }
    };
});
