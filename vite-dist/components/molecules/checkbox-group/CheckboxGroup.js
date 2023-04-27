System.register(["react/jsx-runtime", "@/helpers", "@my-ui/core", "react", "./CheckboxGroup.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, core_1, react_1, CheckboxGroup_module_scss_1, CheckboxGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (CheckboxGroup_module_scss_1_1) {
                CheckboxGroup_module_scss_1 = CheckboxGroup_module_scss_1_1;
            }
        ],
        execute: function () {
            CheckboxGroup = ({ label, checkboxes, value, defaultValue, onChange }) => {
                const [checkedCheckboxes, setCheckedCheckboxes] = react_1.useState(defaultValue || []);
                const onCheckboxChange = react_1.useCallback((checkboxValue) => (e) => {
                    let updatedValues;
                    if (value === undefined) {
                        updatedValues = e.target.checked
                            ? [...checkedCheckboxes, checkboxValue]
                            : checkedCheckboxes.filter((checkboxId) => checkboxId !== checkboxValue);
                        setCheckedCheckboxes(updatedValues);
                    }
                    else
                        updatedValues = e.target.checked
                            ? [...value, checkboxValue]
                            : value.filter((checkboxId) => checkboxId !== checkboxValue);
                    if (onChange)
                        onChange(updatedValues);
                }, [checkedCheckboxes, value]);
                return (_jsxs("div", { className: CheckboxGroup_module_scss_1.default.CheckboxGroup, children: [_jsx("div", { className: CheckboxGroup_module_scss_1.default.CheckboxGroupLabel, children: _jsx("span", { children: label }) }), _jsx("div", { className: CheckboxGroup_module_scss_1.default.CheckboxGroupContainer, children: checkboxes?.map((checkbox) => {
                                return (_jsxs("div", { className: CheckboxGroup_module_scss_1.default.CheckboxWrapper, children: [_jsx("div", { className: CheckboxGroup_module_scss_1.default.CheckboxContainer, children: _jsx(core_1.Checkbox, { onChange: onCheckboxChange(checkbox.value), checked: (value || checkedCheckboxes).includes(checkbox.value), disabled: checkbox.disabled, id: checkbox.name }) }), _jsx("label", { htmlFor: checkbox.name, className: CheckboxGroup_module_scss_1.default.CheckboxLabel, children: checkbox.label })] }, checkbox.name));
                            }) })] }));
            };
            exports_1("default", helpers_1.typedMemo(CheckboxGroup));
        }
    };
});
