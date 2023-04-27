System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "./EmptyForm.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, EmptyForm_module_scss_1, EmptyForm;
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
            function (EmptyForm_module_scss_1_1) {
                EmptyForm_module_scss_1 = EmptyForm_module_scss_1_1;
            }
        ],
        execute: function () {
            EmptyForm = ({ buttonProps, children, imgContent = _jsx(atom_design_system_1.Icons.EmptyFormIcon, {}), removeCard, fullHeight, imgContentSize = 'md' }) => {
                return (_jsxs(core_1.Card, { className: classnames_1.default(EmptyForm_module_scss_1.default.EmptyForm, {
                        [EmptyForm_module_scss_1.default['EmptyForm--RemoveCard']]: removeCard,
                        [EmptyForm_module_scss_1.default['EmptyForm--FullHeight']]: fullHeight
                    }), children: [buttonProps && (_jsx("div", { className: EmptyForm_module_scss_1.default['EmptyForm__ButtonContainer'], children: _jsx(core_1.Button, { variant: 'link', startIcon: _jsx(atom_design_system_1.Icons.PlusCircleLarge, {}), ...buttonProps }) })), _jsx("div", { className: classnames_1.default(EmptyForm_module_scss_1.default['EmptyForm__ImgContent'], {
                                [EmptyForm_module_scss_1.default[`EmptyForm__ImgContent--${imgContentSize}`]]: imgContentSize
                            }), children: imgContent }), _jsx("div", { className: EmptyForm_module_scss_1.default['EmptyForm__Content'], children: children })] }));
            };
            exports_1("default", EmptyForm);
        }
    };
});
