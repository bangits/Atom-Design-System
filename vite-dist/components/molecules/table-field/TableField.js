System.register(["react/jsx-runtime", "classnames", "./TableField.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, classnames_1, TableField_module_scss_1, TableField;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (TableField_module_scss_1_1) {
                TableField_module_scss_1 = TableField_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("TableField", TableField = ({ backgroundColor, writeMode, color, ...props }) => {
                return (_jsx("input", { style: backgroundColor && { background: backgroundColor }, autoComplete: 'off', className: classnames_1.default(TableField_module_scss_1.default.Field, {
                        [TableField_module_scss_1.default[`Field--disabled`]]: props.disabled,
                        [TableField_module_scss_1.default[`Field--write-mode`]]: writeMode,
                        [TableField_module_scss_1.default[`Field--${color}`]]: color
                    }), ...props }));
            });
        }
    };
});
