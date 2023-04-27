System.register(["react/jsx-runtime", "@/components", "@/helpers", "@my-ui/core", "react", "..", "./CollapsableTable.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, helpers_1, core_1, react_1, __1, CollapsableTable_module_scss_1, CollapsableTable;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (__1_1) {
                __1 = __1_1;
            },
            function (CollapsableTable_module_scss_1_1) {
                CollapsableTable_module_scss_1 = CollapsableTable_module_scss_1_1;
            }
        ],
        execute: function () {
            CollapsableTable = ({ dialogViewProps, ...props }) => {
                const memoizedProps = react_1.useRef(props);
                const { tableProps, refreshButtonLabel, onRefreshButtonClick } = props.tableProps ? props : memoizedProps.current;
                react_1.useEffect(() => {
                    if (props.tableProps)
                        memoizedProps.current = props;
                }, [props]);
                const tableColumns = react_1.useMemo(() => {
                    return (tableProps?.columns || []).map((column) => ({
                        ...column,
                        ...(column.variant === 'status'
                            ? {
                                renderColumn: (_, value) => (_jsx(core_1.Status, { variant: column.getVariant(value), children: column.getVariantName(value) })),
                                maxWidth: '14.5rem',
                                dataMaxWidth: '14.5rem'
                            }
                            : {})
                    }));
                }, [tableProps?.columns]);
                return (_jsx(components_1.DialogView, { ...dialogViewProps, children: _jsxs("div", { className: CollapsableTable_module_scss_1.default.CollapsableTableWrapper, children: [onRefreshButtonClick && (_jsx(components_1.ButtonWithIcon, { icon: 'RotateIcon', onClick: onRefreshButtonClick, iconProps: {
                                    width: '1.8rem',
                                    height: '1.8rem'
                                }, className: CollapsableTable_module_scss_1.default.RefreshButton, children: refreshButtonLabel })), _jsx(__1.Table, { ...tableProps, hideBoxShadow: true, columns: tableColumns })] }) }));
            };
            exports_1("default", helpers_1.typedMemo(CollapsableTable));
        }
    };
});
