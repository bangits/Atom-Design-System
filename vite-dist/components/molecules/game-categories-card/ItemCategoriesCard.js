System.register(["react/jsx-runtime", "@/atom-design-system", "@/helpers", "@my-ui/core", "classnames", "react", "./ItemCategoriesCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, helpers_1, core_1, classnames_1, react_1, ItemCategoriesCard_module_scss_1, ItemCategoriesCard;
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
            function (ItemCategoriesCard_module_scss_1_1) {
                ItemCategoriesCard_module_scss_1 = ItemCategoriesCard_module_scss_1_1;
            }
        ],
        execute: function () {
            ItemCategoriesCard = ({ onDeleteButtonClick, onPlayButtonClick, onDemoPlayButtonClick, onViewButtonClick, imgSrc, name, subTitle, checkboxProps, index, formWithInputActions, actionsShowPosition, showActions, translations, showCheckboxOnHover, status, statusLabel }) => {
                const [selectedFormProps, setSelectedFormProps] = react_1.useState(null);
                const [showSelectedFrom, setShowSelectedForm] = react_1.useState(false);
                const closeSelectedForm = react_1.useCallback(() => setShowSelectedForm(false), []);
                const onBackBtnClick = react_1.useCallback((e) => {
                    e.stopPropagation();
                    closeSelectedForm();
                }, []);
                return (_jsxs("div", { className: classnames_1.default(ItemCategoriesCard_module_scss_1.default.ItemCategoriesCard, {
                        [ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard--with-actions']]: showActions,
                        [ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard--with-status']]: !!status,
                        [ItemCategoriesCard_module_scss_1.default[`ItemCategoriesCard--status-${status}`]]: status,
                        [ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard--show-checkbox-hover']]: showCheckboxOnHover
                    }), children: [_jsxs("div", { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__main'], children: [checkboxProps && (_jsx(core_1.Checkbox, { ...checkboxProps, className: classnames_1.default(ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__checkbox'], checkboxProps?.className) })), index ? _jsx("span", { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__index'], children: index }) : null, showActions && (_jsx(atom_design_system_1.ButtonForm, { showPosition: actionsShowPosition, className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__more'], renderOpenElement: ({ open }) => (_jsx("button", { type: 'button', onClick: open, children: _jsx(atom_design_system_1.Icons.DotsIcon, {}) })), children: _jsxs("div", { className: classnames_1.default(ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__more-content'], {
                                            [ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__more-content--with-selected-form']]: showSelectedFrom
                                        }), children: [_jsx("div", { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__more-form'], children: selectedFormProps && (_jsx(atom_design_system_1.FormWithInput, { ...selectedFormProps, onBackBtnClick: (e) => {
                                                        onBackBtnClick(e);
                                                        selectedFormProps.onBackBtnClick?.(e);
                                                    }, close: () => {
                                                        closeSelectedForm();
                                                        selectedFormProps.close?.();
                                                    } })) }), _jsxs("div", { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__more-actions'], children: [_jsxs("button", { onClick: onViewButtonClick, className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__action'], type: 'button', children: [_jsx(atom_design_system_1.Icons.ViewIcon, { width: '1.6rem' }), " ", translations?.view] }), formWithInputActions?.map((action, index) => (_jsxs("button", { onClick: () => {
                                                            setSelectedFormProps(action);
                                                            setShowSelectedForm(true);
                                                        }, className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__action'], type: 'button', children: [action.actionIcon, " ", action.actionLabel] }, index))), _jsxs("button", { className: classnames_1.default(ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__action'], ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__action--danger']), type: 'button', onClick: onDeleteButtonClick, children: [_jsx(atom_design_system_1.Icons.TrashIndicator, { width: '1.2rem' }), " ", translations?.delete] })] })] }) })), _jsx("div", { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__launch-btns'], children: _jsx(atom_design_system_1.GameLaunchBtns, { onDemoPlayBtnClick: onDemoPlayButtonClick, onPlayBtnClick: onPlayButtonClick, playDemoText: translations?.playDemoText, showDemoPlayBtn: !!onDemoPlayButtonClick, showPlayBtn: !!onPlayButtonClick }) }), imgSrc ? (_jsx("img", { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__img'], src: imgSrc, alt: name })) : (_jsx("span", { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__empty-img'], children: _jsx(atom_design_system_1.Icons.EmptyCardImagePokerToken, {}) }))] }), _jsxs("div", { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__name'], children: [name && (_jsx(core_1.TextWithTooltip, { className: ItemCategoriesCard_module_scss_1.default.ItemCategoriesCard__title, displayText: name, children: _jsx(core_1.Typography, { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__title-content'], component: 'h3', variant: 'p4', children: name }) })), subTitle && (_jsx(core_1.TextWithTooltip, { className: ItemCategoriesCard_module_scss_1.default.ItemCategoriesCard__subtitle, displayText: subTitle, children: _jsx(core_1.Typography, { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__subtitle-content'], component: 'span', variant: 'p5', color: 'primary', children: subTitle }) })), _jsx(core_1.Tooltip, { text: statusLabel, children: _jsx("span", { className: ItemCategoriesCard_module_scss_1.default['ItemCategoriesCard__indicator'] }) })] })] }));
            };
            exports_1("default", helpers_1.typedMemo(ItemCategoriesCard));
        }
    };
});
