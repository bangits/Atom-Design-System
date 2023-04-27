System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@/components/atoms", "@/icons", "@/img", "@my-ui/core", "classnames", "react", "./DataTable.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, atoms_1, icons_1, img_1, core_1, classnames_1, react_1, DataTable_module_scss_1;
    var __moduleName = context_1 && context_1.id;
    function DataTable({ tableProps, filterProps, defaultSorted, fetchData, isShowedFilter = true, defaultPaginationPage = 1, defaultPageSize = 20, paginationProps, columnDropdownTranslations, rowCount, onRefreshButtonClick, actionsButtonDisabledTime = 2, onTableConfigChange, columnsConfigDefaultValue: columnsConfigDefaultValueProp, tableCollapseActions, getCollapsableTableProps, currencySelect: CurrencySelect, defaultCurrency, currencyProperty, exchangeCurrencyProperty, currencyTranslations, exportButton, isSynchronizeShown = false, isSynchronize, onSynchronizeButtonClick, tableBulkActions: tableBulkActionsProps, renderFilter }) {
        const tableContainerRef = react_1.useRef(null);
        const [sortedBy, setSortedBy] = react_1.useState(defaultSorted || null);
        const [filters, setFilters] = react_1.useState(null);
        const [selectedExchangeCurrency, setSelectedExchangeCurrency] = react_1.useState(defaultCurrency);
        const [selectedRows, setSelectedRows] = react_1.useState([]);
        const [isDisabledRefreshButton, setDisabledRefreshButton] = react_1.useState(false);
        const [isDisabledSynchronizeButton, setDisabledSynchronizeButton] = react_1.useState(false);
        const [isFiltersOpened, setFiltersOpened] = react_1.useState(false);
        const [openedCollapseInfo, setOpenedCollapseInfo] = react_1.useState(null);
        const [collapsableTableProps, setCollapsableTableProps] = react_1.useState(null);
        const dropdownOptions = react_1.useMemo(() => tableProps.columns.map((column) => ({
            label: column.Header,
            value: column.accessor,
            disabled: false
        })), []);
        const columnsConfigDefaultValue = react_1.useMemo(() => columnsConfigDefaultValueProp || dropdownOptions.map((value) => value.value), [dropdownOptions, columnsConfigDefaultValueProp]);
        const [dropdownValues, setDropdownValues] = react_1.useState(columnsConfigDefaultValue);
        const configColumns = react_1.useMemo(() => dropdownValues.length === 0
            ? tableProps.columns.filter((column) => columnsConfigDefaultValue.slice(0, 3).includes(column.accessor))
            : tableProps.columns.filter((column) => dropdownValues.includes(column.accessor)), [dropdownValues, tableProps.columns, columnsConfigDefaultValue]);
        const initialPagination = react_1.useMemo(() => ({
            page: defaultPaginationPage,
            pageSize: defaultPageSize
        }), []);
        const [pagination, setPagination] = react_1.useReducer((prevPagination, updatedPagination) => ({
            ...prevPagination,
            ...updatedPagination
        }), initialPagination);
        const onDataChange = react_1.useCallback((changedFilters, changedSorted, updatedPagination) => {
            fetchData({
                filters: {
                    ...(changedFilters || filters),
                    pagination: updatedPagination || pagination
                },
                sortedBy: changedSorted === undefined ? sortedBy : changedSorted
            });
        }, [filters, sortedBy, pagination]);
        const onFiltersChange = react_1.useCallback((changedFilters) => {
            if (exchangeCurrencyProperty && filters)
                changedFilters[exchangeCurrencyProperty] = filters[exchangeCurrencyProperty];
            setFilters(changedFilters);
            setPagination(initialPagination);
            onDataChange(changedFilters, undefined, initialPagination);
        }, [onDataChange, initialPagination, exchangeCurrencyProperty, filters]);
        const onTableFetchData = react_1.useCallback((tableData) => {
            const sort = tableData.sortBy;
            const changedSortedBy = sort
                ? {
                    id: sort.id,
                    desc: !!sort.desc
                }
                : null;
            setSortedBy(changedSortedBy);
            onDataChange(null, changedSortedBy);
        }, [onDataChange]);
        const onPaginationChange = react_1.useCallback((value) => {
            if (!value)
                return;
            setPagination({
                page: value
            });
        }, []);
        const onPaginationSizeChange = react_1.useCallback((value) => {
            if (!value)
                return;
            setPagination({
                page: 1,
                pageSize: value
            });
        }, []);
        const onCollapsableTableClose = react_1.useCallback(() => {
            setOpenedCollapseInfo(null);
            setCollapsableTableProps(null);
        }, []);
        const tableColumns = react_1.useMemo(() => {
            return (configColumns || []).map((column) => ({
                ...column,
                ...(column.variant === 'status'
                    ? {
                        renderColumn: (_, value) => (_jsx(core_1.Status, { variant: column.getVariant(value), children: column.getVariantName(value) })),
                        maxWidth: '14.5rem',
                        dataMaxWidth: '14.5rem'
                    }
                    : column.variant === 'circle-image'
                        ? {
                            renderColumn: (_, value) => _jsx("img", { src: value || img_1.noImage }),
                            className: DataTable_module_scss_1.default.ImageColumnCircle
                        }
                        : column.variant === 'hovered-image'
                            ? {
                                renderColumn: (_, value) => {
                                    return _jsx("img", { src: value || img_1.noImageGame });
                                },
                                className: classnames_1.default(DataTable_module_scss_1.default.ImageHoverColumn, 'ImageHoverColumn')
                            }
                            : column.variant === 'image'
                                ? {
                                    renderColumn: (_, value) => {
                                        return _jsx("img", { src: value || img_1.noImageGame });
                                    },
                                    className: DataTable_module_scss_1.default.ImageColumn
                                }
                                : column.variant === 'clickable-icon'
                                    ? {
                                        renderColumn: (props) => {
                                            return _jsx(icons_1.DocumentIcon, { ...props, width: '2rem', height: '2rem' });
                                        },
                                        className: DataTable_module_scss_1.default.ImageColumn
                                    }
                                    : {})
            }));
        }, [tableProps.columns, dropdownValues]);
        const isTableHaveHoveredImage = react_1.useMemo(() => {
            return tableProps.columns.some((column) => column.variant === 'hovered-image');
        }, [tableProps.columns]);
        const paginationTotalCountInfo = react_1.useMemo(() => paginationProps.getTotalCountInfo(pagination), [paginationProps.getTotalCountInfo, pagination]);
        const actions = react_1.useMemo(() => [
            ...([
                ...(tableProps.actions || []),
                ...(tableCollapseActions || []).map((collapse) => ({
                    onClick: async (row, e, rowIndex) => {
                        try {
                            const { target } = e;
                            const table = target.closest(`.${DataTable_module_scss_1.default.DataTablePageWrapper}`);
                            const tableRow = target.closest('tr');
                            const clickedRow = Array.isArray(row) ? row[0] : row;
                            const updatedOpenedCollapseInfo = {
                                id: collapse.id,
                                yPosition: tableRow.getBoundingClientRect().y + tableRow.offsetHeight,
                                xPosition: table.getBoundingClientRect().x,
                                row: clickedRow,
                                rowIndex
                            };
                            if (getCollapsableTableProps) {
                                const collapsableTableProps = await getCollapsableTableProps(tableProps.data[rowIndex]);
                                setCollapsableTableProps(collapsableTableProps);
                            }
                            setOpenedCollapseInfo(updatedOpenedCollapseInfo);
                        }
                        catch {
                            // TODO: Handle error case
                        }
                    },
                    ...collapse,
                    shouldShowBulkAction: () => false
                }))
            ]?.map((action) => {
                const IconComponent = atom_design_system_1.Icons[action.iconName];
                return {
                    component: (props) => {
                        return (_jsx(core_1.Tooltip, { showEvent: 'hover', text: action.tooltipText, children: _jsx(core_1.IconButton, { ...props }) }));
                    },
                    onClick: (row, e, rowIndex) => action.onClick(row, e, rowIndex),
                    shouldShow: action.shouldShow,
                    props: {
                        icon: _jsx(IconComponent, {})
                    }
                };
            }) || [])
        ], [tableProps.actions]);
        const tableBulkActions = react_1.useMemo(() => (actions || tableBulkActionsProps) && selectedRows.length > 1
            ? [
                ...actions.map(({ component: Component, onClick, shouldShow, props }, rowIndex) => (!shouldShow || selectedRows.every((column) => shouldShow(column))) && (_jsx(Component, { onClick: (e) => onClick(selectedRows, e, rowIndex), ...props }))),
                ...(tableBulkActionsProps?.map(({ component, shouldShow }) => shouldShow(selectedRows) && component(selectedRows)) || [])
            ]
            : null, [actions, selectedRows]);
        const collapseTableProps = react_1.useMemo(() => {
            return {
                dialogViewProps: {
                    yPosition: openedCollapseInfo?.yPosition,
                    xPosition: openedCollapseInfo?.xPosition,
                    containerWidth: tableContainerRef.current?.offsetWidth,
                    onClose: onCollapsableTableClose,
                    isOpened: !!openedCollapseInfo?.row
                },
                ...(collapsableTableProps || {})
            };
        }, [openedCollapseInfo, collapsableTableProps]);
        const dataTableFilterProps = react_1.useMemo(() => ({
            onFiltersOpenedChange: setFiltersOpened,
            className: classnames_1.default(DataTable_module_scss_1.default.Filters, filterProps.className),
            onSubmit: onFiltersChange,
            onClear: () => onFiltersChange(filterProps.initialValues)
        }), [onFiltersChange]);
        react_1.useEffect(() => {
            if (pagination === initialPagination)
                return;
            onDataChange(null);
        }, [pagination]);
        return (_jsxs("div", { className: DataTable_module_scss_1.default.DataTablePageWrapper, children: [isShowedFilter &&
                    (renderFilter ? renderFilter(dataTableFilterProps) : _jsx(components_1.Filters, { ...filterProps, ...dataTableFilterProps })), _jsxs("div", { className: DataTable_module_scss_1.default.TableConfigsWrapper, children: [_jsxs("div", { className: DataTable_module_scss_1.default.TableLeftSideWrapper, children: [_jsx(core_1.Select, { isMulti: true, dropdown: true, dropdownIcon: _jsx(core_1.Tooltip, { text: 'Columns', children: _jsx(icons_1.SettingsIcon, { width: '1.8rem', height: '1.8rem' }) }), clearButton: true, clearButtonLabel: columnDropdownTranslations?.clearButtonLabel || 'Clear', selectAll: true, selectAllLabel: columnDropdownTranslations?.selectAllLabel || 'All', color: 'primary', options: dropdownOptions, disableSelectedOptions: dropdownValues.length < 4, onChange: (values) => {
                                        const updatedValues = values.length === 0 ? columnsConfigDefaultValue.slice(0, 3) : values;
                                        setDropdownValues(updatedValues);
                                        if (onTableConfigChange)
                                            onTableConfigChange(dropdownOptions, updatedValues);
                                    }, value: dropdownValues, className: DataTable_module_scss_1.default.TableConfigSelect }), _jsx(atoms_1.Divider, { children: onRefreshButtonClick && (_jsx(core_1.Tooltip, { text: 'Refresh', children: _jsx(atoms_1.ButtonWithIcon, { icon: 'RotateIcon', disabled: isDisabledRefreshButton, onClick: (event) => {
                                                if (actionsButtonDisabledTime) {
                                                    setDisabledRefreshButton(true);
                                                    setTimeout(() => setDisabledRefreshButton(false), actionsButtonDisabledTime * 1000);
                                                }
                                                if (onRefreshButtonClick)
                                                    onRefreshButtonClick(event);
                                            }, className: DataTable_module_scss_1.default.RefreshButton, iconProps: {
                                                width: '1.8rem',
                                                height: '1.8rem'
                                            } }) })) }), isSynchronizeShown && (_jsx(atoms_1.Divider, { children: _jsx(core_1.Tooltip, { text: 'Synchronize - automatically updates System Notifications', children: _jsx(atoms_1.ButtonWithIcon, { icon: 'SynchronizeIcon', disabled: isDisabledSynchronizeButton, onClick: (event) => {
                                                if (actionsButtonDisabledTime) {
                                                    setDisabledSynchronizeButton(true);
                                                    setTimeout(() => setDisabledSynchronizeButton(false), actionsButtonDisabledTime * 1000);
                                                }
                                                if (onSynchronizeButtonClick)
                                                    onSynchronizeButtonClick(event);
                                            }, className: DataTable_module_scss_1.default.RefreshButton, iconProps: {
                                                width: '1.8rem',
                                                height: '1.8rem'
                                            } }) }) })), exportButton && tableProps.data?.length ? _jsx(atoms_1.Divider, { children: exportButton }) : null, CurrencySelect && (currencyProperty || exchangeCurrencyProperty) && (_jsx(atoms_1.Divider, { className: classnames_1.default(DataTable_module_scss_1.default.TableConfigSelect, DataTable_module_scss_1.default['TableConfigSelect--exchange']), children: _jsx(CurrencySelect, { dropdown: true, dropdownLabel: selectedExchangeCurrency?.label || '', dropdownIcon: _jsx(core_1.Tooltip, { text: currencyTranslations?.infoTooltipText, children: _jsx(icons_1.ExchangeIcon, { width: '1.8rem', height: '1.8rem' }) }), color: 'primary', options: dropdownOptions, dropdownSearchPlaceholder: currencyTranslations?.search || 'Search', defaultValue: defaultCurrency?.value, fullWidth: true, onChange: (value, _, options) => {
                                            const selectedExchangeCurrency = options.find((o) => o.value === value);
                                            setSelectedExchangeCurrency(selectedExchangeCurrency);
                                            const changedFilters = {
                                                ...(filters || {}),
                                                ...(currencyProperty ? { [currencyProperty]: value } : {}),
                                                ...(exchangeCurrencyProperty ? { [exchangeCurrencyProperty]: selectedExchangeCurrency?.label } : {})
                                            };
                                            setFilters(changedFilters);
                                            onDataChange(changedFilters, sortedBy, pagination);
                                        } }) })), _jsx("div", { className: DataTable_module_scss_1.default.TableActionsWrapper, children: tableBulkActions })] }), _jsx(core_1.Pagination, { onChange: onPaginationChange, page: pagination.page, ...paginationProps, totalPagesCount: Math.ceil(rowCount / pagination.pageSize), totalCountInfo: paginationTotalCountInfo, pageSizeSelect: {
                                ...paginationProps.pageSizeSelect,
                                onChange: onPaginationSizeChange
                            }, className: DataTable_module_scss_1.default.PaginationWrapper })] }), _jsx(components_1.Table, { ...tableProps, tableContainerRef: tableContainerRef, height: `calc(100vh - ${isFiltersOpened ? '50rem' : '35rem'})`, fetch: onTableFetchData, className: classnames_1.default(DataTable_module_scss_1.default.Table, tableProps.className, {
                        [DataTable_module_scss_1.default.TableHaveHoveredImage]: isTableHaveHoveredImage,
                        [DataTable_module_scss_1.default.TableHaveData]: !!tableProps.data?.length
                    }), onSelectedColumnsChange: (columns) => {
                        setSelectedRows(columns.map((c) => c.original));
                        if (tableProps.onSelectedColumnsChange)
                            tableProps.onSelectedColumnsChange(columns);
                    }, actions: actions, columns: tableColumns, onColumnsChange: (columns) => {
                        const columnsHashMap = columns.reduce((acc, column, index) => ({ ...acc, [column.accessor]: { ...column, index: index + 1 } }), {});
                        let latestColumnOrder = columns.length + 1;
                        if (onTableConfigChange)
                            onTableConfigChange(dropdownOptions.map((column) => {
                                const hashMapColumn = columnsHashMap[column.value];
                                return {
                                    ...column,
                                    index: hashMapColumn?.index || latestColumnOrder++
                                };
                            }), dropdownValues);
                    } }), _jsx(components_1.CollapsableTable, { ...collapseTableProps })] }));
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
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (img_1_1) {
                img_1 = img_1_1;
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
            function (DataTable_module_scss_1_1) {
                DataTable_module_scss_1 = DataTable_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("default", DataTable);
        }
    };
});
