System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "draft-js", "draftjs-to-html", "html-to-draftjs", "react", "react-draft-wysiwyg", "react-draft-wysiwyg/dist/react-draft-wysiwyg.css", "./CustomEditor.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, draft_js_1, draftjs_to_html_1, html_to_draftjs_1, react_1, react_draft_wysiwyg_1, CustomEditor_module_scss_1, CustomEditor;
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
            function (draft_js_1_1) {
                draft_js_1 = draft_js_1_1;
            },
            function (draftjs_to_html_1_1) {
                draftjs_to_html_1 = draftjs_to_html_1_1;
            },
            function (html_to_draftjs_1_1) {
                html_to_draftjs_1 = html_to_draftjs_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_draft_wysiwyg_1_1) {
                react_draft_wysiwyg_1 = react_draft_wysiwyg_1_1;
            },
            function (_1) {
            },
            function (CustomEditor_module_scss_1_1) {
                CustomEditor_module_scss_1 = CustomEditor_module_scss_1_1;
            }
        ],
        execute: function () {
            CustomEditor = ({ title, onChange, variant = 'default', variables, size, htmlValue, errorText, attachImage = false, isVariableShow = true, optionRight, disabled, ...props }) => {
                const initialEditorState = react_1.useMemo(() => {
                    if (!htmlValue)
                        return draft_js_1.EditorState.createEmpty();
                    const contentBlock = html_to_draftjs_1.default(htmlValue);
                    const contentState = draft_js_1.ContentState.createFromBlockArray(contentBlock.contentBlocks);
                    return draft_js_1.EditorState.createWithContent(contentState);
                }, [htmlValue]);
                const [editorState, setEditorState] = react_1.useState(initialEditorState);
                const [openDropdown, setDropdown] = react_1.useState(false);
                const onEditorStateChange = react_1.useCallback((editorState) => {
                    if (disabled)
                        return;
                    const htmlValue = draftjs_to_html_1.default(draft_js_1.convertToRaw(editorState.getCurrentContent()));
                    onChange(htmlValue);
                    setEditorState(editorState);
                }, [editorState, disabled]);
                return (_jsxs("div", { className: classnames_1.default(CustomEditor_module_scss_1.default.container, {
                        [CustomEditor_module_scss_1.default['container--disabled']]: disabled
                    }), children: [_jsx(react_draft_wysiwyg_1.Editor, { ...props, toolbar: {
                                options: variant === 'default'
                                    ? ['link', 'history']
                                    : variant === 'all'
                                        ? [
                                            'list',
                                            'colorPicker',
                                            'emoji',
                                            'link',
                                            'textAlign',
                                            'inline',
                                            'fontFamily',
                                            'fontSize',
                                            'history'
                                            // attachImage && 'embedded'
                                        ]
                                        : [],
                                list: {
                                    options: ['unordered', 'ordered']
                                },
                                // link: {
                                //   // component: () => <div
                                //   // style={{ width: '50px', height: '50px', background: 'red' }}></div>
                                // },
                                textAlign: {
                                    right: {
                                        className: CustomEditor_module_scss_1.default['text-right']
                                    }
                                },
                                inline: {
                                    inDropdown: openDropdown,
                                    options: ['bold', 'italic', 'underline', 'strikethrough']
                                },
                                fontFamily: {
                                    options: ['Roboto', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana']
                                },
                                embedded: {
                                    popUpClassName: CustomEditor_module_scss_1.default.popUpClassName
                                },
                                history: {
                                    undo: {
                                        icon: 'https://storageaccountatom.blob.core.windows.net/staging-storage/866c5057-6c6a-40f9-b862-ef94edfe3fdf_undo.react.svg'
                                    },
                                    redo: {
                                        icon: 'https://storageaccountatom.blob.core.windows.net/staging-storage/42ef97de-f11d-4218-8d54-7e793b928689_redo.svg'
                                    }
                                }
                            }, editorState: editorState, onFocus: () => {
                                setDropdown(true);
                            }, toolbarClassName: CustomEditor_module_scss_1.default.toolbar, wrapperClassName: CustomEditor_module_scss_1.default.wrapper, editorClassName: classnames_1.default(CustomEditor_module_scss_1.default.editor, {
                                [CustomEditor_module_scss_1.default[`editor-${size}`]]: size
                            }), onEditorStateChange: onEditorStateChange, toolbarCustomButtons: isVariableShow && [
                                _jsx(atom_design_system_1.Variables, { optionRight: optionRight, variables: variables, emptyValue: 'there is no value' }, 'variables')
                            ] }), title && (_jsx(core_1.Typography, { variant: 'p4', color: 'primary', className: CustomEditor_module_scss_1.default.typography, children: title })), _jsx(core_1.Typography, { variant: 'p5', color: 'danger', children: errorText })] }));
            };
            exports_1("default", atom_design_system_1.typedMemo(CustomEditor));
        }
    };
});
