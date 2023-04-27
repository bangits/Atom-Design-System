System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "react", "./CodeArea.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, react_1, CodeArea_module_scss_1, CodeArea;
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
            function (CodeArea_module_scss_1_1) {
                CodeArea_module_scss_1 = CodeArea_module_scss_1_1;
            }
        ],
        execute: function () {
            CodeArea = ({ title, errorText, font = 'code', headline, variables, onChange, value, size, defaultValue }) => {
                const textareaRef = react_1.useRef(null);
                const addVariable = react_1.useCallback((variable) => {
                    const area = textareaRef.current;
                    const pos = area.selectionStart;
                    const val = area.value;
                    const start = val.substring(0, pos);
                    const end = val.substring(pos, val.length);
                    area.value = start + variable + end;
                    area.focus();
                    onChange?.(area.value);
                }, [textareaRef, onChange]);
                const [codeState, setCodeState] = react_1.useState(defaultValue);
                const onCodeChange = react_1.useCallback((e) => {
                    onChange?.(e.target.value);
                    setCodeState(e.target.value);
                }, [onChange]);
                return (_jsxs("div", { className: classnames_1.default(CodeArea_module_scss_1.default.container, {
                        [CodeArea_module_scss_1.default['container-without-headline']]: headline === ''
                    }), children: [_jsxs("div", { className: CodeArea_module_scss_1.default['email-variables'], children: [headline && _jsx(core_1.Typography, { children: headline }), variables?.length > 0 && (_jsx(atom_design_system_1.Variables, { onVariableClick: addVariable, variables: variables, emptyValue: 'there is no value' }))] }), _jsxs("fieldset", { className: classnames_1.default(CodeArea_module_scss_1.default.fieldset, {
                                [CodeArea_module_scss_1.default[`filed--${size}`]]: size
                            }), children: [_jsx("legend", { className: CodeArea_module_scss_1.default.legend, children: title }), _jsx("textarea", { ref: textareaRef, onChange: onCodeChange, value: value !== undefined ? value : codeState, className: classnames_1.default(CodeArea_module_scss_1.default.textarea, { [CodeArea_module_scss_1.default['textarea-font--roboto']]: font === 'text' }) })] }), errorText && (_jsx(core_1.Typography, { color: 'danger', variant: 'p5', children: errorText }))] }));
            };
            exports_1("default", atom_design_system_1.typedMemo(CodeArea));
        }
    };
});
