System.register(["react/jsx-runtime", "classnames", "./CreatableTable.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, classnames_1, CreatableTable_module_scss_1, CreatableColumn;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (CreatableTable_module_scss_1_1) {
                CreatableTable_module_scss_1 = CreatableTable_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("CreatableColumn", CreatableColumn = ({ column, index }) => {
                return (_jsx("th", { className: column.props && classnames_1.default(CreatableTable_module_scss_1.default['CreatableTable--amount-percentage']), children: column.type === 'custom' ? (_jsxs(_Fragment, { children: [column.props && column.props.afterLabel, column.value, column.props && column.props.beforeLabel] })) : (column.value) }, index));
            });
        }
    };
});
