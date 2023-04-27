System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "draft-js", "react"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, draft_js_1, react_1, EditorLink;
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
            function (draft_js_1_1) {
                draft_js_1 = draft_js_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            EditorLink = ({ editorState, onChange }) => {
                const [isOpenMenu, setIsOpenMenu] = react_1.useState(false);
                const addLink = () => {
                    const span = event.target;
                    const value = span.textContent;
                    const contentState = draft_js_1.Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), `${value}`, editorState.getCurrentInlineStyle());
                    onChange(draft_js_1.EditorState.push(editorState, contentState, 'insert-characters'));
                };
                return (_jsxs("div", { children: [_jsx(core_1.Button, { variant: 'link', onClick: () => {
                                setIsOpenMenu((prev) => !prev);
                            }, startIcon: _jsx(core_1.Icons.ArrowNext, {}) }), isOpenMenu && _jsx(atom_design_system_1.EditorLinkForm, { onOutsideClick: () => setIsOpenMenu(false) })] }));
            };
            exports_1("default", EditorLink);
        }
    };
});
