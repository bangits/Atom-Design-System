System.register(["react/jsx-runtime", "@my-ui/core", "./CountView.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, CountView_module_scss_1, CountView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CountView_module_scss_1_1) {
                CountView_module_scss_1 = CountView_module_scss_1_1;
            }
        ],
        execute: function () {
            CountView = ({ title, count, noDataText }) => {
                return (_jsxs(core_1.Card, { className: CountView_module_scss_1.default.CountViewWrapper, borderRadius: 1.6, children: [_jsx(core_1.Typography, { component: 'span', variant: 'p5', color: 'primary', className: CountView_module_scss_1.default.CardTitle, children: title }), _jsx("div", { className: CountView_module_scss_1.default.TagWrapper, children: _jsx(core_1.Tag, { title: count || '0', color: 'primary' }) })] }));
            };
            exports_1("default", CountView);
        }
    };
});
