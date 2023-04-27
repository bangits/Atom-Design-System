System.register(["react/jsx-runtime", "@/helpers", "@my-ui/core", "react", "./FromToTimePicker.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, core_1, react_1, FromToTimePicker_module_scss_1, FromToTimePicker;
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
            function (FromToTimePicker_module_scss_1_1) {
                FromToTimePicker_module_scss_1 = FromToTimePicker_module_scss_1_1;
            }
        ],
        execute: function () {
            FromToTimePicker = ({ onChange, fromPickerProps, toPickerProps, fromPickerDefaultValue, toPickerDefaultValue, selected }) => {
                const [selectedDateFrom, setSelectedDateFrom] = react_1.useState(fromPickerDefaultValue || null);
                const [selectedDateTo, setSelectedDateTo] = react_1.useState(toPickerDefaultValue || null);
                const dateFromPlusOneMinute = react_1.useMemo(() => {
                    const selectedDateFromCloned = new Date(selectedDateFrom);
                    selectedDateFromCloned.setMinutes(selectedDateFromCloned.getMinutes() + 1);
                    return selectedDateFromCloned;
                }, [selectedDateFrom]);
                return (_jsxs("div", { className: FromToTimePicker_module_scss_1.default.FromToTimePickerContainer, children: [_jsx(core_1.DateTimePicker, { ...(fromPickerProps || {}), maxDate: selectedDateTo, onChange: (value) => {
                                setSelectedDateFrom(value);
                                onChange([value, selected !== undefined ? selected && selected[1] : selectedDateTo]);
                            }, className: FromToTimePicker_module_scss_1.default.FromPicker, selected: selected !== undefined ? selected && selected[0] : selectedDateFrom }), _jsx(core_1.DateTimePicker, { ...(toPickerProps || {}), minDate: dateFromPlusOneMinute, onChange: (value) => {
                                setSelectedDateTo(value);
                                onChange([selected !== undefined ? selected && selected[0] : selectedDateFrom, value]);
                            }, className: FromToTimePicker_module_scss_1.default.ToPicker, selected: selected !== undefined ? selected && selected[1] : selectedDateTo })] }));
            };
            exports_1("default", helpers_1.typedMemo(FromToTimePicker));
        }
    };
});
