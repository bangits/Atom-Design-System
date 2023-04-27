System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "react", "./NameDescription.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, react_1, NameDescription_module_scss_1, NameDescription;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (NameDescription_module_scss_1_1) {
                NameDescription_module_scss_1 = NameDescription_module_scss_1_1;
            }
        ],
        execute: function () {
            NameDescription = ({ data, title, children, noDataText, addSpacings }) => {
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(NameDescription_module_scss_1.default.NameDescriptionBase, {
                        [NameDescription_module_scss_1.default['NameDescriptionBase--with-spacings']]: addSpacings
                    }), children: [title && _jsx("span", { className: NameDescription_module_scss_1.default['NameDescriptionBase--title'], children: title }), data.map((d, index) => (_jsxs(react_1.default.Fragment, { children: [_jsxs("div", { className: classnames_1.default(NameDescription_module_scss_1.default['NameDescriptionBase--core']), children: [_jsx("span", { className: NameDescription_module_scss_1.default['NameDescriptionBase--name'], children: d.name || noDataText }), _jsx("span", { className: NameDescription_module_scss_1.default['NameDescriptionBase--description'], children: d.description || noDataText })] }), d.subNameDescription &&
                                    d.subNameDescription?.map((sub, index) => (_jsxs("div", { className: NameDescription_module_scss_1.default['NameDescriptionBase--sub-core'], children: [_jsx("span", { className: NameDescription_module_scss_1.default['NameDescriptionBase--sub-core__name'], children: sub.name || noDataText }), _jsx("span", { className: NameDescription_module_scss_1.default['NameDescriptionBase--sub-core__description'], children: sub.description || noDataText })] }, index)))] }, index))), children && _jsx("div", { className: NameDescription_module_scss_1.default['NameDescriptionBase--children'], children: children })] }));
            };
            exports_1("default", NameDescription);
        }
    };
});
