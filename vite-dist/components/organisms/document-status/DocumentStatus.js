System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "./DocumentStatus.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, DocumentStatus_module_scss_1, DocumentStatus;
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
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (DocumentStatus_module_scss_1_1) {
                DocumentStatus_module_scss_1 = DocumentStatus_module_scss_1_1;
            }
        ],
        execute: function () {
            DocumentStatus = ({ startIcon = 'CircleIcon', statusLabel, noDataText, variant, actions, pageQuantity, pageLabel }) => {
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(DocumentStatus_module_scss_1.default.DocumentStatus), children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center' }, className: classnames_1.default(DocumentStatus_module_scss_1.default['DocumentStatus--icon-button']), children: [_jsx("div", { className: classnames_1.default(DocumentStatus_module_scss_1.default['DocumentStatus--svg']), children: _jsx(atom_design_system_1.Icons.PagesIcon, {}) }), _jsxs("div", { children: [pageQuantity, " ", pageLabel] })] }), _jsx("div", { className: DocumentStatus_module_scss_1.default['DocumentStatus--container'], children: _jsx("div", { className: DocumentStatus_module_scss_1.default['DocumentStatus--status'], children: _jsx(core_1.Status, { variant: variant, children: statusLabel || noDataText }) }) })] }));
            };
            exports_1("default", DocumentStatus);
        }
    };
});
