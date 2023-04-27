System.register(["react", "react/jsx-runtime", "@/atom-design-system", "@/helpers", "@my-ui/core", "classnames", "react-dnd", "react-dnd-html5-backend", "../sortable-list", "./DnDSelection.module.scss", "./DraggableDnDItem", "./DropPlace"], function (exports_1, context_1) {
    "use strict";
    var react_1, jsx_runtime_1, atom_design_system_1, helpers_1, core_1, classnames_1, react_2, react_dnd_1, react_dnd_html5_backend_1, sortable_list_1, DnDSelection_module_scss_1, DraggableDnDItem_1, DropPlace_1, DnDSelection;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
                react_2 = react_1_1;
            },
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
            function (react_dnd_1_1) {
                react_dnd_1 = react_dnd_1_1;
            },
            function (react_dnd_html5_backend_1_1) {
                react_dnd_html5_backend_1 = react_dnd_html5_backend_1_1;
            },
            function (sortable_list_1_1) {
                sortable_list_1 = sortable_list_1_1;
            },
            function (DnDSelection_module_scss_1_1) {
                DnDSelection_module_scss_1 = DnDSelection_module_scss_1_1;
            },
            function (DraggableDnDItem_1_1) {
                DraggableDnDItem_1 = DraggableDnDItem_1_1;
            },
            function (DropPlace_1_1) {
                DropPlace_1 = DropPlace_1_1;
            }
        ],
        execute: function () {
            DnDSelection = ({ draggableItems: initialDraggableItems, initialSortableItems, onApplyButtonClick, onCloseButtonClick, draggableSectionTitle, sortableSectionTitle, showButtons, renderDroppableTopContent, emptyDroppableIcon = _jsx(atom_design_system_1.Icons.EmptyFormIcon, {}), emptyDroppableText, sortTooltipText, applyButtonTooltipText, closeButtonTooltipText }) => {
                const [selectedDraggableItems, setSelectedDraggableItems] = react_2.useState([]);
                const [sortableItems, setSortableItems] = react_2.useState(initialSortableItems || []);
                const [draggableItems, setDraggableItems] = react_2.useState(initialDraggableItems || []);
                const [search, setSearch] = react_2.useState('');
                const singleSelectedDraggableItem = react_2.useRef(null);
                const droppedItem = react_2.useRef(null);
                const [isDragged, setDragged] = react_2.useState(false);
                const selectedDraggableItemsHashMap = react_2.useMemo(() => selectedDraggableItems.reduce((acc, item) => ({
                    ...acc,
                    [item.indexValue]: true
                }), {}), [selectedDraggableItems]);
                const searchedDraggableItems = react_2.useMemo(() => draggableItems.filter((i) => !search || i.children.toString().toLowerCase().includes(search.toLowerCase())), [draggableItems, search]);
                return (_jsxs(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.HTML5Backend, children: [showButtons && (_jsxs("div", { className: DnDSelection_module_scss_1.default['DnDSelection__buttons'], children: [_jsx(core_1.Tooltip, { text: applyButtonTooltipText, showEvent: 'hover', children: _jsx(core_1.IconButton, { onClick: () => onApplyButtonClick?.(draggableItems, sortableItems), icon: _jsx(atom_design_system_1.Icons.ApplyIcon, {}), type: 'button' }) }), _jsx(core_1.Tooltip, { text: closeButtonTooltipText, showEvent: 'hover', children: _jsx(core_1.IconButton, { onClick: onCloseButtonClick, icon: _jsx(atom_design_system_1.Icons.CloseIcon, {}), type: 'button' }) })] })), _jsxs("div", { className: DnDSelection_module_scss_1.default['DnDSelection'], children: [_jsxs("div", { className: classnames_1.default(DnDSelection_module_scss_1.default['DnDSelection__card-container'], DnDSelection_module_scss_1.default['DnDSelection__card-container--draggable']), children: [draggableSectionTitle && _jsx("div", { className: DnDSelection_module_scss_1.default['DnDSelection__title'], children: draggableSectionTitle }), _jsxs(core_1.Card, { className: classnames_1.default(DnDSelection_module_scss_1.default['DnDSelection__card'], DnDSelection_module_scss_1.default['DnDSelection__card--draggable']), children: [_jsx(atom_design_system_1.SearchInput, { placeholder: 'Search', fullWidth: true, onChange: (e) => setSearch(e.target.value) }), _jsx(core_1.Scroll, { autoHeightMin: 400, showHorizontalScroll: false, children: _jsx("div", { className: DnDSelection_module_scss_1.default['DnDSelection__draggable-container'], children: searchedDraggableItems.map((draggableItem) => {
                                                            const isDraggableItemSelected = !!selectedDraggableItemsHashMap[draggableItem.indexValue];
                                                            return (_createElement(DraggableDnDItem_1.default, { ...draggableItem, indexValue: null, key: draggableItem.indexValue, onDragChange: (isDragged) => {
                                                                    if (isDragged && !isDraggableItemSelected)
                                                                        setSelectedDraggableItems([]);
                                                                    singleSelectedDraggableItem.current = !isDraggableItemSelected ? draggableItem : null;
                                                                    setDragged(isDragged);
                                                                }, checkboxChecked: isDraggableItemSelected, selectedAndDragged: isDragged && isDraggableItemSelected, badgeQuantity: selectedDraggableItems.length, showCheckbox: true, draggable: true, onCheckboxToggle: () => {
                                                                    setSelectedDraggableItems(isDraggableItemSelected
                                                                        ? selectedDraggableItems.filter((item) => item.indexValue !== draggableItem.indexValue)
                                                                        : [...selectedDraggableItems, draggableItem]);
                                                                } }));
                                                        }) }) })] })] }), _jsx("div", { className: DnDSelection_module_scss_1.default['DnDSelection__right-arrow'], children: _jsx(atom_design_system_1.Icons.ArrowRightIcon, {}) }), _jsxs("div", { className: DnDSelection_module_scss_1.default['DnDSelection__card-container'], children: [typeof sortableSectionTitle === 'string' ? (_jsx("div", { className: DnDSelection_module_scss_1.default['DnDSelection__title'], children: sortableSectionTitle })) : (sortableSectionTitle), _jsxs(core_1.Card, { className: classnames_1.default(DnDSelection_module_scss_1.default['DnDSelection__card'], {
                                                [DnDSelection_module_scss_1.default['DnDSelection__card--with-top-content']]: !!renderDroppableTopContent
                                            }), children: [renderDroppableTopContent && (_jsx("div", { className: DnDSelection_module_scss_1.default['DnDSelection__droppable-top-content'], children: renderDroppableTopContent({
                                                        setSortableItems
                                                    }) })), _jsx(DropPlace_1.default, { onDropChange: (isDropped) => {
                                                        if (!isDropped)
                                                            return;
                                                        if (!droppedItem.current && sortableItems.length)
                                                            return;
                                                        setSelectedDraggableItems([]);
                                                        const draggableItems = singleSelectedDraggableItem.current
                                                            ? [singleSelectedDraggableItem.current]
                                                            : selectedDraggableItems;
                                                        if (!sortableItems.length) {
                                                            setSortableItems(draggableItems);
                                                            setDraggableItems((prevDraggableItems) => prevDraggableItems.filter((item) => singleSelectedDraggableItem.current
                                                                ? item.indexValue !== singleSelectedDraggableItem.current.indexValue
                                                                : !selectedDraggableItemsHashMap[item.indexValue]));
                                                            return;
                                                        }
                                                        const droppedIndex = sortableItems.findIndex((item) => item.indexValue === droppedItem.current.indexValue);
                                                        setSortableItems((prevSortableItems) => [
                                                            ...prevSortableItems.slice(0, droppedIndex + 1),
                                                            ...draggableItems,
                                                            ...prevSortableItems.slice(droppedIndex + 1)
                                                        ]);
                                                        setDraggableItems((prevDraggableItems) => prevDraggableItems.filter((draggableItem) => singleSelectedDraggableItem.current
                                                            ? singleSelectedDraggableItem.current.indexValue !== draggableItem.indexValue
                                                            : !selectedDraggableItemsHashMap[draggableItem.indexValue]));
                                                    }, children: sortableItems.length ? (_jsx(core_1.Scroll, { autoHeightMin: 400, showHorizontalScroll: false, children: _jsx("div", { className: DnDSelection_module_scss_1.default['DnDSelection__droppable-container'], children: _jsx(sortable_list_1.SortableList, { onSortEnd: ({ oldIndex, newIndex }) => {
                                                                    setSortableItems((prevItems) => [...helpers_1.arrayMoveMutable(prevItems, oldIndex, newIndex)]);
                                                                }, children: sortableItems.map((sortableItem, index) => (_jsx(sortable_list_1.SortableDnDItem, { ...sortableItem, indexValue: index + 1, dragged: isDragged, index: index, droppable: true, showRemoveButton: true, sortTooltipText: sortTooltipText, sortable: true, onDropChange: (isDropped) => {
                                                                        if (isDropped)
                                                                            droppedItem.current = sortableItem;
                                                                    }, onRemoveButtonClick: () => {
                                                                        setSortableItems((prevSortableItems) => prevSortableItems.filter((item) => item.indexValue !== sortableItem.indexValue));
                                                                        if (!sortableItem.notAddToDraggableItems)
                                                                            setDraggableItems((prevDraggableItems) => [sortableItem, ...prevDraggableItems]);
                                                                    } }, sortableItem.indexValue))) }) }) })) : (_jsxs("div", { className: DnDSelection_module_scss_1.default['DnDSelection__empty'], children: [_jsx("div", { className: DnDSelection_module_scss_1.default['DnDSelection__emptyIcon'], children: emptyDroppableIcon }), _jsx("p", { className: DnDSelection_module_scss_1.default['DnDSelection__emptyText'], children: emptyDroppableText })] })) })] })] })] })] }));
            };
            exports_1("default", DnDSelection);
        }
    };
});
