System.register(["react/jsx-runtime", "@/helpers", "classnames", "./Form.module.scss", "./getFormField"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, classnames_1, Form_module_scss_1, getFormField_1, FormFields;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (Form_module_scss_1_1) {
                Form_module_scss_1 = Form_module_scss_1_1;
            },
            function (getFormField_1_1) {
                getFormField_1 = getFormField_1_1;
            }
        ],
        execute: function () {
            FormFields = ({ fields, renderInputs, removeMargin = false }) => {
                return (_jsx("div", { className: classnames_1.default(Form_module_scss_1.default.ProviderContainerWrapper, {
                        [Form_module_scss_1.default['ProviderContainerWrapper--removeMargin']]: removeMargin
                    }), children: _jsx("div", { className: Form_module_scss_1.default.ProviderFormGroup, children: fields?.map((field) => {
                            const fieldElement = field.type === 'custom'
                                ? field.component()
                                : renderInputs(getFormField_1.default(field), field.name, field.type, field.additionalProps);
                            return (fieldElement && (_jsx("div", { className: classnames_1.default(Form_module_scss_1.default.ProviderForm, {
                                    [Form_module_scss_1.default[`ProviderForm--col-${field.col || 6}`]]: field.col || 6
                                }), children: fieldElement }, field.name)));
                        }) }) }));
            };
            exports_1("default", helpers_1.typedMemo(FormFields));
        }
    };
});
