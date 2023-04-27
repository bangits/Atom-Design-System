System.register(["react/jsx-runtime", "@storybook/addon-knobs", "react", "../code-executor", "./CodeEditor"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, react_1, code_executor_1, CodeEditor_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (code_executor_1_1) {
                code_executor_1 = code_executor_1_1;
            },
            function (CodeEditor_1_1) {
                CodeEditor_1 = CodeEditor_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/CodeEditor',
                component: CodeEditor_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                const [state, setState] = react_1.useState('<h1>Hello</h1>');
                const [srcDoc, setSrcDoc] = react_1.useState('');
                const runCode = () => {
                    setSrcDoc(state);
                };
                react_1.useEffect(() => {
                    runCode();
                }, [state]);
                return (_jsxs(_Fragment, { children: [_jsx(CodeEditor_1.default, { value: state, showUploadButton: true, title: 'Code Editor', uploadIconTooltipText: 'Upload HTML file', variableIconTooltipText: 'Variables', themeTooltipText: 'Choose theme', variables: ['{@var1}', '{@var2}', '{@var3}'], uploadButtonProps: { children: 'Upload File' }, runCode: runCode, buttonProps: { children: 'Run Code' }, setValue: setState, mode: 'xml' }), _jsx(code_executor_1.CodeExecutor, { srcDoc: srcDoc })] }));
            });
        }
    };
});
