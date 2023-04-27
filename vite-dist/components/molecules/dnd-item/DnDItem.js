System.register(["react/jsx-runtime", "@/atom-design-system", "@/helpers", "@my-ui/core", "classnames", "react", "./DnDItem.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, helpers_1, core_1, classnames_1, react_1, DnDItem_module_scss_1, DnDItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (DnDItem_module_scss_1_1) {
                DnDItem_module_scss_1 = DnDItem_module_scss_1_1;
            }
        ],
        execute: function () {
            DnDItem = react_1.forwardRef(({ children, indexValue, showRemoveButton, sortable, droppable, dragged, showCheckbox, imgSrc, badgeQuantity, onCheckboxToggle, onRemoveButtonClick, draggable, checkboxChecked, onDragChange, selectedAndDragged, sortTooltipText, onDropChange }, ref) => {
                const [isDropped, setDropped] = react_1.useState(false);
                const [isDragged, setDragged] = react_1.useState(false);
                const timerRef = react_1.useRef(null);
                react_1.useEffect(() => () => {
                    if (timerRef.current)
                        clearTimeout(timerRef.current);
                }, [timerRef.current]);
                return (_jsxs(_Fragment, { children: [_jsxs("div", { ref: ref, className: classnames_1.default(DnDItem_module_scss_1.default['DnDItem'], {
                                [DnDItem_module_scss_1.default['DnDItem--draggable']]: draggable,
                                [DnDItem_module_scss_1.default['DnDItem--selected-and-dragged']]: selectedAndDragged
                            }), ...(draggable
                                ? {
                                    onDragStart: () => {
                                        setDragged(true);
                                        onDragChange?.(true);
                                    },
                                    onDragEnd: () => {
                                        setDragged(false);
                                        onDragChange?.(false);
                                    }
                                }
                                : {}), ...(droppable
                                ? {
                                    onDragOver: () => {
                                        if (timerRef.current)
                                            clearTimeout(timerRef.current);
                                        onDropChange?.(true);
                                        setDropped(true);
                                    },
                                    onDragLeave: () => {
                                        timerRef.current = setTimeout(() => {
                                            onDropChange?.(false);
                                            setDropped(false);
                                        }, 100);
                                    },
                                    onDrop: () => {
                                        onDropChange?.(false);
                                        setDropped(false);
                                    }
                                }
                                : {}), children: [indexValue && _jsx("span", { className: DnDItem_module_scss_1.default['DnDItem__index'], children: indexValue }), _jsxs("div", { className: DnDItem_module_scss_1.default['DnDItem__content'], children: [_jsxs("div", { className: DnDItem_module_scss_1.default['DnDItem__children'], children: [imgSrc && _jsx("img", { className: DnDItem_module_scss_1.default['DnDItem__img'], src: imgSrc, alt: children?.toString() || '' }), _jsx(core_1.TextWithTooltip, { displayText: children, className: DnDItem_module_scss_1.default['DnDItem__text'], children: children })] }), isDragged && badgeQuantity > 1 && _jsx("span", { className: DnDItem_module_scss_1.default['DnDItem__badge'], children: badgeQuantity }), showCheckbox && (_jsx(core_1.Checkbox, { checked: checkboxChecked, onChange: onCheckboxToggle, className: DnDItem_module_scss_1.default['DnDItem__checkbox'] })), sortable && (_jsx("div", { className: classnames_1.default(DnDItem_module_scss_1.default['DnDItem__sort'], 'DnD-SortIcon'), children: _jsx(core_1.Tooltip, { text: sortTooltipText, children: _jsx(atom_design_system_1.Icons.SortIcon, {}) }) })), showRemoveButton && (_jsx("button", { type: 'button', className: DnDItem_module_scss_1.default['DnDItem__remove'], onClick: onRemoveButtonClick, children: _jsx(atom_design_system_1.Icons.CloseIcon, {}) }))] })] }), isDropped && dragged && _jsx("div", { className: DnDItem_module_scss_1.default['DnDItem__drop-place'] })] }));
            });
            exports_1("default", helpers_1.typedMemo(DnDItem));
        }
    };
});
