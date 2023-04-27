System.register(["react/jsx-runtime", "@/components", "@/helpers", "@/icons", "@my-ui/core", "classnames", "react", "./AddProviderNameId.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, helpers_1, icons_1, core_1, classnames_1, react_1, AddProviderNameId_module_scss_1, AddProviderNameId;
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
            function (icons_1_1) {
                icons_1 = icons_1_1;
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
            function (AddProviderNameId_module_scss_1_1) {
                AddProviderNameId_module_scss_1 = AddProviderNameId_module_scss_1_1;
            }
        ],
        execute: function () {
            AddProviderNameId = ({ fromToProps, onChange, tooltipTitle, fillProviderTooltipTitle, invalidTooltipTitle, explanation }) => {
                const [values, setValues] = react_1.useState([]);
                const [inputValues, setInputValues] = react_1.useState({
                    from: '',
                    to: ''
                });
                const isValid = helpers_1.trim(inputValues.from) &&
                    helpers_1.trim(inputValues.to) &&
                    !fromToProps.fromInputProps.explanation &&
                    !fromToProps.toInputProps.explanation;
                const onApplyHandler = react_1.useCallback(() => {
                    const isFieldExist = values.find((v) => helpers_1.trim(v.providerName) === helpers_1.trim(inputValues.from) && helpers_1.trim(v.externalId) === helpers_1.trim(inputValues.to));
                    if (isValid && !isFieldExist && !fromToProps.fromInputProps.explanation && !fromToProps.toInputProps.explanation) {
                        const updatedValues = [
                            ...values,
                            { id: values.length + 1, providerName: inputValues.from, externalId: inputValues.to }
                        ];
                        setValues(updatedValues);
                        setInputValues({
                            from: '',
                            to: ''
                        });
                        onChange?.(updatedValues, !!isValid);
                        return;
                    }
                }, [inputValues, values]);
                const onDeleteTagHandler = react_1.useCallback((id) => {
                    const updatedValues = [...values.filter((value) => value.id !== id)];
                    setValues(updatedValues);
                    onChange?.(updatedValues, !!isValid);
                }, [values]);
                const applyIconColor = react_1.useMemo(() => (explanation ? 'danger' : !explanation && isValid ? 'success' : null), [explanation, isValid]);
                return (_jsxs("div", { className: AddProviderNameId_module_scss_1.default.AddProviderNameIdContainer, children: [_jsxs("div", { className: AddProviderNameId_module_scss_1.default['AddProviderNameIdContainer--inputs'], children: [_jsx(components_1.FromToInput, { ...fromToProps, fromInputProps: {
                                        value: inputValues.from,
                                        ...fromToProps?.fromInputProps
                                    }, toInputProps: {
                                        value: inputValues.to,
                                        ...fromToProps?.toInputProps
                                    }, onChange: (values) => setInputValues(values) }), _jsx(core_1.Tooltip, { color: applyIconColor || 'primary', showEvent: 'hover', text: applyIconColor === 'danger'
                                        ? fillProviderTooltipTitle
                                        : applyIconColor === 'success'
                                            ? tooltipTitle
                                            : invalidTooltipTitle, children: _jsx(icons_1.ApplySuccess, { onClick: onApplyHandler, className: classnames_1.default({
                                            [AddProviderNameId_module_scss_1.default['AddProviderNameIdContainer--button-disabled']]: !applyIconColor,
                                            [AddProviderNameId_module_scss_1.default[`AddProviderNameIdContainer--button-${applyIconColor}`]]: applyIconColor,
                                            [AddProviderNameId_module_scss_1.default['AddProviderNameIdContainer--button-pulse']]: !!explanation
                                        }) }) })] }), _jsx(core_1.Scroll, { height: '176px', children: _jsx("div", { className: AddProviderNameId_module_scss_1.default.TagsContainer, children: values.map((value) => (_jsx(core_1.Tag, { title: `${value.providerName} - ${value.externalId}`, closeIcon: true, color: 'primary', onClose: () => onDeleteTagHandler(value.id) }, value.id))) }) })] }));
            };
            exports_1("default", AddProviderNameId);
        }
    };
});
