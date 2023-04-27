System.register(["react/jsx-runtime", "@/helpers", "@/icons", "@my-ui/core", "classnames", "./EditForm.module.scss", "./EditFormFields"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, icons_1, core_1, classnames_1, EditForm_module_scss_1, EditFormFields_1, EditForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
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
            function (EditForm_module_scss_1_1) {
                EditForm_module_scss_1 = EditForm_module_scss_1_1;
            },
            function (EditFormFields_1_1) {
                EditFormFields_1 = EditFormFields_1_1;
            }
        ],
        execute: function () {
            EditForm = ({ title, tooltipText, fields, renderInputs, onToggle, onSubmit, applyButtonTooltipText, closeButtonTooltipText, children, col, applyButtonType = 'button', fullWidth, showActions = true, removeCard, justifyContent, applyButtonDisabled, topPart, hideClose, actionsInside }) => {
                const content = children || (_jsx("div", { className: classnames_1.default(EditForm_module_scss_1.default['EditFormBase--content'], {
                        [EditForm_module_scss_1.default[`EditFormBase--field--${justifyContent}`]]: justifyContent
                    }), children: _jsx(EditFormFields_1.default, { fullWidth: fullWidth, justifyContent: justifyContent, fields: fields, renderInputs: renderInputs }) }));
                return (_jsxs("div", { className: classnames_1.default(EditForm_module_scss_1.default.EditForm, {
                        [EditForm_module_scss_1.default[`EditForm--${col}`]]: col
                    }), children: [showActions && (_jsxs("div", { className: classnames_1.default(EditForm_module_scss_1.default['EditFormBase--header'], {
                                [EditForm_module_scss_1.default['EditFormBase--inside']]: actionsInside
                            }), children: [topPart, title && (_jsxs("span", { children: [title, tooltipText && (_jsx(core_1.Tooltip, { showEvent: 'hover', text: tooltipText, children: _jsx(icons_1.InfoTooltipIcon, { className: EditForm_module_scss_1.default['EditFormBase--header-tooltip'], width: '1.5rem', height: '1.5rem' }) }))] })), _jsxs("div", { className: classnames_1.default(EditForm_module_scss_1.default['EditFormBase--buttons']), children: [_jsx(core_1.Tooltip, { showEvent: 'hover', text: applyButtonTooltipText, children: _jsx(core_1.IconButton, { icon: _jsx(icons_1.ApplyIcon, {}), type: applyButtonType, onClick: () => onSubmit(onToggle), className: classnames_1.default({
                                                    [EditForm_module_scss_1.default['EditFormBase__button--disabled']]: applyButtonDisabled
                                                }), disabled: applyButtonDisabled }) }), !hideClose && (_jsx(core_1.Tooltip, { showEvent: 'hover', text: closeButtonTooltipText, children: _jsx(core_1.IconButton, { icon: _jsx(icons_1.CloseIcon, {}), type: 'button', onClick: onToggle }) }))] })] })), removeCard ? (content) : (_jsx(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(EditForm_module_scss_1.default.EditFormBase), children: content }))] }));
            };
            exports_1("default", helpers_1.typedMemo(EditForm));
        }
    };
});
