System.register(["react/jsx-runtime", "@/components/atoms/copy-button", "./LinkItem.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, copy_button_1, LinkItem_module_scss_1, LinkItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (copy_button_1_1) {
                copy_button_1 = copy_button_1_1;
            },
            function (LinkItem_module_scss_1_1) {
                LinkItem_module_scss_1 = LinkItem_module_scss_1_1;
            }
        ],
        execute: function () {
            LinkItem = ({ imgSrc, index, linkHref }) => {
                return (_jsxs("div", { className: LinkItem_module_scss_1.default.LinkItem, children: [index && _jsx("span", { className: LinkItem_module_scss_1.default['LinkItem__index'], children: index }), _jsxs("div", { className: LinkItem_module_scss_1.default['LinkItem__content'], children: [imgSrc && _jsx("img", { src: imgSrc }), linkHref && (_jsxs(_Fragment, { children: [_jsx("p", { children: linkHref }), _jsx(copy_button_1.CopyButton, { copyText: linkHref })] }))] })] }));
            };
            exports_1("default", LinkItem);
        }
    };
});
