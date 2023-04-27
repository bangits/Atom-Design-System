System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "react", "./SortableItemCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, react_1, SortableItemCard_module_scss_1, SortableItemCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
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
            function (SortableItemCard_module_scss_1_1) {
                SortableItemCard_module_scss_1 = SortableItemCard_module_scss_1_1;
            }
        ],
        execute: function () {
            SortableItemCard = ({ actions, subtitle, title, checkboxProps, imgSrc, index }) => {
                const [isCheckboxChecked, setCheckboxChecked] = react_1.useState(false);
                const onCheckboxChange = react_1.useCallback((e) => {
                    checkboxProps?.onChange?.(e);
                    setCheckboxChecked((prevChecked) => !prevChecked);
                }, [checkboxProps?.onChange]);
                return (_jsxs("div", { className: classnames_1.default(SortableItemCard_module_scss_1.default.SortableItemCard, {
                        [SortableItemCard_module_scss_1.default['SortableItemCard--Checked']]: checkboxProps?.checked !== undefined ? checkboxProps?.checked : isCheckboxChecked
                    }), children: [_jsxs("div", { className: SortableItemCard_module_scss_1.default.SortableItemCard__Main, children: [checkboxProps && (_jsx("div", { className: SortableItemCard_module_scss_1.default.SortableItemCard__Checkbox, children: _jsx(core_1.Checkbox, { ...checkboxProps, onChange: onCheckboxChange }) })), actions && _jsx("div", { className: SortableItemCard_module_scss_1.default.SortableItemCard__Actions, children: actions }), index && _jsx("div", { className: SortableItemCard_module_scss_1.default.SortableItemCard__Index, children: index }), imgSrc ? (_jsx("img", { className: SortableItemCard_module_scss_1.default.SortableItemCard__Img, src: imgSrc, alt: title.toString() })) : (_jsx(atom_design_system_1.Icons.EmptyCardImagePokerToken, { className: SortableItemCard_module_scss_1.default.SortableItemCard__EmptyImg }))] }), (title || subtitle) && (_jsxs("div", { className: SortableItemCard_module_scss_1.default.SortableItemCard__Bottom, children: [title && (_jsx(core_1.TextWithTooltip, { className: SortableItemCard_module_scss_1.default.SortableItemCard__Title, displayText: title, children: _jsx(core_1.Typography, { className: SortableItemCard_module_scss_1.default['SortableItemCard__Title-Content'], component: 'h3', variant: 'p4', children: title }) })), subtitle && (_jsx(core_1.TextWithTooltip, { className: SortableItemCard_module_scss_1.default.SortableItemCard__Subtitle, displayText: subtitle, children: _jsx(core_1.Typography, { className: SortableItemCard_module_scss_1.default['SortableItemCard__Subtitle-Content'], component: 'span', variant: 'p5', color: 'primary', children: subtitle }) }))] }))] }));
            };
            exports_1("default", SortableItemCard);
        }
    };
});
