System.register(["react", "react/jsx-runtime", "@/components", "@/helpers", "@my-ui/core", "classnames", "./Filters.module.scss"], function (exports_1, context_1) {
    "use strict";
    var react_1, jsx_runtime_1, components_1, helpers_1, core_1, classnames_1, Filters_module_scss_1, Filter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (Filters_module_scss_1_1) {
                Filters_module_scss_1 = Filters_module_scss_1_1;
            }
        ],
        execute: function () {
            Filter = ({ filter, value, onFilterChange, filterValues, ...props }) => {
                let filterComponent = null;
                if (!filter)
                    return null;
                switch (filter.type) {
                    case 'radio':
                        filterComponent = (_jsx(components_1.RadioGroup, { label: filter.label, radios: filter.props, value: value, onChange: (e) => onFilterChange(filter.name, e.target.value) }));
                        break;
                    case 'input':
                        filterComponent = (_jsx(components_1.TextInput, { ...filter.props, value: value, onChange: (e) => onFilterChange(filter.name, e.target.value && filter.props?.type === 'number' ? +e.target.value : e.target.value) }));
                        break;
                    case 'select':
                        filterComponent = (_jsx(components_1.Select, { ...filter.props, value: value, onChange: (updatedOptions) => onFilterChange(filter.name, updatedOptions), fullWidth: true }));
                        break;
                    case 'truthly-select':
                        filterComponent = (_jsx(components_1.Select, { ...filter.props, isMulti: false, value: String(value), onChange: (value) => {
                                onFilterChange(filter.name, value === 'null' ? null : value === 'true');
                            }, fullWidth: true, options: [
                                {
                                    value: 'null',
                                    label: filter.translations.nullValue
                                },
                                {
                                    value: 'true',
                                    label: filter.translations.trueValue
                                },
                                {
                                    value: 'false',
                                    label: filter.translations.falseValue
                                }
                            ] }));
                        break;
                    case 'from-to':
                        filterComponent = (_jsx(components_1.FromToInput, { fromInputProps: { ...(filter.fromInputProps || {}), value: value?.from || '' }, toInputProps: { ...(filter.toInputProps || {}), value: value?.to || '' }, onChange: (updatedValues) => onFilterChange(filter.name, updatedValues) }));
                        break;
                    case 'datepicker':
                        filterComponent = (_jsx(core_1.DatePicker, { ...filter.props, ...(filter.props.selectsRange
                                ? { startDate: (value[0] || null), endDate: (value[1] || null) }
                                : { selected: value }), placeholderText: filter.label, onChange: (updatedDate) => onFilterChange(filter.name, updatedDate) }));
                        break;
                    case 'timepicker':
                        filterComponent = (_jsx(core_1.DateTimePicker, { ...filter.props, placeholderText: filter.label, onChange: (updatedDate) => onFilterChange(filter.name, updatedDate), selected: value }));
                        break;
                    case 'timepicker-from-to':
                        filterComponent = (_jsx(components_1.FromToTimePicker, { ...filter.props, selected: value, toPickerProps: filter.toTimePickerProps, fromPickerProps: filter.fromTimePickerProps, onChange: (updatedDate) => onFilterChange(filter.name, updatedDate) }));
                        break;
                    case 'custom':
                        filterComponent = _jsx(filter.component, { onChange: onFilterChange, filterValues: filterValues });
                }
                return (_createElement("div", { ...props, className: classnames_1.default(Filters_module_scss_1.default.FilterContainer, {
                        [Filters_module_scss_1.default.FilterContainerFromTo]: filter.type === 'from-to' || filter.type === 'timepicker-from-to'
                    }), key: filter.name }, filterComponent));
            };
            exports_1("default", helpers_1.typedMemo(Filter));
        }
    };
});
