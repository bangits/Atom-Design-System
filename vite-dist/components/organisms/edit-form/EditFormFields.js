System.register(["react/jsx-runtime", "@/components", "@/helpers", "classnames", "./EditForm.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, helpers_1, classnames_1, EditForm_module_scss_1, EditFormFields;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (EditForm_module_scss_1_1) {
                EditForm_module_scss_1 = EditForm_module_scss_1_1;
            }
        ],
        execute: function () {
            EditFormFields = ({ fields, renderInputs, fullWidth, justifyContent }) => {
                return (_jsx(_Fragment, { children: fields.map((field, idx) => {
                        const fieldElement = field.type === 'custom' ? (field.component()) : field.type === 'header' ? (_jsx(_Fragment, { children: field.label })) : (renderInputs(components_1.getFormField(field), field.name, field.type, field.additionalProps));
                        return (fieldElement && (_jsxs("div", { className: classnames_1.default(field.type === 'header'
                                ? EditForm_module_scss_1.default['EditFormBase--field-header']
                                : fullWidth
                                    ? EditForm_module_scss_1.default['EditFormBase--field--full-width']
                                    : EditForm_module_scss_1.default['EditFormBase--field'], EditForm_module_scss_1.default[`EditFormBase--${field.col || 6}`], EditForm_module_scss_1.default[`EditFormBase--field--${field.justifyContent}`], {
                                [EditForm_module_scss_1.default['EditFormBase--removeMargin']]: field.removeMargin
                            }), children: [_jsx("div", { className: classnames_1.default(EditForm_module_scss_1.default[`EditFormBase--label`], {
                                        [EditForm_module_scss_1.default['EditFormBase--label__relative']]: field.labelPositionRelative
                                    }), children: field.labelText }), fieldElement] }, idx)));
                    }) }));
            };
            exports_1("default", helpers_1.typedMemo(EditFormFields));
        }
    };
});
