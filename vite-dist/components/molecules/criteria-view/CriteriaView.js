System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "./CriteriaView.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, CriteriaView_module_scss_1, CriteriaView;
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
            function (CriteriaView_module_scss_1_1) {
                CriteriaView_module_scss_1 = CriteriaView_module_scss_1_1;
            }
        ],
        execute: function () {
            CriteriaView = ({ criterias, condition, onDelete, onEdit }) => {
                const hasCondition = criterias.length > 1;
                return (_jsxs("div", { className: CriteriaView_module_scss_1.default.CriteriaView, children: [_jsx("div", { className: classnames_1.default(CriteriaView_module_scss_1.default.CriteriaView__Criterias, {
                                [CriteriaView_module_scss_1.default['CriteriaView__Criterias--Has-Condition']]: hasCondition
                            }), children: criterias.map(({ checkName, propertyName, values }) => (_jsxs("div", { className: CriteriaView_module_scss_1.default.CriteriaView__Criteria, children: [_jsx("div", { className: CriteriaView_module_scss_1.default.CriteriaView__PropName, children: propertyName }), _jsx("div", { className: CriteriaView_module_scss_1.default.CriteriaView__Separator, children: _jsx(atom_design_system_1.Icons.ArrowNext, {}) }), _jsx("div", { className: CriteriaView_module_scss_1.default.CriteriaView__CheckName, children: checkName }), _jsx("div", { className: CriteriaView_module_scss_1.default.CriteriaView__Separator, children: _jsx(atom_design_system_1.Icons.ArrowNext, {}) }), _jsx("div", { className: CriteriaView_module_scss_1.default.CriteriaView__Values, children: values.length > 1 ? values.map((v) => _jsx(core_1.Tag, { title: v }, v)) : values[0] })] }))) }), condition && hasCondition && _jsx("div", { className: CriteriaView_module_scss_1.default.CriteriaView__Condition, children: condition }), _jsxs("div", { className: CriteriaView_module_scss_1.default.CriteriaView__Buttons, children: [onEdit && _jsx(core_1.IconButton, { onClick: onEdit, className: CriteriaView_module_scss_1.default.CriteriaView__Edit, icon: _jsx(atom_design_system_1.Icons.EditIcon, {}) }), onDelete && (_jsx(core_1.IconButton, { onClick: onDelete, className: CriteriaView_module_scss_1.default.CriteriaView__Delete, icon: _jsx(atom_design_system_1.Icons.TrashIndicator, {}) }))] })] }));
            };
            exports_1("default", CriteriaView);
        }
    };
});
