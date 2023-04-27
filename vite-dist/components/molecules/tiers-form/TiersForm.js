System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "react", "./TiersForm.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, react_1, TiersForm_module_scss_1, TiersForm;
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
            function (TiersForm_module_scss_1_1) {
                TiersForm_module_scss_1 = TiersForm_module_scss_1_1;
            }
        ],
        execute: function () {
            TiersForm = ({ children, heading, footerElement, contentMinLength, showCloseLayer }) => {
                const headingArray = react_1.useMemo(() => react_1.Children.toArray(heading), [heading]);
                const footerElementArray = react_1.useMemo(() => react_1.Children.toArray(footerElement), [footerElement]);
                return (_jsxs("div", { className: classnames_1.default(TiersForm_module_scss_1.default.TiersForm, {
                        [TiersForm_module_scss_1.default['TiersForm--ContentMinLength']]: contentMinLength,
                        [TiersForm_module_scss_1.default['TiersForm--ShowCloseLayer']]: showCloseLayer
                    }), children: [_jsx("ul", { className: TiersForm_module_scss_1.default.TiersForm__Heading, children: headingArray.map((h, index) => (_jsx("li", { className: TiersForm_module_scss_1.default.TiersForm__HeadingItem, children: _jsx(core_1.Typography, { variant: 'p4', color: 'primary', children: h }) }, index))) }), _jsx(core_1.Scroll, { height: '27rem', children: _jsx("div", { className: TiersForm_module_scss_1.default.TiersForm__Content, children: children }) }), footerElementArray.length ? (_jsx("ul", { className: TiersForm_module_scss_1.default.TiersForm__Footer, children: footerElementArray.map((h, index) => (_jsx("li", { className: TiersForm_module_scss_1.default.TiersForm__FooterItem, children: h }, index))) })) : null] }));
            };
            exports_1("default", TiersForm);
        }
    };
});
