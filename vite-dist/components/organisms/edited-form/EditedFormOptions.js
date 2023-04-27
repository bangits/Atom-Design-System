System.register(["react/jsx-runtime", "@/icons", "@my-ui/core", "classnames", "./EditedForm.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, core_1, classnames_1, EditedForm_module_scss_1, EditedFormOptions;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
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
            function (EditedForm_module_scss_1_1) {
                EditedForm_module_scss_1 = EditedForm_module_scss_1_1;
            }
        ],
        execute: function () {
            EditedFormOptions = ({ options, noDataText }) => {
                return (_jsx(_Fragment, { children: options &&
                        options?.map((option, index) => {
                            const title = (_jsxs("span", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--option-title']), children: [option.title, option.tooltipText && (_jsx(core_1.Tooltip, { showEvent: 'hover', text: option.tooltipText, children: _jsx(icons_1.InfoTooltipIcon, { className: EditedForm_module_scss_1.default['EditedFormBase--option-tooltip'], width: '1.5rem', height: '1.5rem' }) }))] }));
                            switch (option.variant) {
                                case 'default':
                                    return (_jsxs(_Fragment, { children: [option.labelText && _jsx(core_1.TextInput, { value: option.labelText }), _jsxs("div", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--option'], EditedForm_module_scss_1.default[`EditedFormBase--option--${option.col || 6}`], {
                                                    [EditedForm_module_scss_1.default['EditedFormBase--option--line-translation']]: option.shouldLineTranslation,
                                                    [EditedForm_module_scss_1.default['EditedFormBase--option--overflow--none']]: option.overflow === 'none'
                                                }), children: [title, _jsx("span", { onClick: option.onRedirectClick, className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--option-value'], {
                                                            [EditedForm_module_scss_1.default['EditedFormBase--option-hover']]: option.onRedirectClick
                                                        }), children: option.value || noDataText })] }, index)] }));
                                case 'label':
                                    return (_jsx("div", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--option-label']), children: _jsx("span", { children: option.title }) }, index));
                                case 'custom':
                                    return (_jsxs("div", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--option'], EditedForm_module_scss_1.default['EditedFormBase--custom'], {
                                            [EditedForm_module_scss_1.default['EditedFormBase--option--line-translation']]: option.shouldLineTranslation,
                                            [EditedForm_module_scss_1.default['EditedFormBase--option--full-width']]: option.fullWidth,
                                            [EditedForm_module_scss_1.default['EditedFormBase--option--align-end']]: option.alignItem === 'end',
                                            [EditedForm_module_scss_1.default[`EditedFormBase--option--${option.col || 6}`]]: option.col
                                        }), children: [title, option.value || _jsx("span", { className: EditedForm_module_scss_1.default['EditedFormBase--option-value'], children: noDataText })] }, index));
                                case 'tag':
                                    return (_jsxs("div", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--option-tag']), children: [title, _jsx("div", { children: option.value.length === 0 ? (_jsx("span", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--option-value']), children: noDataText })) : (option.value?.map?.((o, index) => _jsx(core_1.Tag, { title: o }, index))) })] }, index));
                                case 'bold':
                                    return (_jsxs("div", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--option']), children: [title, _jsx("span", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--option-value'], EditedForm_module_scss_1.default['EditedFormBase--option-value-bold']), children: option.value || noDataText })] }, index));
                            }
                        }) }));
            };
            exports_1("default", EditedFormOptions);
        }
    };
});
