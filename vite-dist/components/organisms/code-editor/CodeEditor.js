System.register(["react/jsx-runtime", "@/atom-design-system", "react", "react-codemirror2", "./CodeEditor.module.scss", "codemirror/lib/codemirror.css", "codemirror/theme/dracula.css", "codemirror/theme/material.css", "codemirror/theme/mdn-like.css", "codemirror/mode/css/css", "codemirror/mode/javascript/javascript", "codemirror/mode/xml/xml", "codemirror/addon/edit/closebrackets", "codemirror/addon/edit/closetag", "codemirror/addon/edit/matchbrackets", "codemirror/addon/edit/matchtags"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, react_1, react_codemirror2_1, CodeEditor_module_scss_1, CodeEditor;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_codemirror2_1_1) {
                react_codemirror2_1 = react_codemirror2_1_1;
            },
            function (CodeEditor_module_scss_1_1) {
                CodeEditor_module_scss_1 = CodeEditor_module_scss_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (_4) {
            },
            function (_5) {
            },
            function (_6) {
            },
            function (_7) {
            },
            function (_8) {
            },
            function (_9) {
            },
            function (_10) {
            },
            function (_11) {
            }
        ],
        execute: function () {
            CodeEditor = ({ onChange, showUploadButton, setValue, uploadButtonProps, value, mode, title, variables, uploadIconTooltipText, variableIconTooltipText, themeTooltipText, inputProps, buttonProps, runCode, ...props }) => {
                const editorCursorRef = react_1.useRef(null);
                const fileInputRef = react_1.useRef(null);
                const [theme, setTheme] = react_1.useState('dracula');
                const isFileValid = (file) => (mode === 'xml' && file.type === 'text/html') || file.type.includes(mode);
                const readFile = (file) => {
                    if (!isFileValid(file))
                        return;
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setValue(reader.result);
                    };
                    reader.readAsText(file);
                };
                const loadFile = (e) => {
                    const file = e.target.files[0];
                    readFile(file);
                };
                const onDrop = (editor, e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.items[0].getAsFile();
                    readFile(file);
                };
                const changeCode = (editor, data, value) => {
                    setValue(value);
                };
                const addVariable = (variable) => {
                    const codeToArrayOfRows = value.split('\n');
                    const line = editorCursorRef.current?.line || codeToArrayOfRows.length - 1;
                    const insertStringAtIndex = (string, value, index) => {
                        return `${string.slice(0, index)}${value}${string.slice(index)}`;
                    };
                    const updatedCodeArray = [
                        ...codeToArrayOfRows.slice(0, line),
                        insertStringAtIndex(codeToArrayOfRows[line], variable, editorCursorRef.current?.ch || 0),
                        ...codeToArrayOfRows.slice(line + 1)
                    ];
                    setValue(updatedCodeArray.join('\n'));
                };
                return (_jsx("div", { className: CodeEditor_module_scss_1.default.container, children: _jsxs("fieldset", { className: CodeEditor_module_scss_1.default.fieldset, children: [_jsx("legend", { className: CodeEditor_module_scss_1.default.legend, children: title }), _jsxs("div", { className: CodeEditor_module_scss_1.default.toolbar, children: [_jsxs("div", { className: CodeEditor_module_scss_1.default['toolbar-left-part'], children: [showUploadButton && (_jsx(atom_design_system_1.Tooltip, { text: uploadIconTooltipText, showEvent: 'hover', children: _jsx(atom_design_system_1.IconButton, { onClick: () => fileInputRef.current.click(), icon: _jsx(atom_design_system_1.Icons.UploadIcon, {}) }) })), _jsx(atom_design_system_1.Tooltip, { text: variableIconTooltipText, showEvent: 'hover', children: _jsx(atom_design_system_1.Variables, { variables: variables, onVariableClick: (variable) => {
                                                        addVariable(variable);
                                                    } }) })] }), _jsx(atom_design_system_1.Button, { onClick: runCode, type: 'button', className: CodeEditor_module_scss_1.default['run-code-button'], ...buttonProps })] }), _jsx("input", { type: 'file', "aria-label": 'Load', "aria-hidden": 'true', className: CodeEditor_module_scss_1.default.input, accept: 'text/html', ref: fileInputRef, onChange: loadFile, ...inputProps }), _jsx(react_codemirror2_1.Controlled, { value: value, onBeforeChange: changeCode, onDrop: onDrop, options: {
                                    mode,
                                    theme,
                                    lint: true,
                                    lineNumbers: true,
                                    lineWrapping: true,
                                    spellcheck: true,
                                    autoCloseTags: true,
                                    autoCloseBrackets: true,
                                    matchTags: true,
                                    matchBrackets: true
                                }, className: CodeEditor_module_scss_1.default.controlled, autoScroll: true, onCursor: (_, cursorMirror) => {
                                    editorCursorRef.current = {
                                        ch: cursorMirror.ch,
                                        line: cursorMirror.line
                                    };
                                }, ...props })] }) }));
            };
            exports_1("default", atom_design_system_1.typedMemo(CodeEditor));
        }
    };
});
