System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "react", "./Options.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, react_1, Options_module_scss_1, Options;
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (Options_module_scss_1_1) {
                Options_module_scss_1 = Options_module_scss_1_1;
            }
        ],
        execute: function () {
            Options = ({ data, opacity = true, fitContent = false, emptyValue, children, onOutsideClick, click, outsideClickClassName }) => {
                const { subscribe, unsubscribe } = core_1.useOutsideClickEvent(outsideClickClassName || `.${Options_module_scss_1.default.OptionsBase}`);
                react_1.useEffect(() => {
                    subscribe(() => onOutsideClick?.());
                    return unsubscribe;
                }, [onOutsideClick]);
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(Options_module_scss_1.default.OptionsBase, {
                        [Options_module_scss_1.default['OptionsBase--fitContent']]: fitContent
                    }), children: [Array.isArray(data) ? (data.map((d, index) => (_jsx(_Fragment, { children: _jsx(react_1.default.Fragment, { children: d.download ? (_jsx("div", { onClick: d.onClick, className: classnames_1.default(Options_module_scss_1.default['OptionsBase--core'], {
                                        [Options_module_scss_1.default['OptionsBase--core-opacity']]: opacity
                                    }), children: _jsxs("a", { style: { color: '#505d6e', textDecoration: 'none', width: '100%' }, download: 'foo.png', href: d.download ? d.link : '', children: [_jsx(atom_design_system_1.Divider, { variant: 'horizontal' }), d.icon && _jsx("span", { className: Options_module_scss_1.default['OptionsBase--description'], children: d.icon }), _jsx("span", { className: Options_module_scss_1.default['OptionsBase--name'], children: d.name })] }) })) : !d.name ? (_jsxs("div", { onClick: () => click(d), className: classnames_1.default(Options_module_scss_1.default['OptionsBase--core'], {
                                        [Options_module_scss_1.default['OptionsBase--core-single']]: data?.length <= 1
                                    }), children: [_jsx(atom_design_system_1.Divider, { variant: 'horizontal' }), _jsx("span", { className: Options_module_scss_1.default['OptionsBase--name'], children: d })] })) : (_jsxs("div", { onClick: d.onClick, className: classnames_1.default(Options_module_scss_1.default['OptionsBase--core']), children: [_jsx(atom_design_system_1.Divider, { variant: 'horizontal' }), _jsx("span", { className: Options_module_scss_1.default['OptionsBase--description'], children: d.icon }), _jsx("span", { className: Options_module_scss_1.default['OptionsBase--name'], children: d.name })] })) }, index) })))) : (_jsxs("div", { className: classnames_1.default(Options_module_scss_1.default['OptionsBase--core']), children: [_jsx(atom_design_system_1.Divider, { variant: 'horizontal' }), _jsx("span", { className: Options_module_scss_1.default['OptionsBase--name'], children: emptyValue })] })), children && _jsx("div", { className: Options_module_scss_1.default['OptionsBase--children'], children: children })] }));
            };
            exports_1("default", Options);
        }
    };
});
