System.register(["react/jsx-runtime", "classnames", "./NameAndId.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, classnames_1, NameAndId_module_scss_1, NameAndId;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (NameAndId_module_scss_1_1) {
                NameAndId_module_scss_1 = NameAndId_module_scss_1_1;
            }
        ],
        execute: function () {
            NameAndId = ({ name, id, noDataText, defaultColors }) => {
                return (_jsxs("div", { className: NameAndId_module_scss_1.default.NameAndIdBase, children: [_jsx("span", { className: classnames_1.default({
                                [NameAndId_module_scss_1.default[`NameAndIdBase--default_name`]]: defaultColors,
                                [NameAndId_module_scss_1.default[`NameAndIdBase--name`]]: !defaultColors
                            }), children: name || noDataText }), _jsx("span", { className: classnames_1.default({
                                [NameAndId_module_scss_1.default[`NameAndIdBase--default_id`]]: defaultColors,
                                [NameAndId_module_scss_1.default[`NameAndIdBase--id`]]: !defaultColors
                            }), children: id || noDataText })] }));
            };
            exports_1("default", NameAndId);
        }
    };
});
