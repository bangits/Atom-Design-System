System.register(["react/jsx-runtime", "@/atom-design-system", "@/icons", "@my-ui/core", "classnames", "./ConditionDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, icons_1, core_1, classnames_1, ConditionDetails_module_scss_1, ConditionDetails;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (ConditionDetails_module_scss_1_1) {
                ConditionDetails_module_scss_1 = ConditionDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            ConditionDetails = ({ conditionDetailsLabel, conditionDetailsSubLabel, col, addActivity, addCriteria }) => {
                return (_jsxs("div", { className: classnames_1.default(ConditionDetails_module_scss_1.default.ConditionCard, {
                        [ConditionDetails_module_scss_1.default[`ConditionCard--col-${col}`]]: col
                    }), children: [_jsx(core_1.Typography, { className: ConditionDetails_module_scss_1.default['ConditionCard--title'], variant: 'h6', children: conditionDetailsLabel }), _jsx(core_1.Typography, { className: ConditionDetails_module_scss_1.default['ConditionCard--sub-title'], variant: 'p3', children: conditionDetailsSubLabel }), _jsxs("div", { className: ConditionDetails_module_scss_1.default[`ConditionCard--actions`], children: [_jsxs("div", { onClick: addActivity, className: ConditionDetails_module_scss_1.default[`ConditionCard--actions-left-block`], children: [_jsx(icons_1.PlusIcon, {}), _jsx(core_1.Typography, { variant: 'p4', children: "Add Activity" })] }), _jsx(atom_design_system_1.Divider, { large: true }), _jsxs("div", { onClick: addCriteria, className: ConditionDetails_module_scss_1.default[`ConditionCard--actions-right-block`], children: [_jsx(icons_1.PlusIcon, {}), _jsx(core_1.Typography, { variant: 'p4', children: "Add Criteria" })] })] })] }));
            };
            exports_1("default", ConditionDetails);
        }
    };
});
