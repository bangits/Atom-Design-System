System.register(["react/jsx-runtime", "@/components", "@/helpers", "react", "./FromToInput.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, helpers_1, react_1, FromToInput_module_scss_1, FromToInput;
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (FromToInput_module_scss_1_1) {
                FromToInput_module_scss_1 = FromToInput_module_scss_1_1;
            }
        ],
        execute: function () {
            FromToInput = ({ fromInputDefaultValue, toInputDefaultValue, onChange, fromInputProps = {}, toInputProps = {} }) => {
                const [inputValues, setInputValues] = react_1.useReducer((prevValues, updatedValues) => {
                    const newValues = {
                        ...prevValues,
                        ...updatedValues
                    };
                    if (onChange)
                        onChange(newValues);
                    return newValues;
                }, {
                    from: fromInputDefaultValue || '',
                    to: toInputDefaultValue || ''
                });
                const onInputValueChange = react_1.useCallback((name) => (e) => {
                    setInputValues({ [name]: e.target.value });
                    if (name === 'from')
                        fromInputProps.onChange?.(e);
                    toInputProps.onChange?.(e);
                }, []);
                react_1.useEffect(() => {
                    if (fromInputProps.value !== undefined)
                        setInputValues({ from: fromInputProps.value });
                }, [fromInputProps.value]);
                react_1.useEffect(() => {
                    if (toInputProps.value !== undefined)
                        setInputValues({ to: toInputProps.value });
                }, [fromInputProps.value]);
                return (_jsxs("div", { className: FromToInput_module_scss_1.default.FromToInputContainer, children: [_jsx(components_1.TextInput, { ...fromInputProps, fullWidth: true, value: fromInputProps.value !== undefined ? fromInputProps.value : inputValues.from, onChange: onInputValueChange('from'), containerClassName: FromToInput_module_scss_1.default.FromInput }), _jsx(components_1.TextInput, { ...toInputProps, fullWidth: true, value: toInputProps.value !== undefined ? toInputProps.value : inputValues.to, onChange: onInputValueChange('to'), containerClassName: FromToInput_module_scss_1.default.ToInput })] }));
            };
            exports_1("default", helpers_1.typedMemo(FromToInput));
        }
    };
});
