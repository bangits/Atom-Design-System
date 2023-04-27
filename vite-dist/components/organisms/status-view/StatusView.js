System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "./StatusView.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, StatusView_module_scss_1, StatusView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (StatusView_module_scss_1_1) {
                StatusView_module_scss_1 = StatusView_module_scss_1_1;
            }
        ],
        execute: function () {
            StatusView = ({ label, statusLabel, noDataText, variant, actions, addSpacings, icon }) => {
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(StatusView_module_scss_1.default.StatusView, {
                        [StatusView_module_scss_1.default['StatusView--with-spacings']]: addSpacings
                    }), children: [_jsx("span", { children: label || noDataText }), _jsxs("div", { className: StatusView_module_scss_1.default['StatusView--container'], children: [_jsx("div", { className: StatusView_module_scss_1.default['StatusView--status'], children: !icon ? _jsx(core_1.Status, { variant: variant, children: statusLabel || noDataText }) : null }), icon && (_jsx("div", { className: StatusView_module_scss_1.default['StatusView--iconButton'], children: _jsxs("div", { style: { display: 'flex' }, children: [_jsx("div", { className: classnames_1.default({
                                                    [StatusView_module_scss_1.default['StatusView--iconButton-text-label']]: icon.bordered,
                                                    [StatusView_module_scss_1.default['StatusView--iconButton-text-label-no-bordered']]: !icon.bordered
                                                }), children: icon.label }), _jsx(core_1.Tooltip, { showEvent: 'hover', text: icon.tooltipText, children: _jsx("span", { onClick: icon.onIconClick, style: { cursor: 'pointer' }, children: icon.value }) })] }) })), !icon &&
                                    actions?.map((action, idx) => {
                                        const IconComponent = atom_design_system_1.Icons[action.iconName];
                                        return (_jsx("div", { className: StatusView_module_scss_1.default['StatusView--iconButton'], children: _jsx(core_1.Tooltip, { showEvent: 'hover', text: action.tooltipText, children: _jsx(core_1.IconButton, { icon: _jsx(IconComponent, {}), onClick: action.onClick, variant: action.buttonVariant ?? 'dark' }) }) }, idx));
                                    })] })] }));
            };
            exports_1("default", StatusView);
        }
    };
});
