System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "./CriteriaForm.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, CriteriaForm_module_scss_1, CriteriaForm;
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
            function (CriteriaForm_module_scss_1_1) {
                CriteriaForm_module_scss_1 = CriteriaForm_module_scss_1_1;
            }
        ],
        execute: function () {
            CriteriaForm = ({ fields = [], leftButtons, rightButtons, criteriaConditionProps, criteriaFieldConditionProps, viewModeElement, onCriteriaFieldRemove, showCondition: showConditionProp }) => {
                const showCondition = fields.length > 1;
                const content = !viewModeElement && (_jsxs(_Fragment, { children: [_jsx("div", { className: CriteriaForm_module_scss_1.default.CriteriaForm__Fields, children: fields.map((field, index) => (_jsxs("div", { className: CriteriaForm_module_scss_1.default.CriteriaForm__Field, children: [showCondition && criteriaFieldConditionProps && (_jsxs(core_1.Button, { type: 'button', disabled: !!index, ...criteriaFieldConditionProps, variant: 'ghost', className: classnames_1.default(CriteriaForm_module_scss_1.default['CriteriaForm__Field-Condition'], CriteriaForm_module_scss_1.default['Condition'], criteriaFieldConditionProps.className), children: [criteriaFieldConditionProps.children, !index && _jsx(atom_design_system_1.Icons.SwitchIcon, {})] })), field, onCriteriaFieldRemove && fields.length > 1 && (_jsx("div", { className: CriteriaForm_module_scss_1.default['CriteriaForm__Field-Remove'], children: _jsx(core_1.IconButton, { onClick: () => onCriteriaFieldRemove(index), icon: _jsx(atom_design_system_1.Icons.CloseIcon, {}) }) }))] }, index))) }), (leftButtons || rightButtons) && (_jsxs("div", { className: CriteriaForm_module_scss_1.default.CriteriaForm__Buttons, children: [leftButtons && _jsx("div", { className: CriteriaForm_module_scss_1.default['CriteriaForm__Left-Buttons'], children: leftButtons }), rightButtons && _jsx("div", { className: CriteriaForm_module_scss_1.default['CriteriaForm__Right-Buttons'], children: rightButtons })] }))] }));
                return (_jsxs(core_1.Card, { borderRadius: viewModeElement ? 2.4 : 0.8, className: classnames_1.default(CriteriaForm_module_scss_1.default.CriteriaForm, {
                        [CriteriaForm_module_scss_1.default['CriteriaForm--ShowedCondition']]: showConditionProp || showCondition,
                        [CriteriaForm_module_scss_1.default['CriteriaForm--ViewMode']]: viewModeElement
                    }), children: [criteriaConditionProps && (_jsxs(core_1.Button, { type: 'button', ...criteriaConditionProps, className: classnames_1.default(CriteriaForm_module_scss_1.default.CriteriaForm__Condition, CriteriaForm_module_scss_1.default.Condition, CriteriaForm_module_scss_1.default.Condition, criteriaConditionProps.className), children: [criteriaConditionProps.children, _jsx(atom_design_system_1.Icons.SwitchIcon, {})] })), viewModeElement || content] }));
            };
            exports_1("default", CriteriaForm);
        }
    };
});
