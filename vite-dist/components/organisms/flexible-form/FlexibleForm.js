System.register(["react/jsx-runtime", "@/components", "react"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, react_1, FlexibleForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            FlexibleForm = ({ editedFormProps, editFormProps, isEdit = false, onSubmit, noDataText, title, tooltipText, editModeChildren, editedModeChildren, col, onClose, showEditForm, onToggle: onToggleProp }) => {
                // eslint-disable-next-line prefer-const
                let [toggle, setToggle] = react_1.useState(isEdit);
                if (showEditForm !== undefined)
                    toggle = showEditForm;
                const onToggle = react_1.useCallback(() => {
                    onToggleProp?.();
                    if (toggle && onClose)
                        onClose();
                    setToggle(!toggle);
                }, [toggle, onClose, onToggleProp]);
                return (_jsx(_Fragment, { children: toggle ? (_jsx(components_1.EditForm, { ...editFormProps, onToggle: onToggle, title: title, tooltipText: tooltipText, onSubmit: onSubmit, children: editModeChildren, col: col })) : (_jsx(components_1.EditedForm, { ...editedFormProps, onToggle: onToggle, title: title, tooltipText: tooltipText, noDataText: noDataText, children: editedModeChildren, col: col })) }));
            };
            exports_1("default", FlexibleForm);
        }
    };
});
