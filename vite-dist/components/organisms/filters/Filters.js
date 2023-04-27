System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@/components/atoms", "@/helpers", "@/helpers/typedMemo", "@my-ui/core", "classnames", "react", "react-sortable-hoc", "react-transition-group", "./Filters.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, atoms_1, helpers_1, typedMemo_1, core_1, classnames_1, react_1, react_sortable_hoc_1, react_transition_group_1, Filters_module_scss_1;
    var __moduleName = context_1 && context_1.id;
    function Filters({ filters, onFiltersViewChange, selectProps, checkboxFilters, clearLabel, applyLabel, resultLabel, saveLabel = 'Save', defaultOpened, initialValues, onSubmit, onClear, onSaveClick, className, showedFilters: showedFiltersProp, minFiltersCount = 1, onFiltersOpenedChange, infoTooltipText }) {
        const [filterValues, setFilterValues] = react_1.useReducer((prevState, updatedState) => (updatedState === 'clear' ? initialValues : { ...prevState, ...updatedState }), initialValues);
        const [isOpenedFilterCollapse, setIsOpenedFilterCollapse] = react_1.useState(defaultOpened);
        const [showedFilters, setShowedFilters] = react_1.useState(showedFiltersProp || filters);
        const [isDisabledSaveButton, setDisabledSaveButton] = react_1.useState(true);
        const [showedCheckboxFilters, setShowedCheckboxFilters] = react_1.useState(checkboxFilters);
        const toggleFiltersCollapse = react_1.useCallback(() => {
            if (onFiltersOpenedChange)
                onFiltersOpenedChange(!isOpenedFilterCollapse);
            setIsOpenedFilterCollapse(!isOpenedFilterCollapse);
        }, [isOpenedFilterCollapse, onFiltersOpenedChange]);
        const onFilterChange = react_1.useCallback((filterName, value) => {
            setFilterValues({ [filterName]: value });
        }, []);
        const filtersConfigOptions = react_1.useMemo(() => [...filters, ...checkboxFilters].map((filter) => ({
            label: filter?.label,
            value: filter?.name
        })), [filters, checkboxFilters]);
        const filtersConfigValue = react_1.useMemo(() => showedFilters.filter(Boolean).map((filter) => filter?.name), [showedFilters]);
        const onFiltersConfigChange = react_1.useCallback((selectedFilters) => {
            setDisabledSaveButton(false);
            const updatedFilters = [
                ...selectedFilters.map((filter) => filters.find((f) => f?.name === filter)).filter((f) => f)
            ];
            // Check is updatedFilters empty and if it is select first default value option
            const minUpdatedFilters = !updatedFilters.length ? filters.slice(0, minFiltersCount) : updatedFilters;
            if (onFiltersViewChange)
                onFiltersViewChange(minUpdatedFilters);
            setShowedFilters(minUpdatedFilters);
            setShowedCheckboxFilters([
                ...selectedFilters.map((filter) => checkboxFilters.find((f) => f?.name === filter)).filter((f) => f)
            ]);
        }, [filters, checkboxFilters, minFiltersCount, onFiltersViewChange]);
        const onClearClick = react_1.useCallback(() => {
            if (!isOpenedFilterCollapse)
                return;
            setFilterValues('clear');
            onClear(filterValues);
        }, [isOpenedFilterCollapse]);
        const onDragChange = react_1.useCallback(({ oldIndex, newIndex }) => {
            setDisabledSaveButton(false);
            setShowedFilters((prevFilters) => {
                const updatedFilters = [...helpers_1.arrayMoveMutable(prevFilters, oldIndex, newIndex)];
                if (onFiltersViewChange)
                    onFiltersViewChange(updatedFilters);
                return updatedFilters;
            });
        }, [setShowedFilters]);
        const SortableFilterItem = react_1.useMemo(() => react_sortable_hoc_1.SortableElement(({ filter, filterValues, onFilterChange }) => (_jsx(components_1.Filter, { value: filterValues[filter?.name], filter: filter, onFilterChange: onFilterChange, filterValues: filterValues }, filter?.name))), []);
        const SortableFiltersList = react_1.useMemo(() => react_sortable_hoc_1.SortableContainer(({ filterValues, onFilterChange, items }) => {
            return (_jsx(react_transition_group_1.TransitionGroup, { className: `${Filters_module_scss_1.default.FiltersContainer}`, children: items.map((filter, index) => filter && (_jsx(react_transition_group_1.CSSTransition, { timeout: 400, classNames: 'item', children: _jsx(SortableFilterItem, { index: index, filterValues: filterValues, onFilterChange: onFilterChange, filter: filter }, filter?.name) }, filter.name))) }));
        }), []);
        react_1.useEffect(() => setShowedFilters(showedFiltersProp || filters), [filters]);
        react_1.useEffect(() => setShowedCheckboxFilters(checkboxFilters), [checkboxFilters]);
        return (_jsx(_Fragment, { children: _jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(Filters_module_scss_1.default.FiltersBase, {
                    [Filters_module_scss_1.default['FiltersBase--closed']]: !isOpenedFilterCollapse
                }, className), children: [_jsx(SortableFiltersList, { pressDelay: 200, shouldCancelStart: () => false, axis: 'xy', items: showedFilters, filterValues: filterValues, onFilterChange: onFilterChange, onSortEnd: onDragChange, disableAutoscroll: true }), _jsx("div", { className: Filters_module_scss_1.default.Checkbox, children: checkboxFilters &&
                            showedCheckboxFilters.map((filter) => {
                                return (_jsx(components_1.CheckboxGroup, { label: filter.label, checkboxes: filter.checkboxProps, value: filterValues[filter.name], onChange: (selectedCheckboxes) => onFilterChange(filter.name, selectedCheckboxes) }, filter.name));
                            }) }), _jsxs("div", { className: Filters_module_scss_1.default.ControlContainer, children: [_jsxs("div", { className: Filters_module_scss_1.default.LeftControlsContainer, children: [_jsx(core_1.Select, { dropdownLabel: 'Filters', ...selectProps, dropdown: true, isMulti: true, onChange: onFiltersConfigChange, 
                                        // defaultValue={filtersConfigDefaultValue}
                                        value: filtersConfigValue, options: filtersConfigOptions, dropdownIcon: _jsx(atom_design_system_1.Icons.FilterIcon, { className: Filters_module_scss_1.default.FiltersDropdownIcon }), className: Filters_module_scss_1.default.FiltersDropdown, color: 'primary', disableSelectedOptions: showedFilters.length <= minFiltersCount }), onSaveClick && saveLabel && (_jsx(atoms_1.Divider, { children: _jsx(core_1.Button, { variant: 'link', onClick: (event) => {
                                                setDisabledSaveButton(true);
                                                if (onSaveClick)
                                                    onSaveClick(filters, showedFilters, event);
                                            }, disabled: isDisabledSaveButton, className: Filters_module_scss_1.default.SaveButton, startIcon: _jsx(atom_design_system_1.Icons.SaveIcon, {}), children: saveLabel }) })), infoTooltipText && _jsx(atoms_1.InfoTooltip, { infoTooltipText: infoTooltipText })] }), _jsxs("div", { className: Filters_module_scss_1.default.ToggleContainer, children: [_jsx(core_1.Typography, { variant: 'p4', className: Filters_module_scss_1.default.UserFoundLabel, children: resultLabel }), isOpenedFilterCollapse && (_jsxs(_Fragment, { children: [_jsx(core_1.Button, { variant: 'ghost', onClick: onClearClick, children: clearLabel }), _jsx(core_1.Button, { onClick: () => onSubmit(filterValues), className: Filters_module_scss_1.default.ApplyButton, children: applyLabel })] })), _jsx("div", { className: Filters_module_scss_1.default.ArrowIconContainer, children: _jsx("span", { onClick: toggleFiltersCollapse, children: _jsxs("svg", { id: 'Arrow', xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', children: [_jsx("path", { id: 'Path_1991', "data-name": 'Path 1991', d: 'M0,5,5,0l5,5M0,12,5,7l5,5', transform: 'translate(17 18) rotate(180)', fill: 'none', stroke: '#6667ab', "stroke-linecap": 'round', "stroke-linejoin": 'round', "stroke-width": '2' }), _jsx("rect", { id: 'Rectangle_893', "data-name": 'Rectangle 893', width: '24', height: '24', fill: 'none' })] }) }) })] })] })] }) }));
    }
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (atoms_1_1) {
                atoms_1 = atoms_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_sortable_hoc_1_1) {
                react_sortable_hoc_1 = react_sortable_hoc_1_1;
            },
            function (react_transition_group_1_1) {
                react_transition_group_1 = react_transition_group_1_1;
            },
            function (Filters_module_scss_1_1) {
                Filters_module_scss_1 = Filters_module_scss_1_1;
            }
        ],
        execute: function () {
            Filters.defaultProps = {
                checkboxFilters: []
            };
            exports_1("default", typedMemo_1.typedMemo(Filters));
        }
    };
});
