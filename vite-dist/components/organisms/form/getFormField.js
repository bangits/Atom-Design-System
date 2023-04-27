System.register(["react/jsx-runtime", "@/components", "@my-ui/core"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, getFormField;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            getFormField = (field) => {
                if (field.component)
                    return field.component;
                let fieldComponent = null;
                switch (field.type) {
                    case 'radio':
                        fieldComponent = (props) => {
                            return (_jsx(components_1.RadioGroup, { label: field.label, name: field.name, ...field.props, ...props, value: props.value?.toString() }));
                        };
                        break;
                    case 'checkbox':
                        fieldComponent = (props) => _jsx(components_1.CheckboxGroup, { label: field.label, ...field.props, ...props });
                        break;
                    case 'single-checkbox':
                        fieldComponent = (props) => _jsx(components_1.CheckboxWithLabel, { label: field.label, ...props });
                        break;
                    case 'input':
                        fieldComponent = (props) => (_jsx(components_1.TextInput, { autoComplete: 'off', ...field.props, ...props, label: field.label, fullWidth: true }));
                        break;
                    case 'field':
                        fieldComponent = (props) => _jsx(components_1.TableField, { ...field.props, ...props });
                        break;
                    case 'from-to-input':
                        fieldComponent = (props) => _jsx(components_1.AddProviderNameId, { ...field.props, ...props });
                        break;
                    case 'select':
                        fieldComponent = (props) => (_jsx(core_1.Select, { ...field.props, ...props, label: field.label, fullWidth: true }));
                        break;
                    case 'datepicker':
                        fieldComponent = (props) => (_jsx(core_1.DatePicker, { ...field.props, ...props, placeholderText: field.label, fullWidth: true }));
                        break;
                    case 'timepicker':
                        fieldComponent = (props) => (_jsx(core_1.DateTimePicker, { ...field.props, ...props, placeholderText: field.label }));
                        break;
                    case 'custom':
                        fieldComponent = field.component;
                }
                return fieldComponent;
            };
            exports_1("default", getFormField);
        }
    };
});
