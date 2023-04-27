System.register(["react/jsx-runtime", "@/icons", "@my-ui/core", "classnames", "./CreatableTable.module.scss", "./CreatableColumn"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, core_1, classnames_1, CreatableTable_module_scss_1, CreatableColumn_1, CreatableTable;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
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
            function (CreatableTable_module_scss_1_1) {
                CreatableTable_module_scss_1 = CreatableTable_module_scss_1_1;
            },
            function (CreatableColumn_1_1) {
                CreatableColumn_1 = CreatableColumn_1_1;
            }
        ],
        execute: function () {
            CreatableTable = ({ buttonName, columns, children, addTier, margin, editMode, disabled }) => {
                return (_jsx(_Fragment, { children: _jsx("div", { style: margin && { margin }, className: classnames_1.default(CreatableTable_module_scss_1.default.CreatableTable), children: _jsxs("table", { children: [_jsx("thead", { children: _jsx("tr", { children: columns.map((column, index) => {
                                            return _jsx(CreatableColumn_1.CreatableColumn, { index: index, column: column });
                                        }) }) }), _jsx("tbody", { children: _jsx(core_1.Scroll, { height: '42.6rem', autoHide: true, autoHeightMin: '3.6rem', children: children }) }), editMode && (_jsx("tfoot", { children: _jsx("tr", { children: _jsx("th", { children: _jsxs("div", { onClick: addTier, className: classnames_1.default(CreatableTable_module_scss_1.default[`CreatableTable--right-block`], {
                                                    [CreatableTable_module_scss_1.default[`CreatableTable--right-block--disabled`]]: disabled
                                                }), children: [_jsx(icons_1.PlusCircleOutlinedIcon, { height: '2rem', width: '2rem' }), _jsx(core_1.Typography, { variant: 'p4', children: buttonName })] }) }) }) }))] }) }) }));
            };
            exports_1("default", CreatableTable);
        }
    };
});
