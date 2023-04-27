System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "react", "./EditorLinkForm.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, react_1, EditorLinkForm_module_scss_1, EditorLinkForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
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
            function (EditorLinkForm_module_scss_1_1) {
                EditorLinkForm_module_scss_1 = EditorLinkForm_module_scss_1_1;
            }
        ],
        execute: function () {
            EditorLinkForm = ({ outsideClickClassName, onClick, onOutsideClick }) => {
                const { subscribe, unsubscribe } = core_1.useOutsideClickEvent(outsideClickClassName || `.${EditorLinkForm_module_scss_1.default.OptionsBase}`);
                react_1.useEffect(() => {
                    subscribe(() => onOutsideClick?.());
                    return unsubscribe;
                }, [onOutsideClick]);
                return (_jsx("div", { style: {
                        width: '312px',
                        height: '208px',
                        border: '1px solid #E8EDF3',
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '16px',
                        paddingBottom: '16px'
                    }, children: _jsxs("div", { style: { width: '280px' }, children: [_jsx(core_1.Typography, { variant: 'p3', children: "Link" }), _jsx(core_1.TextInput, { containerClassName: EditorLinkForm_module_scss_1.default['input-container'], style: { height: '38px' }, placeholder: 'Link Address' }), _jsx(core_1.TextInput, { containerClassName: classnames_1.default(EditorLinkForm_module_scss_1.default['input-container'], EditorLinkForm_module_scss_1.default['link-input']), placeholder: 'Link Text' }), _jsx("div", { className: EditorLinkForm_module_scss_1.default['button-container'], children: _jsx(core_1.Button, { onClick: onClick, children: "Save" }) })] }) }));
            };
            exports_1("default", EditorLinkForm);
        }
    };
});
