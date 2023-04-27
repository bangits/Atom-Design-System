System.register(["react/jsx-runtime", "@/helpers/typedMemo", "@my-ui/core", "classnames", "./RadioGroup.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, typedMemo_1, core_1, classnames_1, RadioGroup_module_scss_1, RadioGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (typedMemo_1_1) {
                typedMemo_1 = typedMemo_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (RadioGroup_module_scss_1_1) {
                RadioGroup_module_scss_1 = RadioGroup_module_scss_1_1;
            }
        ],
        execute: function () {
            RadioGroup = ({ disabled, radios, label, ...radioGroupProps }) => {
                return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("span", { className: RadioGroup_module_scss_1.default.FilterRadioName, children: label }), _jsx(core_1.RadioGroup, { ...radioGroupProps, children: _jsx("div", { className: classnames_1.default(RadioGroup_module_scss_1.default.FilterRadioContainer, {
                                        [RadioGroup_module_scss_1.default['FilterRadioContainer--disabled']]: disabled
                                    }), children: radios.map((radio) => (_jsxs("div", { className: RadioGroup_module_scss_1.default.FilterRadioGroup, children: [_jsx("div", { className: RadioGroup_module_scss_1.default.FilterRadio, children: _jsx(core_1.RadioButton, { disabled: disabled, name: radioGroupProps.name, id: radio.value?.toString(), ...radioGroupProps, value: radio.value?.toString() }) }), _jsx("label", { className: RadioGroup_module_scss_1.default.FilterRadioLabel, htmlFor: radio.value?.toString(), children: radio.label })] }, radio.value))) }) })] }) }));
            };
            exports_1("default", typedMemo_1.typedMemo(RadioGroup));
        }
    };
});
