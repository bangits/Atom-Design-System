System.register(["react/jsx-runtime", "@/atom-design-system", "classnames", "draft-js", "react", "./Variables.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, classnames_1, draft_js_1, react_1, Variables_module_scss_1, Variables;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (draft_js_1_1) {
                draft_js_1 = draft_js_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (Variables_module_scss_1_1) {
                Variables_module_scss_1 = Variables_module_scss_1_1;
            }
        ],
        execute: function () {
            Variables = ({ variables, optionRight = false, emptyValue, editorState, onVariableClick, onChange }) => {
                const [isOpenMenu, setIsOpenMenu] = react_1.useState(false);
                const addVariable = onVariableClick ||
                    ((variable) => {
                        const contentState = draft_js_1.Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), `${variable}`, editorState.getCurrentInlineStyle());
                        onChange(draft_js_1.EditorState.push(editorState, contentState, 'variables'));
                    });
                return (_jsxs("div", { className: classnames_1.default(Variables_module_scss_1.default.container), children: [_jsx(atom_design_system_1.Button, { type: 'button', onClick: () => setIsOpenMenu((prev) => !prev), className: classnames_1.default(Variables_module_scss_1.default.button, {
                                [Variables_module_scss_1.default['button-active']]: isOpenMenu
                            }), variant: 'link', children: _jsx(atom_design_system_1.Icons.VariableIcon, {}) }), _jsx("div", { style: { transform: 'scale(1.2)', position: 'absolute', zIndex: 1000, top: '48px' }, className: classnames_1.default(Variables_module_scss_1.default.option, {
                                [Variables_module_scss_1.default['container-option']]: optionRight
                            }), children: isOpenMenu && (_jsx(atom_design_system_1.Options, { opacity: false, fitContent: true, outsideClickClassName: `.${Variables_module_scss_1.default.container}`, click: addVariable, onOutsideClick: () => setIsOpenMenu(false), data: variables, emptyValue: emptyValue })) })] }));
            };
            exports_1("default", Variables);
        }
    };
});
