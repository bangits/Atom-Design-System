System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./CustomItemCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, CustomItemCard_module_scss_1, CustomItemCardCard;
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
            function (CustomItemCard_module_scss_1_1) {
                CustomItemCard_module_scss_1 = CustomItemCard_module_scss_1_1;
            }
        ],
        execute: function () {
            CustomItemCardCard = ({ actions, subtitle, title, index }) => {
                return (_jsxs("div", { className: classnames_1.default(CustomItemCard_module_scss_1.default.CustomItemCard), children: [_jsxs("div", { className: CustomItemCard_module_scss_1.default.CustomItemCard__Main, children: [actions && _jsx("div", { className: CustomItemCard_module_scss_1.default.CustomItemCard__Actions, children: actions }), _jsxs("div", { className: CustomItemCard_module_scss_1.default.CustomItemCard__Img, children: [subtitle && (_jsx(core_1.TextWithTooltip, { className: CustomItemCard_module_scss_1.default.CustomItemCard__Subtitle, displayText: subtitle, children: _jsx(core_1.Typography, { className: CustomItemCard_module_scss_1.default['CustomItemCard__Subtitle-Content'], component: 'span', variant: 'p5', color: 'primary', children: title }) })), title && (_jsx(core_1.TextWithTooltip, { className: CustomItemCard_module_scss_1.default.CustomItemCard__Title, displayText: title, children: _jsx(core_1.Typography, { className: CustomItemCard_module_scss_1.default['CustomItemCard__Title-Content'], component: 'span', variant: 'p5', children: subtitle }) }))] })] }), _jsxs("div", { className: CustomItemCard_module_scss_1.default.CustomItemCard__Bottom, children: [index && _jsx("div", { className: CustomItemCard_module_scss_1.default.CustomItemCard__Index, children: index }), _jsx("div", { className: CustomItemCard_module_scss_1.default.CustomItemCard__Status })] })] }));
            };
            exports_1("default", CustomItemCardCard);
        }
    };
});
