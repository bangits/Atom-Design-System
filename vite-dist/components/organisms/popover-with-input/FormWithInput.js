System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "react", "./PopoverWithInput.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, react_1, PopoverWithInput_module_scss_1, FormWithInput;
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
            function (PopoverWithInput_module_scss_1_1) {
                PopoverWithInput_module_scss_1 = PopoverWithInput_module_scss_1_1;
            }
        ],
        execute: function () {
            FormWithInput = ({ buttonLabel, title, inputProps = {}, totalCount, initialPosition, infoText, onBackBtnClick, close, onSave }) => {
                // TODO: This should be fixed later
                infoText = infoText ?? totalCount;
                const [inputValue, setInputValue] = react_1.useState(initialPosition || '');
                return (_jsxs("div", { className: classnames_1.default(PopoverWithInput_module_scss_1.default['FormWithInput'], {
                        [PopoverWithInput_module_scss_1.default['FormWithInput--with-back']]: !!onBackBtnClick
                    }), children: [onBackBtnClick && (_jsx("button", { className: PopoverWithInput_module_scss_1.default['FormWithInput__back'], type: 'button', onClick: onBackBtnClick, children: _jsx(atom_design_system_1.Icons.BackIcon, { width: '0.8rem' }) })), _jsx("p", { className: PopoverWithInput_module_scss_1.default['FormWithInput__name'], children: title }), infoText && _jsx("p", { className: PopoverWithInput_module_scss_1.default['FormWithInput__info'], children: infoText }), _jsx(core_1.TextInput, { type: 'number', value: inputValue, maxLength: 6, onChange: (e) => {
                                setInputValue(e.target.value);
                                inputProps.onChange?.(e);
                            }, ...inputProps, containerClassName: classnames_1.default(PopoverWithInput_module_scss_1.default['FormWithInput__input'], inputProps.className) }), _jsx(core_1.Button, { onClick: () => {
                                if (inputValue) {
                                    onSave(+inputValue);
                                    close();
                                }
                            }, className: PopoverWithInput_module_scss_1.default['FormWithInput__button'], variant: 'link', children: buttonLabel })] }));
            };
            exports_1("default", FormWithInput);
        }
    };
});
