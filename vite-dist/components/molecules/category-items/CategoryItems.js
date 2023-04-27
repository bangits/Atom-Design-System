System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "react", "./CategoryItems.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, react_1, CategoryItems_module_scss_1, CategoryItems;
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
            function (CategoryItems_module_scss_1_1) {
                CategoryItems_module_scss_1 = CategoryItems_module_scss_1_1;
            }
        ],
        execute: function () {
            CategoryItems = ({ children, isFilter, buttonProps, onPageChange, isAllItemsLoaded, isLoadingItems, pagination, buttons, isFilterOpened, title, cardTopPart, itemsWidthAuto, scrollProps = {
                autoHeight: false,
                height: '100%'
            }, fixHeight = true, buttonTooltip, emptyMsg }) => {
                const currentPageRef = react_1.useRef(1);
                const childrenArray = react_1.useMemo(() => react_1.Children.toArray(children), [children]);
                return (_jsxs("div", { "data-scroll-container": true, className: classnames_1.default(CategoryItems_module_scss_1.default.CategoryItems, {
                        [CategoryItems_module_scss_1.default['CategoryItems--filter']]: isFilter,
                        [CategoryItems_module_scss_1.default['CategoryItems--fix-height']]: fixHeight,
                        [CategoryItems_module_scss_1.default['CategoryItems--results']]: !isFilter,
                        [CategoryItems_module_scss_1.default['CategoryItems--filter-opened']]: isFilterOpened
                    }), children: [(buttonProps || title) && (_jsxs("div", { className: classnames_1.default(CategoryItems_module_scss_1.default['CategoryItems__top-part'], {
                                [CategoryItems_module_scss_1.default['CategoryItems__top-part--only-button']]: !title
                            }), children: [title && (_jsx(core_1.Typography, { variant: 'p4', className: CategoryItems_module_scss_1.default['CategoryItems__title'], children: title })), buttonProps && (_jsx(core_1.Tooltip, { disabled: !buttonTooltip, text: buttonTooltip, children: _jsx("div", { children: _jsx(core_1.Button, { className: classnames_1.default(CategoryItems_module_scss_1.default['CategoryItems__button'], {
                                                [CategoryItems_module_scss_1.default['CategoryItems__button--disabled']]: buttonProps.disabled
                                            }), variant: 'link', startIcon: _jsx(atom_design_system_1.Icons.PlusCircleLarge, {}), ...buttonProps }) }) }))] })), _jsxs(core_1.Card, { className: CategoryItems_module_scss_1.default['CategoryItems__card'], children: [cardTopPart, !emptyMsg || isLoadingItems ? (_jsx(core_1.Scroll, { ...scrollProps, className: CategoryItems_module_scss_1.default['CategoryItems__scroll'], showHorizontalScroll: false, onScroll: (e) => {
                                        if (isAllItemsLoaded || isLoadingItems)
                                            return;
                                        const isScrolledToBottom = e.target.offsetHeight + e.target.scrollTop >=
                                            e.target.scrollHeight;
                                        if (isScrolledToBottom) {
                                            onPageChange?.(currentPageRef.current + 1);
                                            currentPageRef.current = currentPageRef.current + 1;
                                        }
                                    }, children: _jsxs("div", { className: CategoryItems_module_scss_1.default['CategoryItems__list'], children: [childrenArray.map((c) => (_jsx("div", { className: classnames_1.default(CategoryItems_module_scss_1.default['CategoryItems__item'], {
                                                    [CategoryItems_module_scss_1.default['CategoryItems__item--width-auto']]: itemsWidthAuto
                                                }), children: c }))), isLoadingItems && (_jsx("div", { className: CategoryItems_module_scss_1.default['CategoryItems__loader'], children: _jsx(core_1.Loader, {}) }))] }) })) : (_jsx(atom_design_system_1.EmptyForm, { imgContentSize: 'lg', removeCard: true, children: emptyMsg })), buttons?.length && _jsx("div", { className: CategoryItems_module_scss_1.default['CategoryItems__buttons'], children: buttons }), pagination && _jsx("div", { className: CategoryItems_module_scss_1.default['CategoryItems__pagination'], children: pagination })] })] }));
            };
            exports_1("default", CategoryItems);
        }
    };
});
