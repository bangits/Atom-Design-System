System.register(["react/jsx-runtime", "@/icons", "classnames", "../form", "./CreatableTable.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, classnames_1, form_1, CreatableTable_module_scss_1, CreatableRow;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            },
            function (CreatableTable_module_scss_1_1) {
                CreatableTable_module_scss_1 = CreatableTable_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("CreatableRow", CreatableRow = ({ renderInputs, fields, removeTier, variant, lastTier = true }) => {
                return (_jsxs("tr", { className: classnames_1.default(CreatableTable_module_scss_1.default['CreatableTable--input'], {
                        [CreatableTable_module_scss_1.default['CreatableTable--writable']]: variant === 'writable',
                        [CreatableTable_module_scss_1.default['CreatableTable--edit']]: variant === 'edit'
                    }), children: [fields?.map((field) => {
                            const fieldElement = renderInputs(form_1.getFormField(field), field.name, field.type, field.additionalProps);
                            return fieldElement && _jsx("td", { children: fieldElement }, field.name);
                        }), lastTier ? (_jsx("td", { children: variant === 'edit' && _jsx(icons_1.CloseWidePopUp, { height: '1rem', width: '1rem', onClick: removeTier }) })) : (
                        //@TODO this moment i dont
                        _jsx("td", {}))] }));
            });
        }
    };
});
