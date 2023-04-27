System.register(["react/jsx-runtime", "@/components/atoms/loader", "@my-ui/core", "classnames", "./DialogInfo.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, loader_1, core_1, classnames_1, DialogInfo_module_scss_1, DialogInfo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (DialogInfo_module_scss_1_1) {
                DialogInfo_module_scss_1 = DialogInfo_module_scss_1_1;
            }
        ],
        execute: function () {
            DialogInfo = ({ options, isLoading }) => {
                return (_jsxs("div", { className: classnames_1.default(DialogInfo_module_scss_1.default.DialogInfo, {
                        [DialogInfo_module_scss_1.default['DialogInfo--Loading']]: isLoading
                    }), children: [options?.length > 0 && (_jsx(core_1.Scroll, { className: DialogInfo_module_scss_1.default.DialogInfo__Scroll, height: '47.5rem', showHorizontalScroll: false, children: _jsx("ul", { className: DialogInfo_module_scss_1.default.DialogInfo__List, children: options.map((o) => o.value && (_jsxs("li", { className: DialogInfo_module_scss_1.default.DialogInfo__Item, children: [_jsx(core_1.Typography, { className: DialogInfo_module_scss_1.default.DialogInfo__Label, variant: 'p5', color: 'primary', children: o.label }), _jsx(core_1.Typography, { className: DialogInfo_module_scss_1.default.DialogInfo__Value, variant: 'p4', children: o.value })] }, o.label.toString()))) }) })), isLoading && _jsx(loader_1.Loader, {})] }));
            };
            exports_1("default", DialogInfo);
        }
    };
});
