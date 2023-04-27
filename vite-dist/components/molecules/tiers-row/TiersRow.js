System.register(["react/jsx-runtime", "@/atom-design-system", "./TiersRow.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, TiersRow_module_scss_1, TiersRow;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (TiersRow_module_scss_1_1) {
                TiersRow_module_scss_1 = TiersRow_module_scss_1_1;
            }
        ],
        execute: function () {
            TiersRow = ({ children, showCloseLayer, onCloseBtnClick, ...flexRowProps }) => {
                return (_jsx("div", { className: TiersRow_module_scss_1.default.TiersRow, children: _jsxs("div", { className: TiersRow_module_scss_1.default.TiersRow__Content, children: [_jsx(atom_design_system_1.FlexRow, { ...flexRowProps, children: children }), showCloseLayer && (_jsx("div", { className: TiersRow_module_scss_1.default.TiersRow__Close, children: onCloseBtnClick && _jsx(atom_design_system_1.IconButton, { icon: _jsx(atom_design_system_1.Icons.CloseIcon, {}), onClick: onCloseBtnClick }) }))] }) }));
            };
            exports_1("default", TiersRow);
        }
    };
});
