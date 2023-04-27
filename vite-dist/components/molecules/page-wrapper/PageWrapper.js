System.register(["react/jsx-runtime", "@/atom-design-system", "@/helpers/typedMemo", "@/icons", "@my-ui/core", "./PageWrapper.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, typedMemo_1, icons_1, core_1, PageWrapper_module_scss_1, PageWrapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (typedMemo_1_1) {
                typedMemo_1 = typedMemo_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (PageWrapper_module_scss_1_1) {
                PageWrapper_module_scss_1 = PageWrapper_module_scss_1_1;
            }
        ],
        execute: function () {
            PageWrapper = ({ children, title, showButton, buttonElement, buttonProps = {}, infoTooltipText, infoIcon, id, subText, subTitle, breadCrumbLinks }) => {
                return (_jsxs("div", { className: PageWrapper_module_scss_1.default.PageWrapper, children: [breadCrumbLinks && (_jsx("div", { className: PageWrapper_module_scss_1.default['DetailsPage__breadCrumb'], children: _jsx(core_1.Breadcrumb, { links: breadCrumbLinks }) })), (title || showButton) && (_jsxs("div", { className: PageWrapper_module_scss_1.default.PageWrapperHeader, children: [_jsxs(core_1.Typography, { component: 'h2', variant: 'h3', className: PageWrapper_module_scss_1.default.PageTitle, children: [title, infoIcon && _jsx(atom_design_system_1.InfoTooltip, { isQuestion: infoIcon, infoTooltipText: infoTooltipText }), subText && _jsx(atom_design_system_1.LabelEndMark, { label: subText, text: id?.toString() }), subTitle && (_jsxs("span", { className: PageWrapper_module_scss_1.default['PageTitle--span'], children: [_jsx(icons_1.LargeArrowIcon, { height: '0.8rem', width: '2.4rem' }), _jsx("span", { className: PageWrapper_module_scss_1.default['PageTitle--span--span'], children: subTitle })] }))] }), showButton && (buttonElement || _jsx(core_1.Button, { ...buttonProps, type: 'button' }))] })), children] }));
            };
            exports_1("default", typedMemo_1.typedMemo(PageWrapper));
        }
    };
});
