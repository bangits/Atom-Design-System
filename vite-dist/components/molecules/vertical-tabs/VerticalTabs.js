System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./VerticalTabs.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, VerticalTabs_module_scss_1, VerticalTabs;
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
            function (VerticalTabs_module_scss_1_1) {
                VerticalTabs_module_scss_1 = VerticalTabs_module_scss_1_1;
            }
        ],
        execute: function () {
            VerticalTabs = ({ tabs, value, autoHeightMin, onChange, children }) => {
                return (_jsxs(core_1.Card, { className: VerticalTabs_module_scss_1.default.VerticalTabs, children: [_jsx("div", { className: VerticalTabs_module_scss_1.default.VerticalTabs__Sidebar, children: _jsx(core_1.Scroll, { autoHeight: true, autoHeightMin: autoHeightMin, showHorizontalScroll: false, children: tabs.map((t) => (_jsx("button", { className: classnames_1.default(VerticalTabs_module_scss_1.default.VerticalTabs__Button, {
                                        [VerticalTabs_module_scss_1.default['VerticalTabs__Button--Active']]: value === t.value
                                    }), type: 'button', onClick: () => onChange(t.value), children: t.content }))) }) }), _jsx("div", { className: VerticalTabs_module_scss_1.default.VerticalTabs__Content, children: children })] }));
            };
            exports_1("default", VerticalTabs);
        }
    };
});
