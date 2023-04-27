System.register(["react/jsx-runtime", "@/components", "@/icons", "@my-ui/core", "classnames", "react", "./CheckableInput.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, icons_1, core_1, classnames_1, react_1, CheckableInput_module_scss_1, CheckableInput;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
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
            function (CheckableInput_module_scss_1_1) {
                CheckableInput_module_scss_1 = CheckableInput_module_scss_1_1;
            }
        ],
        execute: function () {
            CheckableInput = (props) => {
                const [inputValue, setInputValue] = react_1.useState('');
                const applyIconColor = react_1.useMemo(() => (props.explanation ? 'danger' : !props.explanation ? 'success' : null), [props.explanation]);
                return (_jsxs(_Fragment, { children: [_jsxs("div", { className: CheckableInput_module_scss_1.default.CheckableInput, children: [_jsx(components_1.TextInput, { onChange: (e) => {
                                        setInputValue(e.target.value);
                                    }, className: props.textarea && CheckableInput_module_scss_1.default.TextArea, ...props, label: _jsx(components_1.Label, { isForInput: true, text: props.label, optional: !!props.optionalText, optionalText: `(${props.optionalText})` }) }), _jsx(core_1.Tooltip, { color: applyIconColor || 'primary', showEvent: 'hover', text: applyIconColor === 'danger'
                                        ? props.fillUserNameOrPlayerIdTooltipTitle
                                        : applyIconColor === 'success'
                                            ? props.tooltipTitle
                                            : props.invalidTooltipTitle, children: _jsx(icons_1.ApplySuccess, { height: '2.5rem', width: '2.5rem', onClick: props.applyCheck, className: classnames_1.default({
                                            [CheckableInput_module_scss_1.default['CheckableInput--button-disabled']]: !applyIconColor,
                                            [CheckableInput_module_scss_1.default[`CheckableInput--button-${applyIconColor}`]]: applyIconColor,
                                            [CheckableInput_module_scss_1.default['CheckableInput--button-pulse']]: !!props.explanation
                                        }) }) })] }), _jsx(core_1.Scroll, { height: '176px', children: _jsx("div", { className: CheckableInput_module_scss_1.default.TagsContainer, children: props.values.map((value) => (_jsx(core_1.Tag, { title: `${value.userName} - ${value.id}`, closeIcon: true, color: 'primary', onClose: () => props.onDeleteTag(value.id) }, value.id))) }) })] }));
            };
            exports_1("default", CheckableInput);
        }
    };
});
