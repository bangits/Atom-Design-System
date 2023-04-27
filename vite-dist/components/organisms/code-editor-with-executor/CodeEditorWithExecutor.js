System.register(["react/jsx-runtime", "react", "../code-editor/CodeEditor", "../code-executor"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, react_1, CodeEditor_1, code_executor_1, CodeEditorWithExecutor;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (CodeEditor_1_1) {
                CodeEditor_1 = CodeEditor_1_1;
            },
            function (code_executor_1_1) {
                code_executor_1 = code_executor_1_1;
            }
        ],
        execute: function () {
            CodeEditorWithExecutor = ({ title, variables, buttonProps, htmlText, setValue }) => {
                const [srcDoc, setSrcDoc] = react_1.useState(htmlText);
                const runCode = react_1.useCallback(() => {
                    setSrcDoc(htmlText);
                }, [htmlText]);
                return (_jsxs("div", { style: { width: '97%' }, children: [_jsx(CodeEditor_1.default, { value: htmlText, showUploadButton: true, variables: variables, title: title, mode: 'xml', runCode: runCode, setValue: setValue, buttonProps: buttonProps }), _jsx(code_executor_1.CodeExecutor, { srcDoc: srcDoc })] }));
            };
            exports_1("default", CodeEditorWithExecutor);
        }
    };
});
