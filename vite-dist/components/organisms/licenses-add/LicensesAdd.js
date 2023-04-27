System.register(["react/jsx-runtime", "react", "..", "./LicensesAdd.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, react_1, __1, LicensesAdd_module_scss_1, LicensesAdd;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (__1_1) {
                __1 = __1_1;
            },
            function (LicensesAdd_module_scss_1_1) {
                LicensesAdd_module_scss_1 = LicensesAdd_module_scss_1_1;
            }
        ],
        execute: function () {
            LicensesAdd = ({ editFormProps, noDataText, isEdit = false, onSubmit, title = '', editModeChildren, col, onClose, addCardProps }) => {
                const [toggle, setToggle] = react_1.useState(isEdit);
                const onToggle = react_1.useCallback(() => {
                    if (toggle && onClose)
                        onClose();
                    setToggle(!toggle);
                }, [toggle, onClose]);
                return (_jsx("div", { className: LicensesAdd_module_scss_1.default.LicenseAdd, children: toggle ? (_jsx(__1.EditForm, { ...editFormProps, onToggle: onToggle, title: title, onSubmit: onSubmit, children: editModeChildren, col: col })) : (_jsx(__1.LicensesCard, { ...addCardProps, onClick: onToggle, col: col })) }));
            };
            exports_1("default", LicensesAdd);
        }
    };
});
