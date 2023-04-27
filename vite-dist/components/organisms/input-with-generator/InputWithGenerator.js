System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@my-ui/core"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, core_1, InputWithGenerator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            InputWithGenerator = ({ onGenerateButtonClick, onCopyButtonClick, ...props }) => {
                return (_jsx(components_1.TextInput, { endIcon: [
                        _jsx(core_1.Tooltip, { text: 'Copied', showEvent: 'click', children: _jsx("span", { children: _jsx(atom_design_system_1.Icons.CopyButtonIcon, { className: 'cursor-pointer', onClick: onCopyButtonClick }) }) }),
                        _jsx(atom_design_system_1.Icons.GeneratorIcon, { className: 'cursor-pointer', onClick: onGenerateButtonClick })
                    ], ...props }));
            };
            exports_1("default", InputWithGenerator);
        }
    };
});
